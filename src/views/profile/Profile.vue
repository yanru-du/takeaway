<template>
  <div id="profile">
    <!--登录页面-->
    <login/>
  </div>
</template>

<script>
  import login from 'components/content/profile/login/Login'
  export default {
    name: "profile",
    components:{
      login,
    },
  }
</script>

<style scoped>
#profile{
  padding:2rem 1rem ;
}
</style>