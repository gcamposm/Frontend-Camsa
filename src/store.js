import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //serverURL: 'http://localhost:8080',
        serverURL: 'http://157.245.188.147:8080/camsa',
    }
})