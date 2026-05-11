<template>
    <h1>Login</h1>
    <form @submit.prevent="logIn">
        
        <label  for=""> <input v-model="email" type="text">Email</label>
        <label  for=""> <input v-model="password" type="password">Password</label>
        <button type="submit">Login</button>
    </form>
    
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