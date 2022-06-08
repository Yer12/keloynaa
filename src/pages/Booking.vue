<template>
  <div>
    <Header />
    <section class="main">
      <div class="main_container">
        <div class="playground_card">
          <h1 class="playground_card--title">Алматы арена</h1>
          <div class="playground_card--adress">
            <img src="../assets/placeholder 1.svg" alt="">
            ул. Б.Момышулы
          </div>
          <div class="playground_card--img">
            <img src="../assets/playground1.png" alt="">
          </div>
          <div class="playground_card--chosen_times">
            <div v-for="i in this.checkedTimes">
              <div class="playground_card--chosen_times--item">
                <div class="item_date">{{ i.day }} {{monthArr[i.month-1]}}, <span>сегодня</span></div>
                <div class="item_time">с {{ i.time }}:00 по {{ i.time }}:59</div>
              </div>
            </div>
          </div>
          <div class="playground_card--total">
            <p>Итого:</p>
            <p class="price">{{ this.checkedTimes.length * 3000 }} тг</p>
          </div>
        </div>
        <div class="booking">
          <h1 class="booking_title">
            Бронирование
          </h1>
          <label for="numberCard">
            <span>Номер карты</span>
            <input type="number" placeholder="0000 0000 0000 0000">
          </label>

          <label for="name">
            <span>Имя владельца</span>
            <input type="text" placeholder="ASSEMAY IMANKULOVA">
          </label>

          <div class="booking_card--info">
            <label for="cardDeadline">
              <span>Годен до</span>
              <input type="text" placeholder="08/24">
            </label>
            <label for="cvv">
              <span>CVV</span>
              <input type="number" min="0" maxlength="3" max="3" placeholder="000">
            </label>
          </div>
          <label class="save" for="save">
            <input type="checkbox" name="save" id="save">
            <span>Сохранить карту</span>
          </label>
          <router-link to="/success" class="pay">
            Оплатить
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>


import Header from "@/components/organisms/Header";
export default {
  name: "Booking",
  components: {
    Header

  },
  data() {
    return {
      checkedTimes: [
        {
          id: '171',
          time: 17,
          day: 1,
          month: 5
        },
        {
          id: '181',
          time: 18,
          day: 1,
          month: 5
        },

      ],
      monthArr: ['Январь', "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],

    }
  }
}
</script>

<style scoped lang="scss">

/*MAIN*/
.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 100%;
    padding-bottom: 50px;
    padding-top: 100px;
  }
}
.main_container {
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    width: 90%;
  }
}
.playground_card {
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 19px;
  width: 461px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

    &--title {
     font-weight: 600;
     font-size: 30px;
     line-height: 148.7%;
     margin-bottom: 10px;
     letter-spacing: 0.105em;
     color: #000000;
   }
  &--adress {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  &--img {
    width: 100%;
    height: 203px;
    border-radius: 14px;
    margin-bottom: 21px;
    img {
      width: 100%;
      border-radius: 14px;
      object-fit: cover;
      height: 100%;
    }
  }
  &--chosen_times {

    &--item {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 19px;
      line-height: 149.7%;
      letter-spacing: 0.025em;
      text-transform: lowercase;
      margin-bottom: 13px;
      span {
        color: #00AADE;
      }
    }
  }
  &--total {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 25px;
    line-height: 149.7%;
    letter-spacing: 0.025em;
    text-transform: capitalize;
    color: #00AADE;
    margin-top: 20px;
    border-top: 1px solid #D6D6D6;
  }
}
.booking {
  width: 461px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 50px;
  }

    &_title {
    font-weight: 700;
    font-size: 30px;
    line-height: 137.2%;
    color: #000000;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    input {
      background: #FFFFFF;
      border: 1px solid #D8D8D8;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 12px 66px;
      font-weight: 300;
      font-size: 25px;
      outline-color: #00AADE;
      line-height: 137.2%;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input::placeholder {
      font-weight: 300;
      font-size: 25px;
      line-height: 137.2%;
      text-align: center;
      color: #C4C4C4;
    }
    span {
      font-size: 20px;
      line-height: 137.2%;
      margin-bottom: 15px;
    }
  }
  &_card--info {
    display: flex;
    justify-content: space-between;
    label {

      width: 45%;
      input {
        width: 100%;
      }
      &:nth-child(2) {
        input {
          padding: 10px 75px;
        }
      }
    }
  }
  .save {
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      width: 30px;
      height: 30px;
    }
    span {
      margin-bottom: 0;
      margin-left: 16px;
      font-weight: 400;
      font-size: 20px;
      line-height: 149.7%;
      letter-spacing: 0.025em;
      text-transform: capitalize;
    }
  }
  .pay {
    width: 258.8px;
    padding-top: 13px;
    padding-bottom: 13px;
    font-weight: 600;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 149.7%;
    letter-spacing: 0.025em;
    text-transform: capitalize;
    color: #FAFAFA;
    margin: 0 auto;
    background: #00AADE;
    border-radius: 22px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
  }
  .pay.disabled {
    background: #C4C4C4;

  }
}


</style>
