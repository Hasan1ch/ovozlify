<template>
    <div class="p-8 bg-blue-900">
        <h1 class= "text-4xl font-bold text-blue-500">{{name}}</h1>

        <p class="text-sm text-gray-500">{{description}}</p>


    </div>
</template>

<script setup>
import { ref } from 'vue';
 
 const name = ref('Ovozlify')
 const description = ref('Pdf to Audiobook')

</script>