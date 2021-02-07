<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <Bar/>
  </div>
</template>

<script>
  import Bar from 'components/common/footerBar/Bar'
  import loading from 'util/loading/Loading'
  export  default  {
    components:{
      Bar,
      loading,
    }
  }
</script>

<style lang="less">

</style>
