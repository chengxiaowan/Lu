import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },

  {
    path:'/login',
    name:'登录',
    component:()=>import('../views/login.vue'),
    meta: { title: '用户登录' }
  },
  {
    path:'/logon',
    name:'注册',
    component:()=>import('../views/logon.vue'),
    meta: { title: '用户注册' }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
