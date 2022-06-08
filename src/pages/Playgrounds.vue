<template>
  <div>
    <Header />
    <section class="container">
      <FilterComponent />
      <div class="playgrounds">
        <CategorySearch />
        <div v-if="filteredPlaygrounds.length === 0" class="list_playgrounds">

          <div v-for="p in playgrounds">
            <CategoryPlaygroundCard :playground="p" />
          </div>
        </div>
        <div v-else class="list_playgrounds">
          <div v-for="p in filteredPlaygrounds">
            <CategoryPlaygroundCard :playground="p" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import FilterComponent from "@/components/molecules/Filter";
import CategoryPlaygroundCard from "@/components/atoms/CategoryPlaygroundCard";
import CategorySearch from "@/components/atoms/CategorySearch";
export default {
  name: "Playgrounds",
  data() {
    return {

    }
  },
  computed: {
    playgrounds() {
      return this.$store.state.playgrounds;
    },
    filteredPlaygrounds() {
      return this.$store.state.filteredPlaygrounds;
    }
  },
  mounted() {
    this.$store.dispatch("getPlaygrounds");
  },
  components: {CategorySearch, CategoryPlaygroundCard, FilterComponent, Footer, Header}
}
</script>

<style scoped lang="scss">
section.container {
  height: 100%;
  display: flex;
  justify-items: center;
  padding: 80px 200px;
  margin-top: 80px;
  background: #FAFAFA;

  @media screen and (max-width: 1300px) {
    padding: 80px 80px;
  }
  @media screen and (max-width: 990px) {
    padding: 0;
    width: 90%;
    margin: 100px auto 0;
  }
}
.container .playgrounds {
  width: 60%;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
  }

}
</style>
