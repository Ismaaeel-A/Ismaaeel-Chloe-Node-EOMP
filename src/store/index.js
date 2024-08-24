import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
const URL = 'https://ismaaeel-chloe-node-eomp.onrender.com/'
export default createStore({
  state: {
    products:null,
    users:null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload;
    },
    setUsers(state, payload){
      state.users = payload;
    }
  },
  actions: {
    async getProducts ({commit}) {
      try {
        let {data} = await axios.get(`${URL}products`);
        console.log(data);
          commit('setProducts',data.results)
      }
      catch (error) {
        toast("There has been an error", {
          "theme": "dark",
          "type": "error",
          "dangerouslyHTMLString": true
        })
      }
    }
  },
  modules: {
  }
})