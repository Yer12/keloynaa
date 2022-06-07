<template>
  <section class="reviews">
    <div class="reviews_div">
      <div class="reviews_title">
        <div class="reviews_title_circle"></div>
        <h1>Отзывы</h1>
      </div>
      <div class="review_list">
        <ssr-carousel   :slides-per-page='2'
                        paginate-by-slide
                        loop
                        peekRight='10%'
                        feather
                        show-dots
                        show-arrows
                        :autoplay-delay='3'
                        :responsive='[
    {
      maxWidth: 767,
      gutter: 10,
      peekRight: 20,
      slidesPerPage: 1.2,
      showArrows: false
    }
  ]'>
          <div v-for="r in reviews" class="slide">
            <ReviewCard />
          </div>
        </ssr-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

import ReviewCard from "../atoms/ReviewCard";

export default {
  name: "Reviews",
  components: {
    ReviewCard,
    SsrCarousel,
  },
  data() {
    return {
      reviews: [1,2,3,4,5]
    }
  }
}
</script>

<style lang="scss">
/*Reviews*/
.review_list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .ssr-carousel-mask:not(.disabled) {
    margin: 0 auto;
    padding-left: 100px;

    @media screen and (max-width: 1300px) {
      padding-left: 50px;
    }
    @media screen and (max-width: 1100px) {
      padding-left: 25px;
    }
  }
  .ssr-carousel-dot-icon {
    margin-top: 20px;
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
    
    @media screen and (max-width: 1300px) {
      width: 90%;
    }
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
    @media screen and (max-width: 900px) {
      width: 110%;
    }
  }
  .ssr-carousel-slide {
    @media screen and (max-width: 900px) {
      margin-right: 40px;
    }
  }
  .ssr-carousel-mask {
    .ssr-carousel-track {
      .ssr-carousel-slide {
        margin-right: 30px;
      }
    }
  }
}

.reviews {
  padding-top: 100px;
  padding-bottom: 100px;
  background: #FAFAFA;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
}
.reviews_div {
  width: 80%;
  margin: 0 auto;
}
.reviews_title {
  display: flex;
  align-items: center;
}
.reviews_title_circle {
  width: 16px;
  margin-right: 15px;
  height: 16px;
  border-radius: 50%;
  background: #FAEB00;
}
.reviews_title h1 {
  font-weight: 600;
  font-size: 40px;
  line-height: 148.7%;
  text-align: center;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #00202A;
}
.review_list {
  margin-top: 30px;
  display: flex;
}
@media screen  and (max-width: 900px) {

/*Reviews*/
.review_list {
  flex-direction: column;
}
.reviews_title {
  justify-content: center;
}
.review_card {
  width: 90%;
  margin-bottom: 20px;
}

}
</style>