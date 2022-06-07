<template>
    <div class="h-full grid grid-rows-aaa">
        <div class="flex w-full h-full border items-center snap-x p-2 pr-3 pl-3 gap-2 overflow-auto snap-mandatory">
            <CardTemplate v-if='history' v-for="elem in history" :report='elem' />
        </div>
        <p class="text-xs text-slate-500 text-center">The blue boxes are those that have been selected to reinvest the capital.
            On the other hand, the green boxes are the ones that have not been selected the same.</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getHistoryReports } from "../../../services/historyReports.service";
import CardTemplate from "./CardTemplate.vue";
const history = ref();
getHistoryReports()
.then(response => response.data)
.then(data => history.value = data);

</script>