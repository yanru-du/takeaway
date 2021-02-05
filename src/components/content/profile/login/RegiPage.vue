<template>
  <div class="regiPage">
    <div class="username"><span>用户名</span><input type="text" placeholder="请输入用户名" v-model="username"></div>
    <div class="password"><span>密码</span><input type="password" placeholder="请输入密码" v-model="password"></div>
    <div class="confirmPassword"><span>确认密码</span><input type="password" placeholder="请确认密码" v-model="confirmPassword"></div>
    <div class="regexp"><span>验证码</span><input type="text" placeholder="获取验证码" v-model="regexp"></div>
  </div>
</template>

<script>
  export default {
    name: "regi-page",
    props:['regi'],
    data(){
      return{
        username:'',
        password:'',
        regexp:'',
        confirmPassword:'',
      }
    },
  }
</script>

<style scoped>
  .regiPage>div {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
  }
  .regiPage>div>span{
    width: 25%;
  }
  .regiPage>div>input{
    flex: 1;
    padding-left: 1rem;
    height: 80%;
  }
</style>