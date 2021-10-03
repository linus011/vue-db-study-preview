import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/front.scss'
import commonUI from './utils/common'
import directives from './utils/directives'

Vue.use(commonUI)
Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
