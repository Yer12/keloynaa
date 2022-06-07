<template>
  <div>
    <Header />
    <div class="container">
      <div class="login_form">
        <h1 class="login_title">Регистрация</h1>
        <input placeholder="fName" v-model="user.firstName" type="text" class="name">
        <input placeholder="lName" v-model="user.lastName" type="text" class="name">
        <input placeholder="Эл.почта" v-model="user.email" type="text" class="email">
        <input
            name="phone"
            id="phone"
            v-imask="mask"
            placeholder="Phone number"
            class="email"

            @accept="onAccept"
            @complete="onComplete"
        >
        <input type="password" v-model="user.password" placeholder="Придумайте пароль" class="password">
        <input type="password" v-model="user.password2" placeholder="Повторите пароль" class="password">

        <button  @click="register" type="submit" class="reg_btn">Зарегистрироваться</button>
        <p class="log_text">Уже есть аккаунт? <span><router-link to="/login">Вход</router-link></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/pages/Login";

export default {
  name: "Registration",
  components: {
    Header,
    'imask-input': IMaskComponent

  },
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
        phone: ""
      },
      error: false,
      fromFilled: false,
      errors: [],


      value: '',
      mask: {
        mask: '+7{000} 000 00 00',
        lazy: false
      },
    }
  },
  methods: {
    register() {

      this.$store.dispatch("registerUser", {phone: this.user.phone, password: this.user.password});

    },
    onAccept(e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      console.log('accept', maskRef.value);
    },
    onComplete(e) {
      const maskRef = e.detail;
      this.user.phone = maskRef.unmaskedValue;
      console.log('complete', maskRef.unmaskedValue);
    },
  },

  directives: {
    imask: IMaskDirective
  }
}

import {IMaskComponent, IMaskDirective} from 'vue-imask';
import Header from "@/components/organisms/Header";
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login_form {
  width: 400px;
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
}
.login_title {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #00AADE;
}
input {
  padding: 14px 26px;
  margin-bottom: 20px;
  background: #FFFFFF;
  border: 1px solid #D6D6D6;
  box-sizing: border-box;
  border-radius: 11px;
  outline: none;
}
input::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #D6D6D6;
}
.email {
}
.forget_password {
  font-weight: 400;
  font-size: 15px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  cursor: pointer;
  margin-bottom: 20px;
  color: #00AADE;

  text-align: right;
}
.log_text {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #8E8D8D;
  text-align: center;
}
.log_text span a{
  text-decoration: none;
  color: #00AADE;
}
.reg_btn {
  margin: 0 auto;
  background: #C4C4C4;
  border-radius: 22px;
  border: none;
  outline: none;

  padding: 10px 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #FAFAFA;
}

@media screen and (max-width: 600px) {
  .login_form {
    width: 70%;
  }
}
</style>
