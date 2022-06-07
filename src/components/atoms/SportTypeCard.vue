<template>
  <div class="sportType_card">
    <div class="sportType_card_bg ">
      <div class="sportType_card_img">
        <img :src="sport.sportTypeImg" />
        <div class="shadow"></div>
      </div>
      <p class="sportType_card_title">{{sport.sportName}}</p>
      <p class="sportType_card_price"><span>oт</span><span>{{ sport.fromPrice }} т</span></p>
      <button class="sportType_card_viewButton">
        <router-link to="/playgrounds">
          Посмотреть
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sport: {
      type: Object,
    }
  },
  name: "SportTypeCard",
}
</script>

<style scoped lang="scss">

.sportType_card {
  width: 404px;
  position: relative;
  height: 694px;
  display: flex;
  justify-content: center;
  align-items: flex-end;


  @media screen and (max-width: 768px) {
    width: 300px;
    margin-left: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 990px) and (min-width: 769px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
}
.sportType_card_bg {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  border-radius: 20px;
  color: #00202A;
  padding-bottom: 50px;
  padding-top: 220px;

  @media screen and (max-width: 768px) {
    padding-top: 150px;
    margin: 0 auto;
  }

  @media screen and (max-width: 990px) and (min-width: 769px) {
    width: 60%;
  }

}
.sportType_card_bg:hover {
  transition: 1s ease-out;
  color: #FFFFFF;
  background: #31A9CC;
}
.sportType_card_img {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 220px;
  top: 10px;
  @media screen and (max-width: 768px) {
    left: 70px;
    width: 150px;
    top: 170px;
  }
}
.sportType_card_bg:hover .sportType_card_img {
  width: 150px;
  transition: 1s ease-in;

  @media screen and (max-width: 768px) {
    width: 130px;
    left: 80px;
    top: 155px;
  }
}
.sportType_card_img img {
  width: 100%;
  z-index: 1;
}
.sportType_card_bg:hover .sportType_card_img img {
  width: 170%;
  transition: 1s ease;

  @media screen and (max-width: 768px){
    width: 150%;
  }
}
.sportType_card_img .shadow {
  width: 80%;
  margin: 0 auto;
  height: 30px;
  border-radius: 50%;
  background: rgba(99, 99, 99, 0.01);
  box-shadow: 6px 37px 12px rgba(61, 59, 59, 0.4);
}
.sportType_card_title {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 137.2%;
  text-align: center;
  width: 70%;
  margin: 0;


  @media screen and (max-width: 768px) {
  }
}
.sportType_card_price {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 137.2%;
  text-align: center;
  width: 40%;
  margin: 10px 0 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
}
.sportType_card_viewButton {
  border: 3px solid #FCD402;
  border-radius: 86px;
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 137.2%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 70%;
  height: 4rem;
  text-decoration: none !important;
  margin-top: 20px;

  a {
    color: #FCD402;

  }
}
.sportType_card_bg:hover .sportType_card_viewButton {
  transition: 1s ease;
  filter: drop-shadow(3px 5px 11px rgba(0, 0, 0, 0.15));
  background: #FCD402 !important;

  a {
    color: #FFFFFF;

  }
}

</style>