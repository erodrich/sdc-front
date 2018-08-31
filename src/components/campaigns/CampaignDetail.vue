<template>
    <div class="container">
        <div class="card m-2">
            <div class="card-header">
                <div class="panel-title">
                    <h4>{{ campaign.name }}</h4>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-group col-4 float-left">
                    <li class="list-group-item list-group-item-info">Fecha inicio:</li>
                    <li class="list-group-item">{{campaign.startDate}}</li>
                </ul>
                <ul class="list-group col-4 float-left">
                    <li class="list-group-item list-group-item-info">Fecha fin:</li>
                    <li class="list-group-item">{{campaign.endDate}}</li>
                </ul>
                <ul class="list-group col-4 float-left">
                    <li class="list-group-item list-group-item-info">Estado:</li>
                    <li class="list-group-item">{{ (campaign.active == 1) ? 'Activo' : 'No activo'}}</li>
                </ul>
            </div>
        </div>
        <div class="card m-2">
            <div class="card-header">
                <div class="card-title">
                    <h4>Anuncios:</h4>
                </div>
                <button class="btn btn-primary" >Añadir anuncio</button>
            </div>
            <div class="panel-body">
                <ol>
                    <template v-for="ad in ads">
                        <router-link 
                        :to="{ name: 'ad', params:  
                            {ad: ad.id} }" 
                        tag="li"
                        :key="ad.id">
                        <a>{{ad.title}}</a></router-link>
                    </template>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default {
    data(){
        return {
            campaign: '',
            ads: []
        }
    },
    created(){
        this.fetchCampaign();
        this.fetchAds();
    },
    methods: {
        fetchCampaign(){
            Vue.http.get('clients/2/campaigns/' + this.$route.params.id)
            .then(res => res.json()
            .then(res => {
                console.log(res.data);
                const campaign = {
                    id: res.data.id,
                    name: res.data.attributes.name,
                    startDate: res.data.attributes.start_date,
                    endDate: res.data.attributes.end_date,
                    active: (res.data.attributes.active == 1) ? 'Activo' : 'No activo',
                }
                this.campaign = campaign;
            }));
        },
        fetchAds(){
            Vue.http.get("clients/2/campaigns/" + this.$route.params.id + "/ads")
            .then(res => res.json()
            .then(res => {
                console.log(res.data);
                this.fillAds(res.data);
            }));
        },
        fillAds(data){
            for(var i = 0; i < data.length; i++){
              const ad = {
                  id: data[i].id,
                  title: data[i].attributes.title,
                  subtitle: data[i].attributes.subtitle,
                  imageFullName: data[i].attributes.image_full_name,
                  imageFullUrl: data[i].attributes.image_full_url,
                  imagePreName: data[i].attributes.image_pre_name,
                  imagePreUrl: data[i].attributes.image_pre_url,
              }
              this.ads.push(ad);   
            }
        }
    }

}
</script>

