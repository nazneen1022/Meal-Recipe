<template>
    <div>
        <section class="wrapper">
            <div id="navigation" >
                <h1>By Category</h1> 
                <ul id="navlist">
                    <li>
                        <a href="/Products/Chicken">Chicken</a>
                    </li>
                    <li>
                        <a href="/Products/Dessert">Dessert</a>
                    </li>
                    <li>
                        <a href="/Products/SeaFood">SeaFood</a>
                    </li>
                    <li>
                        <a href="/Products/Vegetarian">Vegetarian</a>
                    </li>
                </ul> 
            </div>
            <div id="navigation">
                <h1>All Links</h1> 
                <ul id="navlist">
                    <li>
                        <a href="/">Welcome</a>
                    </li>
                    <li>
                        <a href="https://www.themealdb.com/api.php" target="_blank">API Reference</a>
                    </li>
                    <li>
                        <a href="/Randomizer">Random Recipe</a>
                    </li>
                </ul> 
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Footer"
})
</script>

<style scoped>
.wrapper{
  width:90%;
  max-width:1200px;
  margin:0 auto;
  clear:both;
}

/*/////// Navigation ///////*/
#navigation h1 {
  font-size:18px;  
  font-weight:400;
  margin-bottom:20px;
}
#navigation {
	position: relative;
	float: left;
  background:transparent;
  margin:0 1% 0 1% ;

}
#navigation,#navlist{
  min-width:300px;
  width:220px;margin:15px;
}

#navlist li {
  font-size:1.4em;
  font-weight:300;
  line-height:160%;
	display: block;
	text-decoration: none;
	padding:5px 0 5px 0;
	list-style: none;
	border-bottom: 1px solid #e0e0e0;
}
#navlist li:last-child{border:none;}
#navlist li a {text-decoration:none;color:rgb(122, 3, 49);}
/*#navlist li a:hover {}*/

#navlist li a{
  font-weight:300!important;
}




</style>