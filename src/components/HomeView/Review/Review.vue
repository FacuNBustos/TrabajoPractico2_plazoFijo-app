<template>
    <div class="grid grid-cols-review h-full w-full">
        <div class=" flex flex-col justify-center h-full w-full">
            <div class="w-full text-center">
                <div class="flex flex-row gap-10 justify-center items-center">
                    <div class="flex flex-col text-center">
                        <h2 class="text-2xl">Sr/a {{name[0]}} {{name[1]}}</h2>
                        <h3><span class="underline text-gray-900/75">Capital invested</span>: ${{mount}}</h3>
                        <h3><span class="underline text-gray-900/75">Number of days</span>: {{days}}</h3>
                        <h3><span class="underline text-gray-900/75">Interest</span>: {{interest}}%</h3>
                        <h3 v-if='!reinvest'><span class="underline text-gray-900/75">Final amount to be received</span>: ${{finalAmount}}</h3>
                        <h3 v-if='reinvest' ><span class="underline text-gray-900/75">Selected reinvestment</span>? Yes</h3>    
                    </div>
                    <ReinvestmentTable v-if='reinvest' :amountArray='amountArray'/>
                </div>
                <Graphic v-if='reinvest' :beginning='amountArray.map(elem => elem[0])' :final='amountArray.map(elem => elem[1])' class="flex justify-center mt-5"/>
            </div>
        </div>
        <div class="flex flex-col pt-0.5 pr-0.5"> 
            <button :disabled='store.state.thisHistory' @click="handleCLickUp" class="hover:bg-green-100 rounded-sm hover:border hover:shadow-lg active:bg-green-200">
            <img src="../../../assets/publish_FILL0_wght400_GRAD0_opsz48.svg" alt="up" class="w-6">
        </button>
        </div>
    </div>
</template>

<script setup>
import { checkInterest } from '../../../services/checkInterest.service';
import { investmentCalculator, reinvestmentCalculator } from '../../../services/investmentCalculator.service';
import store from '../../../store';
import ReinvestmentTable from './reinvestmentTable.vue';
import Graphic from './Graphic.vue';
import handleUpReport from '../../../services/upReportDb.service';

const name = store.state.name;
const mount = store.state.mount;
const days = store.state.days;
const reinvest = store.state.reinvest;
const interest = checkInterest(days);
const finalAmount = investmentCalculator(mount, days).toFixed(2);
const amountArray = reinvestmentCalculator(mount, days);

const handleCLickUp = () => {
    handleUpReport()
    .then(response => alert(response));
}
</script>
