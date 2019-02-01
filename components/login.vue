<template>
  <section class="container">
    <el-button type="button" @click="githubSignin">GitHubでログイン</el-button>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    name: "login",
    methods: {
      githubSignin() {
        this.$store.dispatch('githubSignin');
      }
    }

  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }

</style>
