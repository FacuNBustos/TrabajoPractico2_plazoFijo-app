<template>
    <div :class="(this.report.reinvestment)? 
        'flex flex-col items-center min-w-card h-32 hover:snap-center hover:shadow-xl hover:scale-110 rounded-lg hover:border border-blue-600 hover:cursor-pointer shadow-sm pt-1.5 bg-gradient-to-tl from-sky-400 to-sky-200'
        : 'flex flex-col items-center min-w-card h-32 hover:snap-center hover:shadow-xl hover:scale-110 rounded-lg hover:border border-green-600 hover:cursor-pointer shadow-sm pt-1.5 bg-gradient-to-tl from-green-400 to-green-200'"
        @click="handleClick()"
        >
        <h4>{{this.report.name}} {{this.report.lastname}}</h4>
        <h4><span class="text-xs text-slate-500">Amount:</span> ${{this.report.amount}}</h4>
        <h4><span class="text-xs text-slate-500">Days:</span> {{this.report.days}}</h4>
        <h4>{{new Date(this.report.record).toDateString()}}</h4>
        <p class="text-xs text-slate-500 mt-2">Click to see summary</p>
    </div>
</template>

<script>import handlechangeHistory from "../../../services/changeHistory"


export default{
    props:{
        report: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        handleClick: function() {
            handlechangeHistory(this.report.id);
        }
    }
}
</script>