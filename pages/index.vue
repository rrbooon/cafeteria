<template>
  <div class="container container_home">
    <UserLocationCard />
    <CoffeeShopMenu v-if="foods" :to="'foods'" :title="'FOODS'" :color1="'#1C7C54'" :color2="'#002215'" :gradientAngle="'225deg'" :content="foods"/>
    <CoffeeShopMenu v-if="drinks" :to="'drinks'" :title="'DRINKS'" :color1="'#1C7C54'" :color2="'#002215'"  :gradientAngle="'250deg'" :content="drinks"/>
    <CoffeeShopMenu v-if="offers" :to="'offers'" :title="'OFFERS'" :color1="'#1C7C54'" :color2="'#002215'"  :gradientAngle="'200deg'" :content="offers" />
  </div>
</template>

<script>
import UserLocationCard from '../components/Card/UserLocationCard.vue'
import CoffeeShopMenu from '../components/Menu/CoffeeShopMenu.vue'
import { mapState } from 'vuex'

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
    CoffeeShopMenu,
  },
  data(){
    return{
        teste:{},
        cardapio
    }
  },
  computed:{
    ...mapState({
        foods: state => state.products.foods,
        drinks: state => state.products.drinks,
        offers: state => state.products.offers,
    })
  },
  beforeCreate(){
    this.$store.dispatch('products/getProducts');
    this.$store.dispatch('routes/setActivePage', 0);
  },
  methods:{
    
  }
}
  

</script>
<style scoped>
    .container_home{
        padding-bottom: 80px;
    }
</style>
<style>

body{
    background-color: #232026;
}

</style>


