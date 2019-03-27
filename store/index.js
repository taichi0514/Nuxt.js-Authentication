import firebase from "~/plugins/firebase";
import createPersistedState from "vuex-persistedstate";
import moment from "moment";

export const strict = false;

export const state = () => ({
  user: null,
  username: null,
  thumbnail: null,
  email: null,
  uid: null,
  token: null,
  providerUser: null,
  notifications: [],
  isLoggedIn: null
});

export const getters = {
  isLoggedIn: state => (state.user ? true : false)
};

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
    });
  },
  githubSignin(state) {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("notifications read:org");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
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
      });
    } else if (firebase.auth().currentUser) {
      createPersistedState({
        reducer: state => ({
          isLoggedIn: state.isLoggedIn
        }),
        storage: window.sessionStorage
      });
    }
  },

  NotificationsDelete(state) {
    state.notifications = [];
  },

  Notification_get(state) {
    this.$axios({
      method: "GET",
      url: process.env.GITHUB + "/notifications",
      headers: {
        Authorization: "token " + state.token
      },
      params: {
        last_read_at: "Time.now"
      }
    }).then(response => {
      state.notifications = response.data;
    });
  },
  Notifications_now(state) {
    const spawnNotification = (theTitle, theBody, theIcon) => {
      const options = {
        title: theTitle,
        body: theBody,
        icon: theIcon,
        vibrate: [200, 100, 200]
      };
      const n = new Notification(theTitle, options);
      setTimeout(n.close.bind(n), 5000);
    };
    const oneDay = moment.duration(1, "minutes");
    let date = moment()
      .subtract(oneDay)
      .toISOString();
    this.$axios({
      method: "GET",
      url: process.env.GITHUB + "/notifications",
      headers: {
        Authorization: "token " + state.token
      },
      params: {
        last_read_at: date
      }
    }).then(response => {
      if (Object.keys(response.data).length > state.notifications.length) {
        state.notifications = response.data;
        const messaging = firebase.messaging()
        messaging.requestPermission()
          .then(() => {
            console.log('Have permission')
            return messaging.getToken() //ユーザにプッシュ通知を表示する権限の許可を表示
          }).then((currentToken) => {
          if (currentToken) {
            // プッシュ通知を受信し，表示できる状態
            let argObj = { // 受信者のトークンIDと通知内容
              to: currentToken,
              notification: {
                body: response.data[0].subject.type,
                title: response.data[0].subject.title,
                click_action: 'https://fcm.googleapis.com/',
                // icon: 'アイコン'
              }
            }
            //.post('https://fcm.googleapis.com/fcm/send', argObj, optionObj)
            let optionObj = { //送信者のサーバーキー
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'AAAAifBIKc4:APA91bHbcMZxWF5KeV31inKgl6xlJM-Uzff5uHuO58EWecIo8JClZimFV52mYN29zvgNnP03Q0V4Buv0nQneO6y_mCeKMmXx90W3ibvO7p6b_c1GP_A09mQY4mRi6BObR-pF7VlGnomE'
              }
            }
            this.$axios.post(process.env.FIREBASE, argObj, optionObj).catch((err) => {
              console.log('Error Occurred.')
            })
            // spawnNotification(
            //   response.data[0].subject.title,
            //   response.data[0].subject.type
            // );
          }
        });

      }
    });
  }
};

export const actions = {
  setUser({commit}) {
    commit("setUser");
  },
  githubSignin({commit}) {
    commit("githubSignin");
  },
  isLoggedIn({commit}) {
    commit("isLoggedIn");
  },
  Notification_get({commit}) {
    commit("Notification_get");
  },
  NotificationsDelete({commit}) {
    commit("NotificationsDelete");
  },
  Notifications_now({commit}) {
    return setInterval(() => {
      commit("Notifications_now");
    }, 60000);
  }
};
