<template>
  <div class="footer_bar">
    <bar-item link="/home">
      <template v-slot:img><img src="~assets/img/footerBar/home.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/footerBar/homeActive.png" alt=""></template>
      <template v-slot:text>外卖</template>
    </bar-item>
    <bar-item link="/search">
      <template v-slot:img><img src="~assets/img/footerBar/search.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/footerBar/searchActive.png" alt=""></template>
      <template v-slot:text>搜索</template>
    </bar-item>
    <bar-item link="/order">
      <template v-slot:img><img src="~assets/img/footerBar/order.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/footerBar/orderActive.png" alt=""></template>
      <template v-slot:text>订单</template>
    </bar-item>
    <bar-item link="/profile">
      <template v-slot:img><img src="~assets/img/footerBar/profile.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/footerBar/profileActive.png" alt=""></template>
      <template v-slot:text>我</template>
    </bar-item>

  </div>

</template>

<script>
  import BarItem from './BarItem'
  export default {
    name: "bar",
    components:{
      BarItem,
    }
  }
</script>

<style scoped>
.footer_bar{
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #f1f1f1;
}
</style>