import firebase from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  user: null,
  username: null,
  thumbnail: null,
  email: null,
  uid: null,
  token: null,
  providerUser: null,
  feedUrl: null
})

export const getters = {
  isLoggedIn: (state) => state.user ? true : false,
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
        state.feedUrl = "https://github.com/" + "taichi0514" + ".private.atom?token=" + state.token;
        getters.isLoggedIn;
      } else {
        getters.isLoggedIn;
      }
    })
  },
  githubSignin(state) {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      firebase.auth().signInWithPopup(provider).then(function (result) {
        state.token = result.credential.accessToken;
        state.user = result.user;
      });
    }
  }
}

export const actions = {
  setUser({commit}) {
    commit('setUser')
  },
  githubSignin({commit}) {
    commit('githubSignin')
  }
}
