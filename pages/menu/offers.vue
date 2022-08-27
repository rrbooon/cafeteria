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

const cardapio = [

            {
                "title": "Hamburguer1",
                "subtitle": "Pão com carne 1",
                "price": "30,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Pão na chapa",
                "subtitle": "with manteiga",
                "price": "8,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Donuts",
                "subtitle": "with cream",
                "price": "10,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            
            {
                "title": "Pão na chapa",
                "subtitle": "with creamchesee",
                "price": "5,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Donuts",
                "subtitle": "with chocolate",
                "price": "15,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Hamburguer2",
                "subtitle": "Pão com carne 2",
                "price": "60,00",
                "imagePath":"/img/hamburguer.jpg"
            }
        
]


export default {
  name: 'IndexPage',
  data(){
    return{
      cardapio,
    }
  },
  components: {
    FoodCard
  },
  computed:{
    ...mapState({
        foods: state => state.products.offers,
    })
  },
  beforeCreate(){
    this.$store.dispatch('routes/setActivePage', 3)
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
