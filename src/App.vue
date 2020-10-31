<template>
  <div id="app" class="grid-container">
    <div id="nav" class="header">
      <router-link to="/Products">Home</router-link> 
      <router-link to="/List">Categories</router-link> 
      <router-link to="/Random">Random</router-link>
    </div>
    <router-view/>
    <div class="main">
    </div>
    <div class="footer">
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:"App", 
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
  width:100%;
  height:5vh;
  position: fixed;
  text-align:left;
  padding:20px;
  background: #0f1a25;

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

.header { grid-area: header; }
.menu { grid-area: menu; }
.main { grid-area: main; }
.right { grid-area: right; }
.footer { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'main main main main main main'
    'footer footer footer footer footer footer';
  grid-gap: 10px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 20px;
}
</style>
