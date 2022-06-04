<template>
    <main class="min-w-full h-screen flex justify-center pt-28 bg-gradient-to-r from-cyan-500 to-blue-500">
        <article class="grid grid-cols-article grid-rows-article w-4/5 h-card bg-gray-100/75 rounded-lg shadow-lg p-3">
            <section class="bg-white rounded-tl-sm">
                <Form />
                <percentageTable />
                <div class="flex justify-center p-3">
                    <p class="text-xs text-slate-500">The percentages are represented annually, we are not responsible for mistakes. 
                            We are not responsible for the malfunction of the application,
                            and other problems related to it. It is only educational and does not have any legal endorsement in Argentina. Knowing the above,
                            react is better.
                    </p>
                </div>
            </section>
            <section class="flex bg-white border-l-2 rounded-tr-sm justify-center items-center p-2">
                <Review v-if='store.state.displayable'/>
            </section>
            <section class="col-span-2 bg-white border-t-2 rounded-b-sm p-3">
                <ScrollTemplate />
            </section>
        </article>
    </main>
</template>

<script setup>
import Form from "../components/HomeView/Form.vue";
import percentageTable from "../components/HomeView/percentageTable.vue";
import Review from "../components/HomeView/Review/Review.vue";
import store from "../store";
import ScrollTemplate from "../components/HomeView/ScrollTemplate/ScrollTemplate.vue";
</script>
