<template>
    <div>
        <div class="container-fluid">
            <div class="card m-2">
                <div class="card-header">
                    <div class="panel-title">
                        <h4>Nueva campaña</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Nombre de campaña:</label>
                            <input type="name" class="form-control" id="name" placeholder="">
                            <small id="name" class="form-text text-muted">Ingrese un nombre que describa los anuncios de su campaña.</small>
                        </div>
                        <div class="form-group">
                            <label for="startDate">Fecha de inicio</label>
                            <input type="date" class="form-control" id="startDate" placeholder="dd/mm/yyyy">
                        </div>
                        <div class="form-group">
                            <label for="endDate">Fecha de fin</label>
                            <input type="date" class="form-control" id="endDate" placeholder="dd/mm/yyyy">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="active">
                            <label class="form-check-label" for="active">Activar?</label>
                        </div>
                        <div class="align-content-md-center">
                            <button type="submit" class="btn btn-primary">Guardar</button>
                            <button class="btn btn-danger pull-right" @click="back()">Cancelar</button>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';

export default {
    data (){
        return {
            campaign: {
                name: '',
                start_date: '',
                end_date: '',
                active: 1,
                client_id: 2
            }
        }
    },
    methods: {
      back(){
          return this.$router.push({name: 'campaigns'});
      },
      save(){
          console.log("Campaign: " + this.campaign.name);
          Vue.http.post('campaigns', this.campaign)
          .then(response => {
                console.log(response.data);
            });
      }
    }
}
</script>
<style>


</style>
