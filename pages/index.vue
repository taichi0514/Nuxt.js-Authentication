<template>
  <section class="container">
    <logo/>
    <Home/>
    <nuxt-link to="/post/mypage">dd</nuxt-link>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Home from '~/components/Home.vue'
  import firebase from '~/plugins/firebase'
  export default {
    components: {
      Logo,
      Home,
    },
    asyncData({redirect}) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          console.log("できてる");
          return redirect('http://localhost:3000/post/mypage')
        } else {
          // No user is signed in.
          console.log("できてない");
        }
      });

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
