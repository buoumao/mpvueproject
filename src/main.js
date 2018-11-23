import Vue from 'vue'
import store from './store/store'
import APP from './app.vue'

Vue.config.productionTip = false;

//声明当前组件的类型
App.mpType = 'app'

//将store对象放置Vue的原型上，为的是每个实例都可以使用
Vue.prototype.$store = store

const app = new Vue(app)


app.$mount()