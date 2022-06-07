<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../../assets/Logo.png" alt="">
    </div>
    <ul class="list">
      <li class="list_item">
        <img src="../../assets/user.svg" alt="">
        <p class="list_item_text">
          Пользователи
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdminSideBar"
}
</script>

<style scoped>
.sidebar {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #00202A;
}
.logo {
  margin-top: 50px;
  background: #fff;
  border-radius: 19px;
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list {
  color: #fff;
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  padding: 0;
}
.list_item {
  display: flex;
  width: 100%;
  padding-left: 20%;
  cursor: pointer;
}
.list_item:hover {
  background: rgba(32, 118, 143, 0.29);
}
.list_item_text {
  margin-left: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
}

</style>