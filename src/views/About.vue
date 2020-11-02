<template>
<body>
    <div class="container">
        <img src="@/assets/welcome.jpg" alt="no-Image" width="100%" height="auto"/>
        <div class="centered"><em>Favorite Meal Recipes</em></div>
    </div> 
</body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"About",
})
</script>

<style scoped>
body{
  margin-top:2.5%;
}
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 3.5rem;
  color:rgb(12, 13, 36);
  position: absolute;
  top: 30%;
  left: 50%;
  bottom:40%;
  transform: translate(-50%, -50%);
}
</style>