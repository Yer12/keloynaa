<template>
  <header class="header" :style='[main ? {"background": "transparent"} : {"background": "#ffffff"}]'>
    <router-link to="/" class="logo">
      <img v-if="main" src="../../assets/Logo (1).png" alt="">
      <img v-else src="../../assets/Logo.png" alt="">
    </router-link>
    <div class="menu">
      <div @click="show = !show" class="burger_menu">
        <img v-if="show" src="../../assets/burger.svg"
             :style='[main ?
                {"filter": "invert(-1%) sepia(57%) saturate(6082%) hue-rotate(163deg) brightness(100%) contrast(101%)"} :
                 {"filter": "invert(36%) sepia(57%) saturate(6082%) hue-rotate(163deg) brightness(100%) contrast(101%)"}]'
             alt="">
        <img v-else src="../../assets/closeMenu.svg" :style='[main ?
                {"filter": "invert(-1%) sepia(57%) saturate(6082%) hue-rotate(163deg) brightness(100%) contrast(101%)"} :
                 {"filter": "invert(36%) sepia(57%) saturate(6082%) hue-rotate(163deg) brightness(100%) contrast(101%)"}]' alt="">
      </div>
      <ul v-if="!show" :style='[main ? {"background": ""} : {"background": "#ffffff"}]'>
        <div >
          <router-link :style='[main ? {"color": "#ffffff"} : {"color": "#0098C7"}]' to="/">Спорт площадки</router-link>
          <router-link :style='[main ? {"color": "#ffffff"} : {"color": "#0098C7"}]' to="/addPlayground">Добавить площадку</router-link>
          <router-link v-if=" userInfo" :style='[main ? {"color": "#ffffff"} : {"color": "#0098C7"}]' to="/profile">
            {{ userInfo.firstName === null ? 'UserName' : userInfo.firstName }}
          </router-link>

          <router-link v-else :style='[main ? {"color": "#ffffff"} : {"color": "#0098C7"}]' to="/login"> Войти  </router-link>
        </div>
      </ul>
    </div>
  </header>
</template>

<script>


export default {
  name: "Header",
  props: ['main'],
  data(){
    return {
      items: [
        {
          id: 1,
          name: 'Спорт площадки',
          path: '/'
        },
        {
          id: 2,
          name: 'Добавить площадку',
          path: '/addPlayground',
        },
        {
          id: 3,
          name: 'Войти',
          path: '/login'
        }
      ],
      show: false,
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  mounted() {
    this.main && $(function() {
      $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
          $(".header").addClass("active");
        } else {
          //remove the background property so it comes transparent again (defined in your css)
          $(".header").removeClass("active");
        }
      });
    });
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  justify-content: space-between;
}
header.active {
  background: #00AADE !important;
}
header .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 100px;

}
header .menu {
  width: 30%;
  padding-right: 100px;
}
.burger_menu {
  display: none;
}
header .menu ul div{
  justify-content: space-between;
  display: flex;
  list-style: none;
  font-weight: 600;
  font-size: 1rem;
  line-height: 30px;
  text-align: center;
}
header .menu ul a {
  cursor: pointer;
}

@media screen and (max-width: 826px) {
  header .menu ul {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 600px) {
  header {
    display: flex;
    justify-content: space-between;
  }

  header .menu {
    width: auto;
    padding-right: 40px;
  }

  header .logo {
    padding-left: 40px;
  }
  header .menu ul {
    width: 100vw;
    position: fixed;
    display: flex;
    padding: 0;
    left: 0;
    height: 100vh;
  }
  header .menu ul div{
    display: flex;
    flex-direction: column;
    height: 200px;
    margin-top: 50px;
    width: 100%;

  }

  header .menu .burger_menu {
    display: block;
  }
  .burger_menu img {
    filter: invert(-1%) sepia(57%) saturate(6082%) hue-rotate(163deg) brightness(100%) contrast(101%);
  }
}
</style>
