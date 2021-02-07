<template>
  <div class="loading" v-if="isShowLoading">
    <div>
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="text">正在加载</div>
  </div>
</template>

<script>

  export default {
    name: "loading",
    data(){
      return{
        isShowLoading:false
      }
    },
    created() {
      this.$bus.$on('loading', (data)=> {
        this.isShowLoading = data;
      });

    },


  }
</script>

<style scoped>
  .loading{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9900;
    background-color: rgba(0,0,0,.4);
  }

  .loading div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 5rem;
    height: 5rem;
    /*background-color: red;*/
  }
  .loading div span{
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,.6);
    -webkit-animation:loading 1s ease infinite;
  }
  @-webkit-keyframes loading{
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0.2;
    }
  }
  .loading div span:nth-child(1){
    left: -20%;
    top:  50%;
    -webkit-animation-delay:0.125s;
  }
  .loading div span:nth-child(2){
    left: 0;
    top: 0;
    -webkit-animation-delay:0.25s;
  }
  .loading div span:nth-child(3){
    left: 50%;
    top:  -20%;
    -webkit-animation-delay:0.375s;
  }
  .loading div span:nth-child(4){
    left: 100%;
    top: 0%;
    -webkit-animation-delay:0.5s;
  }
  .loading div span:nth-child(5){
    left: 120%;
    top: 50%;
    -webkit-animation-delay:0.625s;
  }
  .loading div span:nth-child(6){
    left: 100%;
    top: 100%;
    -webkit-animation-delay:0.75s;
  }
  .loading div span:nth-child(7){
    left: 50%;
    top: 120%;
    -webkit-animation-delay:0.875s;
  }
  .loading div span:nth-child(8){
    left: 0;
    top: 100%;
    -webkit-animation-delay:1s;
  }
  .loading  .text{
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    letter-spacing: .2rem;
    font-size: 1.6rem;
    text-align: center;
    color: #000;
  }
</style>