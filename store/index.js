import firebase from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  isLoggedIn: false,
  userData: null,
  username: null,
  thumbnail: null,
  signUp: false,
  login: false,
  email: null,
  uid: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.userData,
  email: (state) => state.email,
  password: (state) => state.password
}

export const mutations = {
  setUser(state) {
    state.isLoggedIn = true
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        state.isLoggedIn = true;
        state.userData = user;
        state.username = state.userData.displayName;
        state.thumbnail = state.userData.photoURL;
        state.email = state.userData.email;
        state.uid = state.userData.uid;
      } else {
        state.isLoggedIn = false;
      }
    })
  },
  updateEmail(state, email) {
    state.email = email
  },
  updatePass(state, pass) {
    state.password = pass
  }
}

export const actions = {
  setUser({commit}) {
    commit('setUser')
  }
}
