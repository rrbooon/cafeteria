<template>
  <div class="container">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/foods" icon="search">Foods</van-tabbar-item>
      <van-tabbar-item replace to="/drinks" icon="friends-o">Drinks</van-tabbar-item>
      <van-tabbar-item replace to="/offers" icon="discount">Offers</van-tabbar-item>
      <van-tabbar-item replace to="/foods" icon="setting-o">Settings</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      active: 0,
    };
  },
}
</script>
<style scoped>

.van-tabbar{
    border-radius: 10px;
    width: 95%;
    background-color: #322d35;
    background-image: linear-gradient(180deg,#322d35, #141114);
    margin: 0% 0% 5% 2.5%;
}



.van-tabbar-item--active, .van-tabbar-item--active #link{
    background-image: linear-gradient(225deg,#016640, #002215);
    color: white;
    border-radius: 10px;
}

.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border: none;
}

a{
  text-decoration: none;
  color: #646566;
}

</style>
