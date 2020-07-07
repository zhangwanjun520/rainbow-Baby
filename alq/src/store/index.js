import Vue from 'vue';

import Vuex from 'vuex';

import adressInfo from './modules/adressInfo';

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {

    adressInfo

  },

  plugins:[createPersistedState()]

})
