<template>
  <div id="mypage">
    <figure class="thumbnail" v-show="this.$store.state.thumbnail"><img :src="this.$store.state.thumbnail" alt="">
    </figure>
    <p>こんにちは, {{ this.$store.state.username }}さん</p>
    <!--<p>こんにちは,{{ this.$store.state.providerUser }}</p>-->
    <!--<p>こんにちは, {{ this.$store.state.token }}さん</p>-->
    <p>こんにちは, {{ this.$store.getters.isLoggedIn }}さん</p>
    <p>{{ this.$store.state.feedUrl }}</p>
    <el-button @click="logout">ログアウト</el-button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    methods: {
      logout() {
        firebase.auth().signOut();
      }
    }
  }
</script>

<style scoped lang="scss">
  #mypage {
    display: flex;
    flex-direction: column;

    .thumbnail img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      object-fit: cover;
    }

    .el-button {
      margin-top: 20px;
    }
  }

</style>
