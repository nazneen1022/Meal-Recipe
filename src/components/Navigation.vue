<template>
    <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <div class="fixed navbar">
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
      category:"" as string,
    }
  },
  mounted(){
    this.category= 'SeaFood'
  }
})
</script>

<style scoped>
.fixed {
	position: -webkit-fixed;
	position: fixed;
  width:100%;
  left:0;
  top:0;
  z-index:2
}

.navbar {
  overflow: hidden;
  background: white
}

.navbar a {
  float: left;
  font-size: 1.7rem;
  font-weight:bold; 
  color: rgb(4, 1, 19);;
  text-align: center;
  padding: 14px 44px;
  border:1px;
  text-decoration: none;
}

.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 1.7rem; 
  font-weight:bold; 
  border: none;
  outline: none;
  color: rgb(4, 1, 19);
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: rgb(12, 13, 36);
  color:white
}

.dropdown-content {
  display: none;
  position: fixed;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
  z-index: 100;
}

.dropdown-content a {
  float: none;
  font-size:1rem;
  color: rgb(47, 88, 202);
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: rgb(9, 25, 97);
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  .navbar a {
    float: none;
    width: 100%;
  }
.dropdown{
    float: none;
    width: 100%;
  }
}
</style>