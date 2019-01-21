export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state, {user}) {
    state.user = user
    state.isLoggedIn = true
  }
}

export const actions = {
  setUser ({ commit }) {
    commit('setUser')
  }
}
