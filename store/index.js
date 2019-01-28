import firebase from '~/plugins/firebase'
import createPersistedState from 'vuex-persistedstate'
import GitHub from 'github-api'
import moment from 'moment'

export const strict = false

export const state = () => ({
  user: null,
  username: null,
  thumbnail: null,
  email: null,
  uid: null,
  token: null,
  providerUser: null,
  notifications: [],
  isLoggedIn: null,
})

export const getters = {
  isLoggedIn: (state) => state.user ? true : false
}

export const mutations = {
  setUser(state) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        state.user = user;
        state.username = state.user.displayName;
        state.thumbnail = state.user.photoURL;
        state.email = state.user.email;
        state.uid = state.user.uid;
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    })
  },
  githubSignin(state) {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('notifications');
      firebase.auth().signInWithPopup(provider).then(function (result) {
        state.token = result.credential.accessToken;
        state.user = result.user;
      });
    }
  },

  isLoggedIn(state) {
    if (!firebase.auth().currentUser) {
      createPersistedState({
        reducer: state => ({
          isLoggedIn: state.isLoggedIn
        }),
        storage: window.sessionStorage
      })
    } else if (firebase.auth().currentUser) {
      createPersistedState({
        reducer: state => ({
          isLoggedIn: state.isLoggedIn
        }),
        storage: window.sessionStorage
      })
    }
  },

  NotificationsDelete(state) {
    state.notifications = [];
  },

  Notification_get(state) {
    const github = new GitHub({
      token: state.token
    });
    const my = github.getUser();
    const Notifications = (state) => my.listNotifications((err, notifications) => {
      state.notifications = notifications;
    })
    Notifications(state, my);
  }
  ,
  Notifications_now(state) {
    const spawnNotification = (theTitle, theBody, theIcon) => {
      const options = {
        title: theTitle,
        body: theBody,
        icon: theIcon,
        vibrate: [200, 100, 200]
      }
      const n = new Notification(theTitle, options);
      setTimeout(n.close.bind(n), 5000);
    }
    const oneDay = moment.duration(1, 'minutes')
    let date = moment().subtract(oneDay).toISOString()
    this.$axios({
      method: 'GET',
      url: 'notifications',
      headers: {
        'Authorization': 'token ' + state.token,
        // 'Time-Zone': ' Asia/Tokyo'
      },
      params: {
        last_read_at: date,
      },
      body: {
        "scopes": ["repo", "user"]
      }
    }).then((response) => {
      if (Object.keys(response.data).length > state.notifications.length) {
        state.notifications = response.data;
        spawnNotification(response.data[0].subject.title, response.data[0].subject.type)
      }
    })
  }

}

export const actions = {
  setUser({commit}) {
    commit('setUser')
  },
  githubSignin({commit}) {
    commit('githubSignin')
  },
  isLoggedIn({commit}) {
    commit('isLoggedIn')
  },
  Notification_get({commit}) {
    commit('Notification_get')
  },
  NotificationsDelete({commit}) {
    commit('NotificationsDelete')
  },
  Notifications_now({commit}) {
    return setTimeout(() => {
      commit('Notifications_now')
    }, 60000)
  }
}
