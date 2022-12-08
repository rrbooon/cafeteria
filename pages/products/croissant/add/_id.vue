<template>
    <div class="container">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image">
            <img style="" src="/img/torta/creme.svg"  class="massa" alt="">
            <img  src="/img/torta/massa.svg" class="recheio" alt="">
        </div>
        <div class="content">
            <div class="title">
                <h1>Torta de creme de pistache</h1>
            </div>
            <div class="ingredients">
                <div class="ingredientsSubtitle">
                    <h5>Ingredients</h5>
                </div>
                <div class="default_options">
                    <van-button round :color="size[1]" size="normal" @click="setSize(p, 1)" type="primary">P</van-button>
                    <van-button round :color="size[2]" size="normal" @click="setSize(m, 2)" type="primary">M</van-button>
                    <van-button round :color="size[3]" size="normal" @click="setSize(g, 3)" type="primary">G</van-button>
                </div>
                <div class="ingredients_form">
                    <div class="ingredients_form_item">
                        <p>Massa</p>
                        <p class="unit_Measurement">{{massa.quantity}}<span>g</span></p>
                        <van-slider @change="setValue();" v-model="massa.quantity" :min="massa.min" :step="massa.step" :max="massa.max"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Recheio</p>
                        <p class="unit_Measurement">{{recheio.quantity}}<span>g</span></p>
                        <van-slider @change="setValue(); " v-model="recheio.quantity" :min="recheio.min" :step="recheio.step" :max="recheio.max"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Nozes</p>
                        <p class="unit_Measurement">{{nozes.quantity}}<span>g</span></p>
                        <van-slider @change="setValue(); " v-model="nozes.quantity" :min="nozes.min" :step="nozes.step" :max="nozes.max"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBar">
            <div class="price">
                <h5>Price</h5>
                <p translate="no"><span translate="no">R$</span> {{newValue.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}}</p>
            </div>
            <div class="btn_add">
                <van-button color="linear-gradient(225deg, #c7b199, #c7b199)" @click="addToCart()">
                    Add to cart
                </van-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        layout: 'products',
        data(){
            return{
                massa: {
                    quantity: 45,
                    price: 0.011,
                    min: 38,
                    max: 52,
                    step: 7
                },
                recheio:{
                    quantity: 60,
                    price: 0.055,
                    min: 50,
                    max: 70,
                    step: 10
                },
                nozes:{
                    quantity: 60,
                    price: 0.081,
                    min: 50,
                    max: 70,
                    step: 10
                },
                p:{
                    massa: {
                        quantity: 45,
                        price: 0.011,
                        min: 38,
                        max: 52,
                        step: 7
                    },
                    recheio:{
                        quantity: 60,
                        price: 0.055,
                        min: 50,
                        max: 70,
                        step: 10
                    },
                    nozes:{
                        quantity: 60,
                        price: 0.055,
                        min: 50,
                        max: 70,
                        step: 10
                    },
                },
                m:{
                    massa: {
                        quantity: 55,
                        price: 0.011,
                        min: 45,
                        max: 65,
                        step: 10
                    },
                    recheio:{
                        quantity: 72,
                        price: 0.055,
                        min: 60,
                        max: 84,
                        step: 12
                    },
                    nozes:{
                        quantity: 72,
                        price: 0.055,
                        min: 60,
                        max: 84,
                        step: 12
                    },
                },
                g:{
                    massa: {
                        quantity: 65,
                        price: 0.011,
                        min: 55,
                        max: 75,
                        step: 10 
                    },
                    recheio:{
                        quantity: 84,
                        price: 0.055,
                        min: 70,
                        max: 98,
                        step: 14
                    },
                    nozes:{
                        quantity: 84,
                        price: 0.055,
                        min: 70,
                        max: 98,
                        step: 14
                    },
                },
                size:{
                    1: '#8e7e6d',
                    2: '#c7b199',
                    3: '#c7b199'
                },
                newValue: 7.10
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            setSize(data, selected){

                this.massa = data.massa

                this.recheio = data.recheio

                this.nozes = data.nozes


                switch (selected) {
                    case 1:
                        this.size[1] = '#8e7e6d'
                        this.size[2] = '#c7b199'
                        this.size[3] = '#c7b199'
                        
                        break;
                    case 2:
                        this.size[1] = '#c7b199'
                        this.size[2] = '#8e7e6d'
                        this.size[3] = '#c7b199'
                        break;
                    case 3:
                        this.size[1] = '#c7b199'
                        this.size[2] = '#c7b199'
                        this.size[3] = '#8e7e6d'
                        break;
                }
                

                this.setValue()
            },
            unsetSize(){
                this.size[1] = '#c7b199'
                this.size[2] = '#c7b199'
                this.size[3] = '#c7b199'
            },
            setValue(){
                
                const chocolatePrice = (this.massa.quantity * this.massa.price)
                const chantillyPrice = (this.recheio.quantity * this.recheio.price)
                const chantillyPrice2 = (this.nozes.quantity * this.nozes.price)
                

                this.newValue = chocolatePrice + chantillyPrice + chantillyPrice2
            },
            addToCart(){
                

                const payload ={
                    name: 'Torta',
                    opitions: {
                        massa: {
                            name: 'Massa',
                            quantity:this.massa.quantity,
                            unity: 'g'                            
                        },
                        recheio: {
                            name: 'Recheio',
                            quantity:this.recheio.quantity,
                            unity: 'g'                            
                        },
                        nozes: {
                            name: 'Nozes',
                            quantity:this.recheio.quantity,
                            unity: 'ml'                            
                        },
                    },
                    finalValue: this.newValue
                }
                this.$store.dispatch('cart/addProduct', payload);
            }
        },
        
    }
</script>
<style>
.van-slider__bar{
        background-image: linear-gradient(to right,#c7b199, #c7b199);
    }
</style>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');
    
    .default_options{
        display: flex;
        justify-content: space-around;
    }

    .massa{
        width: 80%;
        /* position: absolute; */
        position: absolute;
        top: 97px;
    }

    .recheio{
        /* height: 75%; */
        z-index: -10;
        position: absolute;
        top: 97px;
    }

    .recheio2{
        width: 80%;
        /* height: 75%; */
        z-index: 10;
        position: absolute;
        top: 97px;
    }

    .image{
        border-radius: 30px 30px 15px 15px;
        height: 400px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin: 10px;
    }

    .image img{
        height: 300px;
        border-radius: 10px;
    }
    .content{
        margin: 15px;
    }
    .footerBar{
        overflow: hidden;
        color: black;
        position: fixed;
        bottom: 30px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        backdrop-filter: blur( 7px );

    }

    .footerBar .price h5{
        margin: 0px 0px 5px 0px;
        color: grey;
        line-height: 5px;
        
    }

    .title h1{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 30px;
        color: black;
    }

    .description .descriptionSubtitle h5, .ingredients .ingredientsSubtitle h5{
        margin: 0px 0px 5px 0px;
        color: grey;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }

    .description .descriptionContent p{
        color: black;
        font-family:courier,arial,helvetica;
    }

    .ingredients_form{
        margin-bottom: 100px;
    }

    .ingredients_form .ingredients_form_item p{
        color: black;
        font-family:courier,arial,helvetica;
        margin-bottom:5px;
    }

    .footerBar .price p{
        margin: 0px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }
    
    .footerBar .price p span{
        color: #c7b199;
    }

    .price{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10px;
        margin-top: 5px;
    }

    .btn_add{
        width: 60%;
    }

    .btn_add .van-button{
        width: 100%;
        border-radius: 10px;
        height: 50px;
    }

    .back_button{
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 40px;
        left: 21px;
        backdrop-filter: blur( 7px );
        color: black;
        z-index: 10000;
    }

    .unit_Measurement{
        margin: 5px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }

    
</style>
