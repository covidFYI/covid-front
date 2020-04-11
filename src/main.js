import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueHeadful from 'vue-headful';
import VueAnalytics from 'vue-analytics';
import vSelect from 'vue-select'

Vue.use(VueAnalytics, {
  id: 'UA-162786619-1',
  router
});

Vue.component('vue-headful', vueHeadful);
Vue.component('v-select', vSelect)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
