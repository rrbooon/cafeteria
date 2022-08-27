<template>
    <div class="container">
        <div class="title">
            <h3>{{title}}</h3>
            <NuxtLink style="text-decoration: none; color: inherit;" :to="`/menu/${to}`"><van-icon name="arrow" alt="See More"/></NuxtLink>
        </div>
        <div class="content">
            <ProductsHorizontalScroll :content="content" :title="title" :color1="color1" :color2="color2" :gradientAngle="gradientAngle"/>
        </div>
    </div>
</template>
<script>
import ProductsHorizontalScroll from '../Scrolling/ProductsHorizontalScroll.vue'
export default {

    components:{
        ProductsHorizontalScroll
    },
    props:{
        to: String,
        title: String,
        color1: String,
        color2: String,
        gradientAngle: String,
        content: null
    },
    

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

.container{
    width: 95%;
    margin: 0 2.5%;
}

.title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
}

.title h3{
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    color: white;
    margin-left: 5px;
}

.title .van-icon{
    margin-right: 30px;
}


</style>

