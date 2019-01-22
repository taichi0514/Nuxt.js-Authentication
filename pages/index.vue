<template>
  <section class="container">
    <logo v-if="!this.$store.state.isLoggedIn"/>
    <Home v-if="!this.$store.state.isLoggedIn"/>
    <login v-if="this.$store.state.login & !this.$store.state.signUp & !this.$store.state.isLoggedIn"/>
    <signup v-if="this.$store.state.signUp & !this.$store.state.login & !this.$store.state.isLoggedIn"/>
    <mypage v-if="this.$store.state.isLoggedIn"/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Home from '~/components/Home.vue'
  import mypage from '~/components/mypage.vue'
  import login from '~/components/login.vue'
  import signup from '~/components/signup.vue'
  import firebase from '~/plugins/firebase'
  export default {
    components: {
      Logo,
      Home,
      mypage,
      login,
      signup
    },
    created() {
      // this.$store.dispatch('setUser')
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          this.$store.dispatch('setUser')
        }
      });
    }
  }
</script>

<style scoped>

  .container {
    transform: translateY(-50%);

  }

</style>
