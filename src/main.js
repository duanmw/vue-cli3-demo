import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: '#1890ff', // 进度条颜色
    failedColor: 'red', // 失败显示的颜色
    height: '4px' // 进度条高度
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')