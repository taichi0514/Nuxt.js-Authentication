<template>
  <div id="mypage">
    <figure class="thumbnail"><img :src="this.$store.state.thumbnail" alt=""></figure>
    <span>こんにちは, {{ this.$store.state.username }}さん</span>

    <button @click="logout">ログアウト</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase'

  export default {
    methods: {
      logout: function () {
        firebase.auth().signOut()
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
  }

</style>
