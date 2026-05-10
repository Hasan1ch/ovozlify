<template>
    <div class="p-8 bg-dark-bg">
        <h1 class= "text-primary font-serif">{{name}}</h1>

        <p class="text-secondary">{{description}}</p>
 

    </div>
    <button @click="logout" type="submit">Logout</button>
</template>

<script setup>
import { ref } from 'vue';

 const name = ref('Ovozlify')
 const description = ref('Pdf to Audiobook')
 const supabase = useSupabaseClient()    

const logout = async()=>{
    await supabase.auth.signOut()

    navigateTo('/login')
}

 definePageMeta ({
    middleware: 'auth'
 })

</script>