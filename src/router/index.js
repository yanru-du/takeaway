import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
Vue.use(VueRouter);

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  name: "home",
  path: '/home',
  component:Home
}, {
  name: "search",
  path: '/search',
  component:()=> import('views/search/Search')
}, {
  name: "order",
  path: '/order',
  component:()=> import('views/order/Order')
}, {
  name: "profile",
  path: '/profile',
  component:()=> import('views/profile/Profile')
}


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
