<template>
  <div>
    <loading/>
    <alert/>
  </div>
</template>

<script>
  import loading from './loading/Loading'
  import alert from './messageBox/Alert'

  export default {
    name: "utils",
    components: {
      loading,
      alert,
    },
  }
</script>

<style scoped>

</style>