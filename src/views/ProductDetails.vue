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
        {{allIngredients}}
        <br/>
        <br/>
        <span v-if="product.strTags"><strong>Tags : </strong> {{product.strTags}}</span>
      </p>
      <div class="text">
        <strong>Related Recipies:</strong> <br/>
           <div class="grid-container" >
             <div class="grid-item" v-for="item in similarProducts" :key="item.idMeal">
               <span v-if="item.strMeal.length > 20">{{item.strMeal.slice(0,20)}}...</span>
               <span v-else>{{item.strMeal}}</span><br/>
               <img :src="item.strMealThumb" alt="noImage" width="50%" />
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
      product:{} as object,
      area:"" as string,
      allIngredients:[] as Array<string>,
      similarProducts:{} as object,
      error:"" as string,
    }
  },
  methods:{
    async ItemDetails(itemId:number): Promise<void> {
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
        this.product= response.data.meals[0];
        this.area=response.data.meals[0].strArea;

        this.allIngredients=response.data.meals[0].strIngredient1
        for(let i=2; i<=20; i++){
          const ingredient = response.data.meals[0][`strIngredient${i}`]
          if (ingredient)
            this.allIngredients = this.allIngredients.concat(', ').concat(ingredient);
        }
      }
      catch(error){
        throw new Error(`API ${error}`);
      };
      this.getSimilarProducts(this.area)
    },
    async getSimilarProducts(area:string): Promise<void> {
      
      try{
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
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
  width:80%;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.grid-item {
  padding: 5px;
  font-size: 15px;
  text-align: center;
}
.container {
  display: grid;
  grid-gap: 10px;
}

.left-half {
  grid-column: 1;
  width:30%;
}

.right-half {
  left:1rem;
  padding-left:1rem;
  grid-column: 2;
  
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media only screen and (min-width: 1290px) {
  /* For big screens */
}
@media screen and (max-width: 992px) {
  /*Tablets*/ 
   .left-half{
    width:300px;
    grid-column:1;
  }
  .right-half {
    grid-column:1;
  }
}

@media screen and (max-width: 600px) {
  .left-half{
    width:300px;
    grid-column:1;
  }
  .right-half {
    grid-column:1;
  }
}

</style>