import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { SpinnerPlugin } from 'bootstrap-vue'
Vue.use(SpinnerPlugin)




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
