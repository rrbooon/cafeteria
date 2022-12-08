<template>
    <div class="container">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image">
            <img style="" src="/img/lanche/ps.svg"  class="massa" alt="">
            <img :style="`z-index:120;`" src="/img/lanche/cs.svg"  class="recheio2" alt="">
            <img style="" src="/img/lanche/b.svg"  class="recheio2" alt="">
            <img style="" src="/img/lanche/ca.svg"  class="recheio2" alt="">
            <img style="" src="/img/lanche/ci.svg"  class="recheio2" alt="">
            <img style="" src="/img/lanche/pi.svg"  class="recheio2" alt="">
            
        </div>
        <div class="content">
            <div class="title">
                <h1>Patty melt</h1>
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
                        <p>Pão</p>
                        <div class="default_options">
                            <van-button round :color="pao.selected[1]" size="normal" @click="setCafe('p', 1, p)" type="primary">P</van-button>
                            <van-button round :color="pao.selected[2]" size="normal" @click="setCafe('m', 2, m)" type="primary">M</van-button>
                            <van-button round :color="pao.selected[3]" size="normal" @click="setCafe('g', 3, g)" type="primary">G</van-button>
                        </div>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Recheio</p>
                        <p class="unit_Measurement">{{recheio.quantity}}<span>g</span></p>
                        <van-slider @change="setValue(); unsetSize();" v-model="recheio.quantity" :min="0" :step="2" :max="recheio.max"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Bacon</p>
                        <p class="unit_Measurement">{{bacon.quantity}}<span>g</span></p>
                        <van-slider @change="setValue(); unsetSize();" v-model="bacon.quantity" :min="0" :step="2" :max="90"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Cheddar</p>
                        <p class="unit_Measurement">{{cheddar.quantity}}<span>ml</span></p>
                        <van-slider @change="setValue();  unsetSize();" v-model="cheddar.quantity" :min="0" :max="82"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Cebola</p>
                        <p class="unit_Measurement">{{cebola.quantity}}<span>ml</span></p>
                        <van-slider @change="setValue();  unsetSize();" v-model="cebola.quantity" :min="0" :max="82"/>
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
                pao: {
                    quantity: 'p',
                    price: 0.30,
                    selected:{
                        1: '#8e7e6d',
                        2: '#c7b199',
                        3: '#c7b199'
                    }
                },
                recheio: {
                    quantity: 14,
                    price: 0.0505,
                    max: 20
                },
                bacon: {
                    quantity: 14,
                    price: 0.03,
                    max: 20
                },
                cheddar:{
                    quantity: 14,
                    price: 0.018,
                    max: 20
                },
                cebola: {
                    quantity: 14,
                    price: 0.005,
                    max: 20
                },
                p:{
                    cafe: {
                        quantity: 'p',
                        price: 0.30,
                        selected:{
                            1: '#8e7e6d',
                            2: '#c7b199',
                            3: '#c7b199'
                        }
                    },
                    recheio: {
                        quantity: 14,
                        price: 0.0505,
                        max: 20
                    },
                    bacon: {
                        quantity: 14,
                        price: 0.03,
                        max: 20
                    },
                    cheddar:{
                        quantity: 14,
                        price: 0.018,
                        max: 20
                    },
                    cebola: {
                        quantity: 14,
                        price: 0.005,
                        max: 20
                    },
                },
                m:{
                    cafe: {
                        quantity: 'p',
                        price: 0.30,
                        selected:{
                            1: '#8e7e6d',
                            2: '#c7b199',
                            3: '#c7b199'
                        }
                    },
                    recheio: {
                        quantity: 14,
                        price: 0.0505,
                        max: 32
                    },
                    bacon: {
                        quantity: 14,
                        price: 0.03,
                        max: 32
                    },
                    cheddar:{
                        quantity: 14,
                        price: 0.018,
                        max: 32
                    },
                    cebola: {
                        quantity: 14,
                        price: 0.005,
                        max: 32
                    },
                },
                g:{
                    cafe: {
                        quantity: 'p',
                        price: 0.30,
                        selected:{
                            1: '#8e7e6d',
                            2: '#c7b199',
                            3: '#c7b199'
                        }
                    },
                    recheio: {
                        quantity: 14,
                        price: 0.0505,
                        max: 90
                    },
                    bacon: {
                        quantity: 14,
                        price: 0.03,
                        max: 90
                    },
                    cheddar:{
                        quantity: 14,
                        price: 0.018,
                        max: 90
                    },
                    cebola: {
                        quantity: 14,
                        price: 0.005,
                        max: 90
                    },
                },
                size:{
                    1: '#8e7e6d',
                    2: '#c7b199',
                    3: '#c7b199'
                },
                newValue: 3
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            setSize(data, selected){
                this.cafe = data.cafe

                this.chocolate.quantity = data.chocolate.quantity

                this.chantilly.quantity = data.chantilly.quantity


                this.acucar = data.acucar

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
                this.bacon

                this.newValue = cafePrice + chocolatePrice + chantillyPrice + acucarPrice
            },
            setCafe(quantity, selected, data){
                this.recheio.quantity = quantity   
                //this.setValue()

                switch (selected) {
                    case 1:
                        this.pao.selected[1] = '#8e7e6d'
                        this.pao.selected[2] = '#c7b199'
                        this.pao.selected[3] = '#c7b199'
                        this.recheio = data.recheio
                        break;
                    case 2:
                        this.pao.selected[1] = '#c7b199'
                        this.pao.selected[2] = '#8e7e6d'
                        this.pao.selected[3] = '#c7b199'
                        this.recheio = data.recheio
                        break;
                    case 3:
                        this.pao.selected[1] = '#c7b199'
                        this.pao.selected[2] = '#c7b199'
                        this.pao.selected[3] = '#8e7e6d'
                        this.recheio = data.recheio
                        break;
                }
            },
            setAcucar(quantity, price, selected){
                this.acucar.quantity = quantity
                this.acucar.price = price   
                this.setValue()

                switch (selected) {
                    case 1:
                        this.acucar.selected[1] = '#8e7e6d'
                        this.acucar.selected[2] = '#c7b199'
                        this.acucar.selected[3] = '#c7b199'
                        this.acucar.selected[4] = '#c7b199'
                        
                        break;
                    case 2:
                        this.acucar.selected[1] = '#c7b199'
                        this.acucar.selected[2] = '#8e7e6d'
                        this.acucar.selected[3] = '#c7b199'
                        this.acucar.selected[4] = '#c7b199'
                        break;
                    case 3:
                        this.acucar.selected[1] = '#c7b199'
                        this.acucar.selected[2] = '#c7b199'
                        this.acucar.selected[3] = '#8e7e6d'
                        this.acucar.selected[4] = '#c7b199'
                        break;
                    case 4:
                        this.acucar.selected[1] = '#c7b199'
                        this.acucar.selected[2] = '#c7b199'
                        this.acucar.selected[3] = '#c7b199'
                        this.acucar.selected[4] = '#8e7e6d'
                        break;
                }
            },
            addToCart(){
                

                const payload ={
                    name: 'Frappuccino',
                    opitions: {
                        cafe: {
                            name: 'Café',
                            quantity:this.cafe.quantity,
                            unity: 'ml'                            
                        },
                        chocolate: {
                            name: 'Chocolate',
                            quantity:this.chocolate.quantity,
                            unity: 'g'                            
                        },
                        chantilly: {
                            name: 'Chantilly',
                            quantity:this.chantilly.quantity,
                            unity: 'ml'                            
                        },
                        acucar: {
                            name: 'Açúcar',
                            quantity:this.acucar.quantity,
                            unity: 'clh'                            
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
