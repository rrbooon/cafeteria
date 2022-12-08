<template>
    <div v-if="data" class="container">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image">
            <img :src="`http://localhost:1337/images/${data.imagePath}`" alt="">
        </div>
        <div class="content">
            <div class="title">
                <h1>{{data.name}}</h1>
            </div>
            <div class="description">
                <div class="descriptionSubtitle">
                    <h5>Description</h5>
                </div>
                <div class="descriptionContent">
                    <p>{{data.description}}</p>
                </div>
            </div>
            <div class="ingredients">
                <div class="ingredientsSubtitle">
                    <h5>Ingredients</h5>
                </div>
                <div class="ingredientsContent">
                    <ul>
                        <li>Café</li>
                        <li>Chocolate</li>
                        <li>Chantilly</li>
                        <li>Açúcar</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footerBar">
            <div class="price">
                <h5>Price</h5>
                <p><span>R$</span> 3,00</p>
            </div>
            <div class="btn_add">
                <van-button color="linear-gradient(225deg, #c7b199, #c7b199)" :to="`/products/frappuccino/add/${data._id}`">
                    Add Product
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
                data: null
            }
        },
        async fetch(){

            try {
                const data = await this.$axios.$get(`product/get/${this.$route.params.id}`);
                this.data = data.product;
            } catch (error) {
                
            }
        },

        fetchOnServer: false,

        methods:{
            back(){
                this.$router.back()
            }
        }

    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

    .image{
        border-radius: 30px 30px 15px 15px;
        height: 400px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        margin: 10px;
    }

    .image img{
        max-height: 100%;
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

    .ingredientsContent{
        margin-bottom: 100px;
    }

    .ingredientsContent li{
        color: black;
        font-family:courier,arial,helvetica;
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
        width: 65%;
    }

    .van-button{
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
        position: absolute;
        top: 40px;
        left: 21px;
        backdrop-filter: blur( 7px );
        color: black;
    }
</style>