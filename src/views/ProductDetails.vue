<template>
<body>
  <div class="container">
    <h1>{{product.strMeal}}</h1>
    <div class="left-half">
      <img :src="product.strMealThumb" alt="altImage" width="100%"/>
    </div>
    <div class="right-half">
      <p class="text">
        <u>Instructions:</u> <br/> {{product.strInstructions}}
        <br/>
        <u>Ingredients:</u> <br/>
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
      </p>
      
    </div>
  </div>
  
</body>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"

export default Vue.extend({
  name:"ProductDetails",
  data(){
    return {
      id:parseInt(this.$route.params.idMeal),
      product:[],
    }
  },
  methods:{
    async ItemDetails(itemId:number): Promise<void> {
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
        this.product= response.data.meals[0];
      }
      catch(error){
        throw new Error(`API ${error}`);
      };
    }
  },
  mounted(){
    this.ItemDetails(this.id)
  }
})
</script>


<style scoped>
body{
  margin-top:10%;
}
.text{
  font-family: 'Trebuchet MS''Lucida Sans Unicode''Lucida Grande''Lucida Sans'Arialsans-serif;
  text-align: left;
  font-size: 1.2rem;
}

.container {
  display: grid;
}

.left-half {
  grid-column: 1
}

.right-half {
  grid-column: 2;
}

</style>