<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <utils/>
    <Bar/>

  </div>
</template>

<script>
  import Bar from 'components/common/footerBar/Bar'
  import utils from 'utils/Utils'
  export  default  {
    components:{
      Bar,
      utils,
    }
  }
</script>

<style lang="less">

</style>
