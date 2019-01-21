<template>
  <section class="container">
    <button type="button" @click="login">ログインしよう</button>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    name: 'home',
    methods: {
      login: function () {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      }
    }
  }
</script>

<style>

  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

</style>
