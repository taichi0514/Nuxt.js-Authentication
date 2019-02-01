import firebase from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  user: null,
  username: null,
  thumbnail: null,
  email: null,
  uid: null,
  token: null,
  providerUser: null
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
        getters.isLoggedIn;
      } else {
        getters.isLoggedIn;
      }
    })
  },
  githubSignin(state) {
    if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        state.token = result.credential.accessToken;
        state.providerUser = result.user;
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
