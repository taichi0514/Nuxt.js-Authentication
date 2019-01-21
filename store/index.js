import firebase from '~/plugins/firebase'

export  const  strict  =  false

export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}

export const mutations = {
  setUser(state) {
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        state.isLoggedIn = true;
        state.userData = user;
      }else{
        state.isLoggedIn = false;
        state.userData = null;
      }
    })
    state.isLoggedIn = true
  }
}

export const actions = {
  setUser ({ commit }) {
    commit('setUser')
  }
}
