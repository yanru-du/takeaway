<template>
  <div class="login">
    <div class="title">美团外卖</div>
    <!--登录注册组件-->
    <login-item />
  </div>
</template>

<script>
  import loginItem from './LoginItem'

  export default {
    name: "login",
    data(){
      return{
        currentIndex:0,
        data:['登录','注册']
      }
    },
    components:{
      loginItem,
    }

  }
</script>

<style scoped>
  .login {
    margin: 10rem auto;
    width: 80%;
    /*background-color: red;*/
  }
  .login .title{
    margin: 1rem 0;
    font-size: 2rem;
    color:#ffa200;
    text-align: center;
  }
</style>