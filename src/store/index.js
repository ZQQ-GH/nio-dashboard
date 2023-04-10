import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state ={
    count:0
}

const mutations ={
    ADD(state,arg1){
        console.log(arg1)
        state.count+=arg1;
    }
}

const actions ={
    //只能传1个参数，多个参数用对象
    increment(context,arg1){
        console.log(arg1)
        context.commit("ADD",arg1);
    }
}

const getters ={
    getCnt(state){
        return state.count;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});