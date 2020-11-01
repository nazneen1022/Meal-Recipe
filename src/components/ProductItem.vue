<template>
    <div class="content">
        <div>
             <span>{{item.strMeal}}</span>
        </div>
        <figure> 
            <router-link :to="`/Products/${item.idMeal}`">
            <img :src="item.strMealThumb" alt="photo">
            </router-link> 
        </figure>    
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'ProductItem',
    props:[
        "item",
        "editItem"
    ]
})
</script>

<style scoped>

figure img {
  width:100%;
  height:auto;
}

</style>