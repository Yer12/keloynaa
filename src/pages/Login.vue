<template>
  <div>
    <Header />
    <div class="container">
      <div class="login_form">
        <h1 class="login_title">Логин</h1>
        <form action="" onsubmit="return false">
          <input
              name="phone"
              id="phone"
              v-imask="mask"
              placeholder="Phone number"
              class="email"

              @accept="onAccept"
              @complete="onComplete"
          >

          <input type="password" v-model="password" placeholder="Пароль" class="password">

          <div class="errors" v-for="e in errors">
            <p>{{ e }}</p>
          </div>
          <button type="submit"
                  :disabled="!phone && !password"
                  :class="!phone && !password ?'disabled': ''"
                  @click="login"
                  class="login_btn"
          >
            Войти
          </button>
          <p class="reg_text">Еще нет аккаунта? <span><router-link to="/registration">Регистрация</router-link></span></p>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {IMaskComponent, IMaskDirective} from 'vue-imask';

import Header from "@/components/organisms/Header";
export default {
  name: "Login",
  components: {
    Header,
    'imask-input': IMaskComponent
  },
  data() {
    return {
      phone: "",
      password: "",
      errors: [],
      error: false,


      value: '',
      mask: {
        mask: '+7{000} 000 00 00',
        lazy: false
      },
    }
  },
  methods: {
    login() {

      console.log(this.$store.state.loginEr)
      console.log(this.phone, this.password)
      if(this.phone.length === 0 && this.password === 0) {
        this.errors.push("Fill the form")
      }
      else {
        if(this.password.length < 6) {
          this.errors.length === 0 && this.errors.push("Password must contain at 6 characters");
        }
        else {
          this.$store.dispatch("loginUser", { password: this.password, phone: this.phone}).then((r) => {
            console.log('res',r)
          })
          if(this.$store.state.loginEr.length !== 0) {
            this.errors.length < 1 && this.errors.push(this.$store.state.loginEr)
          }
        }
      }
    },
    onAccept (e) {
      const maskRef = e.detail;
      this.value = maskRef.value;
      console.log('accept', maskRef.value);

    },
    onComplete (e) {
      const maskRef = e.detail;
      this.phone = maskRef.unmaskedValue;
      console.log('complete', maskRef.unmaskedValue);
    },
  },
  directives: {
    imask: IMaskDirective
  }

}
</script>

<style lang="scss" scoped>
section.container {
  height: 100%;
  display: flex;
  justify-items: center;
  margin-top: 100px;

}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login_form{
  width: 400px;
  padding: 40px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
}
.login_form form {
  display: flex;
  flex-direction: column;
}
.login_title {
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #00AADE;
}
input {
  padding: 20px 26px;
  margin-bottom: 20px;
  background: #FFFFFF;
  border: 1px solid #D6D6D6;
  box-sizing: border-box;
  border-radius: 11px;
  font-size: 20px;
  outline-color: #00AADE;
}
input::placeholder {
  font-weight: 400;
  font-size: 20px;
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
.reg_text {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #8E8D8D;
  text-align: center;
}
.reg_text span a{
  text-decoration: none;
  color: #00AADE;
}
.login_btn {
  margin: 0 auto;
  background: #00AADE;
  cursor: pointer;
  border-radius: 22px;
  border: none;
  outline: none;
  width: 214px;
  padding: 10px 80px;
  font-weight: 400;
  font-size: 18px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #FAFAFA;
}
.login_btn.disabled {
  background-color: #7C7C7C;
}

.errors {
  color: #EB0000;
}

@media screen and (max-width: 600px) {
  .login_form {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
  .login_form form {
    width: 90%;
  }
}
</style>
