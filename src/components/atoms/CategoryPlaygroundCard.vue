<template>
  <div v-if="playground" class="playground_card">
<!--    {{JSON.stringify(playground.specification.roofType)}}-->
    <div class="playground_card_photo">
      <img :src={playground} alt="">
    </div>
    <div class="playground_card_info">
      <div class="playground_card_info_title">
        <h2>{{playground.playgroundName}}</h2>
      </div>
      <div class="playground_card_info_subtitle">
        <img src="../../assets/placeholder1.png" alt="">
        <p>{{playground.playgroundAddress}}</p>
      </div>
      <div v-if="playground.specification" class="playground_card_info_subtitle2">
        <img src="../../assets/football-field 1.png" alt="">
        <p class="playground_type" v-if="playground.specification.roofType">{{ playground.specification.roofType }}</p>
        <hr class="seperator">
        <p class="playground_info" v-if="playground.specification.cover">{{ playground.specification.cover }}</p>
      </div>
      <div class="playground_card_info_subtitle">
        <img src="../../assets/star.png" alt="">
        <p>{{  }}
          <slot class="review-number">({{ 5 }}к отзывов)</slot>
        </p>
      </div>
      <div class="playground_card_price">
        <p>{{ playground.price }} т <slot class="price-info">/час</slot> </p>
      </div>
      <div class="playground_more_info">
        <router-link :to="{ path: '/playground/' + playground.playgroundId }"><h2>Подробнее</h2></router-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CategoryPlaygroundCard",
  props: ["playground"],
}
</script>

<style scoped lang="scss">
.playground_card {
  width: 100%;
  height: 225px;
  background: #fff;
  border-radius: 30px;
  margin-bottom: 30px;
  padding-left: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(5px 4px 11px rgba(0, 0, 0, 0.08));

  @media screen and (max-width: 990px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 50px;
    padding-left: 0;
  }

  @media screen and (max-width: 990px) {

  }

}
.playground_card_photo{
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:20px;
  /*background-image: url('../../assets/playground1.png');*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
  /*background-size: cover;*/

  @media screen and (max-width: 990px) {
    width: 80%;
    margin: 0 auto;
  }

}
.playground_card_photo img {
  width: 100%;
  border-radius:30px;
  height: 100%;
}
.playground_card_info{
  /* border: 1px solid black; */
  width: 70%;
  margin-left: 20px;
  height: 100%;

  @media screen and (max-width: 990px) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 590px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
.playground_card_info_title{
  width: 100%;
  margin-left: 10px;

  @media screen and (max-width: 990px) {
    width: 100%;
    text-align: center;
  }
}
.playground_card_info_title h2{
  font-size: 18px;

  @media screen and (max-width: 1150px){
    font-size: 18px !important;
  }
}
.playground_card_info_subtitle, .playground_card_info_subtitle2{
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: center;

  @media screen and (max-width: 990px) {
    width: 100%;
  }
}
/* .playground_card_info_subtitle2{
    border: 1px solid;
} */
.playground_card_info_subtitle img{
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.playground_card_info_subtitle2 img{
  width: 12px;
  height: 16px;
  margin-left: 12px;
}
.playground_card_info_subtitle p{
  margin-left: 10px;
  font-size: 14px;
}
.playground_card_info_subtitle2 .playground_type{
  margin-left: 10px;
  font-size: 14px;
}
.playground_card_info_subtitle2 .playground_info{
  /* margin-left: 10px; */
  font-size: 14px;
}
.seperator{
  width: 17px;
  transform: rotate(-90deg);
  color: #D6D6D6;
}
.review-number{
  font-size: 12px;
  color: #D6D6D6;
}
.playground_card_price{
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.playground_more_info{
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.playground_card_price p{
  font-size: 22px;
  color: #00AADE;
}
.price-info{
  color: #D6D6D6;
}
.playground_more_info a{
  margin-left: 10px;
  background: #00AADE;
  border: 1px solid #00AADE ;
  width: 142px;
  height: 36px;
  border-radius: 20px ;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 990px) {
    margin-top: 40px;
    margin-left: 0;
    width: 100%;
  }

}
.playground_more_info h2{
  font-size: 15px;
  color: #FAFAFA;
}
@media screen and (max-width: 600px) {

}
@media screen and (min-width: 600px) and (max-width: 900px) {

}
</style>
