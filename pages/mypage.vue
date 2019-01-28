<template>
  <div id="mypage">
    <figure class="thumbnail" v-show="this.$store.state.thumbnail"><img :src="this.$store.state.thumbnail" alt="">
    </figure>
    <p>こんにちは, {{ this.$store.state.username }}さん</p>
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
    },
    modules: [
      // Simple usage
      '@nuxtjs/feed'
    ],
    feed: [
      {
        path: (`https://github.com/ + {this.$store.state.username} + .private.atom?token= + {this.$store.state.state.uid}`), // The route to your feed.
        async create(feed) {

        }, // The create function (see below)
        cacheTime: 1000 * 60 * 15, // How long should the feed be cached
        type: 'rss2', // Can be: rss2, atom1, json1
        data: ['Some additional data'] //will be passed as 2nd argument to `create` function
      }
    ]

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
