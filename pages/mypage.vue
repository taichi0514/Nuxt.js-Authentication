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
  import GitHub from 'github-api';

  const github = new GitHub({
    // username: 'taichi0514',
    // password: 'MPxoXAKyrKfscrb2zaz6',
    token: 'c4a75101fce4f3e305d417af37d804df7aed9985'
  });
  export default {
    methods: {
      logout() {
        firebase.auth().signOut();
      }
    },
    created() {
      const my = github.getUser()
      console.log('me', my)
      my.listNotifications({all: true}, function (err, notifications) {
        console.log('notifications.updated_at', notifications.updated_at);
        console.log(err);
      });
      my.listStarredRepos(function (err, repos) {
        console.log('repos', repos);
        console.log(err);
      });
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
