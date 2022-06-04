<template>

    <div class="flex w-full h-screen justify-center items-center">
        <img src="./react.jpg" class="hover:scale-110 hover:cursor-pointer" @click='handleClickBestReact'>
    </div>

</template>

<script setup>
const handleClickBestReact = () => {
    confirm('Sin duda alguna, React es mejor que Vue 💩')
}
</script>