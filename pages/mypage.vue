<template>
  <div id="mypage">
    <figure class="thumbnail" v-show="this.$store.state.thumbnail"><img :src="this.$store.state.thumbnail" alt="">
    </figure>
    <span>こんにちは, {{ this.$store.state.username }}さん</span>
    <el-button @click="logout">ログアウト</el-button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    fetch({redirect}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          return redirect('/')
        }
      })
    },
    methods: {
      logout() {
        firebase.auth().signOut();
      },
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
