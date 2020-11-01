<template>
    <body>
        <div class="container">
        <div class="left-half">
            <div>
                <h1>{{randomRecipe.strMeal}}</h1>
                Category: {{randomRecipe.strCategory}} <br/>
                Origin: {{randomRecipe.strArea}} <br/>
                <span v-if="randomRecipe.strTags">
                    <strong>Tags : </strong> {{randomRecipe.strTags}}
                </span>
                <p>
                    <b>Ingredients:</b> <br/>
                    <span v-if="randomRecipe.strIngredient1">{{randomRecipe.strIngredient1}}</span>
                    <span v-if="randomRecipe.strIngredient2">, {{randomRecipe.strIngredient2}}</span>
                    <span v-if="randomRecipe.strIngredient3">, {{randomRecipe.strIngredient3}}</span>
                    <span v-if="randomRecipe.strIngredient4">, {{randomRecipe.strIngredient4}}</span>
                    <span v-if="randomRecipe.strIngredient5">, {{randomRecipe.strIngredient5}}</span>
                    <span v-if="randomRecipe.strIngredient6">, {{randomRecipe.strIngredient6}}</span>
                    <span v-if="randomRecipe.strIngredient7">, {{randomRecipe.strIngredient7}}</span>
                    <span v-if="randomRecipe.strIngredient8">, {{randomRecipe.strIngredient8}}</span>
                    <span v-if="randomRecipe.strIngredient9">, {{randomRecipe.strIngredient9}}</span>
                    <span v-if="randomRecipe.strIngredient10">, {{randomRecipe.strIngredient10}}</span>
                    <span v-if="randomRecipe.strIngredient11">, {{randomRecipe.strIngredient11}}</span>
                    <span v-if="randomRecipe.strIngredient12">, {{randomRecipe.strIngredient12}}</span>
                    <span v-if="randomRecipe.strIngredient13">, {{randomRecipe.strIngredient13}}</span>
                    <span v-if="randomRecipe.strIngredient14">, {{randomRecipe.strIngredient14}}</span>
                    <span v-if="randomRecipe.strIngredient15">, {{randomRecipe.strIngredient15}}</span>
                    <span v-if="randomRecipe.strIngredient16">, {{randomRecipe.strIngredient16}}</span>
                    <span v-if="randomRecipe.strIngredient17">, {{randomRecipe.strIngredient17}}</span>
                    <span v-if="randomRecipe.strIngredient18">, {{randomRecipe.strIngredient18}}</span>
                    <span v-if="randomRecipe.strIngredient19">, {{randomRecipe.strIngredient19}}</span>
                    <span v-if="randomRecipe.strIngredient20">, {{randomRecipe.strIngredient20}}</span>
                </p>
            </div>
        </div>
        <div class="right-half">
            <img :src="randomRecipe.strMealThumb" alt="noimage" width="50%"/>
        </div>
        <p>
            <button @click="getAnotherRandom()">Another</button>
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
  margin-top:5%;
}
.container {
  display: grid;
  grid-gap: 10px;
}

.left-half {
  grid-column: 1;
  width:300px;
  padding-left:2rem;
  padding-top:2rem;
  text-align: left;
}

.right-half {
  left:1rem;
  padding-top:2.5rem;
  grid-column: 2;
  width:700px; 
}

button{
    background: rgb(7, 189, 174);
    color: black;
    padding:10px;
    border: 1px solid rgb(7, 189, 174);;
    border-radius: 10px;
}
</style>