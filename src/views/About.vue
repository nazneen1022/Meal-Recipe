<template>
    <div class="container">
        <img src="@/assets/welcome.jpg" alt="no-Image" width="100%"/>
        <div class="centered">Welcome to your favorite Meal Recipes App</div>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"About",
})
</script>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 2.5rem;
  position: absolute;
  top: 40%;
  left: 50%;
  bottom:40%;
  transform: translate(-50%, -50%);
}
</style>