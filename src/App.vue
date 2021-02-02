<template>
  <div id="app">
    <router-view/>
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
