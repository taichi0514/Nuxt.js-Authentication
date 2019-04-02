<template>
  <div id="mypage">
    <figure class="thumbnail" v-show="this.$store.state.thumbnail">
      <img :src="this.$store.state.thumbnail" alt>
    </figure>
    <p>こんにちは、{{this.$store.state.username}}さん</p>
    <el-button @click="check">既読</el-button>
    <ul class="wrap_list">
      <li class="list" v-for="(item,index) in this.$store.state.notifications" :key="index">
        <a :href="item.subject.url.replace('api.','').replace('/repos','').replace('/pulls/','/pull/')">
          <i>{{item.subject.type}}</i>
          {{item.subject.title}}
        </a>
      </li>
    </ul>
    <el-button @click="logout">ログアウト</el-button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import createPersistedState from "vuex-persistedstate";

export default {
  methods: {
    logout() {
      firebase.auth().signOut();
      createPersistedState({
        reducer: state => ({
          isLoggedIn: state.isLoggedIn
        }),
        storage: window.sessionStorage
      });
    },
    check() {
      this.$store.dispatch("NotificationsDelete"),
        this.$axios({
          method: "PUT",
          url: "notifications",
          headers: {
            Authorization: "token " + this.$store.state.token
          },
          params: {
            last_read_at: "Time.now"
          },
          body: {
            scopes: ["repo", "user"]
          }
        });
    }
  }
};
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
    text-align: center;
  }

  .wrap_list {
    padding: 0;
  }

  .list {
    font-size: 20 / 16 + rem;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    border: solid 1px #dcdfe6;
    border-radius: 3px;
    padding: 10px 20px;
    margin-top: 20px;
    list-style-type: none;
    position: relative;
    width: 300px;
  }

  .list a {
    display: block;
    text-decoration: none;
    color: #333;
    text-align: left;
    padding-left: 15%;
  }

  .list i {
    font-size: 12 / 16 + rem;
    font-style: normal;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    color: #888;
  }
}
</style>
