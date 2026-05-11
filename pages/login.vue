<template>
    <div class="flex flex-col items-center justify-center min-h-screen ">
        <h1 class="text-primary font-sans text-3xl">Login</h1>
        <form @submit.prevent="logIn">
            <label class="text-primary m-4 p-2 for="> <input v-model="email" type="text">Email</label>
            <label class="text-primary m-4 p-2" for=""> <input v-model="password" type="password" >Password</label>
            <button class="text-secondary m-4 p-2 border rounded-xl"  type="submit">Login</button>
        </form>
    </div>
        
    
</template>

<script setup>
import {ref} from 'vue'

definePageMeta({
    layout : false
})

const email = ref('')
const password = ref('')
const supabase = useSupabaseClient()
const errorMessage = ref("error happened")

async function logIn(){
    const {error} = await supabase.auth.signInWithPassword({
        email:email.value,
        password:password.value
    })
    if (error){
        errorMessage.value = error.message
    }else {
        navigateTo('/')
    }
}



</script>


<style></style>