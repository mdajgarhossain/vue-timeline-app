import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeline: [],
  },
  
  mutations: {
    addPost(state, post) {
      state.timeline.unshift(post);
    },
  },
  actions: {
    async addPost({ commit }, post) {
      // Async service call
      await new Promise(resolve => setTimeout(resolve, 1000));
      commit('addPost', post);
    },
  },
});
