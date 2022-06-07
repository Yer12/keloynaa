<template>
  <div style="display: flex; height: 100vh">
    <AdminSideBar />
    <section class="main">
      <div class="main_container">
        <div class="panel_header">
          <p class="header_title">
            Панель админа
          </p>
          <div class="user">
            <p class="username">Username</p>
            <div class="userprofile">
              <img src="../assets/panelUser.svg" alt="">
            </div>
          </div>
        </div>

        <div  class="users_list">
          <div class="users_list_header">
            <p>Пользователи</p>
            <div class="actions">
              <div class="view" @click="">
                <img src="../assets/view.svg" alt="">
              </div>
              <div class="delete">
                <img src="../assets/delete.svg" alt="">
              </div>
            </div>
          </div>
          <div class="users_table_header">
            <p>Имя</p>
            <p>Роль</p>
            <p>Площадка</p>
            <p>Статус</p>
          </div>
          <div class="user_items">
            <div class="user_item">
              <p class="user_item_name">Асемай</p>
              <p class="user_item_role">Арендодатель</p>
              <p class="user_item_playground">Алматы Арена</p>
              <div class="user_item_status success">Принят</div>
            </div>
            <div class="user_item">
              <p class="user_item_name">Асемай</p>
              <p class="user_item_role">Арендодатель</p>
              <p class="user_item_playground">Алматы Арена</p>
              <div class="user_item_status denied">Отклонен</div>
            </div>
            <div class="user_item">
              <p class="user_item_name">Асемай</p>
              <p class="user_item_role">Арендодатель</p>
              <p class="user_item_playground">Алматы Арена</p>
              <div class="user_item_status process">В процессе</div>
            </div>
            <div class="user_item">
              <p class="user_item_name">Асемай</p>
              <p class="user_item_role">Арендодатель</p>
              <p class="user_item_playground">Алматы Арена</p>
              <div class="user_item_status success">Принят</div>
            </div>
          </div>
        </div>


        <div class="about_user">
          <div class="tabs">
            <div class="tab checked">
              User details
            </div>
            <div class="tab">
              Playground details
            </div>
          </div>
          <div class="tabcontent">
            <div class="tabcontent_item">
              <p>Имя:</p>
              <p>Арлан Алибекович</p>
            </div>
            <div class="tabcontent_item">
              <p>Имя:</p>
              <p>Арлан Алибекович</p>
            </div>
            <div class="tabcontent_item">
              <p>Имя:</p>
              <p>Арлан Алибекович</p>
            </div>
            <div class="tabcontent_item">
              <p>Имя:</p>
              <p>Арлан Алибекович</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AdminSideBar from "@/components/molecules/AdminSideBar";
export default {
  name: "AdminPage",
  components: {AdminSideBar},
  data() {
    return {

    }
  }
}
</script>

<style scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_container {
  margin-top: 50px;
  width: 90%;
}
.panel_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 2px 4px 10px rgba(119, 110, 110, 0.15);
  border-radius: 16px;
  height: 90px;
  width: 100%;
}
.header_title {
  margin-left: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 45px;
  letter-spacing: 0.08em;

  color: #000000;
}
.user {
  margin-right: 50px;
  display: flex;
  font-weight: 400;
  font-size: 22px;
  line-height: 38px;
  color: #000000;
  align-items: center;
}
.username {
  margin-right: 10px;
}
.userprofile {
  width: 59px;
  height: 59px;
  background: linear-gradient(180deg, rgba(0, 32, 42, 0.8) 39.83%, rgba(5, 196, 255, 0.8) 113.56%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.users_list {
  background: #FFFFFF;
  box-shadow: 3px 4px 10px rgba(157, 157, 157, 0.25);
  border-radius: 12px;
  margin-top: 50px;
  width: 100%;
  padding-bottom: 50px;
}
.users_list_header {
  width: 90%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}
.users_list_header p {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #000000;

}
.actions {
  display: flex;
  align-items: center;
}
.actions .view {
  margin-right: 30px;
}
.view, .delete {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
}
.view:hover, .delete:hover {
  background: rgba(222, 218, 218, 0.26);
}

.users_table_header {
  display: flex;
  justify-content: space-around;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(224, 223, 223, 0.9);
}
.user_item {
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(224, 223, 223, 0.9);
  justify-content: space-around;
  cursor: pointer;
}
.user_item:hover {
  background: rgba(186, 186, 186, 0.19);
  border-radius: 7px;

}
.user_item_status {
  width: 120px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 6px;
}
.user_item_status.success {
  background: #08E004;
}
.user_item_status.denied {
  background: #EB0000;
}
.user_item_status.process {
  background: #00AADE;
}


.about_user {
  background: #FFFFFF;
  box-shadow: 3px 4px 10px rgba(157, 157, 157, 0.25);
  border-radius: 12px;
  width: 100%;
  margin-top: 50px;
  padding-top: 40px;
  padding-bottom: 40px;

}
.tabs {
  display: flex;
  width: 90%;
  margin: 0 auto;
}
.tab {
  margin-right: 30px;
  cursor: pointer;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.tab.checked {
  background: linear-gradient(180deg, #00202A 50%, #12C7FF 115.74%);
  border-radius: 11px;
  color: #fff;
}
.tabcontent {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}
.tabcontent_item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(68, 66, 66, 0.22);
}
.tabcontent_item p:first-child {
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 148.7%;
  letter-spacing: 0.215em;
  color: #000000;
}
.tabcontent_item p:nth-child(2) {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 148.7%;
  letter-spacing: 0.215em;
  color: #000000;
  margin: 0 auto;
}
</style>
