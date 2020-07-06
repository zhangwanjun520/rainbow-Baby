
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from  'axios'
import store from './store'
import ElementUI from 'element-ui';
import 'lib-flexible/flexible'
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel,CarouselItem,Tooltip,Collapse,CollapseItem } from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tooltip);

axios.defaults.withCredentials = true;
Vue.prototype.$axios=axios

router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

// Vue.use(VueTouch,{name:'v-touch'})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
