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
                     {{allIngredients}}
                </p>
                <p>
                 <strong><u>Instructions:</u></strong><br/> 
                 {{randomRecipe.strInstructions.slice(0,380)}}...
                <p>
                 <strong v-if="randomRecipe.strSource">Source </strong>{{randomRecipe.strSource}} 
                </p>
            </div>
        </div>
        <div class="right-half">
            <img :src="randomRecipe.strMealThumb" alt="noimage" width="100%"/>
             <p>
            <button @click="getAnotherRandom()">Another</button>
        </p>
        </div>
       
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
            randomRecipe:{} as Object,
            allIngredients:[] as Array<string>,
        }
    },
    methods: {
        //asynchronous function to fetch data from API that takes no input and returns nothing
        //this method populates randomRecipe object with the repsonse from API.
        async getRandomRecipe():Promise<void> {
            try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            this.randomRecipe=response.data.meals[0];
            //fetching each ingredient variable from API response object and populating the allIngredients array
            this.allIngredients=response.data.meals[0].strIngredient1
            for(let i=2; i<=20; i++){
                const ingredient = response.data.meals[0][`strIngredient${i}`]
                if (ingredient)
                this.allIngredients = this.allIngredients.concat(', ').concat(ingredient);
            }
            }
            //throw error if API call fails
            catch(error){
                throw new Error(`API ${error}`);
            };
        },
        //method that is executed when 'Another' button is clicked
        getAnotherRandom(){
            //getRandomRecipe function call 
            this.getRandomRecipe()
        }
    },
    mounted(){
        //getRandomRecipe function call when app is mounted.
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
  grid-template-columns: auto auto ;
  height:fit-content;
}

.left-half {
  grid-column: 1;
  width:50%;
  padding-left:10rem;
  padding-top:2rem;
  text-align: left;
}

.right-half {
  padding-top:2.5rem;
  grid-column: 2;
  width:100%;
}

button{
    background: rgb(11, 9, 37);
    font-size:1.5rem;
    color: rgb(247, 240, 240);
    padding:10px;
    border: 1px solid rgb(78, 82, 81);;
    border-radius: 30px;
}

/* Responsive layout - makes a two column-layout instead of four columns */

@media screen and (max-width: 600px) {
    body{
        margin-top:50%;
    }
  .left-half{
    grid-column:1;
    width:100%;
    padding-left:0;
  }
  .right-half {
    grid-column:1;
  }
  button{
      font-size:1rem;
  }
}
</style>