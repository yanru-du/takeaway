<template>
  <div>
    <form class="loginPage">
        <div class="username"><span>用户名</span><input type="text" placeholder="请输入用户名" v-model="login.username"></div>
        <div class="password" v-if="!isShowPsd"><span>密码</span><input type="password" placeholder="请输入密码" v-model="login.password"><img
                src="~assets/img/login/showpsd.png" alt="" @click="isShowPsd = true"></div>
        <div class="password" v-else><span>密码</span><input type="text" placeholder="请输入密码" v-model="login.password"><img
                src="~assets/img/login/hiddenpsd.png" alt="" @click="isShowPsd = false"></div>
        <div class="regexp"><span>验证码</span><input type="text" placeholder="请输入验证码" v-model="login.regexp"><img
                src="" alt="" ></div>
    </form>
    <!-- 重新输入  确定  按钮-->
    <div class="end">
      <div class="reset" @click="resetHandle">重新输入</div>
      <div class="confirm" @click="confirmHandle">确定</div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'

  export default {
    name: "login-page",
    data() {
      return {
        login: {
          username: '',
          password: '',
          regexp: '',
        },
        isShowPsd:false,
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
        this.$sino.renderDataLoaded(sessionStorage.getItem('loginData'), res => {
          this.login = res;
          this.$store.replaceState(Object.assign({}, this.state.login), JSON.parse(sessionStorage.getItem('loginData')));
        })
      },
      // 重新输入,表单内容清空
      resetHandle() {
        for (let k in this.login)
          this.$set(this.login, k, '')
      },
      // 确定，请求后台
      confirmHandle(){
        // this.$bus.$emit('confirm','','测试内容',()=>{
        //   console.log("确定");
        // },()=>{
        //   console.log('取消')
        // },{confirmText:'confirm',cancleText:'cancle'});


        // this.$bus.$emit('alert','','测试内容', ()=>{
        //   console.log(1);
        // })
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

  .loginPage  .password {
    position: relative;
  }

  .loginPage .password img {
    position: absolute;
    width: 3rem;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .end {
    margin-top: 2rem;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border-radius: 8px;
    font-size: 1.6rem;
  }

  .end > div {
    float: right;
    text-align: center;
    border-radius: 8px;
    background-color: #ffa200;
    width: 46%;
  }

  .end .reset {
    float: left;
    background-color: darkkhaki;
    color: #000;
  }
</style>