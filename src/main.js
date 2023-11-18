import Vue from 'vue';
import App from './App.vue';
import timelineService from './services/timelineService';
import store from './store';

Vue.config.productionTip = false;

// Add timelineService to Vue prototype
Vue.prototype.$services = { timeline: timelineService };

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app');
