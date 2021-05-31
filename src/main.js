import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DefaultLayout from "./layouts/Default"
import sLayout from "./layouts/s"
import eLayout from "./layouts/e"


Vue.component("default-layout", DefaultLayout)
Vue.component("s-layout", sLayout)
Vue.component("e-layout", eLayout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')