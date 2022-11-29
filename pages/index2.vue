<template>
    <div class="container_index">
        <div class="image_background">
            <img src="/img/cafe.jpg" alt="">
        </div>
        <div class="title">
            <h1>Hello!</h1>
        </div>
        <LoggedOutCardEntrie />
    </div>
</template>
<script>
import LoggedOutCardEntrie from '../components/Card/LoggedOutCardEntrie.vue'
export default {
    layout: 'LoggedOut',
    components:{
        LoggedOutCardEntrie
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

    .container_index{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 60%;
    }

    .image_background{
        width: 100%;
    }

    .image_background img{
        max-width: 100%;
        position: absolute;
        top: 0;
        z-index: -2;
        filter: blur(0.5px) brightness(0.75);
        -webkit-filter: blur(0.5px) brightness(0.75);
    }

    .title{
        width: 90%;
        display: flex;
        justify-content: flex-start;
    }

    .title h1{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        color: white;
    }
    
</style>