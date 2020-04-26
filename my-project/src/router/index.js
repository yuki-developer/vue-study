import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1/:param1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2:param1/:param2/:param3',
      name: 'page2',
      component: Page2
    }
  ]
})

export default router
