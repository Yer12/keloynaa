<template>
  <div class="search_div">
    <input type="text" placeholder="Алматы арена" class="search_input">
    <button class="search_filter">
      <img src="../../assets/file.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "CategorySearch"
}
</script>

<style scoped lang="scss">
.search_div {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search_input {
  width: calc(100% - 140px);
  height: 40px;
  border-radius: 17px;
  background-color: #fff;
  border: 1px solid #D6D6D6;
  background-image: url("../../assets/search.svg");
  background-repeat: no-repeat;
  background-position: 30px;
  background-size: 30px;
  font-size: 20px;
  outline: none;
  padding: 10px 80px;
  
  @media screen and (max-width: 768px) {
    width: calc(60% - 30px);
    background-size: 20px;
    padding: 10px 50px;
    background-position: 20px;
    font-size: 16px;
  }
}
.search_input::placeholder {
  font-weight: 400;
  font-size: 20px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #D6D6D6;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}

.search_filter {
  background: #ffffff;
  padding: 18px 20px;
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
}
</style>