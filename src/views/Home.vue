<template>
  <body>
     <div class="container">
       <div v-for="product in products" :key="product.idMeal">
           <ProductItem :item="product"/>  
          <!-- <img :src="product.strMealThumb" alt="photo">  -->
      </div>
     </div>
  </body>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios"
//Components
import ProductItem from "@/components/ProductItem.vue"

export default Vue.extend({
  name: 'Products',
  components:{
    ProductItem
  },
  data() {
    return {
      products:[],
    }
  },
  methods: {
    async loadProducts(category:string): Promise<void> {
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        this.products= response.data.meals;
      }
      catch(error){
        throw new Error(`API ${error}`);
      };
    },
  },
  mounted() {
    this.loadProducts('Vegetarian')
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

body{
  margin-top:10%;
}
.container {
  display: grid;
  align-content: space-between;
  grid-template-columns: auto auto auto ;
  grid-gap: 30px;
  position:relative;
}

.container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}


@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .container{
   grid-template-columns: auto;
  }
}



</style>
