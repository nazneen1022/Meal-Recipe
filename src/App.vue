<template>
  <div id="app">
    <div>
      <Navigation />
    </div>  
    <div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

//Components
import Navigation from "@/components/Navigation.vue"
import Home from "@/views/Home.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  name:"App", 
  components:{
    Navigation,
    Home,
    Footer,
  },
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>
