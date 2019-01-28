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
    components: {
      Logo,
      login
    }
  }
</script>

<style scoped>

  .container {
    transform: translateY(-50%);
    margin-top: 10px;
  }

</style>
