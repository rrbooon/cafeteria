<template>
    <div class="container">
        <van-badge v-if="cart" :content="Object.keys(cart).length">
            <van-icon name="shopping-cart" size="30" @click="showPopup()"/>
            <van-action-sheet v-model="show" title="Cart" style="background-color: #232026; color:white; height: 70%;">
                <div class="content">
                    <CartProductSwipeCell  v-for="(item, index) in cart" :key="index" :data="item" :id="index"/>
                    <div class="footerBar">
                        <div class="price">
                            <h5>Price</h5>
                            <p v-if="finalValue" translate="no"><span translate="no">R$</span>{{finalValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
                            <p v-else translate="no"><span translate="no">R$</span> 0,00</p>
                        </div>
                        <div class="btn_add">
                            <van-button color="linear-gradient(225deg, rgb(32 223 143), rgb(0 0 0))" @click="closeOrder">
                                Close Order
                            </van-button>
                        </div>
                    </div>
                </div>
            </van-action-sheet>
        </van-badge>
   </div>
</template>
<script>
    import CartProductSwipeCell from '../swipeCell/CartProductSwipeCell.vue'
    import { mapState } from 'vuex'
    
    export default {
        name:'HeaderCart',
        data() {
            return {
                show: false,
                newValue: null
            };
        },
        components:{
            CartProductSwipeCell
        },
        methods: {
            showPopup() {
                this.show = true;
            },
            async closeOrder(){

                if (this.finalValue) {
                    const data = await this.$axios.$get(`https://backendcafeteriaca.herokuapp.com/product/pay/${this.finalValue}`)
                    window.location.href = data.link;
                }
                
                
            }
        },
        computed:{
            ...mapState({
                cart: state => state.cart.cart,
                finalValue: state => state.cart.finalValue
            })
        },
    }
</script>
<style scoped>


    .content{
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .footerBar{
        overflow: hidden;
        color: white;
        position: fixed;
        bottom: 30px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        backdrop-filter: blur( 20px );

    }

    .footerBar .price h5{
        margin: 0px 0px 5px 0px;
        color: grey;
        line-height: 5px;
        
    }

    .footerBar .price p{
        margin: 0px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }
    
    .footerBar .price p span{
        color: white;
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

    .van-button{
        width: 100%;
        border-radius: 10px;
        height: 50px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
    }
</style>
