<template>
<body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="content">
        <div>
             <span v-if="item.strMeal.length > 20">{{item.strMeal.slice(0,20)+`...`}}</span>
             <span v-else>{{item.strMeal}}</span>
        </div>
        <figure class="wrapper"> 
            <router-link :to="`/Products/${category}/${item.idMeal}`">
            <div class="card">
            <img  :src="item.strMealThumb" alt="photo">
            
            </div>
            </router-link> 
        </figure>    
    </div>
    </body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'ProductItem',
    props:[
        "item",
        "category"
    ]
})
</script>

<style scoped>

figure img {
  width:100%;
  height:400px;
}

</style>