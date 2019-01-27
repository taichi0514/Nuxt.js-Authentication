<template>
  <section class="container">
    <h2>ログイン</h2>
    <el-button type="button" @click="githubSignin">GitHubでログイン</el-button>
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
      githubSignin() {
        if (!firebase.auth().currentUser) {
          // [START createprovider]
          const provider = new firebase.auth.GithubAuthProvider();
          // [END createprovider]
          // [START addscopes]
          provider.addScope('repo');
          // [END addscopes]
          // [START signin]
          firebase.auth().signInWithPopup(provider).then(function (result) {
          }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // [START_EXCLUDE]
            if (errorCode === 'auth/account-exists-with-different-credential') {
              alert('You have already signed up with a different auth provider for that email.');
              // If you are using multiple auth providers on your app you should handle linking
              // the user's accounts here.
            } else {
              console.error(error);
            }
            // [END_EXCLUDE]
          });
          // [END signin]
        } else {
          // [START signout]
          firebase.auth().signOut();
          // [END signout]
        }
        // [END_EXCLUDE]
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
