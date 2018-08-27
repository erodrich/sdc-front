import Home from './components/Home.vue';
import Campaign from './components/campaigns/Campaign.vue';
import CampaignStart from './components/campaigns/CampaignStart.vue';
import CampaignDetail from './components/campaigns/CampaignDetail.vue';
import Ad from './components/ad/AdDetail.vue';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/campaigns',
        components: {
            default: Campaign
        },
        children: [
            {path: '', component: CampaignStart},
            {path: ':id', name: "detail", component: CampaignDetail,
        children: [
            {path: 'ads/:ad', name: "anuncio", component: Ad}
        ] }
        ]
    },
    
];