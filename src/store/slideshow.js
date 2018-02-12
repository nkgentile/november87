import { path } from 'ramda';

import client from '@/utils/contentful';

export default {
  namespaced: true,

  state: {
    slides: []
  },

  mutations: {
    setSlides(state, payload){
      state.slides = payload;
    }
  },

  actions: {
    async fetch({ commit }){
      const slides = await client.getEntries({
        'content_type': 'slide'
      });

      const toImage = path([ 'fields', 'image', 'fields' ]);

      commit('setSlides', slides.items.map(toImage) );
    }
  }
}
