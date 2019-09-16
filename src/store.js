import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        serverURL: 'http://localhost:8080',
        //serverURL: 'http://104.248.179.110:8080/camsa',
    }
})