<template>
<div class="flex justify-center pt-4">
    <table class="border-collapse border-2 border-gray-500">
    <thead>
        <tr>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Period</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Starting amount</th>
            <th class="border border-gray-400 px-4 py-2 text-gray-800">Final amount</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="elem in this.amountArray" key="elem">
            <td class="border border-gray-400 px-4 py-2">{{handleCounter()}}</td>
            <td class="border border-gray-400 px-4 py-2">{{elem[0].toFixed(2)}}</td>
            <td class="border border-gray-400 px-4 py-2">{{elem[1].toFixed(2)}}</td>
        </tr>
    </tbody>
    </table>
</div>    
</template>

<script>
export default {
  props: {
    amountArray: {
      type: Array,
      default: []
    },
  },
};
</script>

<script setup>
let counter = 0;
const handleCounter= () => {
    counter++;
    return counter;
}
</script>