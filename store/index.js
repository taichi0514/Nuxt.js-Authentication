import firebase from '~/plugins/firebase'

export const strict = false

export const state = () => ({
  isLoggedIn: false,
  userData: null,
  username: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.userData
}

export const mutations = {
  setUser(state) {
    state.isLoggedIn = true
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("できてる")
        state.isLoggedIn = true;
        state.userData = user;
        state.username = state.userData.displayName;
      } else {
        state.isLoggedIn = false;
        console.log("できてない")
      }
    })
  }
}

export const actions = {
  setUser({commit}) {
    commit('setUser')
  }
}
