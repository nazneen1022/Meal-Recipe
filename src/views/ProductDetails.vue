<template>
<body>
  <div class="container">
    <h1>{{product.strMeal}}</h1>
    <div class="left-half">
      <img :src="product.strMealThumb" alt="altImage" width="500px"/>
    </div>
    <div class="right-half">
      <p class="text">
        <strong>Recipe Type </strong> {{product.strCategory}} <br/>
        <strong>Origin </strong> {{product.strArea}} 
        <br/> <br/>
        <b>Ingredients</b> <br/>
        <span v-if="product.strIngredient1">{{product.strIngredient1}}</span>
        <span v-if="product.strIngredient2">, {{product.strIngredient2}}</span>
        <span v-if="product.strIngredient3">, {{product.strIngredient3}}</span>
        <span v-if="product.strIngredient4">, {{product.strIngredient4}}</span>
        <span v-if="product.strIngredient5">, {{product.strIngredient5}}</span>
        <span v-if="product.strIngredient6">, {{product.strIngredient6}}</span>
        <span v-if="product.strIngredient7">, {{product.strIngredient7}}</span>
        <span v-if="product.strIngredient8">, {{product.strIngredient8}}</span>
        <span v-if="product.strIngredient9">, {{product.strIngredient9}}</span>
        <span v-if="product.strIngredient10">, {{product.strIngredient10}}</span>
        <span v-if="product.strIngredient11">, {{product.strIngredient11}}</span>
        <span v-if="product.strIngredient12">, {{product.strIngredient12}}</span>
        <span v-if="product.strIngredient13">, {{product.strIngredient13}}</span>
        <span v-if="product.strIngredient14">, {{product.strIngredient14}}</span>
        <span v-if="product.strIngredient15">, {{product.strIngredient15}}</span>
        <span v-if="product.strIngredient16">, {{product.strIngredient16}}</span>
        <span v-if="product.strIngredient17">, {{product.strIngredient17}}</span>
        <span v-if="product.strIngredient18">, {{product.strIngredient18}}</span>
        <span v-if="product.strIngredient19">, {{product.strIngredient19}}</span>
        <span v-if="product.strIngredient20">, {{product.strIngredient20}}</span>
        <br/>
        <br/>
        <span v-if="product.strTags"><strong>Tags : </strong> {{product.strTags}}</span>
      </p>
      <div class="text">
        <strong>Related Recipies:</strong> <br/>
           <div class="grid-container" >
             <div class="grid-item" v-for="item in similarProducts" :key="item.idMeal">
               {{item.strMeal}}<br/>
               <router-link :to="`/Products/${item.idMeal}`">
               <img :src="item.strMealThumb" alt="noImage" width="50%" />
               </router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
  <p class="text">
    <strong><u>Instructions:</u></strong><br/> {{product.strInstructions}}
  </p>
</body>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"

export default Vue.extend({
  name:"ProductDetails",
  data(){

  console.log("here:",this.$route.params.idMeal)
    return {
      id:parseInt(this.$route.params.idMeal),
      product:{},
      mainIngredient:"",
      category:"",
      similarProducts:{},
      error:"",
    }
  },
  methods:{
    async ItemDetails(itemId:number): Promise<void> {
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
        this.product= response.data.meals[0];
        this.category=response.data.meals[0].strCategory;
        this.mainIngredient=response.data.meals[0].strIngredient1;
      }
      catch(error){
        throw new Error(`API ${error}`);
      };
      this.getSimilarProducts(this.mainIngredient)
    },
    async getSimilarProducts(ingredient:string): Promise<void> {
      try{
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      type Item={
        idMeal:string,
      }
      const data = response.data.meals;
      const filterByIngredient:Array<{}> = data.filter((item:Item) => {
        return item.idMeal !== this.id.toString()
      })
       this.similarProducts = filterByIngredient.slice(0,3);
      }
      catch(error){
        throw new Error(`API ${error}`)
      }
    },
    setData (err:string, product:{}) {
      if (err) {
        this.error = err.toString()
      } else {
        this.product = product
      }
    }
  },
  mounted(){
    this.ItemDetails(this.id)
  },
})
</script>


<style scoped>
body{
  margin-top:5%;
}

.text{
  font-family: 'Trebuchet MS''Lucida Sans Unicode''Lucida Grande''Lucida Sans'Arialsans-serif;
  text-align: left;
  font-size: 1.2rem;
  
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.grid-item {
  padding: 10px;
  font-size: 15px;
  text-align: center;
}
.container {
  display: grid;
  grid-gap: 10px;
}

.left-half {
  grid-column: 1;
  width:500px;
}

.right-half {
  left:1rem;
  padding-left:2rem;
  grid-column: 2;
  
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .left-half{
    width:200px;
    grid-column:1;
  }
  .right-half {
    grid-column:1;
  }
}

</style>