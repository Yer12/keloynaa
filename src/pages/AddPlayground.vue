<template>
  <div>
    <Header />
    <section class="main">
      <div class="main_container">
        <input type="text" v-model="playground.playgroundName" placeholder="Название спорт площадки" class="name inputs">
        <input type="text" v-model="playground.playgroundAddress" placeholder="Адрес" class="address inputs">
        <input type="number" v-model="playground.price" placeholder="Цена" class="price inputs">
        <select v-model="playground.specification.cover" class="type_playground inputs" name="playground_type" id="">
          <option disabled selected>Тип площадки</option>
          <option value="Паркет">Паркет</option>
        </select>
        <div class="buttons">
          <button @click="playground.specification.roofType = 'Открытая' " :class="playground.specification.roofType === 'Открытая' ? 'checked' : ''" class="left">Открытая</button>
          <button @click="playground.specification.roofType = 'Крытая' " :class="playground.specification.roofType === 'Крытая' ? 'checked' : ''" class="right">Крытая</button>
        </div>

        <ul class="list">
          <li class="list_item">
            <label for="duw">
              <input @click="playground.specification.shower = !playground.specification.shower" type="checkbox" id="duw" class="checkbox">
              <span>Душ</span>
            </label>
          </li>
          <li class="list_item">
            <label for="razd">
              <input @click="playground.specification.dressingRoom = !playground.specification.dressingRoom" type="checkbox" id="razd" class="checkbox">
              <span>Раздевалка</span>
            </label>
          </li>

          <li class="list_item">
            <label for="parking">
              <input @click="playground.specification.parking = !playground.specification.parking" type="checkbox" id="parking" class="checkbox">
              <span>Парковка</span>
            </label>
          </li>

          <li class="list_item">
            <label for="tribune">
              <input @click="playground.specification.tribune = !playground.specification.tribune" type="checkbox" id="tribune" class="checkbox">
              <span>Трибуна</span>
            </label>
          </li>
        </ul>

        <div class="add_img">
<!--          <label class="custom-file-upload inputs">-->
<!--            <input type="file"/>-->
<!--            Прикрепить фото-->
<!--            <img src="../assets/file.svg" alt="">-->
<!--          </label>-->
          <UploadImages @change="handleImages"/>

        </div>
        <button @click="handleImages" class="send_btn">
          Отправить
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/organisms/Header";
import UploadImages from "vue-upload-drop-images"

export default {
  name: "AddPlayground",
  components: {
    Header,
    UploadImages,
  },
  data() {
    return {
      playground: {
        closeTime: "22",
        companyId: 2,
        description: "Playground",
        images: [],
        phone: "87075233816",
        playgroundAddress: "",
        playgroundName: "",
        price: 0,
        specification: {
          cover: "Паркет",
          dressingRoom: false,
          height: 0,
          id: 0,
          parking: false,
          roofType: "Открытая",
          shower: false,
          tribune: false,
          width: 0
        },
        sportId: 1,
        startTime: "18"
      }
    }
  },
  methods: {
    createPlayground() {
      const fd = new FormData();
      fd.append('image', this.playground.images, '');
      console.log(fd);
      // this.$store.dispatch("createPlayground", this.playground)
      console.log(this.playground)
    },
    handleImages(event){
      this.playground.images = event.target;
      console.log(this.playground.images)
      /*
        [
          {
              "name": "Screenshot from 2021-02-23 12-36-33.png",
              "size": 319775,
              "type": "image/png",
              "lastModified": 1614080193596
              ...
          },
          ...
          ]
       */
    },

  },

}
</script>

<style scoped>

/*MAIN*/
.main {
  width: 100vw;
  display: flex;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;

}
.main_container {
  width: 31%;
  margin-top: 70px;

  height: 70%;
  display: flex;
  flex-direction: column;
}
select {
  color: gray !important;
  outline: none;
}
option[value=""][disabled] {
  color: #7C7C7C !important;
}
option {
  color: black !important;
}
.inputs {
  outline-color: #00AADE;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 28px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;

  margin-bottom: 33px;
}

.inputs::placeholder {
  color: #C2C2C2;
}
.buttons {
  display: flex;
}
.buttons button {
  width: 50%;
  outline: none;
  cursor: pointer;
  border: none;
  height: 50px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  background: #fff;
}
.buttons .left {
  border-radius: 12px 0px 0px 12px;
}
.buttons button.checked {
  background: #00AADE;
  color: #fff;
}
.buttons .right {
  border-radius: 0px 12px 12px 0px;
  color: #00AADE;
}

.list {
  display: flex;
  flex-direction: column;
  list-style: none;
}
.list_item label {
  display: flex;
  align-items: center;

}
.list_item label span {
  margin-left: 10px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #000000;
}
.list_item label input {
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  width: 22px;
  border-radius: 0 !important;
  height: 22px;
}
input[type="checkbox"] {
  border-radius: 50px !important;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
}
.custom-file-upload img {
  width: 22px;
  height: 22px;
  transform: rotate(-5deg);
  margin-left: 10%;
}

.send_btn {
  background: #00AADE;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 15px 63px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  margin: 100px auto 0;
  color: #FAFAFA;
}

@media screen and (max-width: 600px) {
  .main_container {
    width: 90%;
  }
}
</style>
