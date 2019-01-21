<template>
  <div id="mypage">
    <span>こんにちは, {{ user.displayName }}さん</span>
    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
  export default {
    methods: {
      logout: function () {
        firebase.auth().signOut();
      }
    }
  }
</script>

<style scoped>

</style>
