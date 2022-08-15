<template>
    <div class="scrolling-wrapper">
        <div v-for="product in content" class="card">
            <FoodCard  :imagePath="product.imagePath" :title="product.title" :subtitle="product.subtitle" :price="product.price" :color1="color1" :color2="color2" :gradientAngle="gradientAngle"/>
        </div>
    </div>
</template>

<script>
import FoodCard from '../Card/FoodCard.vue'

export default {
    name: 'ProductsHorizontalScroll',
    components:{
        FoodCard
    },
    props:{
        content: Array,
        color1: String,
        color2: String,
        gradientAngle: String,
    }
}
</script>
<style scoped>
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  
}

.card {
    display: inline-block;
    margin-right: 10px;
  }

.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
}

.scrolling-wrapper::-webkit-scrollbar {
    display: none;
}
</style>