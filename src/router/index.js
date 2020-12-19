import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/home/', name: 'Home', component: Home, props: true },
    { path: '/home/:category', name: 'Home', component: Home, props: true },
    { path: '/order', name: 'Order', component: Order }
  ]
})
