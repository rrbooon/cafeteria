<template>
  <div class="container">
    <h1>Carrinho</h1>
    <div class="list">
        <div class="item_cart">
            <div class="nome_cart">
                <h1>Patty melt</h1>
            </div>
            <div class="ingredientes_cart">
                <p>Cheddar: 200g</p>
                <p>Carne: 200g</p>
                <p>Pão: Médio</p>
            </div>
            <div class="deletar_cart">
                <van-icon name="cross" size="60"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'



export default {
  name: 'IndexPage',
  data(){
    return{

    }
  },
  components: {

  },
  computed:{
    ...mapState({
        foods: state => state.products.offers,
    })
  },
  beforeCreate(){
    this.$store.dispatch('products/getProducts');
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
</style>
