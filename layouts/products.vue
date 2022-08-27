<template>
  <div class="container">
    <!-- <ProductHeader /> -->
        <Nuxt />

  </div>
</template>

<script>
import ProductHeader from '../components/Header/ProductHeader.vue'
import NavegationTabBar from '../components/Navegation/NavegationTabBar.vue'

export default {
  name: 'products',
  components: {
    ProductHeader,
    NavegationTabBar,
  
  }
  
}
</script>
<style scoped>
body{
  padding: 5px;
  background-color: #232026;
}

</style>
