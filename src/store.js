import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //serverURL: 'http://localhost:8080',
        serverURL: 'http://tingeso.tk:8080/camsa',
    }
})