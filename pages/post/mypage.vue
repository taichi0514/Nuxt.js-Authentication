<template>
  <div id="mypage">
    <span>こんにちは, {{ user }}さん</span>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    methods: {
      logout: function () {
        firebase.auth().signOut()
      },
    },
    created() {
      {
        this.$store.dispatch('setUser')
        // this.$store.state.user = firebase.auth().currentUser
      }
    }

  }
</script>

<style scoped>

</style>
