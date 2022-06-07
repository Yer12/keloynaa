<template>
  <section class="playgrounds">
    <div class="playgrounds_div">
      <div class="sectionTitle">
        <div class="title_circle"></div>
        <h1>Спортивные площадки</h1>
      </div>
      <div class="playgrounds_list">
        <div v-for="p in playgrounds">
          <PlaygroundCard :playground="p" />
        </div>
      </div>
      <button class="show_all_playgrounds">
        Показать все площадки
      </button>
    </div>
  </section>
</template>

<script>
import PlaygroundCard from "../atoms/PlaygroundCard"
export default {
  name: "Playgrounds",
  components: {
    PlaygroundCard,
  },
  data() {
    return {

    }
  },
  computed: {
    playgrounds() {
      return this.$store.state.playgrounds;
    },
  },
  mounted() {
    this.$store.dispatch("getPlaygrounds");
  },
}
</script>

<style scoped lang="scss">
/*Playgrounds Section*/

.playgrounds {
  margin-top: 90px;
  background: #00202A;
  height: 100%;
}
.playgrounds_div {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.playgrounds_div .sectionTitle {
  display: flex;
  margin-left: 100px;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
}
.playgrounds_div .sectionTitle .title_circle {
  width: 16px;
  height: 16px;
  margin-right: 15px;
  background: #0098C7;
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 18px;
  }
}
.playgrounds_div .sectionTitle h1 {
  font-weight: 600;
  font-size: 2rem;
  line-height: 148.7%;
  text-align: center;
  letter-spacing: 0.205em;
  color: #ffffff;

  @media screen and (max-width: 768px) {

  }
}
.playgrounds_list {
  display: flex;
  width: 85%;
  margin: 70px auto 0;
  flex-grow: 1;
  justify-content: space-around;
  flex-wrap: wrap;
}

.show_all_playgrounds {
  /* filter: drop-shadow(1px 1px 15px #FFFFFF); */
  background: transparent;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 117.7%;
  letter-spacing: 0.205em;
  text-transform: uppercase;
  cursor: pointer;
  color: #FFFFFF;
  margin-left: 100px;
  padding: 23px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

</style>
