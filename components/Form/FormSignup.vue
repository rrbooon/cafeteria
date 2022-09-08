<template>
    <div class="conatiner_form">
        <div class="subtitle">
          <p>
            Looks like you don't have an account . Let's create a new account for <span>{{this.$route.params.email}}</span>
          </p>
        </div>
        <van-form @submit="onSubmit">
            <van-field 
              v-model="email" 
              name="Email" 
              label="E-mail" 
              placeholder="E-mail"
              :rules="[{ required: true, message: 'E-mail is required' }]"
            />
            <van-field
              v-model="username"
              name="Username"
              label="Username"
              placeholder="Username"
              :rules="[{ required: true, message: 'Username is required' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="Password"
              label="Password"
              placeholder="Password"
              :rules="[{ required: true, message: 'Password is required' }]"
            />
            <div class="terms">
              <p>
                By clicking here, I state that I have read and understood the <span class="show_terms" @click="showTerms">terms and conditions</span>.
                <van-checkbox v-model="checked" icon-size="15px" checked-color="#016640" shape="square"/>
              </p>
            </div>
            <van-button block type="info" native-type="submit" to="../home">
                Sing-up
            </van-button>
        </van-form>
        <ModalTerms :show2="show2"/>
    </div>
</template>
<script>
import ModalTerms from '../../components/Modal/ModalTerms.vue'

export default {
  data() {
    return {
      checked: false,
      email: this.$route.params.email,
      username: '',
      password: '',
      show2: false,
    };
  },
  components:{
    ModalTerms
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    showTerms(){
      this.show2 = !this.show2;
      this.show2 = true;
      
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

.conatiner_form .van-form .van-cell{
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
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
  
.terms p{
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 15px;
  width: 90%;
  margin: 5%;
}

.subtitle p{
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 15%;
}

.subtitle p span, .show_terms{
  color: #05b170;
}

.terms .van-checkbox{
  margin-left: 10px;
  display: inline-block;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black !important;
    color: black;
}

</style>