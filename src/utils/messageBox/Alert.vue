<template>
  <div class="alert" v-if="isShow">
    <div class="header">{{title}}</div>
    <div class="content">{{content}}</div>
    <div class="footer" :id="alertId" >
      <div :class="{flex2:type==2}">
        <span v-if="type == 2" @click="cancleHandle">{{cancleText}}</span>
        <span @click="confirmHandle">{{confirmText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "alert",
    data() {
      return {
        title: "提示",
        content: '',
        isShow: false,   // 当前的alert confirm 框是否弹出
        type: 1,   // 1 :alert  2: confirm
        alertId: 'confirm' + new Date().getTime(),  // id 动态化请内存
        confirmText: '确定',   // 文本内容
        cancleText: "取消",
        confirmAction:"",   // 确定时返回的回调函数
        cancleAction:"",    // 取消时返回的回调函数
      }
    },
    created() {
      // 发过来的是 alert
      this.alertEmit();
      //发过来的是 confirm
      this.confirmEmit();

    },
    methods: {
      // alert
      alertEmit(){
        this.$bus.$on('alert', (title, content, callback1,callback2,options) => {
          this.type = 1;
          this.common(title, content, callback1,callback2,options);
        })
      },

      // confirm
      confirmEmit(){
        this.$bus.$on('confirm',(title, content, callback1,callback2, options) =>{
          this.type = 2;
          this.common(title, content, callback1,callback2,options);
        })
      },

      // alert 和 confirm 公共的函数
      common(title, content, callback1,callback2,options){
        this.isShow = true;
        if (!this.$sino.checkIsNull(title))
          this.title = title;
        if (!this.$sino.checkIsNull(content))
          this.content = content;
        if(!this.$sino.checkIsNull(options)){
          this.confirmText = options.confirmText;
          this.cancleText = options.cancleText;
        }
        if (callback1){
          this.confirmAction = callback1;
        }
        if (callback2){
          this.cancleAction = callback2;
        }
      },

      // 取消按钮点击
      cancleHandle(){
        this.isShow = false;
        this.cancleAction();
      },
      // 确定按钮点击
      confirmHandle() {
        this.isShow = false;
        this.confirmAction();
      }
    },
  }
</script>

<style scoped>
  .alert {
    padding: 1rem 0 .3rem 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9910;
    width: 80%;
    text-align: center;
    background-color: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    box-shadow: -5px 0px 5px rgba(0, 0, 0, .1), 0px -5px 5px rgba(0, 0, 0, .1), 5px 0px 5px rgba(0, 0, 0, .1), 0px 5px 5px rgba(0, 0, 0, .1);
    font-size: 1.6rem;
    overflow: hidden;
  }

  .header {
    padding: 1rem 0;
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .content {
    padding: 2rem 0;
  }

  .footer{
    margin-top: 3rem ;
    height: 80%;
    width: 100%;
  }
  .footer>div{
    justify-content: space-around;
    margin: 0 auto;
    display: flex;
    width: 80%;
    height: 100%;
  }

  .footer>div>span{
    width: 100%;
    padding: .5rem 0 ;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #999;
  }

  .footer>div>span:last-child{
    background-color: #ffa200;
  }

  .footer .flex2{
    justify-content: space-around;
  }
  .footer .flex2>span{
    width: 45%;
  }

</style>