<template>
    <header class="w-screen h-12 bg-gradient-to-r from-emerald-500 to-green-600 absolute shadow-lg flex pl-5 gap-x-4 items-center">
        <img src="../assets/logo-utn.svg" class="w-28" @click="handleClick"/>
        <h1 class="font-medium text-2xl font-sans">😎 Plazo Fijo | Trabajo Práctico II</h1>
    </header>
</template>

<script setup>
import router from '../router';

const handleClick = () => {
    router.push('/r')
}
</script>