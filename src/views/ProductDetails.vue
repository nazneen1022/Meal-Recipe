<template>
<body>
  <div class="container">
    <h1>{{product.strMeal}}</h1>
    <div class="left-half">
      <img :src="product.strMealThumb" alt="altImage" width="100%" />
    </div>
    <div class="right-half">
      <p class="text">
        <!-- <u>Instructions:</u> <br/> {{product.strInstructions}} -->
        <span v-if="product.strTags"><strong>Tags : </strong> {{product.strTags}}</span>
        <br/>
        <br/>
        <b>Ingredients:</b> <br/>
        <span v-if="product.strIngredient1">{{product.strIngredient1}}</span>
        <span v-if="product.strIngredient2"><br />{{product.strIngredient2}}</span>
        <span v-if="product.strIngredient3"><br />{{product.strIngredient3}}</span>
        <span v-if="product.strIngredient4"><br />{{product.strIngredient4}}</span>
        <span v-if="product.strIngredient5"><br />{{product.strIngredient5}}</span>
        <span v-if="product.strIngredient6"><br />{{product.strIngredient6}}</span>
        <span v-if="product.strIngredient7"><br />{{product.strIngredient7}}</span>
        <span v-if="product.strIngredient8"><br />{{product.strIngredient8}}</span>
        <span v-if="product.strIngredient9"><br />{{product.strIngredient9}}</span>
        <span v-if="product.strIngredient10"><br />{{product.strIngredient10}}</span>
        <span v-if="product.strIngredient11"><br />{{product.strIngredient11}}</span>
        <span v-if="product.strIngredient12"><br />{{product.strIngredient12}}</span>
        <span v-if="product.strIngredient13"><br />{{product.strIngredient13}}</span>
        <span v-if="product.strIngredient14"><br />{{product.strIngredient14}}</span>
        <span v-if="product.strIngredient15"><br />{{product.strIngredient15}}</span>
        <span v-if="product.strIngredient16"><br />{{product.strIngredient16}}</span>
        <span v-if="product.strIngredient17"><br />{{product.strIngredient17}}</span>
        <span v-if="product.strIngredient18"><br />{{product.strIngredient18}}</span>
        <span v-if="product.strIngredient19"><br />{{product.strIngredient19}}</span>
        <span v-if="product.strIngredient20"><br />{{product.strIngredient20}}</span>
      </p>
     
      <div class="text">
        <strong>Related Recipies:</strong> <br/>
         {{similarProducts}}
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
  margin-top:10%;
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
  grid-column: 1
}

.right-half {
  left:1rem;
  padding-left:2rem;
  grid-column: 2;
  
}

</style>