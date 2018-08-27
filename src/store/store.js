import Vue from 'vue';
import Vuex from 'vuex';

import Campaign from './modules/campaign';
import Ad from './modules/ad';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Campaign,
        Ad
    }
});