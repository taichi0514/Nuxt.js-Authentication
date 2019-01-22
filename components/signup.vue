<template>
  <section class="container">
    <h2>サインアップ</h2>
    <button type="button"><img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/google-41de20.svg">
    </button>
    <button type="button"><img width="16" height="16" src="https://d3ptyyxy2at9ui.cloudfront.net/facebook-fadd25.svg">
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
    name: "login",
    methods: {
      updateEmail(e) {
        this.$store.commit('updateEmail', e.target.value)
      },
      updatePass(e) {
        this.$store.commit('updatePass', e.target.value)
      },
      register() {
        firebase.auth().createUserWithEmailAndPassword(this.$store.state.email, this.$store.state.password)
      },
      signOut() {
        firebase.auth().signOut()
      },
      signIn() {
        firebase.auth().signInWithEmailAndPassword(this.$store.state.email, this.$store.state.password)
      },
      returnBtn() {
        this.$store.state.signUp = false
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
