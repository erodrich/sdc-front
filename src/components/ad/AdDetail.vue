<template>
    <div>
        <h3>{{campaign.name}}</h3>
        <div class="panel panel-info">
            <div class="panel-heading">
                <div class="panel-title">
                    <h4>Anuncio</h4>
                </div>
            </div>
            <div class="panel-body">
                <ul>
                    <li><strong>Título: </strong> {{ad.title}}</li>
                    <li><strong>Subtítulo: </strong> {{ad.subtitle}}</li>
                    <li><strong>Nombre de imagen principal: </strong> {{ad.imageFullName}}</li>
                    <img :src="ad.imageFullUrl" width="280px" height="280px" alt="">
                    <li><strong>Nombre de imagen vista previa: </strong> {{ad.imagePreName}}</li>
                    <img :src="ad.imagePreUrl" width="280px" height="280px" alt="">
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      campaign: "",
      ad: ""
    };
  },
  created() {
    this.getCampaign();
    this.getAd();
  },
  methods: {
    getCampaign() {
      Vue.http.get("clients/2/campaigns/" + this.$route.params.id).then(res =>
        res.json().then(res => {
          console.log(res.data);
          const campaign = {
            id: res.data.id,
            name: res.data.attributes.name,
            startDate: res.data.attributes.start_date,
            endDate: res.data.attributes.end_date,
            active: res.data.attributes.active == 1 ? "Activo" : "No activo"
          };
          this.campaign = campaign;
        })
      );
    },
    getAd() {
      Vue.http
        .get(
          "clients/2/campaigns/" +
            this.$route.params.id +
            "/ads/" +
            this.$route.params.ad
        )
        .then(res =>
          res.json().then(res => {
            console.log(res.data);
            const ad = {
              id: res.data.id,
              title: res.data.attributes.title,
              subtitle: res.data.attributes.subtitle,
              imageFullName: res.data.attributes.image_full_name,
              imageFullUrl: res.data.attributes.image_full_url,
              imagePreName: res.data.attributes.image_pre_name,
              imagePreUrl: res.data.attributes.image_pre_url
            };
            this.ad = ad;
          })
        );
    }
  }
};
</script>
