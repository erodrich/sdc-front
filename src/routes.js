
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Campaign from './components/campaigns/Campaign.vue';
import CampaignStart from './components/campaigns/CampaignStart.vue';
import CampaignDetail from './components/campaigns/CampaignDetail.vue';
import AdDetail from './components/ad/AdDetail.vue';
import CampaignForm from './components/campaigns/CampaignForm.vue'; 

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/campaigns',
        components: {
            default: Campaign
        },
        children: [
            {path: '', name: 'campaigns', component: CampaignStart},
            {path: 'new', name: 'campaignForm', component: CampaignForm},
            {path: ':id', name: "detail", component: CampaignDetail},
            {path: ':id/ads/:ad', name: "ad", component: AdDetail}
            
        ]
    },
    
];