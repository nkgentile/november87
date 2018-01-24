export default {
  namespaced: true,

  state: {
    isOpen: false
  },

  mutations: {
    setOpen(state, bool){
      state.isOpen = bool;
    }
  },

  actions: {
    open({ commit }){
      commit('setOpen', true);
    },

    close({ commit }){
      commit('setOpen', false);
    },

    toggle({ state, commit }){
      commit('setOpen', !state.isOpen);
    }
  }
}
