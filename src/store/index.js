import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './menu';

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    menu
  }
});

export default store;
