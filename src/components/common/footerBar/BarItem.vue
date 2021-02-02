<template>
  <div class="footer_bar_item" @click="linkHandle()" :class="{active:isActive}">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="active"></slot></div>
    <slot name="text"></slot>
  </div>
</template>

<script>
  export default {
    name: "bar-item",
    props: ['link'],
    methods: {
      linkHandle() {
        this.$router.push(this.link).catch(err => err);
      }
    },
    computed:{
      isActive(){
        // return this.$route.path.indexOf(this.link) !== -1
        return this.$route.path == this.link
      }
    },
  }
</script>

<style scoped>
  .footer_bar_item {
    border-top: solid 1px #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    flex: 1;
    text-align: center;
  }

  .footer_bar_item img {
    width: 2.5rem;
    height: 2.5rem;
  }
  .active{
    color:#ffa200;
  }
</style>