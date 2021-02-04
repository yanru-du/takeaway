<template>
  <div class="loginItem">
    <!--登录注册tab-->
    <div class="tab">
      <div v-for="(item,index) in data" :class="{active: index == currentIndex}"
           @click="loginOrRegiShow(index)">{{item}}
      </div>
    </div>
    <!--注册内容组件-->
    <div v-if="currentIndex == 0" class="content">
      <login-page/>
    </div>
    <!--登录内容组件-->
    <div v-else class="content">
      <regi-page/>
    </div>
  </div>
</template>

<script>
  import loginPage from './LoginPage'
  import regiPage from './RegiPage'

  export default {
    name: "login-item",
    props: ['index'],
    data() {
      return {
        data: ['登录', '注册'],
        currentIndex: 0,
      }
    },
    components: {
      loginPage,
      regiPage
    },
    methods: {
      loginOrRegiShow(index) {
        this.currentIndex = index;
      }
    },
  }
</script>

<style scoped>
  .tab {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.6rem;
  }
  .tab>div{
    padding: 0 2rem 1rem;
  }
  .active {
    color: #ffa200;
    border-bottom: 1px solid #ffa200;
  }
  .content{
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #999;
  }
</style>