<template>
<form @submit.prevent="signUp">
    <div>
        <h1>Sign UP</h1>
            <label for="">
            <input v-model="email" type="text" name="email" id="">Email </label>

            <label for="">
            <input v-model="password" type="password" name="password" id="">Password
            </label>
            
            <label for="">
            <input v-model="confirmPassword" type="password" name="confirm password" id="">Confirm password
           </label> 
           <button type="submit">Submit</button>
    </div>
</form>
</template>

<script setup>
import {ref} from 'vue' ;

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const supabase = useSupabaseClient()
const errorMessage = ref("error happened")

definePageMeta({
    layout : false
})

async function signUp(){

    const {error} = await supabase.auth.signUp({
    email:email.value,
    password:password.value
})
    if (error){
        errorMessage.value= error.message
    }else{
        navigateTo('/')
    }
}


</script>

<style></style>