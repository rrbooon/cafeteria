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
                    <van-button round :color="size[1]" size="normal" @click="setSize(p, 1)" type="primary">P</van-button>
                    <van-button round :color="size[2]" size="normal" @click="setSize(m, 2)" type="primary">M</van-button>
                    <van-button round :color="size[3]" size="normal" @click="setSize(g, 3)" type="primary">G</van-button>
                </div>
                <div class="ingredients_form">
                    <div class="ingredients_form_item">
                        <p>Café</p>
                        <p class="unit_Measurement">{{cafe.quantity}}<span>ml</span></p>
                        <div class="default_options">
                            <van-button round :color="cafe.selected[1]" size="normal" @click="setCafe(150, 0.75, 1)" type="primary">P</van-button>
                            <van-button round :color="cafe.selected[2]" size="normal" @click="setCafe(300, 1.50, 2)" type="primary">M</van-button>
                            <van-button round :color="cafe.selected[3]" size="normal" @click="setCafe(500, 2, 3)" type="primary">G</van-button>
                        </div>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Chocolate</p>
                        <p class="unit_Measurement">{{chocolate.quantity}}<span>g</span></p>
                        <van-slider @change="setValue(); unsetSize();" v-model="chocolate.quantity" :min="0" :max="90"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Chantilly</p>
                        <p class="unit_Measurement">{{chantilly.quantity}}<span>ml</span></p>
                        <van-slider @change="setValue();  unsetSize();" v-model="chantilly.quantity" :min="0" :max="82"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Açúcar</p>
                        <p class="unit_Measurement">{{acucar.quantity}}<span> colheres de chá</span></p>
                        <div class="default_options">
                            <van-button round :color="acucar.selected[1]" size="normal" @click="setAcucar(1, 0.02, 1)" type="primary">1</van-button>
                            <van-button round :color="acucar.selected[2]" size="normal" @click="setAcucar(2, 0.04, 2)" type="primary">2</van-button>
                            <van-button round :color="acucar.selected[3]" size="normal" @click="setAcucar(3, 0.06, 3)" type="primary">3</van-button>
                            <van-button round :color="acucar.selected[4]" size="normal" @click="setAcucar(4, 0.08, 4)" type="primary">4</van-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBar">
            <div class="price">
                <h5>Price</h5>
                <p translate="no"><span translate="no">R$</span> {{newValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
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
                cafe: {
                    quantity: 150,
                    price: 0.75,
                    selected:{
                        1: '#8e7e6d',
                        2: '#c7b199',
                        3: '#c7b199'
                    }
                },
                chocolate: {
                    quantity: 32,
                    price: 0.0505
                },
                chantilly:{
                    quantity: 25,
                    price: 0.025
                },
                acucar: {
                    quantity: 1,
                    price: 0.02,
                    selected:{
                        1: '#8e7e6d',
                        2: '#c7b199',
                        3: '#c7b199',
                        4: '#c7b199'
                    }
                },
                p:{
                    cafe: {
                        quantity: 150,
                        price: 0.75,
                        selected:{
                            1: '#8e7e6d',
                            2: '#c7b199',
                            3: '#c7b199'
                        }
                    },
                    chocolate: {
                        quantity: 32,
                        price: 0.0505
                    },
                    chantilly:{
                        quantity: 25,
                        price: 0.025
                    },
                    acucar: {
                        quantity: 1,
                        price: 0.02,
                        selected:{
                            1: '#8e7e6d',
                            2: '#c7b199',
                            3: '#c7b199',
                            4: '#c7b199'
                        }
                    }
                },
                m:{
                    cafe: {
                        quantity: 300,
                        price: 1.50,
                        selected:{
                            1: '#c7b199',
                            2: '#8e7e6d',
                            3: '#c7b199'
                        }
                    },
                    chocolate: {
                        quantity: 50,
                        price: 0.0505
                    },
                    chantilly:{
                        quantity: 33,
                        price: 0.025
                    },
                    acucar: {
                        quantity: 2,
                        price: 0.04,
                        selected:{
                            1: '#c7b199',
                            2: '#8e7e6d',
                            3: '#c7b199',
                            4: '#c7b199'
                        }
                    }
                },
                g:{
                    cafe: {
                        quantity: 500,
                        price: 2,
                        selected:{
                            1: '#c7b199',
                            2: '#c7b199',
                            3: '#8e7e6d'
                        }
                    },
                    chocolate: {
                        quantity: 66,
                        price: 0.0505
                    },
                    chantilly:{
                        quantity: 67,
                        price: 0.025
                    },
                    acucar: {
                        quantity: 4,
                        price: 0.08,
                        selected:{
                            1: '#c7b199',
                            2: '#c7b199',
                            3: '#c7b199',
                            4: '#8e7e6d'
                        }
                    }
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
                const cafePrice = this.cafe.price
                const chocolatePrice = (this.chocolate.quantity * this.chocolate.price)
                const chantillyPrice = (this.chantilly.quantity * this.chantilly.price)
                const acucarPrice = this.acucar.price

                this.newValue = cafePrice + chocolatePrice + chantillyPrice + acucarPrice
            },
            setCafe(quantity, price, selected){
                this.cafe.quantity = quantity
                this.cafe.price = price   
                this.setValue()

                switch (selected) {
                    case 1:
                        this.cafe.selected[1] = '#8e7e6d'
                        this.cafe.selected[2] = '#c7b199'
                        this.cafe.selected[3] = '#c7b199'
                        
                        break;
                    case 2:
                        this.cafe.selected[1] = '#c7b199'
                        this.cafe.selected[2] = '#8e7e6d'
                        this.cafe.selected[3] = '#c7b199'
                        break;
                    case 3:
                        this.cafe.selected[1] = '#c7b199'
                        this.cafe.selected[2] = '#c7b199'
                        this.cafe.selected[3] = '#8e7e6d'
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
                            unity: ''                            
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
