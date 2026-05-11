<template>

    <div class="p-8 bg-dark-bg flex flex-col min-h-screen">
        <h1 class= "text-primary font-serif">{{name}}</h1>

        <p class="text-secondary">{{description}}</p>

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