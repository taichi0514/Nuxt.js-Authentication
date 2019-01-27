<template>
  <section class="container">
    <logo/>
    <Home/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Home from '~/components/Home.vue'

  export default {
    components: {
      Logo,
      Home
    }
  }
</script>

<style scoped>

  .container {
    transform: translateY(-50%);

  }

</style>
