<template>
  <div class="feedback">
    <div class="feedback_div">
      <h1 class="feedback_title">
        Ваш отзыв
      </h1>
      <textarea class="text_feedback" name="feedback" placeholder="Напишите что нибудь . . . . " id="" ></textarea>
      <div class="feedback_footer">
        <div class="give_rating">
          <div class="feedback_rating"></div>
          <div class="feedback_rating"></div>
          <div class="feedback_rating"></div>
          <div class="feedback_rating"></div>
          <div class="feedback_rating"></div>
        </div>
        <div class="send_button">
          <button>
            Отправить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback"
}
</script>

<style scoped>

/*Feedback*/

.feedback {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.feedback_div {
  width: 80%;
}
.feedback_title {
  font-weight: 700;
  font-size: 31px;
  line-height: 148.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #00202A;

}
.text_feedback {
  width: 95%;
  height: 200px;
  font-size: 28px;
  font-style: italic;
  padding: 25px 35px;
  margin-bottom: 50px;
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.16);
}
.feedback_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.give_rating {
  display: flex;
  align-items: center;
}
.give_rating .feedback_rating {
  background: url("../../assets/rating1.svg") no-repeat;
  background-size: contain;
  width: 35px;
  height: 35px;
}
.give_rating .feedback_rating:hover {
  background: url("../../assets/rating2.svg") no-repeat;
  background-size: contain;
}
.send_button button {
  background: #00AADE;
  border-radius: 22px;
  font-weight: 600;
  font-size: 24px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #FFFFFF;
  border: none;
  padding: 10px 50px;
  cursor: pointer;
}
@media screen  and (max-width: 900px) {
  /*Feedback*/
  .feedback_div {
    width: 90%;
  }
  .text_feedback {
    width: 80%;
    font-size: 20px;
    height: 200px;
  }
  .give_rating .feedback_rating {
    width: 30px;
    height: 30px;
  }
  .send_button button {
    padding: 10px 20px;
  }
}
</style>