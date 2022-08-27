<template>
    <div class="content">
        <van-icon name="shopping-cart" size="30" @click="showPopup()"/>
        <van-popup
            v-model="show"
            round="round"
            position="bottom"
            :style="{ height: '30%' }" /> 
   </div>
</template>
<script>
    export default {
        name:'HeaderCart',
        data() {
            return {show: false};
        },

        methods: {
            showPopup() {
                this.show = true;
            }
        }
    }
</script>
<style scoped>


.content{
    color: white;
}

</style>