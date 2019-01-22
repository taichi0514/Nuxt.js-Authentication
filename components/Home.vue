<template>
  <section class="container">
    <button type="button" @click="login_view">ログイン</button>
    <button type="button" @click="SignUp_view">サインアップ</button>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    name: 'home',
    methods: {
      login_view: function () {
        this.$store.state.login = true
      },
      SignUp_view: function () {
        this.$store.state.SignUp = true
      },
      login: function () {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      }
    }
  }
</script>

<style scoped>

  .container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

</style>
