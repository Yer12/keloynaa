import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/services/api";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playgrounds: [],
    playground: null,
    user: {},
    login: false,
    loginEr: "",
    token: null,
    userInfo: null,
    savedBronPlaygrounds: null,
    filteredPlaygrounds: []
  },
  getters: {
  },
  mutations: {
    SET_PLAYGROUNDS(state, playgrounds) {
      state.playgrounds = playgrounds;
    },
    SET_PLAYGROUND(state, playground) {
      state.playground = playground;
    },
    LOGIN(state, resp) {
      localStorage.setItem("token", resp.accessToken);
      state.loginEr = resp;
      state.login = true;
    },
    REGISTER(state, resp) {
      console.log(resp);
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, data){
      console.log(data)
      state.userInfo = data
    },
    SET_SAVEDPLAYGROUND(state, data) {
      console.log(data.bron)
      state.savedBronPlaygrounds = data.bron
    },
    SET_FILTERPLAYGROUND(state, data) {
      state.filteredPlaygrounds = data
    },
    SAVE_BRON(state, data) {
      console.log(data )
    },
    CREATE_PLAYGROUND(state, data) {
      console.log(data)
    }
  },
  actions: {
    async getPlaygrounds({ commit }) {
      return await api.get("https://kelloyn.herokuapp.com/v1/api/playground/list").then((res) => {
        commit("SET_PLAYGROUNDS", res.data);
        return res.data;
      });
    },
    async getPlayground({ commit }, playgroundId) {
      return await api.get(`https://kelloyn.herokuapp.com/v1/api/playground/${playgroundId}`).then((res) => {
        console.log(res.data)
        commit("SET_PLAYGROUND", res.data);
        return res.data;
      });
    },
    loginUser({ commit, dispatch }, user) {
      api
          .post("https://kelloyn.herokuapp.com/v1/api/login", {
            password: user.password,
            phone: user.phone
          })
          .then((response) => {
            commit("LOGIN", response.data);
            console.log("Log in!");
            dispatch('attempt', response.data.accessToken)
            router.push("/")
          })
          .catch((error) => {
            console.log("Password or Phone number incorrect!\n");
            console.log("");
            console.log(error);
            this.state.loginEr = "Неправильный пароль !";
          });
    },
    async attempt ({ commit }, token) {
      commit("SET_TOKEN", token);
      console.log(token)
      try {
        let response = await api.get('https://kelloyn.herokuapp.com/v1/api/me', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        commit('SET_USER', response.data)
      }
      catch (e) {
        console.log('failed')
      }
    },
    registerUser({ commit }, user) {
      api
          .post("https://kelloyn.herokuapp.com/v1/api/register", {
            phone: user.phone,
            password: user.password,
          })
          .then((response) => {
            commit("REGISTER", response.data);
          });
    },

    async getSavedBron({ commit }, playgroundId) {
      return await api.get(`https://kelloyn.herokuapp.com/v1/api/bron/getByPlayground/${playgroundId}`).then((res) => {
        commit("SET_SAVEDPLAYGROUND", res.data);
        return res.data;
      });
    },
    async getFilterPlaygrounds({ commit }, filter) {
          return await api.post(`https://kelloyn.herokuapp.com/v1/api/playground/filter`, filter).then((res) => {
            commit("SET_FILTERPLAYGROUND", res.data);
            return res.data;
          });
        },

    saveBronPost({ commit }, bronInfo) {
      api
          .post("https://kelloyn.herokuapp.com/v1/api/bron/save", {
            bron: bronInfo.bron,
            playgroundId: bronInfo.playgroundId,
            userId: bronInfo.userId
          })
          .then((response) => {
            commit("SAVE_BRON", response.data);

            console.log("saved")
          });
    },

    createPlayground({ commit }, playground) {
      api
          .post("https://kelloyn.herokuapp.com/v1/api/playground/create", {
            closeTime: playground.closeTime,
            companyId: playground.companyId,
            description: playground.description,
            images: playground.images,
            phone: playground.phone,
            playgroundAddress: playground.playgroundAddress,
            playgroundName: playground.playgroundName,
            price: playground.price,
            specification: playground.specification,
            sportId: playground.sportId,
            startTime: playground.startTime
          })
          .then((response) => {
            commit("CREATE_PLAYGROUND", response.data);
          });
    },
  },
  modules: {
  }
})
