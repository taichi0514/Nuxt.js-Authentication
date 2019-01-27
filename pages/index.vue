<template>
  <section class="container">
    <logo/>
    <login/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import login from '~/components/login.vue'
  import firebase from '~/plugins/firebase'
  export default {
    fetch({redirect}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("redirect")
          return redirect('/mypage')
        }
      })
    },
    components: {
      Logo,
      login
    }
  }
</script>

<style scoped>

  .container {
    transform: translateY(-50%);

  }

</style>
