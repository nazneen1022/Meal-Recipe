<template>
  <body>
     <div class="container">
       <div v-for="product in products" :key="product.id">
          <ProductItem :item="product"/> 
          <!-- <img :src="product.strMealThumb" alt="photo" > -->
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
      products:[]
    }
  },
  methods: {
    async loadProducts(category:string) {
            try{
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            this.products= response.data.meals;
          }
          catch(error){
            throw new Error(`API ${error}`);
          };
        }
  },
  mounted() {
    this.loadProducts('Dessert')
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body{
  margin-top:10%;
}
.container {
  display: grid;
  align-content: space-between;
  grid-template-columns: auto auto auto auto;
  grid-gap: 25px;
}

.container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}
.container img {
  width:100%;
  
}


</style>
