<template>
  <div class="container">
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="product in foods" :key="product._id">
        <NuxtLink style="text-decoration: none; color: inherit;" :to="`/products/${product._id}`">  
          <FoodCard :id="product._id" :imagePath="product.imagePath" :title="product.name" :subtitle="product.description" :price="product.basePrice" :color1="'#1C7C54'" :color2="'#002215'" :gradientAngle="'225deg'"/>
        </NuxtLink>
      </van-grid-item>
    </van-grid>
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
        foods: state => state.products.drinks,
    })
  },
  beforeCreate(){
    this.$store.dispatch('products/getProducts');
    this.$store.dispatch('routes/setActivePage', 2);
  }, 

}
</script>
<style >

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
