<template>

    <div class="wrapper">
        <div id="navigation">
            <ul id="navlist">   
                <li><a href="/Products">Home</a></li>
                <li><a href="/Products">Home</a></li>
                <li><a href="/Products">Home</a></li>
            </ul>
        </div>
        <div id="navigation">
            <ul id="navlist"> 
                <li><a href="/About">About</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/About">About</a></li>
            </ul>
        </div>
        <div id="navigation">
            <ul id="navlist">
                <li><a href="/References">References</a></li>
                <li><a href="/References">References</a></li>
                <li><a href="/References">References</a></li>
            </ul>
        </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Footer"
    
})
</script>

<style lang="scss" scoped>

.wrapper{
  width:100%;
}

#navigation {
    position: relative;
    float: left;
}

#navlist li {
  font-size:1em;
  display: block;
  padding:5px 0 5px 0;
}

#navlist li a {
    text-decoration:none;
    color:rgb(241, 236, 236);
}

</style>