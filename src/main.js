import Vue from "vue";
import App from "./App.vue";
import timelineService from "./services/timelineService";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);

// Add timelineService to Vue prototype
Vue.prototype.$services = { timeline: timelineService };

new Vue({
  vuetify: new Vuetify(),
  store: store,
  render: (h) => h(App),
}).$mount("#app");
