import { createStore } from 'vuex';

const store = createStore({
  state: {
    trabajoSeleccionado: null,
  },
  mutations: {
    setTrabajo(state, trabajo) {
      state.trabajoSeleccionado = trabajo;
    },
  },
  actions: {
    seleccionarTrabajo({ commit }, trabajo) {
      commit('setTrabajo', trabajo);
    },
  },
  getters: {
    trabajoSeleccionado: (state) => state.trabajoSeleccionado,
  },
});

export default store;