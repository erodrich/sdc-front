const state = {
    ad: {
        id: '',
        title: '',
        subtitle: '',
        imagePre: '',
        imageFull: ''
    }
};

const mutations = {
    'SET_AD' (state, ad){
        state.ad = ad;
    }
};

const actions = {
    setAd({commit}, ad) {
        commit('SET_AD', ad);
        console.log("ad: " + state.ad.title);
    }
};

const getters = {
    ad : state => {
        return state.ad;
    }

};

export default {
    state,
    actions,
    mutations,
    getters
}