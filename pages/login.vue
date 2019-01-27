<template>
  <section class="container">
    <h2>ログイン</h2>
    <button type="button" @click="googleSign"><img width="16" height="16"
                                                   src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg">
    </button>
    <el-button type="button" @click="returnBtn">戻る</el-button>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase'
  export default {
    name: "login",
    fetch({redirect}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log("redirect")
          return redirect('/mypage')
        }
      })
    },
    methods: {
      googleSign() {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      },
      returnBtn() {
        this.$store.state.login = false
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
