<template>
  <div class="loginPage">
    <div class="username"><span>用户名</span><input type="text" placeholder="请输入用户名" v-model="username"></div>
    <div class="password"><span>密码</span><input type="password" placeholder="请输入密码" v-model="password"></div>
    <div class="regexp"><span>验证码</span><input type="text" placeholder="请输入验证码" v-model="regexp"></div>
  </div>
</template>

<script>
  export default {
    name: "login-page",
    data(){
      return{
        username:'',
        password:'',
        regexp:'',
      }
    },
  }
</script>

<style scoped>
  .loginPage>div{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;

  }
  .loginPage>div>span{
    width: 20%;

  }
  .loginPage>div>input{
    flex: 1;
    padding-left: 1rem;
    height: 80%;
  }
</style>