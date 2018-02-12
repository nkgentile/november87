import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './menu';
import slideshow from './slideshow';
import company from './company';

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    menu,
    slideshow,
    company
  }
});

export default store;
