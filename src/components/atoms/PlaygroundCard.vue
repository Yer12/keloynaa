<template>
  <div class="playground_card">
    <div class="playground_img">
      <img src="../../assets/playground1.png" alt="">
    </div>
    <p class="playground_name">{{ playground.playgroundName.length >= 15 ? playground.playgroundName.substr(0,15)+"..." : playground.playgroundName }}</p>
    <p class="playground_address">{{ playground.playgroundAddress.length >= 15 ? playground.playgroundAddress.substr(0,15)+"..." : playground.playgroundAddress }}</p>
    <p class="playground_price">{{ playground.price }} т/час</p>
    <router-link :to="{ path: '/playground/' + playground.playgroundId }" class="playground_card_button">
      ЗАБРОНИРОВАЬ СЕЙЧАС
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PlaygroundCard",
  props: ["playground"]
}
</script>

<style scoped lang="scss">
.playground_card {
  padding: 30px 25px;
  cursor: pointer;
  margin-bottom: 60px;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 262px;
}
.playground_card .playground_img {
  width: 250px;
  height: 174px;
}
.playground_img img {
  width: 100%;
}
.playground_name {
  font-weight: 600;
  font-size: 15px;
  text-overflow: ellipsis;
  text-align: center;
  letter-spacing: 0.165em;
  color: #000000;
  margin-bottom: 0;
  margin-top: 30px;
}
.playground_address {
  font-weight: normal;
  font-size: 14px;
  line-height: 148.7%;
  letter-spacing: 0.215em;
  color: #626262;
  margin-top: 1px !important;
  margin-bottom: 7px !important;
}
.playground_price {
  margin-top: 0px;
  font-weight: 600;
  font-size: 15px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: lowercase;
  color: #000000;
}
.playground_card_button {
  text-decoration: none;
  border: 2px solid #00AADE;
  box-sizing: border-box;
  border-radius: 50px;
  background: #fff;
  font-weight: bolder;
  font-size: 12px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #00AADE;
  padding: 20px 30px;
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
}
.playground_card:hover .playground_card_button {
  background: #00AADE;
  color: #fff;
  transition: 1s;
}
</style>
