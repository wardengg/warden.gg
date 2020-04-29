import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
