<template>
    <div class="conatiner_form">
        <van-form>
            <van-field v-model="email" name="Email" label="E-mail"  placeholder="Enter with your best e-mail."/>
            <van-button block type="info" native-type="submit" :to="`signup/${this.email}`">
                Continue
            </van-button>
        </van-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

.conatiner_form .van-form .van-cell{
    width: 100%;
    border-radius: 5px;
} 

.conatiner_form .van-form .van-button{
    margin-top: 16px;
    border-radius: 8px;
    background-image: linear-gradient(225deg,#016640, #002215);
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
}
.conatiner_form .van-form .van-button--info{
    border: none;
}
    

</style>