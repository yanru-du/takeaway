<template>
  <div class="loginPage">
    <div class="username"><span>用户名</span><input type="text" placeholder="请输入用户名" v-model="login.username"></div>
    <div class="password"><span>密码</span><input type="password" placeholder="请输入密码" v-model="login.password"></div>
    <div class="regexp"><span>验证码</span><input type="text" placeholder="请输入验证码" v-model="login.regexp"></div>
  </div>
</template>

<script>
  export default {
    name: "login-page",
    data() {
      return {
        login: {
          username: '',
          password: '',
          regexp: '',
        },
        state: this.$store.state,  // 状态管理state
      }
    },
    created() {
      // 页面刷新时将 vuex 中的信息保存到 sessionStorage 中
      this.beforeunload();
      // 每次DOM 加载完之后就会将之前的保存的信息重新赋值给 vuex,再重新赋值给login;
      this.dataRender();

    },
    methods: {
      // 页面刷新时将 vuex 中的信息保存到 sessionStorage 中
      beforeunload() {
        window.addEventListener('beforeunload', () => {
          this.$sino.beforeunload(this.login, res => {
            this.state.login = res;
            sessionStorage.setItem('loginData', JSON.stringify(this.state.login))
          });
        })
      },
      // 每次DOM 加载完之后就会将之前的保存的信息重新赋值给 vuex,再重新赋值给login;
      dataRender() {
        this.$sino.renderDataLoaded(sessionStorage.getItem('loginData'),res => {
          this.login = res;
          this.$store.replaceState(Object.assign({}, this.state.login), JSON.parse(sessionStorage.getItem('loginData')));
        })
      },
    }
  }
</script>

<style scoped>
  .loginPage > div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;

  }

  .loginPage > div > span {
    width: 20%;

  }

  .loginPage > div > input {
    flex: 1;
    padding-left: 1rem;
    height: 80%;
  }
</style>