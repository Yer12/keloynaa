<template>
  <section class="sportType">
    <div class="sportType_list sportType_list--desktop">
      <div v-for="sport in sportTypes">
        <SportTypeCard :sport="sport" />
      </div>
    </div>
    <ssr-carousel show-dots loop :slides-per-page='1' :gutter='0' :autoplay-delay='3' class="sportType_list--mobile">
      <div v-for="sport in sportTypes" class="slide">
        <SportTypeCard :sport="sport" />
      </div>
    </ssr-carousel>
  </section>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

import SportTypeCard from "@/components/atoms/SportTypeCard";

export default {
  name: "SportTypes",
  components: {
    SportTypeCard,
    SsrCarousel,
  },
  data() {
    return {
      sportTypes: [
        {
          id: 1,
          sportTypeImg: require("../../assets/volleyball.png"),
          sportName: "Волейбольные \n площадки",
          fromPrice: 3500,
        },
        {
          id: 2,
          sportTypeImg: require("../../assets/basketball.png"),
          sportName: "Баскетбольные \n площадки",
          fromPrice: 3500,
        },
        {
          id: 3,
          sportTypeImg: require("../../assets/football.png"),
          sportName: "Футбольные \n площадки",
          fromPrice: 3500,
        },
      ]
    }
  }
}
</script>

<style lang="scss" >
.sportType_list--mobile {
  .ssr-carousel-mask{
    width: 370px;

    @media screen and (max-width: 370px){
      width: 340px;
    }
  }
  .ssr-carousel-dot-icon {
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.4);
  }
  [disabled] > .ssr-carousel-dot-icon {
    opacity: 1;
    background: rgba(0,0,0,0.4);
    cursor: default;
  }
}


/*Sport Types List*/
.sportType {
  margin-top: 150px;
  height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 990px) and (min-width: 769px) {
    height: 100%;
  }
}
.sportType_list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
}
.sportType_list--mobile {
  display: none;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
}
.sportType_list--desktop {
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 990px) and (min-width: 769px) {
    flex-direction: column;
  }
}
.slide {
  @media screen and (max-width: 990px) and (min-width: 769px) {
    margin: 0 auto;
  }
}
</style>