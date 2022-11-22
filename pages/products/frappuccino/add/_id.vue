<template>
    <div class="container">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image">
            <img src="/img/frappuccino/frapuccino_copo.svg"  class="massa" alt="">
            <img src="/img/frappuccino/frapuccino_ganache.svg"  class="recheio2" alt="">
            <img src="/img/frappuccino/frapuccino_chantilly.svg" class="recheio" alt="">
        </div>
        <div class="content">
            <div class="title">
                <h1>Frapuccino</h1>
            </div>
            <div class="ingredients">
                <div class="ingredientsSubtitle">
                    <h5>Ingredients</h5>
                </div>
                <div class="default_options">
                    <van-button round color="#c7b199" size="normal" type="primary">P</van-button>
                    <van-button round color="#c7b199" size="normal" type="primary">M</van-button>
                    <van-button round color="#c7b199" size="normal" type="primary">G</van-button>
                </div>
                <div class="ingredients_form">
                    <div class="ingredients_form_item">
                        <p>Café</p>
                        <p class="unit_Measurement">{{cafe.quantity}}<span>ml</span></p>
                        <div class="default_options">
                            <van-button round color="#c7b199" size="normal" @click="setCafe(150, 0.75)" type="primary">P</van-button>
                            <van-button round color="#c7b199" size="normal" @click="setCafe(300, 1.50)" type="primary">M</van-button>
                            <van-button round color="#c7b199" size="normal" @click="setCafe(500, 2)" type="primary">G</van-button>
                        </div>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Chocolate</p>
                        <p class="unit_Measurement">{{chocolate.quantity}}<span>g</span></p>
                        <van-slider @change="setValue()" v-model="chocolate.quantity" :min="0" :max="90"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Chantilly</p>
                        <p class="unit_Measurement">{{chantilly.quantity}}<span>ml</span></p>
                        <van-slider @change="setValue()" v-model="chantilly.quantity" :min="0" :max="82"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Açúcar</p>
                        <p class="unit_Measurement">{{acucar.quantity}}<span> colheres de chá</span></p>
                        <div class="default_options">
                            <van-button round color="#c7b199" size="normal" @click="setAcucar(1, 0.02)" type="primary">1</van-button>
                            <van-button round color="#c7b199" size="normal" @click="setAcucar(2, 0.04)" type="primary">2</van-button>
                            <van-button round color="#c7b199" size="normal" @click="setAcucar(3, 0.06)" type="primary">3</van-button>
                            <van-button round color="#c7b199" size="normal" @click="setAcucar(4, 0.08)" type="primary">4</van-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBar">
            <div class="price">
                <h5>Price</h5>
                <p v-if="newValue" translate="no"><span translate="no">R$</span> {{'10'.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
                <p v-else translate="no"><span translate="no">R$</span> {{'10'.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
            </div>
            <div class="btn_add">
                <van-button color="linear-gradient(225deg, #c7b199, #c7b199)" @click="addToCart">
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
                cafe: {
                    quantity: 150,
                    price: 0.75
                },
                chocolate: {
                    quantity: 32,
                    price:5.05
                },
                chantilly:{
                    quantity: 25,
                    price:2.50
                },
                acucar: {
                    quantity: 1,
                    price: 0.02
                },
                newValue: null
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            setValue(){
                
            },
            setCafe(quantity, price){
                this.cafe.quantity = quantity
                this.cafe.price = price   
            },
            setAcucar(quantity, price){
                this.acucar.quantity = quantity
                this.acucar.price = price   
            },
            addToCart(){
                

                const payload ={
                    data: null,
                    opitions: null,
                    finalValue: null
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
        width: 100%;
        /* position: absolute; */
        position: absolute;
        top: 97px;
    }

    .recheio{
        width: 177px;
        /* height: 75%; */
        z-index: 10;
        position: absolute;
        top: -59px;
    }

    .recheio2{
        width: 244px;
        /* height: 75%; */
        z-index: 10;
        position: absolute;
        top: 65px;
        left: 104px;
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
    }

    .unit_Measurement{
        margin: 5px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }

    
</style>
