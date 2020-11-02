<template>
    <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="sticky navbar">
  <div class="dropdown">
    <button class="dropbtn">Categories <i class="fa fa-caret-down"></i></button>
    <div class="dropdown-content">
        <a href="/Products/Vegetarian">Vegeterian</a> 
        <a href="/Products/SeaFood">SeaFood</a>
        <a href="/Products/Chicken">Chicken</a>
        <a href="/Products/Dessert">Dessert</a>
    </div>
  </div> 
  <router-link :to="`/Products/${this.$route.params.category || this.category}`">Home</router-link>
  <router-link to="/Randomizer">Random</router-link>
</div>
<router-view />
</body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:"Navigation",
  data(){
    return {
      category:""
    }
  },
  mounted(){
    this.category= 'SeaFood'
  }
})
</script>

<style scoped>
.sticky {
	position: -webkit-fixed;
	position: fixed;
  width:100%;
  left:0;
  right:0;
  top:0;
  z-index:2
}

.navbar {
  overflow: hidden;
  background: rgb(15, 15, 15);
}

.navbar a {
  float: left;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
}

.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 1.2rem;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.2);
  z-index: 201;
}

.dropdown-content a {
  float: none;
  color: rgb(83, 85, 85);
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: rgb(250, 248, 248);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>