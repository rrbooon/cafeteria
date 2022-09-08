<template>
    <div class="container_index">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image_background">
            <img src="/img/cafe.jpg" alt="">
        </div>
        <div class="title">
            <h1>Sign-up!</h1>
        </div>
        <SingupCardForm />
    </div>
</template>
<script>
import SingupCardForm from '../../components/Card/SingupCardForm.vue'
export default {
    layout: 'LoggedOut',
    components:{
        SingupCardForm,

    },
    methods:{
        back(){
            this.$router.push('/')
        }
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
        padding-top: 40%;
        padding-bottom: 15%;
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
    
    .back_button{
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40px;
        left: 21px;
        backdrop-filter: blur( 7px );
        color: white;
    }
</style>