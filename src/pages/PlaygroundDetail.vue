<template>
  <div v-if="playground">
    <Header :main="false" />
    <section class="playgroundDetail">
      <DetailHero :name="playground.playgroundName" :address="playground.playgroundAddress" :price="playground.price" :specification="playground.specification" />
      <PlaygroundImgSlider :images="playground.images"  />
      <TimeSchedule :close="playground.closeTime" :start="playground.startTime" :price="playground.price" />
      <Reviews :playground="playground" />
      <Feedback />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import DetailHero from "@/components/molecules/DetailHero";
import Reviews from "@/components/molecules/Reviews";
import PlaygroundImgSlider from "@/components/molecules/PlaygroundImgSlider";
import TimeSchedule from "@/components/molecules/TimeSchedule";
import Feedback from "@/components/molecules/Feedback";
export default {
  name: "PlaygroundDetail",
  components: {Feedback, TimeSchedule, PlaygroundImgSlider, Reviews, DetailHero, Footer, Header},
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      await this.$store.dispatch("getPlayground", this.$route.params.id)
    },
  },
  computed: {
    playground() {
      return this.$store.state.playground;
    },
  }
}
</script>

<style scoped>
.playgroundDetail {
  padding-top: 70px;
  height: 100%;
  background: #ffffff;
}
</style>