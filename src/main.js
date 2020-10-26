import Vue from 'vue'
import "amfe-flexible"
import Vant from "vant"
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

//注入UI库
Vue.use(Vant)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title || '404'
  }
  next()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
