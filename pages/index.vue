<template>
  <section class="container">
    <logo v-if="!this.$store.state.isLoggedIn"/>
    <Home v-if="!this.$store.state.isLoggedIn"/>
    <mypage v-if="this.$store.state.isLoggedIn"/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Home from '~/components/Home.vue'
  import mypage from '~/components/mypage.vue'
  export default {
    components: {
      Logo,
      Home,
      mypage
    },
    created: function () {
      this.$store.dispatch('setUser')
      // firebase.auth().onAuthStateChanged(function (user) {
      //   if (user) {
      //     // User is signed in.
      //     this.$store.dispatch('setUser')
      //   }
      // });
    }
  }
</script>

<style scoped>

  .container {
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

</style>
