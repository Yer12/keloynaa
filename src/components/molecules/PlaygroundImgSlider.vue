<template>
  <div class="slider_container">
    <div class="slider_div">
      <ssr-carousel class=""
                    :slides-per-page='1'
                    show-dots
                    loop
                    :gutter='20'>
      >
        <div v-for="p in images" class="slide">
          <div class="slider_item"><img :src="p" alt=""></div>
        </div>
      </ssr-carousel>
    </div>
  </div>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

export default {
  name: "PlaygroundImgSlider",
  props: ['images'],
  components: {
    SsrCarousel,
  },
  data() {
    return {
      playgroundImg: [
          1,2,3,4
      ]
    }
  }
}
</script>

<style lang="scss">

.slider_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 80px;
}
.slider_div {
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;


  .ssr-carousel-dot-icon {
    border-radius: 50px;
    border: 1px solid rgba(0,0,0,0.4);
  }
  [disabled] > .ssr-carousel-dot-icon {
    opacity: 1;
    background: rgba(0,0,0,0.4);
    cursor: default;
  }
  .ssr-carousel {
    width: 80%;
    margin-right: 0;

    @media screen and (max-width: 560px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 560px) {
    width: 90%;
  }
}

.slider_item {
  width: 100%;
  margin: 0 auto;
  height: 765px;
  border-radius: 14px;
  padding-bottom: 20px;

  @media screen and (max-width: 1200px) {
    height: 500px;
  }

  @media screen and (max-width: 900px) {
    height: 300px;
  }
  @media screen and (max-width: 560px) {
    width: 350px;
    height: 250px;
  }

}
.slider_item img {
  width: 100%;
  height: 100%;
  border-radius: 14px;
  position: relative;
}
</style>