<template>
    <div>
        <div class="page-header">
            <h1>Campañas</h1>
        </div>
        <table class="table table-striped">
            <thead>
                <th>Nombre</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Estado</th>   
            </thead>
            <tbody>
                <tr v-for="campaign in campaigns" :key="campaign.id">
                    <router-link 
                    :to="{ name: 'detail', params: { id: campaign.id } }" 
                    tag="td" 
                    ><a>{{campaign.name}}</a></router-link>
                    <td>{{campaign.startDate}}</td>
                    <td>{{campaign.endDate}}</td>
                    <td>{{campaign.active}}</td>
                </tr>
            </tbody>
                
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import {mapActions} from 'vuex';

export default {
  data() {
    return {
      campaigns: [],
      campaign_id: '',
      edit: false,
    };
  },
  created(){
      this.fetchCampaigns();
  },
  methods: {
      ...mapActions([
          'setCampaign'
      ]),
      fetchCampaigns(){
          Vue.http.get('clients/2/campaigns')
          .then(res => res.json()
          .then(res => {
              this.fillCampaigns(res.data);
          }));
      },
      fillCampaigns(data){
          for(var i = 0; i < data.length; i++){
              const campaign = {
                  id: data[i].id,
                  name: data[i].attributes.name,
                  startDate: data[i].attributes.start_date,
                  endDate: data[i].attributes.end_date,
                  active: (data[i].attributes.active == 1) ? 'Activo' : 'No activo'
              }
              this.campaigns.push(campaign);  
              this.setCampaign(campaign);      
          }
      }
      
  }
};
</script>


