<template>
<div id="container">
  <app-header v-if="notLogin"></app-header>
    <div class="row">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  computed: {
    notLogin() {
      if(this.$route.name != 'login'){
        return true;
      }
    }
  }

}

</script>

<style>
body {
  padding: 30px;
}
</style>
