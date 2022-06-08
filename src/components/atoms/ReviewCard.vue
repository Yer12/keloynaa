<template>
  <div class="review_card">
    <div class="review_header">
      <div class="user_img">
        <img src="../../assets/account1.png" alt="">
      </div>
      <div class="user_name">Асемай</div>
    </div>
    <div class="review_text">
      Мне очень понравилось, все чисто и уютно. Спасибо вам!
    </div>
    <div class="review_rating">
      <div class="rating">
        <img src="../../assets/star.png" alt="">
        <img src="../../assets/star.png" alt="">
        <img src="../../assets/star.png" alt="">
        <img src="../../assets/star.png" alt="">
        <img src="../../assets/star.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard"
}
</script>

<style scoped lang="scss">
.review_card {
  background: #fff;
  margin-right: 20px;
  padding: 30px;
  width: 80%;
  border-radius: 15px;
  @media screen and (max-width: 768px){
    width: 80%;
    margin-right: 40px;
  }
}
.review_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.user_img {
  width: 70px;

  img {
    width: 100%;
  }
  @media screen and (max-width: 768px){
    width: 60px;
  }
}
.user_name {
  font-weight: 600;
  font-size: 1.4rem;

  text-align: center;
  color: #00202A;

  @media screen and (max-width: 768px){
    font-size: 16px;
  }
}
.review_text {
  text-align: center;
  font-weight: 600;
  font-size: 19px;
  color: #00202A;


  @media screen and (max-width: 768px){
    font-size: 12px;
  }
}
.review_rating {
  display: flex;
  justify-content: flex-end;
}
.rating {
  display: flex;
  align-items: center;
}

</style>