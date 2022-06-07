<template>
  <footer>
    <div class="first_row">
      <div class="logo">
        <img src="../../assets/Logo.png" alt="">
      </div>
      <div class="footer_address">
        <p>
          Наш адрес:
        </p>
        <p>
          Каскелен, Абылайхана 1/1
        </p>
      </div>
      <div class="footer_contact">
        <p>Контакты:</p>
        <p>+7 775 930 80 14</p>
      </div>
    </div>
    <div class="second_row">
      <div class="footer_playgrounds">
        <p>
          Площадки:
        </p>
        <p>Баскетбольный</p>
        <p>Баскетбольный</p>
        <p>Баскетбольный</p>
      </div>
      <div class="footer_about">О нас</div>
    </div>
    <div class="third_row">
      <div class="social">
        <div class="social_item">
          <img src="../../assets/instagram.png" alt="">
        </div>
        <div class="social_item">
          <img src="../../assets/whatsapp.png" alt="">
        </div>
        <div class="social_item">
          <img src="../../assets/telegram.png" alt="">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

/*Footer*/

footer {
  background: #00202A;
  display: flex;
  padding: 50px 100px;
  color: #fff;
}
.first_row {
  margin-right: 50px;
}

.footer_address p:first-child {
  font-weight: 600;
  font-size: 1.09rem;
  line-height: 28px;
}
.footer_address p:last-child {
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 24px;
}

.footer_contact p:first-child {
  font-weight: 600;
  font-size: 1.09rem;
  line-height: 28px;
}
.footer_contact p:last-child {
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 24px;
}

.second_row {
  margin-right: 50px;

}

.footer_playgrounds p {
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 24px;
}
.footer_playgrounds p:first-child {
  font-weight: 600;
  margin: 0;
  font-size: 1.09rem;
  line-height: 28px;
}
.footer_about {
  font-weight: 600;
  font-size: 1.09rem;
  line-height: 28px;
}

.social {
  display: flex;
}
.social_item {
  margin-right: 20px;
}
.social_item img {
  margin-top: 5px;
  width: 1.3rem !important;
  height: 1.3rem !important;
  font-size: 11px;
}


@media screen  and (max-width: 900px) {
    /*Footer*/
  footer {
    flex-direction: column;
  }
  .first_row, .second_row, .third_row {
    margin-bottom: 30px;
  }


}
</style>