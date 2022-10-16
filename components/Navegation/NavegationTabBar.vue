<template>
  <div class="container">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home"><img src="/img/icons/home.svg" alt=""></van-tabbar-item>
      <van-tabbar-item replace to="/menu/foods"><img src="/img/icons/search.svg" alt=""></van-tabbar-item>
      <van-tabbar-item replace to="/menu/drinks"><img src="/img/icons/offer.svg" alt=""></van-tabbar-item>
      <van-tabbar-item replace to="/menu/offers"><img src="/img/icons/lanche.svg" alt=""></van-tabbar-item>
      <van-tabbar-item replace to="/menu/drinks"><img src="/img/icons/bebida.svg" alt=""></van-tabbar-item>
      <van-tabbar-item replace to="/menu/drinks"><img src="/img/icons/carrinho.svg" alt=""></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState({
        active: state => state.routes.active,
    })
  }
}
</script>
<style scoped>

svg{
  fill: white;
}

.van-tabbar{
    border-radius: 10px;
    border: 2px solid;
    width: 99%;
    /* background-color: #322d35;
    background-image: linear-gradient(180deg,#322d35, #141114); */
    /* margin: 0% 0% 5% 2.5%; */
}



.van-tabbar-item--active, .van-tabbar-item--active #link{
    /* background-image: linear-gradient(225deg,#c7b199, #312b25); */
    background-color: #c7b199;
    border-radius: 9px;
    border: 3px solid black;
}

.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border: none;
}

a{
  text-decoration: none;
  color: #646566;
}

</style>
