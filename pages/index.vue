<template>

    <div class="p-8 bg-dark-bg flex flex-col min-h-screen items-center">
        <h1 class= "text-primary font-serif text-5xl m-2">{{name}}</h1>

        <p class="text-secondary text-2xl m-2">{{description}}</p>

    </div>
</template>

<script setup>
import { ref } from 'vue';

 const name = ref('Ovozlify')
 const description = ref('Pdf to Audiobook')

 definePageMeta ({
    middleware: 'auth',
    layout : 'default'
 })

</script>