<template>
  <div class="container">
    <UserLocationCard />
    <CoffeeShopMenu :title="'FOODS'" :color1="'#1C7C54'" :color2="'#002215'" :gradientAngle="'225deg'" :content="cardapio.foods"/>
    <CoffeeShopMenu :title="'DRINKS'" :color1="'#1C7C54'" :color2="'#002215'"  :gradientAngle="'250deg'" :content="cardapio.drinks"/>
    <CoffeeShopMenu :title="'OFFERS'" :color1="'#1C7C54'" :color2="'#002215'"  :gradientAngle="'200deg'" :content="cardapio.offers" style="margin-bottom: 70px"/>
  </div>
</template>

<script>
import UserLocationCard from '../components/Card/UserLocationCard.vue'
import CoffeeShopMenu from '../components/Menu/CoffeeShopMenu.vue'

const cardapio = {
        "foods": [
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
        
        ],
        "drinks": [
            {
                "title": "Café",
                "subtitle": "brazilian coffee",
                "price": "10,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Espresso",
                "subtitle": "machine coffee",
                "price": "2,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Orange juice",
                "subtitle": "Organic orange",
                "price": "15,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Espresso",
                "subtitle": "machine coffee",
                "price": "2,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Café",
                "subtitle": "brazilian coffee",
                "price": "10,00",
                "imagePath":"/img/hamburguer.jpg"
            },
            {
                "title": "Orange juice",
                "subtitle": "Organic orange",
                "price": "15,00",
                "imagePath":"/img/hamburguer.jpg"
            }
        ],
        "offers": [
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
}

export default {
  name: 'IndexPage',
  components: {
    UserLocationCard,
    CoffeeShopMenu
  },
  data(){
    return{
      cardapio
    }
  }
  
}
</script>
<style>
body{
  padding: 5px;
  background-color: #232026;
}

</style>
