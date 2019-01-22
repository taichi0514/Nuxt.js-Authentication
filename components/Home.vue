<template>
  <section class="container">
    <button type="button" @click="login_view" v-if="!this.$store.state.login & !this.$store.state.signUp">ログイン</button>
    <button type="button" @click="signUp_view" v-if="!this.$store.state.login & !this.$store.state.signUp">サインアップ
    </button>
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
      signUp_view: function () {
        this.$store.state.signUp = true
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
