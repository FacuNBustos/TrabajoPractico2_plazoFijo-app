import { createStore } from "vuex";
import {checkName, checkMount, checkDays } from './services/checkFormData.service';

const store = createStore({
    state () {
        return{
            name: '',
            mount: null,
            days: null,
            reinvest: false,
            displayable: false,
            history: {},
            thisHistory: false,
        }
    },
    mutations: {
        handleChangeName (state, value) {
            state.name = value;
        },
        handleChangeMount (state, value) {
            state.mount = value
        },
        handleChangeDays (state, value) {
            state.days = value
        },
        handleChangeReinvest (state) {
            if(state.reinvest){
                state.reinvest = false;
            }else {
                state.reinvest = true;
            }
        },
        handleResetAll (state) {
            state.name = '';
            state.mount = null;
            state.days = null;
            state.reinvest = false;
            state.displayable = false;
            state.thisHistory = false;
        },
        handleSubmit (state) {
            const nameChecked = checkName(state.name);
            const mountChecked = checkMount(state.mount);
            const daysChecked = checkDays(state.days);
            if (nameChecked != false && mountChecked != false & daysChecked != false){
                state.name = nameChecked;
                state.mount = mountChecked;
                state.days = daysChecked;
                state.displayable = true;
            }
        },
        handleResponseHistory (state, response) {
            state.history = response.data;
        },
        handleChangeForHistory (state, id) {
            state.name = [state.history[id-1].name, state.history[id-1].lastname];
            state.mount = state.history[id-1].amount;
            state.days = state.history[id-1].days;
            state.reinvest = state.history[id-1].reinvestment;
            state.thisHistory = true;
            state.displayable = true;
        }
    }
})

export default store;