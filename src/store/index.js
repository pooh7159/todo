import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    //data
    state : {
        todos : [
            { id : 1, text: 'buy a car', checked : false},
            { id : 2, text: 'play game', checked : false}
          ]
    },
    //action -> mutation data change
    mutations : {

    },
    //methods 
    actions : {

    },
    //computed
    getters : {

    }
});