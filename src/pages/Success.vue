<template>
  <div>
    <Header />
    <div class="container">
      <div class="success">
        <img src="../assets/success.svg" alt="">
        <p class="msg">Оплата прошла успешно</p>
        <router-link to="/">Главная страница</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
export default {
  name: "Success",
  components: {Header}
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
.msg {
  font-size: 40px;
  font-weight: bold;
}
a {
  width: 300px;
  padding: 20px 70px;
  height: 70px;
  border-radius: 50px;
  border: none;
  background: #00AADE;
  font-size: 22px;
  color: #FFFFFF;
}
</style>
