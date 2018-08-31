<template>
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">DigiCoupon</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="/campaigns">Campañas</a>
                <a class="nav-item nav-link" href="#">Beacons</a>
                <a class="nav-item nav-link" href="#">Ajustes</a>
                </div>
            </div>  
        </div>
            

        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDropDownOpen: false
        }
    }
}
</script>

