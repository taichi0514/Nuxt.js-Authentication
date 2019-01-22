<template>
  <div id="mypage">
    <span>こんにちは, {{ this.$store.state.username }}さん</span>

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
    }

  }
</script>

<style scoped>

</style>
