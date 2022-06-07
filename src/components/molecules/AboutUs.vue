<template>
  <section class="aboutUs">
    <div class="about_img">
      <img src="../../assets/aboutusImg.png" alt="">
    </div>
    <div class="about_text">
      <div class="about_title">
        <div class="about_title_circle"></div>
        <h1>О нас</h1>
      </div>
      <div class="about_info">
        <span>Keloyna.kz</span> - это удобный интернет-сервис для желающих заниматься спортом. Мы стремимся обеспечить каждого, кто ценит своё время и комфорт, простым и быстрым доступом к спортивным занятиям.
      </div>
      <div class="about_info">
        <span>Keloyna.kz</span> объединил спортивные секции и площадки крупнейших городов Казахстана. Выбирайте любой спорт из множества существующих, и будь то футбол, хоккей или танцы, положите начало тренировкам в один клик.
        В мире ещё столько всего, что вы хотели бы попробовать. Начинайте.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped lang="scss">
/*About us*/

.aboutUs {
  background: #00202A;
  padding-top: 30px;
  display: flex;

  @media screen and (max-width: 768px) {
  }
}
.about_img {
  width: 50%;

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.about_img img {
  width: 60%;
}
.about_text {
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 60px;
  }
}
.about_title {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
}
.about_title_circle {
  width: 16px;
  height: 16px;
  margin-right: 15px;
  background: #FCD402;
  border-radius: 50%;
}
.about_title h1 {
  font-weight: 600;
  font-size: 60px;
  margin: 0;
  letter-spacing: 0.025em;
  /* text-transform: uppercase; */
  color: #FFFFFF;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
}
.about_info {
  margin-top: 50px;
  margin-bottom: 80px;
  text-align: right;
  font-weight: 600;
  font-size: 20px;
  width: 75%;
  color: #fff;
  line-height: 148.7%;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 80%;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 50px;
  }
}
.about_info span {
  color: #FEED43;
}

</style>
