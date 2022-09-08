<template>
    <div class="container">
        <div class="blur">
            
        </div>
        <div class="form">
            <FormEntrie />
        </div>
        <div class="or">
            <p>or</p>
        </div>
        <div class="signup_text">
            <p>Don't have an account? <NuxtLink :to="`/signup/E-mail`">Sing up</NuxtLink></p>
        </div>
    </div>
</template>
<script>
import FormEntrie from '../Form/FormEntrie.vue';

export default {

    data(){
        return{
            password: '',
            username: ''
        }
    },
    components:{
        FormEntrie
    }

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blur{
    min-height: 50vh;
    width: 95%;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px) saturate(200%);
    background-color: rgba(93, 93, 93, 0.59);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    position: absolute;
    z-index: -1;
}

.form{
    margin-top: 25%;
    width: 80%;
}

.or{
    color: white;
    z-index: 10;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
}

.signup_text{
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
}

.signup_text a{
    color: #05b170;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
}

</style>