import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import alasql from 'alasql'

Vue.config.productionTip = false
Vue.prototype.$alasql = alasql

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')