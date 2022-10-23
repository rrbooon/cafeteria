<template>
  <div class="container">
    <h1>Lanches</h1>
    <van-grid :border="false" :column-num="2" v-if="foods.length > 0">
      <van-grid-item v-for="product in foods" :key="product._id">
        <NuxtLink style="text-decoration: none; color: inherit;" :to="`/products/${product._id}`">  
          <FoodCard :id="product._id" :imagePath="product.imagePath" :title="product.name" :subtitle="product.description" :price="product.basePrice" :color1="'#c7b199'" :color2="'#c7b199'" :gradientAngle="'225deg'"/>
        </NuxtLink>
      </van-grid-item>
    </van-grid>
    <van-loading size="24px" v-else vertical>Loading...</van-loading>
  </div>
</template>

<script>
import FoodCard from '../../components/Card/FoodCard.vue'
import { mapState } from 'vuex'


export default {
  name: 'IndexPage',
  data(){
    return{
   
    }
  },
  components: {
    FoodCard
  },
  computed:{
    ...mapState({
        foods: state => state.products.foods,
    })
  },
  beforeCreate(){
    this.$store.dispatch('products/getProducts');
    this.$store.dispatch('routes/setActivePage', 3)
  }, 
}
</script>
<style scoped>

h1{
  margin-left: 2.5%;
}

.van-grid{
  margin-top: 20px;
}

.van-grid-item__content{
  padding: 0;
  margin: 0;
  background-color: transparent;
  margin-bottom: 10px;
}

</style>
