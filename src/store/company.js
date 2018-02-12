import markdown from '@/utils/marked';
import client from '@/utils/contentful';
import { head, map, pluck, isEmpty } from 'ramda';

export default {
  namespaced: true,

  state: {
    company: {} 
  },

  getters: {
    isFetching(state){
      return isEmpty(state.company);
    },

    clients(state){
      const clients = state.company.clients || [];
      return pluck('fields', clients);
    },

    background(state){
      const backgroundLogo = state.company.backgroundLogo || {}
      return backgroundLogo.fields || {};
    },

    logo(state){
    },

    contact(state){
      return markdown(state.company.contact || '');
    },

    profile(state){
      return markdown(state.company.profile || '');
    },

    slideshow(state, getters){
      return getters.isFetching ?
        [] : map( a => ({
          id: a.sys.id,
          ...a.fields
        }), state.company.slideshow)
    }
  },

  mutations: {
    setCompany(state, payload){
      state.company = payload;
    }
  },

  actions: {
    async fetch({ commit }){
      const response = await client.getEntries({
        content_type: 'company',
        limit: 1
      });

      const company = head(response.items);

      commit('setCompany', company.fields);
    }
  }
}
