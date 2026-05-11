<template>
    <div class=" flex flex-col items-center">
        <img class="invert m-2 w-16" src="/book-2.svg" />
        <h1 class="text-primary text-5xl m-2">Your Library</h1>
        <h2 class="text-secondary text-2xl m-2">No books yet. Upload your first PDF to get started.</h2>
        <button class="bg-accent-terracotta p-2 rounded-xl m-2 font-sans" >Upload your first book</button>
    </div>
</template>

<script setup >

definePageMeta ({
    middleware:'auth',
    layout:'default'
})


</script>

<style></style>