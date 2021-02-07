<template>
  <div>
    <div class="regiPage">
      <div class="username"><span>用户名</span><input type="text" placeholder="请输入用户名" v-model="regis.username"></div>
      <div class="password" v-if="!isShowPsd"><span>密码</span><input type="password" placeholder="请输入密码" v-model="regis.password"><img
              src="~assets/img/login/showpsd.png" alt="" @click="isShowPsd = true"></div>
      <div class="password" v-else><span>密码</span><input type="text" placeholder="请输入密码" v-model="regis.password"><img
              src="~assets/img/login/hiddenpsd.png" alt="" @click="isShowPsd = false"></div>
      <div class="confirmPassword" v-if="!isShowConPsd"><span>确认密码</span><input type="password" placeholder="请确认密码" v-model="regis.confirmPassword"><img
              src="~assets/img/login/showpsd.png" alt="" @click="isShowConPsd = true"></div>
      <div class="confirmPassword" v-else><span>确认密码</span><input type="text" placeholder="请确认密码" v-model="regis.confirmPassword"><img
              src="~assets/img/login/hiddenpsd.png" alt="" @click="isShowConPsd = false"></div>
      <div class="regexp"><span>验证码</span><input type="text" placeholder="获取验证码" v-model="regis.regexp">
        <button class="getCode" v-if="! isGetCode" @click="getCodeHandle">获取验证码</button><div class="getCode bg" v-else>还剩{{time}}s</div>
      </div>
    </div>
    <!-- 重新输入  确定  按钮-->
    <div class="end">
      <div class="reset" @click="resetHandle">重新输入</div>
      <div class="confirm">确定</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "regi-page",
    props:['regi'],
    data(){
      return{
        regis:{
          username:'',
          password:'',
          regexp:'',
          confirmPassword:'',
        },
        isShowPsd: false,
        isShowConPsd:false,
        isGetCode:false,
        time:'',
      }
    },
    creater(){

    },
    methods:{
      // 重新输入,表单内容清空
      resetHandle() {
        for (let k in this.regis)
          this.$set(this.regis, k, '')
      },
      // 获取验证码
      getCodeHandle(){
        // 判断手机号格式
        this.isGetCode = true;
        this.time = 3;
        let timer  = setInterval(()=>{
          if(this.time <= 0){
            this.isGetCode = false;
            clearInterval(timer);
          }else
            this.time--;
        },1000)
      }
    }
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
  .regiPage .password ,
  .regiPage .confirmPassword,
  .regiPage .regexp{
    position: relative;
  }

  .regiPage .password img,
  .regiPage .confirmPassword img{
    position: absolute;
    width: 3rem;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .regiPage .regexp .getCode{
    position: absolute;
    right: .5rem ;
  }
  .regiPage .regexp .bg{
    padding: 0 1rem;
    height: 80%;
    background-color: #692;
    color: #fff;
    line-height: 2.5rem;
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