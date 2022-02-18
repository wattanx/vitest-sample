import Vue from "vue";
import VueCompotisionApi from "@vue/composition-api";
import App from "./App.vue";
Vue.use(VueCompotisionApi);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
