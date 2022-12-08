<template>
    <div class="container">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image">
            <img :style="`width:${pao.size}%;`" src="/img/lanche/ps.svg"  class="massa" alt="">
            <img :style="`z-index:120; width:${((recheio.quantity*80)/90)}%;`" src="/img/lanche/cs.svg" v-if="cheddar.quer" class="recheio2" alt="">
            <img :style="`z-index:119; width:${((recheio.quantity*80)/90)}%;`" src="/img/lanche/b.svg" v-if="bacon.quer" class="recheio2" alt="">
            <img :style="`width:${((recheio.quantity*80)/90)}%;`" src="/img/lanche/ca.svg"  class="recheio2" alt="">
            <img :style="`z-index:120; width:${((recheio.quantity*80)/90)}%;`" src="/img/lanche/ci.svg" v-if="cheddar.quer" class="recheio2" alt="">
            <img :style="`width:${pao.size}%;`" src="/img/lanche/pi.svg"  class="recheio2" alt="">
            
        </div>
        <div class="content">
            <div class="title">
                <h1>Patty melt</h1>
            </div>
            <div class="ingredients">
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
                        <van-slider @change="setValue(); unsetSize(); setRecheio();" v-model="recheio.quantity" :min="0" :step="2" :max="recheio.max"/>
                    </div>
                    <div class="ingredients_form_item">
                        <p>Bacon</p>
                        <p class="unit_Measurement" v-if="bacon.quer">{{bacon.quantity.toLocaleString('pt-br', {
                            maximumFractionDigits: 2
                        })}}<span>g</span></p>
                        <van-switch v-model="bacon.quer" active-color="#c7b199" inactive-color="#dcdee0" />
                    </div>
                    <div class="ingredients_form_item">
                        <p>Cheddar</p>
                        <p class="unit_Measurement" v-if="cheddar.quer">{{cheddar.quantity.toLocaleString('pt-br', {
                            maximumFractionDigits: 2
                        })}}<span>g</span></p>
                        <van-switch v-model="cheddar.quer" active-color="#c7b199" inactive-color="#dcdee0" />
                    </div>
                    <div class="ingredients_form_item">
                        <p>Cebola</p>
                        <p class="unit_Measurement" v-if="cebola.quer">{{cebola.quantity.toLocaleString('pt-br', {
                            maximumFractionDigits: 2
                        })}}<span>g</span></p>
                        <van-switch v-model="cebola.quer" active-color="#c7b199" inactive-color="#dcdee0" />
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
                    },
                    size: 15
                },
                recheio: {
                    quantity: 14,
                    price: 0.0348,
                    max: 20
                },
                bacon: {
                    quantity: 1.4,
                    price: 0.03,
                    max: 20,
                    quer: true
                },
                cheddar:{
                    quantity: 2.1,
                    price: 0.018,
                    max: 20,
                    quer: true
                },
                cebola: {
                    quantity: 2.8,
                    price: 0.005,
                    max: 20,
                    quer: true
                },
                p:{
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
                        price: 0.0348,
                        max: 20
                    },
                    bacon: {
                        quantity: 1.4,
                        price: 0.03,
                        max: 20,
                        quer: true
                    },
                    cheddar:{
                        quantity: 2.1,
                        price: 0.018,
                        max: 20,
                        quer: true
                    },
                    cebola: {
                        quantity: 2.8,
                        price: 0.005,
                        max: 20,
                        quer: true
                    },
                },
                m:{
                    pao: {
                        quantity: 'm',
                        price: 0.50,
                            selected:{
                                1: '#c7b199',
                                2: '#8e7e6d',
                                3: '#c7b199'
                            }
                    },
                    recheio: {
                        quantity: 24,
                        price: 0.0348,
                        max: 32
                    },
                    bacon: {
                        quantity: 1.4,
                        price: 0.03,
                        max: 20,
                        quer: true
                    },
                    cheddar:{
                        quantity: 2.1,
                        price: 0.018,
                        max: 20,
                        quer: true
                    },
                    cebola: {
                        quantity: 2.8,
                        price: 0.005,
                        max: 20,
                        quer: true
                    },
                },
                g:{
                    pao: {
                        quantity: 'g',
                        price: 1.20,
                        selected:{
                            1: '#c7b199',
                            2: '#c7b199',
                            3: '#8e7e6d'
                        }
                    },
                    recheio: {
                        quantity: 60,
                        price: 0.0348,
                        max: 90
                    },
                    bacon: {
                        quantity: 1.4,
                        price: 0.03,
                        max: 20,
                        quer: true
                    },
                    cheddar:{
                        quantity: 2.1,
                        price: 0.018,
                        max: 20,
                        quer: true
                    },
                    cebola: {
                        quantity: 2.8,
                        price: 0.005,
                        max: 20,
                        quer: true
                    },
                },
                size:{
                    1: '#8e7e6d',
                    2: '#c7b199',
                    3: '#c7b199'
                },
                newValue: 0.79
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
                const recheioValue = (this.recheio.quantity* this.recheio.price)
                const baconValue = ((this.recheio.quantity/100)*this.bacon.price)
                const cheddarValue = ((this.recheio.quantity/100)*this.cheddar.price)
                const cebolaValue = ((this.recheio.quantity/100)*this.cebola.price)

                this.newValue = recheioValue + this.pao.price + baconValue + cheddarValue + cebolaValue
            },
            setCafe(quantity, selected, data){   
                this.setValue()

                switch (selected) {
                    case 1:
                        
                        this.pao = data.pao
                        this.recheio.quantity = data.recheio.quantity
                        this.recheio.max = data.recheio.max
                        this.pao.size = 15
                        this.setRecheio()
                        break;
                    case 2:
                        this.pao = data.pao
                        this.recheio.quantity = data.recheio.quantity
                        this.recheio.max = data.recheio.max
                        this.pao.size = 32
                        this.setRecheio()
                        break;
                    case 3:
                        this.pao = data.pao
                        this.recheio.quantity = data.recheio.quantity
                        this.recheio.max = data.recheio.max
                        this.pao.size = 80
                        this.setRecheio()
                        break;
                }
                
            },
            setRecheio(){
                this.bacon.quantity = ((this.recheio.quantity / 100)*10)
                this.cheddar.quantity = ((this.recheio.quantity / 100)*15)
                this.cebola.quantity = ((this.recheio.quantity / 100) * 20)

                this.setValue()
            },
            addToCart(){
                

                if(!this.bacon.quer){
                    this.bacon.quantity = '(sem)'
                }

                if(!this.cheddar.quer){
                    this.cheddar.quantity = '(sem)'
                }

                if(!this.cebola.quer){
                    this.cebola.quantity = '(sem)'
                }

                const payload ={
                    name: 'Pattymelt',
                    opitions: {
                        pao:{
                            name: "Pão",
                            quantity: this.pao.quantity,
                            unity: ''
                        },
                        recheio: {
                            name: 'Recheio',
                            quantity:this.recheio.quantity,
                            unity: 'g'                            
                        },
                        bacon: {
                            name: 'Bacon',
                            quantity:this.bacon.quantity,
                            unity: 'g'                            
                        },
                        cheddar: {
                            name: 'Cheddar',
                            quantity:this.cheddar.quantity,
                            unity: 'g'                            
                        },
                        cebola: {
                            name: 'Cebola',
                            quantity:this.cebola.quantity,
                            unity: 'g'                            
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
