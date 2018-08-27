<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                <router-link to="/" class="navbar-brand">DigiCoupon</router-link>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">End Day</a></li>
                    <li class="dropdown" :class="{open: isDropDownOpen}" @click="isDropDownOpen = !isDropDownOpen">
                    <a 
                        href="#" 
                        class="dropdown-toggle" 
                        data-toggle="dropdown" 
                        role="button" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save & Load <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Save</a></li>
                        <li><a href="#">Load</a></li>
                    </ul>
                    </li>
                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
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

