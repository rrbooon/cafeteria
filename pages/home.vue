<template>
  <div class="container container_home">
    <header>
        <div class="header">
            <h1>Bem-vindo.</h1>
            <img src="/img/icons/java.png" style="max-height:60px" alt="">
        </div>
        <div class="header coffee-shop-name">
            <h1>(cafe name)</h1>
        </div>
        <div class="header coffee-shop-name">
            <h1>(cafe logo)</h1>
        </div>
    </header>
    <main>
        <div class="offers">
            <CoffeeShopMenu v-if="foods" :to="'foods'" :title="'Promoções'" :color1="'#c7b199'" :color2="'#c7b199'" :gradientAngle="'225deg'" :content="foods"/>
        </div>
    </main>
  </div>
</template>

<script>
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
    CoffeeShopMenu
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

    .header{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 10rem;
    }

    .coffee-shop-name{
        padding-top: 3rem;
    }

    .offers{
        padding-top: 5rem;
    }
</style>



