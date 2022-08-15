<template>
  <div class="container">
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="product in cardapio">
        <FoodCard  :imagePath="product.imagePath" :title="product.title" :subtitle="product.subtitle" :price="product.price" :color1="'#1C7C54'" :color2="'#002215'" :gradientAngle="'225deg'"/>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import FoodCard from '../components/Card/FoodCard.vue'

const cardapio = [

            {
                "title": "Hamburguer2",
                "subtitle": "Pão com carne 2",
                "price": "10,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Orange juice",
                "subtitle": "Organic orange",
                "price": "5,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Donuts",
                "subtitle": "with chocolate",
                "price": "8,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Espresso",
                "subtitle": "machine coffee",
                "price": "1,00",
                "imagePath":"/img/hamburguer.jpg"
            }
        
]


export default {
  name: 'IndexPage',
  data(){
    return{
      cardapio
    }
  },
  components: {
    FoodCard
  }
  
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
