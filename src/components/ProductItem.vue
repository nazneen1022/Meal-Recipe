<template>
<body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="content">
        <div class="grid">
            <figure class="effect-lily">
                <div class="card">
                    <img  :src="item.strMealThumb" alt="photo">
                </div>
                <figcaption>
                    <div>
                        <h3 v-for="i in item.strMeal.split(' ')" :key="i">
                            <span>{{i}}</span>
                        </h3>
                        <p>
                            <i class="arrow right"></i><i class="arrow right"></i>
                        </p>
                    </div>
                    <router-link :to="`/Products/${category}/${item.idMeal}`">
                    View more
                    </router-link>
				</figcaption>	
			</figure>
        </div>
    </div>
</body>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:'ProductItem',
    props:[
        "item",
        "category"
    ]
})
</script>

<style scoped>

figure img {
  width:100%;
}
.arrow {
  border: solid rgb(250, 248, 248);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.grid {
	position: relative;
	margin: 0 auto;
	padding: 1em 0 4em;
	max-width: 1000px;
	list-style: none;
	text-align: center;
}

/* Common style */
.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 10px 1%;
	min-width: 320px;
	max-width: 480px;
	max-height: 360px;
	width: 48%;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1rem;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h3 {
	word-spacing: -0.15em;
	font-weight: 200;
}

.grid figure h3 span {
	font-weight: 800;
}

.grid figure h3,
.grid figure p {
	margin: 0;;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
    border-radius:50%;
}

/* Individual effects */

/*---------------*/
/***** Lily *****/
/*---------------*/

figure.effect-lily img {
	max-width: none;
	width: -webkit-calc(100% + 50px);
	width: calc(100% + 50px);
	opacity: 0.5;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-40px,0, 0);
	transform: translate3d(-40px,0,0);
}

figure.effect-lily figcaption {
	text-align: left;
}

figure.effect-lily figcaption > div {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	height: 50%;
}

figure.effect-lily h3,
figure.effect-lily p {
	-webkit-transform: translate3d(0,40px,0);
	transform: translate3d(0,40px,0);
}

figure.effect-lily h3 {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
}

figure.effect-lily p {
	color:blue;
	opacity: 0;
	-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
	transition: opacity 0.2s, transform 0.35s;
}

figure.effect-lily:hover img,
figure.effect-lily:hover p {
	opacity: 1;
}

figure.effect-lily:hover img,
figure.effect-lily:hover h3,
figure.effect-lily:hover p {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-lily:hover p {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
}

</style>