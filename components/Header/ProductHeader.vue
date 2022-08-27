<template>
    <div class="container">
        <div class="title">
            <h3>CAFETERIA</h3>
            <h1>3º cozinha</h1>
        </div>
        <div class="cart">
            <HeaderCart />
        </div>
    </div>
</template>
<script>
import HeaderCart from '../cart/HeaderCart.vue';

export default {

    components:{
        HeaderCart
    }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap');

.container{
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin-left: 2.5%;
    margin-top: 5%;
}

.cart{
    display: flex;
    margin-bottom: 17px;
    height: 100%;
}

h1, h3{
    margin: 0px;
}

h1{
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
}

h3{
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
}

</style>