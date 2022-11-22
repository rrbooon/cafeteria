<template>
  <div class="container hover"
    :style="{'background-image': 'linear-gradient('+gradientAngle+','+color1+','+color2+')'}"
    v-if="visible"
  >
    <div class="image">
        <img :src="`https://backendcafeteriaca.herokuapp.com/images/${imagePath}`" alt="">
    </div>
    <div class="caption">
        <h2>{{title}}</h2>
        <h3>{{subtitle}}</h3>
    </div>
    <div class="price">
        <span>R${{price.toLocaleString('pt-br', {minimumFractionDigits: 2})}}</span>
        <NuxtLink style="text-decoration: none; color: inherit;" :to="`/products/${item}/add/${id}`"> 
            <van-icon name="add-o" class="hover" size="30"/>
        </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            visible: true
        }
    },
    watch:{
        search(newValue, oldValue){
            const filter = newValue.toUpperCase()
            const txtValue = this.title;
            if (txtValue.toUpperCase().includes(filter)) {
                this.visible = true
            } else {
                this.visible = false
            }
        }
    },
    props:{
        id: String,
        item: String,
        imagePath: String,
        title: String,
        subtitle: String,
        price: Number,
        search: String,

        color1: String,
        color2: String,
        gradientAngle: String
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

.container{
    width: 150px;
    height: 210px;
    /* background-color: #322d35; */
    /* background-image: linear-gradient(225deg,#016640, #002215); */
    border-radius: 10px;
    display: flex;
    padding: 10px;
    flex-direction: column;
}

.hover:hover{
    color:white;
}

.image{
    width: 100%;
    text-align: center;
}

img{
    max-width: 100%;
    border-radius: 5px;
    height: 84px;
}

.caption{
    margin-top: 5px;
    color: white;
}

.caption h2, .caption h3{
    margin: 0;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.caption h2{
    font-size: 20px;
}

.caption h3{
    font-size: 15px;
    color: grey;
}

.price{
    margin-top: 20px;
    color: #312b25;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price span{
    color: white;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 15px;
}
</style>