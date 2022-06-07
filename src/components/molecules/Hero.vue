<template>
  <section class="hero">
    <div class="hero_text">
      <div class="hero_text_div">
        <h1 class="hero_title">Аренда <span class=""><img src="../../assets/hero_circle.png" alt=""></span><br> площадок</h1>
        <p class="hero_subtitle">Занимайтесь спортом вместе с нами</p>
        <button class="hero_button">Забронировать</button>
      </div>
    </div>
    <div class="hero_img">
      <img src="../../assets/hero img.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped lang="scss">

.hero {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-size: 50%;
  background: linear-gradient(172.78deg, #0D87AC 8.97%, rgba(60, 173, 207, 0.83) 56.03%, rgba(69, 178, 213, 0.29) 84.97%);
}
.hero_text {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  text-align: left;
  height: 90vh;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

}
.hero_text_div {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: self-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
}
h1 {
  margin: 0;
  padding: 0;
}
.hero_text .hero_title {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  padding: 0;
  font-weight: 900;
  font-size: 70px;
  letter-spacing: 0.100em;
  color: #fff !important;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
  }
}
.hero_text .hero_title span.hero_circle {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #FBEE07;
}
.hero_text .hero_subtitle {
  font-weight: 600;
  font-size: 25px;
  color: #fff !important;
  line-height: 117.2%;
  letter-spacing: 0.155em;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
}
.hero_text .hero_button {
  filter: drop-shadow(5px 9px 12px rgba(115, 146, 168, 0.45));
  padding: 1.7vw 3.5vw;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  margin-top: 30px;
  line-height: 117.2%;
  border: none;
  background: #ffffff;
  border-radius: 99px;
  letter-spacing: 0.155em;
  color: #0098C7;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 70px;
  }
}
.hero_img {
  padding-top: 75px;
  width: 60%;
  /*height: 90vh;*/
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
}
.hero_img img {
  width: 50%;
  padding-right: -10%;
}


</style>
