<template>
    <div class="content">
        <div>
             <span>{{item.strMeal}}</span>
        </div>
        <figure>
            <img :src="item.strMealThumb" alt="photo">
        </figure>    
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'ProductItem',
    props:[
        "item",
    ]
})
</script>

<style scoped>

figure img {
  width:100%;
  height:auto;
}

</style>