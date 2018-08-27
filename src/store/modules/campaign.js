const state = {
    campaign: {
        id: '',
        name: '',
        startDate: '',
        endDate: '',
        active: '',
        adRelations: '',
        ads: []
    },
    beacons: []
};

const mutations = {
    'SET_CAMPAIGN' (state, campaign){
        state.campaign = campaign;
    }
};

const actions = {
    setCampaign({commit}, campaign) {
        commit('SET_CAMPAIGN', campaign);
        console.log("campaign: " + state.campaign.name);
    }
};

const getters = {
    campaign : state => {
        return state.campaign;
    }

};

export default {
    state,
    actions,
    mutations,
    getters
}