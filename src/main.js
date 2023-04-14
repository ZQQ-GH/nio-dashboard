import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store"
import './tailwind.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8090'


new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
