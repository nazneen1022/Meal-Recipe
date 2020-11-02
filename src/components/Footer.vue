<template>
    <div>
        <section class="wrapper">
            <div id="navigation" >
                <h1>Category</h1> 
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
                <h1>Links</h1> 
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
  width:100%;
  margin:0;
  clear:both;
}

#navigation h1 {
  font-size:2rem;  
}
#navigation {
	position: relative;
	float: left;
    background:transparent;
    margin:0 1% 0 1% ;
}


#navlist li {
  font-size:1em;
  line-height:150%;
	display: block;
	text-decoration: none;
	padding:5px 0 5px 0;
	list-style: none;
	border-bottom: 1px solid #e0e0e0;
    text-align-last: left;
}
#navlist li:last-child{
    border:none;
}
#navlist li a {
    text-decoration:none;
    color:rgb(122, 3, 49);
}
</style>