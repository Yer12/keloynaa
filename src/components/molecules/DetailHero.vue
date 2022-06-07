<template>
  <div class="hero">
    <div class="heroDiv">
      <div class="hero_info">
        <div class="hero_infoDiv">
          <h1 class="hero_title">{{ name }}</h1>
          <div class="service">
            <div class="service_info">
              <img src="../../assets/placeholder 1.svg" alt="">
              <p class="service_text">{{address}}</p>
            </div>
          </div>
          <div class="service">
            <div class="service_info">
              <img src="../../assets/football-field 1.svg" alt="">
              <p class="service_text">{{ specification.roofType }} | {{ specification.cover }}</p>
            </div>
          </div>
          <div class="services">
            <div>
              <div class="service">
                <div class="service_info">
                  <img src="../../assets/parking.svg" alt="">
                  <p class="service_text">Парковка</p>
                </div>
                <div class="status">
                  <img v-if="specification.parking" src="../../assets/tick.png" alt="">
                  <img v-else src="../../assets/x.png" alt="">
                </div>
              </div>
              <div class="service">
                <div class="service_info">
                  <img src="../../assets/clothes-hanger.svg" alt="">
                  <p class="service_text">Раздевалка</p>
                </div>
                <div class="status">
                  <img v-if="specification.dressingRoom" src="../../assets/tick.png" alt="">
                  <img v-else src="../../assets/x.png" alt="">
                </div>
              </div>
              <div class="service">
                <div class="service_info">
                  <img src="../../assets/shower.svg" alt="">
                  <p class="service_text">Душ</p>
                </div>
                <div class="status">
                  <img v-if="specification.shower" src="../../assets/tick.png" alt="">
                  <img v-else src="../../assets/x.png" alt="">
                </div>
              </div>
              <div class="service">
                <div class="service_info">
                  <img src="../../assets/dumbbell.svg" alt="">
                  <p class="service_text">Инвентарь</p>
                </div>
                <div class="status">
                  <img v-if="specification.tribune" src="../../assets/tick.png" alt="">
                  <img v-else src="../../assets/x.png" alt="">
                </div>
              </div>
            </div>

          </div>
          <div class="hero_price">
            <div class="tablePrice">{{ price }} ТГ т/час</div>
          </div>
          <button class="booking_btn">
            Забронировать
          </button>
        </div>
      </div>
      <div class="hero_img">
        <img src="../../assets/5a296f63b3afc7 1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHero",
  props: ['name', 'price', 'specification', 'address'],
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.heroDiv {
  width: 80%;
  height: 90%;
  background: #fff;
  filter: drop-shadow(6px 12px 23px rgba(0, 0, 0, 0.07));
  display: flex;
  border-radius: 44px;

  @media screen and (max-width: 768px){
    filter: none;

  }
}
.hero_info, .hero_img {
  width: 50%;
}
.hero_img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/PlaygroundDetailEllipse.png") no-repeat;
  background-size: cover;
  float: left;
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
  background-position: 200px;
}
.hero_img img {
  margin-left: -120px;
  width: 120%;
  min-width: 350px;
}
.hero_info {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero_infoDiv {
  width: 60%;

  @media screen and (max-width: 768px){
    width: 80%;
  }
}
.hero_title {
  font-weight: 600;
  font-size: 30px;
  line-height: 148.7%;
  /* or 45px */
  margin: 0 0 10px;
  letter-spacing: 0.105em;
  color: #000000;
}

.services {

}
.service {
  display: flex;
}

.service_info {
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;

}
.service img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
.service .service_text {
  font-weight: 400;
  font-size: 17px;
  line-height: 149.7%;
  /* or 25px */

  letter-spacing: 0.025em;
  text-transform: capitalize;

  color: #000000;
}
.status {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
}
.hero_price {
  font-weight: 600;
  font-size: 30px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: lowercase;
  color: #00AADE;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
}
.booking_btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00AADE;
  border-radius: 22px;
  width: 273px;
  height: 60px;
  border: none;
  font-weight: 600;
  font-size: 24px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #FFFFFF;
  margin-top: 10px;

  @media screen and (max-width: 768px){
    width: 100%;
    height: 70px;
    border-radius: 50px;
  }
}

@media screen  and (max-width: 900px) {
  .hero_img {
    display: none;
  }

  .heroDiv {
    width: 100%;
    border-radius: 0;
  }

  .hero_info {
    width: 100%;
  }

}
</style>
