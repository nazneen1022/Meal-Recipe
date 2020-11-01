<template>
  <div id="app" class="grid-container">
    <Navigation />
    <div id="nav" class="footer">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

//Components
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  name:"App", 
  components:{
    Navigation,
    Footer
  },
  data(){
    return {
      clicked:false
    }
  },
  methods:{
    selectCategory(){
      this.clicked=true
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  top:0;
  left:0;
  right:0;
  background: #0f1a25;
  width:100%;
  a {
    padding:50px;
    font-weight: bold;
    color: rgb(224, 215, 215);
    &.router-link-exact-active {
      color: orangered;
    }
  }
}

body {
  margin: 0;
}

.header { 
  grid-area: header; 
   position: fixed;
   z-index:1;
}
.main { grid-area: main; }
.right { grid-area: right; }
.footer { 
  grid-area: footer;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header'
    'main main main main'
    'footer footer footer footer';
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 20px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #nav{
   grid-template-columns: auto;
  }
}

</style>
