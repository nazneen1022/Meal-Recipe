<template>
<body>
    <div>
        <div id="navigation" class="footer">
            <h2>Category</h2>
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
        
</div>
</body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Footer"
})
</script>

<style lang="scss" scoped>
.footer{
    background: #0f1a25;
    width:100%;
    color:orange;
    text-align: center;
}

#navigation {
	position: relative;
	float: left;
}


#navlist li {
  font-size:1rem;
	display: block;
	padding:5px 0 5px 0;
}
#navlist li:last-child{border:none;}
#navlist li a {text-decoration:none;color:rgb(241, 237, 241);}


</style>