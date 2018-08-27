<template>
    <div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <div class="panel-title">
                    <h4>{{campaign.name}}</h4>
                </div>
            </div>
            <div class="panel-body">
                Fecha Inicio: {{campaign.startDate}}
                <br/>
                Fecha Fin: {{campaign.endDate}}
                <br/>
                Estado: {{ (campaign.active == 1) ? 'Activo' : 'No activo'}}
            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <div class="panel-title">
                    <h4>Anuncios:</h4>
                </div>
            </div>
            <div class="panel-body">
                <ol>
                    <template v-for="ad in ads">
                        <router-link 
                        :to="{ name: 'anuncio', params:  
                            {ad: ad.id} }" 
                        tag="li" 
                        :ad="ad"
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
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    data(){
        return {
            ads: [],
            ad: {
                id: '',
                title: '',
                subtitle: ''
            }
        }
    },
    created(){
      this.fetchAds();
      console.log("Campaña: " + camp);
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
            }));
            this.campaign = campaign;
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
                  subtitle: data[i].attributes.subtitle
              }
              this.ads.push(ad);    
            }
        }
    }

}
</script>

