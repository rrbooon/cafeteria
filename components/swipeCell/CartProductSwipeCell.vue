<template>
    <van-swipe-cell :before-close="beforeClose">
        <van-card v-if="data"
            currency="R$ "
            :price="data.finalValue.toLocaleString('pt-br', {minimumFractionDigits: 2})"
            :desc="data.data.description"
            :title="data.data.name"
            class="goods-card"
            :thumb="`https://backendcafeteriaca.herokuapp.com/${data.data.imagePath}`"
        />
        <template #right>
            <van-button square type="danger" text="Delete" />
        </template>
    </van-swipe-cell>
</template>
<script>
import { Dialog } from 'vant';
export default {
    props:{
        data: Object,
        id: String
    },
    methods: {
        beforeClose({ position, instance }) {
            switch (position) {
                case 'left':
                case 'cell':
                case 'outside':
                instance.close();
                break;
                case 'right':
                Dialog.confirm({
                    message: 'Are you sure to delete?',
                    confirmButtonText: 'Confirm',
                    cancelButtonText: 'Cancel'	
                }).then(() => {
                    this.$store.dispatch('cart/removeProduct', this.id);
                    instance.close();
                })
                .catch(() => {
                    instance.close();
                });   
                break;
            }
        },
    },
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

    .goods-card {
        margin: 0;
        background-image: linear-gradient(225deg, #1C7C54, #002215);
        margin-bottom: 10px;
        border-radius:  5px 0px 0px 5px;
        color: white;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
    }

    .delete-button {
        height: 100%;
    }
    
    .van-button{
        height: 100%;
        border-radius: 0px 5px 5px 0px;
    }

    .van-swipe-cell{
        width: 90%;
    }

    .van-card__price{
        color: white;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
    }

    
</style>