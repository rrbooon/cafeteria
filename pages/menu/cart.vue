<template>
    <div class="container">
        <h1>Carrinho</h1>
        <div class="list" v-if="cart">
            <Itemcart v-for="(item, index) in cart" :key="index" :data="item"/>
        </div>
        <div class="footerBar">
            <div class="price">
                <h5>Price</h5>
                <p v-if="finalValue" translate="no">
                    <span translate="no">R$ </span>{{finalValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
                <p v-else translate="no">
                    <span translate="no">R$</span>
                    0,00</p>
            </div>
            <div class="btn_add">
                <van-button color="linear-gradient(225deg, #c7b199, #c7b199)">
                    Close Order
                </van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Itemcart from '../../components/cart/Itemcart.vue'

export default {
  components: {
    Itemcart
  },
  computed:{
    ...mapState({
      cart: state => state.cart.cart,
      finalValue: state => state.cart.finalValue
    })
  },
  methods:{
    deleteItem(id){
      this.$store.dispatch('cart/removeProduct', id);
    }
  },
  beforeCreate(){
    this.$store.dispatch('routes/setActivePage', 5)
  }, 
}
</script>
<style scoped>

h1{
  margin-left: 2.5%;
  font-size: 1.5em;
}

.item_cart{
    display: flex;

    padding: 0 5%;
}

.nome_cart{
    border: 4px solid black;
    border-radius: 100% 0 0 100%;
    text-align: center;
    font-size: 14px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ingredientes_cart{
    background-color: darkgray;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
    line-height: 10px;
    width: 40%;
    padding-left: 5px;
}

.deletar_cart{
    background-color: brown;
    width: 30%;
    border: 4px solid black;
    color: white;
    border-radius: 0 100% 100% 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footerBar{
        overflow: hidden;
        color: black;
        position: fixed;
        bottom: 80px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        backdrop-filter: blur( 7px );

    }

    .footerBar .price h5{
        margin: 0px 0px 5px 0px;
        color: grey;
        line-height: 5px;
        
    }

    .title h1{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 30px;
        color: black;
    }

    .description .descriptionSubtitle h5, .ingredients .ingredientsSubtitle h5{
        margin: 0px 0px 5px 0px;
        color: grey;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }

    .description .descriptionContent p{
        color: black;
        font-family:courier,arial,helvetica;
    }

    .ingredients_form{
        margin-bottom: 100px;
    }

    .ingredients_form .ingredients_form_item p{
        color: black;
        font-family:courier,arial,helvetica;
        margin-bottom:5px;
    }

    .footerBar .price p{
        margin: 0px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }
    
    .footerBar .price p span{
        color: #c7b199;
    }

    .price{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10px;
        margin-top: 5px;
    }

    .btn_add{
        width: 60%;
    }

    .btn_add .van-button{
        width: 100%;
        border-radius: 10px;
        height: 50px;
    }

</style>
