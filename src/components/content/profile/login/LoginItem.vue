<template>
  <div class="loginItem">
    <!--登录注册tab-->
    <div class="tab">
      <div v-for="(item,index) in data" :class="{active: index == currentIndex}" @click="loginOrRegiShow(index)">
        {{item}}
      </div>
    </div>

    <keep-alive>
      <!--登录内容组件-->
        <login-page  v-if="currentIndex == 0" class="content"/>
      <!--注册内容组件-->
        <regi-page type="regi" v-else class="content"/>
    </keep-alive>

    <!-- 重新输入  确定  按钮-->
    <div class="end">
      <div class="reset">重新输入</div>
      <div class="confirm">确定</div>
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

  .tab > div {
    padding: 0 2rem 1rem;
  }

  .active {
    color: #ffa200;
    border-bottom: 1px solid #ffa200;
  }

  .content {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #999;
  }
  .end{
    margin-top: 2rem;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 8px;
    font-size: 1.6rem;
  }
  .end>div{
    float: right;
    text-align: center;
    border-radius: 8px;
    background-color: #ffa200;
    width: 46%;
  }
  .end .reset{
    float: left;
    background-color: darkkhaki;
    color: #000;
  }
</style>