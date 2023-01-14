import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    gameStartData: false,
  },
  getters: {},
  mutations: {
    changeGameStartData (state){
      state.gameStartData = !state.gameStartData
    },
  },
  actions: {},
});