<template>
    <body>
        <div>
            <h3>{{randomRecipe.strMeal}}</h3>
            <div>
                Category: {{randomRecipe.strCategory}} <br/>
                Origin: {{randomRecipe.strArea}} <br/>
            </div>
        </div>
        <div>
            <img :src="randomRecipe.strMealThumb" alt="noimage" width="50%"/>
            <p>
                <button @click="getAnotherRandom()">Another!</button>
            </p>
        </div>
    </body>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"
export default Vue.extend({
    name:"Random",
    data(){
        return {
            msg:"Random page",
            randomRecipe:{}
        }
    },
    methods: {
        async getRandomRecipe():Promise<void> {
            try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            this.randomRecipe=response.data.meals[0];
            }
            catch(error){
                throw new Error(`API ${error}`);
            };
        },
        getAnotherRandom(){
            this.getRandomRecipe()
        }
    },
    mounted(){
        this.getRandomRecipe()
    }
})
</script>

<style scoped>
body{
  margin-top:10%;
}

</style>