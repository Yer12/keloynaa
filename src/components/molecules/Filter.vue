<template>
  <div class="filter">
    <div class="filter_title">
      <h2>Фильтры</h2>
    </div>
    <div class="filter_name">
      <p>Площадка</p>
      <div class="filter_sub">
        <input type="radio" id="opened" v-model="filter.roofType" value="некрытый" class="radio-button" name="roofType">
        <label for="opened">
          <p>Открытая</p>
        </label>
      </div>
      <div class="filter_sub">
        <input type="radio" id="closed" v-model="filter.roofType" value="крытый" class="radio-button" name="roofType">
        <label for="closed">
          <p>Крытая</p>
        </label>
      </div>
    </div>
    <div class="filter_name sport">
      <p>Спортзал</p>
      <div class="filter_sub">
        <input v-model="filter.sportId" id="1" value="1" type="checkbox" class="checkbox">
        <p>Футбольная</p>
      </div>
      <div class="filter_sub">
        <input v-model="filter.sportId" id="2" value="2" type="checkbox" class="checkbox">
        <p>Баскетбольная</p>
      </div>
      <div class="filter_sub">
        <input v-model="filter.sportId" id="3" value="3" type="checkbox" class="checkbox">
        <p>Волейбольная</p>
      </div>
    </div>
    <div class="filter_name filter_price_">
      <p>Цена, тг </p>
      <div class="filter_sub">
        <p>от</p>
        <input v-model="filter.fromPrice" type="text" class="price-input">
        <p>до</p>
        <input v-model="filter.toPrice" type="text" class="price-input">
      </div>

    </div>

    <div @click="onFilter()" class="filter_button">
      <button>Найти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      filter: {
        roofType: "",
        fromPrice: 0,
        toPrice: 0,
        sportId: 0,
      }
    }
  },
  methods: {
    onFilter() {
      this.$store.state.filteredPlaygrounds = this.filteredPlaygrounds
      this.$store.dispatch("getFilterPlaygrounds", this.filter)
    }
  },
  computed: {
    filteredPlaygrounds() {
      console.log(this.$store.state.filteredPlaygrounds)

      return this.$store.state.filteredPlaygrounds
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  background: #FFFFFF;
  border-radius: 17px;
  width: 242px;
  height: 565px;
  margin-right: 50px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  filter: drop-shadow(5px 4px 11px rgba(0, 0, 0, 0.08));

  @media screen and (max-width: 990px) {
    display: none;
  }
}
.filter_title{
  margin-top: 30px;
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.filter_title h2{
  font-size: 18px;
}
.filter_name{
  /* border: 1px solid; */
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #D6D6D6;
}
.filter_name p{
  margin-left: 5px;
  font-size: 18px;
}
.filter_sub{
  margin-left: 20px;
  height: 30px;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: space-around; */
  align-items: center;
}
.radio-button{
  background: #D6D6D6;
  width: 14px;
  height: 14px;
  margin-right: 10px;
}
.sport{
  height: 180px;
}
.checkbox{
  border-color: #D6D6D6;
  /* width: 15px; */
  /* height: 16px; */
  padding: 16px;
  margin-right: 10px;
}
.price-input{
  margin-left: 10px;
  width: 60px;
  height: 25px;
  border-radius: 3px;
  outline: none;
  padding-left: 5px;
  border: 1px solid #D6D6D6 !important;
}
.filter_price_{
  height: 120px;
  border-bottom: none;
}
.filter_sub p{
  font-size: 16px;
}
.filter_button button{
  width: 110px;
  height: 33px;
  background-color: #00AADE;
  border-radius: 10px;
  color: #fff;
  border: none;
}
</style>
