<template>
  <div class="container">
    
        <Nuxt />
    <NavegationTabBar />
  </div>
</template>

<script>

import NavegationTabBar from '../components/Navegation/NavegationTabBar.vue'

export default {
  name: '',
  components: {

    NavegationTabBar,
  
  }
  
}
</script>
<style scoped>
body{
  padding: 0px;
}
</style>
