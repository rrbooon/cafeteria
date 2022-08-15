<template>
  <div class="container">
    <MainHeader />
        <Nuxt />
    <NavegationTabBar />
  </div>
</template>

<script>
import MainHeader from '../components/Header/MainHeader.vue'
import NavegationTabBar from '../components/Navegation/NavegationTabBar.vue'

export default {
  name: '',
  components: {
    MainHeader,
    NavegationTabBar,
  
  }
  
}
</script>
<style>
body{
  padding: 5px;
  background-color: #232026;
}
</style>
