<template>
<form class="flex flex-col gap-y-3 p-1 border-b" @submit="handleSubmit">
    <div class="flex w-full h-10 pl-1 pr-1 pt-1 text-center">
        <div class="bg-gradient-to-r from-yellow-200/50 to-yellow-400/75 w-full h-full rounded-sm font-thin font-serif justify-center items-center flex" v-if="state">{{message}}</div>
    </div>
    <input :disabled='store.state.displayable' type="text" name="name" id="" placeholder="Name and Lastname" class="h-8 text-center" :value='store.state.name' @input="handleChange" @blur="handleBlur">
    <input :disabled='store.state.displayable' type="number" name="mount" id="" placeholder="Amount to Invest" class="h-8 text-center" :value="store.state.mount" @input="handleChange" @blur="handleBlur">
    <input :disabled='store.state.displayable' type="number" name="days" id="" placeholder="Number of Days" class="h-8 text-center" :value='store.state.days' @input="handleChange" @blur="handleBlur">
    <div class="flex justify-center items-center gap-x-2">
        <div class="bg-sky-500 rounded-full w-32 flex justify-center items-center">
            <input :disabled='store.state.displayable' type="checkbox" name="reinvest" :checked='store.state.reinvest' id="checkBox" class="items-end w-6 accent-pink-500" @change="handleChange">
            <button :disabled='store.state.displayable' type="submit" class="text-center h-10 w-20">Calculate</button>
        </div>
        <button type="reset" class="text-center h-10 w-20 justify-center bg-sky-500 rounded-full" @click="handleReset">Reset</button>
    </div>
    <p class="flex justify-center items-center text-xs text-slate-500">Select the checkbox if you want to reinvest</p>
</form>
</template>

<script setup>
import { ref } from 'vue';
import store from '../../store';
import { checkDays, checkMount, checkName } from '../../services/checkFormData.service';

let state = ref(false);
const message = ref('');

const handleBlur = (e) => {
    switch (e.target.name){
        case 'name':
            if (checkName(e.target.value) == false){
                state.value = true;
                message.value = 'Error in the first and last name field';
            }else{
                state.value = false;
                message.value = '';
            };
            break;
        case 'mount':
            if (checkMount(e.target.value) == false){
                state.value = true;
                message.value = 'The amount must be an integer greater than 1000';
            }else{
                state.value = false;
                message.value = '';
            };
            break;
        case 'days':
            if (checkDays(e.target.value) == false){
                state.value = true;
                message.value = 'The number of days must be greater than 30';
            }else{
                state.value = false;
                message.value = '';
            };
            break;
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    store.commit('handleSubmit');
}
const handleReset = () => {
    store.commit('handleResetAll');
}

const handleChange = (e) => {
    switch(e.target.name){
        case 'name':
            store.commit('handleChangeName', e.target.value);
            break;
        case 'mount':
            store.commit('handleChangeMount', e.target.value);
            break;
        case 'days':
            store.commit('handleChangeDays', e.target.value);
            break;
        case 'reinvest':
            store.commit('handleChangeReinvest');
            break;
    }
}
</script>