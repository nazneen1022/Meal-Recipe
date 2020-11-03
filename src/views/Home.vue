<template>
  <body class="header">
    <div class="text">
      <em>Sort by </em>
       <select :model="sortBy" @change="event => selectOption(event.target.value)">
         <option>Select</option>
         <option>Meal Id</option>
         <option>Name (Desc)</option>
       </select>
      </div>
      <div class="container">
       <div v-for="product in products" :key="product.idMeal">
           <ProductItem :item="product" :category="$route.params.category || category"/>  
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
      //default meal recipe category to 'SeaFood'
      category:'SeaFood' as string,
      sortBy:"" as string,
      products:[],
    }
  },
  methods: {
    //asynchronous function to fetch data from API that takes category as input and returns nothing
    //this method populates products object with the repsonse from API.
    async loadProducts(category:string): Promise<void> {
      try{
        //fetch the recipes from the public API
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        //select only top 10 records from the fetched results to show on the home page
        this.products= response.data.meals.slice(0,10);
      }
      catch(error){
        //throw an error if API call fails
        throw new Error(`API ${error}`);
      };
    },
    //catch the sortby selection change from user input and make sort function call
    selectOption(value:string){
      this.sortBy=value;
      this.sortProducts(this.sortBy)
    },
    sortProducts(sortBy:string):void {
      //define type dfinition for each product for sorting
      type Item={
        strMeal:string;
        idMeal:string;
      }
      //Evaluate sort by selection and sort based on user input.
      switch (sortBy){
        //sort by Meal Name in descending order
        case 'Name (Desc)' :
          this.products.sort((a:Item, b:Item) => {
            if (a.strMeal > b.strMeal) { 
              return -1;
            }
            if (a.strMeal > b.strMeal) {
              return 1;
            }
            return 0;
          });
          break;
          //sort by Meal Id
        case 'Meal Id' :
          this.products.sort((a:Item, b:Item) => {
            if (a.idMeal < b.idMeal) { 
              return -1;
            }
            if (a.idMeal > b.idMeal) {
              return 1;
            }
            return 0;
          });
          break;
          default :{
            this.sortBy="";
          }
      }
    }
  },
  mounted() {
    //calling loadProducts method with input as category(route paramter)
    //for initial landing of Home page (before routing happens), defaulting this.category (i.e., SeaFood)
    this.loadProducts(this.$route.params.category || this.category)
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header{
  margin-top:10%;
}
.container {
  display: grid;
  align-content: space-between;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  position:relative;
}

.container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
}

@media only screen and (min-width: 1290px) {
  /* For big screens */
  .header{
  margin-top:10%;
}
  .container{
   grid-template-columns: auto auto auto auto;
  }
}

@media only screen and (max-width: 992px) {
  /* For tablets */
  .header{
  margin-top:20%;
}
.text{
  text-align: center;
  }
  .container{
   grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 600px) {
  /* For mobile phones: */
  .header{
  margin-top:35%;
}
.text{
  text-align: center;
  }
  .container{
   grid-template-columns: auto;
  }
}

.text{
  margin:20px;
  text-align: right;
  font-size: 1.5rem;
}
select{
  text-align: center;
  text-decoration: none;
  background: rgb(14, 16, 36);
  font-size:1.2rem;
  color:white;
  padding:10px;
  border-radius: 20px;;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>
