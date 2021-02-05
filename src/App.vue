<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <Bar/>
  </div>
</template>

<script>
  import Bar from 'components/common/footerBar/Bar'
  export  default  {
    components:{
      Bar
    }
  }
</script>

<style lang="less">

</style>
