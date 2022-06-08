<template>
  <div class="calendar">
    <div class="calender_div">
      <div class="section_title">
        <div class="title_circle"></div>
        <h1>Расписание</h1>
      </div>
      <table class="">
        <thead>

        <th></th>
        <th v-for="w in 7">
          <div v-if="w === 1">
            {{ today + w -1 }} {{month}} <span>сегодня</span>
          </div>
          <div v-else>
            {{ today + w -1 }} {{month}}
          </div>
        </th>



        </thead>
        <tbody>
          <tr v-for="t in close - start + 1">
            <td>{{+start + t - 1 + ':00'}}</td>
            <td v-for="w in [1,2,3,4,5,6,7]">
<!--              <div key="w" :class="w === (parseInt((savedBrons[w-1]).data.split(':')[0]) - today + 1) && t === parseInt((savedBrons[w-1] || []).time) ? 'disabled' : '' " class="tablePrice"  @click="chosenTime(+start + t-1, today - 1 + w)">3000 ТГ</div>-->
              <div key="w"
                   class="tablePrice"
                   :id="(+start+ t - 1)+'time'+(today - 1 + w)"
                   :class="checkIsBronned(+start + t-1, today - 1 + w) ? 'disabled' : ''"
                   @click="chosenTime(+start + t-1, today - 1 + w); checkedClass;"
              >
              <!--                   :class="`${(savedBronPlaygrounds.bron.date[0] - today + 1) === w && t=== savedBronPlaygrounds.bron.time - start + 1}` ? 'disabled' : ''"-->

                {{ price }} ТГ
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <div class="chosen_section">
        <div class="chosen_row" v-for="c in this.checkedTimes">
          <div class="chosen_date">{{ c.date.split(":")[0] + " " + monthArr[c.date.split(":")[1] - 1] }}<span v-if="c.date.split(':')[0] === today">сегодня</span></div>
          <div class="chosen_time">{{ c.time + ' : 00'}}</div>
          <div class="chosen_section_price">{{ price }} тг</div>
          <div class="cancel_button">
            <button class="cancel" @click="deleteEvent(c.time, c.day)">Отменить</button>
          </div>
        </div>

        <div class="total_info">
          <div class="totalPrice">
            Итого : <span>{{ this.checkedTimes.length * price }} тг</span>
          </div>
          <div :style="[this.checkedTimes.length === 0 ? {'opacity': '0.3'} : {'opacity': '1'}]" class="booking_button">
            <button :disabled="this.checkedTimes === 0" @click="bronList">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "TimeSchedule",
  props: ['close', 'start', "price"],
  data() {
    let today;
    let month;
    return {
      checkedTimes: [

      ],
      today,
      month,
      monthArr : ['Январь', "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],

    }
  },
  methods: {
    bronList() {
      if(this.$store.state.userInfo) {
        console.log("logged")
        let res = {
          bron: this.checkedTimes,
          playgroundId: this.$route.params.id,
          userId: this.$store.state.userInfo.id
        }
        // send request to /v1/api/bron/save dispatch
        this.$store.dispatch("saveBronPost", res)
        console.log(this.checkedTimes)
        router.push("/booking")
      }
      else {
        router.push("/login")
      }
    },
      checkIsBronned(hour, day) {
      const time = hour + '';
      const date = `${day}:5`
      return (this.savedBronPlaygrounds || []).some((savedBron) => savedBron.time === time && savedBron.date === date)
    },
    deleteEvent(time, day) {
      for (let i = 0; i < this.checkedTimes.length; i++) {
        if(time === this.checkedTimes[i].time && day === this.checkedTimes[i].day) {
          this.checkedTimes.splice(i,1)
        }
      }
    },
    hasContain(time, day) {
      const date = `${day}:5`
      return (this.checkedTimes || []).some((savedBron) =>  savedBron.time === time && savedBron.date === date)
    },
    checkedClass(event) {
      console.log(event.target)
    },
    chosenTime(time, day) {
      document.getElementById(time+'time'+day).style.border = "1px solid #00AADE";
      document.getElementById(time+'time'+day).style.borderRadius = "15px";
      document.getElementById(time+'time'+day).style.color = "#00AADE";
      console.log('t', time, 'd', day)
      this.checkedTimes = this.hasContain(time, day) ? (this.checkedTimes.filter(el => {
        document.getElementById(time+'time'+day).style.border = "none";
        document.getElementById(time+'time'+day).style.borderRadius = "0";
        document.getElementById(time+'time'+day).style.color = "#FFFFFF";
        console.log(el.time, time)
        console.log(el.date, day+":5")
        return time === el.time && day + ':5' === el.date
      })) : (
          [...this.checkedTimes, {
            // date: day+":"+ parseInt(this.monthArr.indexOf(this.month)+1),
            date: day+":5",
            time: time
          }]
      )
    },
    date_function() {
      const monthArr = ['Январь', "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
      let currentDate = new Date();
      this.today = currentDate.getDate()
      this.month = this.monthArr[currentDate.getMonth()]
    },
    async fetchSavedBron() {
      await this.$store.dispatch("getSavedBron", this.$route.params.id)
    },
    bronedTimes() {
      console.log('broned', this.savedBronPlaygrounds)
    }
  },
  created() {
    this.date_function()
  },
  mounted() {
    this.fetchSavedBron();
    this.bronedTimes();
  },
  computed: {

    userInfo() {
      return this.$store.state.userInfo;
    },
    savedBronPlaygrounds() {
      console.log('broned2', this.$store.state)
      // console.log('saved',this.$store.state.savedBronPlaygrounds.bron[4].date.split(":")[0])
      return this.$store.state.savedBronPlaygrounds;
    },

  },
}
</script>

<style lang="scss" scoped>

/*Schedule*/
.calendar {
  height: 100%;
  background: #00202A;
  margin-bottom: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calender_div {
  padding-top: 50px;
  width: 70%;
}
.section_title {
  display: flex;
  align-items: center;
}
.section_title h1 {
  font-weight: 600;
  font-size: 35px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #FFFFFF;

  @media screen and (max-width: 900px) {
    font-size: 25px;
  }

}
.title_circle {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: #00AADE;
  border-radius: 50%;
}
table {
  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: capitalize;
}
table thead th{
  cursor: pointer;
}
table thead th:nth-child(2) span {
  color: #00AADE;
}
table tbody tr td{
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}
.tablePrice:hover {
  background-color: rgba(6, 59, 75, 0.76);
  box-sizing: border-box;
  width: 122px;
  border-radius: 15px;
}
.tablePrice.checked {
  border: 2px solid #00AADE;
  box-sizing: border-box;
  width: 122px;
  border-radius: 15px;
  color: #00AADE;
}
.tablePrice.disabled {
  color: #00475D;
}
.tablePrice {
  width: 100px;
  margin: 0 auto;
  padding: 12px;
  cursor: pointer;
}

.chosen_section {
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 149.7%;
  letter-spacing: 0.025em;
  text-transform: lowercase;
  color: #FFFFFF;
}
.chosen_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 20px;
}
.chosen_date span{
  color: #00AADE;
}
.chosen_date, .chosen_time, .chosen_section_price, .cancel_button {
  width: 30%;
  text-align: right;
}
.chosen_date {
  text-align: left;
}
.cancel_button button {
  float: right;
}
.cancel {
  cursor: pointer;
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 11px;
  background: transparent;
  font-size: 20px;
  line-height: 149.7%;
  width: 160px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #FFFFFF;
}

.total_info {
  padding-bottom: 50px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  line-height: 149.7%;
  font-size: 30px;

  /* or 45px */

  letter-spacing: 0.025em;
  text-transform: capitalize;

  color: #00AADE;

}


@media screen and (max-width: 500px) {
  .totalPrice {
    font-size: 24px !important;
  }
}
.booking_button button{
  font-weight: 600;
  font-size: 28px;
  line-height: 149.7%;
  /* or 45px */
  padding: 10px 40px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  color: #00AADE;
  background: transparent;
  border: 2px solid #00AADE;
  border-radius: 25px;
  cursor: pointer;
}
.booking_button button:hover {
  background-color: #00AADE;
  color: #ffffff;
}
@media screen  and (max-width: 900px) {
  /*Schedule*/
  .section_title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  table thead th, tbody tr td {
    display: none;
  }
  table thead tr, table thead th:nth-child(2), tbody tr {
    display: flex;
    align-items: center;
  }
  table thead th:nth-child(2) {
    font-size: 18px;
  }
  table thead th:nth-child(2),
  tbody tr td:nth-child(2),
  tbody tr td:nth-child(1)
  {
    display: block;
    width: 100%;
  }

  /*Schedule*/
  .chosen_row {
    display: none;
  }
  .total_info {
    flex-direction: column;
  }
  .booking_button {
    margin-top: 50px;
    width: auto;
    cursor: pointer;
  }
  .booking_button button {
    width: 100%;
    font-size: 22px;
  }

  .give_rating .feedback_rating {
    width: 30px;
    height: 30px;
  }
  .send_button button {
    padding: 10px 20px;
  }

}
</style>
