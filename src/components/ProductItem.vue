<template>
    <div>
        <img :src="item.strMealThumb" alt="photo" width="100%">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'ProductItem',
    props:[
        "item",
        "class1"
    ]
})
</script>

<style>

</style>