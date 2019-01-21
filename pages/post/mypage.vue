<template>
  <div id="mypage">
    <span>こんにちは, {{ $store.state.user.displayName }}さん</span>

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
      this.$store.dispatch('setUser')


    }

  }
</script>

<style scoped>

</style>
