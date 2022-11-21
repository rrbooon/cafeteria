<template>
    <div v-if="data" class="container">
        <div class="back_button" @click="back">
            <van-icon name="arrow-left" />
        </div>
        <div class="image">
            <!-- <img :src="`http://localhost:1337/images/${data.imagePath}`" alt=""> -->
            <model-gltf
                :backgroundAlpha="0"
                src="/models/scene.gltf"
                :scale="{
                    x:(500+ (value[0]*3)),
                    y:500,
                    z:500    
                }"
            />
        </div>
        <div class="content">
            <div class="title">
                <h1>{{data.name}}</h1>
            </div>
            <div class="ingredients">
                <div class="ingredientsSubtitle">
                    <h5>Ingredients</h5>
                </div>
                <div class="ingredients_form">
                    <div v-for="(item, index) in data.opitions" class="ingredients_form_item">
                        <p>{{item[1]}}</p>
                        <p class="unit_Measurement">{{value[index]}}<span>{{item[3]}}</span></p>
                        <van-slider @change="setValue()" v-model="value[index]" :step="parseInt(item[5])" />
                    </div>
                </div>
            </div>
        </div>
        <div class="footerBar">
            <div class="price">
                <h5>Price</h5>
                <p v-if="newValue"><span>R$</span> {{newValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
                <p v-else><span>R$</span> {{data.basePrice.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</p>
            </div>
            <div class="btn_add">
                <van-button color="linear-gradient(225deg, #1C7C54, #28512b)">
                    Add Product
                </van-button>
            </div>
        </div>
    </div>
</template>
<script>
    import { ModelCollada, ModelGltf } from 'vue-3d-model';
    export default {
        name: '',
        layout: 'products',
        data(){
            return{
                data: null,
                value: [],
                newValue: null
            }
        },
        components:{
            ModelCollada,
            ModelGltf
        },
        async fetch(){

            try {
                const data = await this.$axios.$get(`http://localhost:1337/product/get/${this.$route.params.idd}`);
                this.data = data.product;

                for (let index = 0; index < this.data.opitions.length; index++) {
                    this.value[index] = parseInt(this.data.opitions[index][4]); 
                }
            } catch (error) {
                
            }
        },

        fetchOnServer: false,

        methods:{
            back(){
                this.$router.back()
            },
            setInitialValues(index, value){
                this.value[index] = parseInt(value);
            },
            setValue(){
                this.newValue = 0;
                for (let index = 0; index < this.data.opitions.length; index++) {
                    this.newValue += (this.value[index] * this.data.opitions[index][2]); 
                    
                }
                
                console.log(this.newValue);
            },
        },
        
    }
</script>
<style>
body{
    background-color: #232026;
}
.van-slider__bar{
        background-image: linear-gradient(to right,#1C7C54, #002215);
    }
</style>
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
        color: white;
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
        color: white;
    }

    .description .descriptionSubtitle h5, .ingredients .ingredientsSubtitle h5{
        margin: 0px 0px 5px 0px;
        color: grey;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }

    .description .descriptionContent p{
        color: whitesmoke;
        font-family:courier,arial,helvetica;
    }

    .ingredients_form{
        margin-bottom: 100px;
    }

    .ingredients_form .ingredients_form_item p{
        color: whitesmoke;
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
        color: #1C7C54;
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
        color: white;
    }

    .unit_Measurement{
        margin: 5px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
    }

    
</style>