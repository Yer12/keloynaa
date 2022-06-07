<template>
  <div class="home">
    <Header :main="true" />
    <Hero />
    <SportTypes />
    <Playgrounds />
    <AboutUs />
    <Reviews />
    <Footer />
  </div>
</template>

<script>

import Header from "@/components/organisms/Header";
import Hero from "@/components/molecules/Hero";
import Footer from "@/components/organisms/Footer";
import AboutUs from "@/components/molecules/AboutUs";
import Reviews from "@/components/molecules/Reviews";
import Playgrounds from "@/components/molecules/Playgrounds";
import SportTypes from "@/components/molecules/SportTypes";
export default {
  name: 'HomeView',
  components: {
    SportTypes,
    Hero,
    Header,
    Playgrounds,
    AboutUs,
    Reviews,
    Footer
  }
}
</script>
