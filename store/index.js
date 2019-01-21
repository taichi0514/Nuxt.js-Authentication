import firebase from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  isLoggedIn: false,
  userData: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state) {
    state.isLoggedIn = true
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        state.isLoggedIn = true;
        state.userData = user;
      } else {
        state.isLoggedIn = false;
      }
    })
  }
}

export const actions = {
  setUser({commit}) {
    commit('setUser')
  }
}
