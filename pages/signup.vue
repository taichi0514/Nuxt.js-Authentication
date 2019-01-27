<template>
  <section class="container">
    <h2>サインアップ</h2>
    <button type="button" @click="googleSign"><img width="16" height="16"
                                                   src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg">
    </button>
    <p>or</p>
    <input type="text" placeholder="メール" aria-label="メール" :value="$store.state.email" @input="updateEmail">
    <input type="text" placeholder="パスワード" aria-label="パスワード" :value="$store.state.password" @input="updatePass">
    <button type="button" @click="register">ログイン</button>
    <p>{{$store.state.email}}</p>
    <p>{{$store.state.password}}</p>
    <el-button type="button" @click="returnBtn">戻る</el-button>
  </section>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    name: "signup",
    fetch({redirect}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
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
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }

</style>
