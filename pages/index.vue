<template>
  <div class="container container_home">
    <header>
        <div class="header">
            <h1>Bem-vindo.</h1>
            <img src="/img/icons/java.png" style="max-height:60px" alt="">
        </div>
        <div class="header coffee-shop-name">
            <h1>Inoffe Café</h1>
        </div>
        <div class="header coffee-shop-name">
            <img src="/logo.png" alt="" id="logo">
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


export default {
  name: 'IndexPage',
  components: { 
    CoffeeShopMenu
  },
  data(){
    return{
        teste:{}
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
    #logo{
        width: 100%;
        margin: auto;
    }

    .container_home{
        padding-bottom: 80px;
    }

    .header{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 5rem;
    }

    .coffee-shop-name{
        padding-top: 1rem;
    }

    .offers{
        padding-top: 1rem;
    }
</style>



