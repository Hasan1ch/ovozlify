<template>
<form @submit.prevent="signUp">
    <div class="flex flex-col justify-center items-left min-h-screen">
        <h1 class="text-primary text-5xl">Sign up</h1>
            <label class="text-primary text-xl m-4" for="">
            <input v-model="email" type="text" name="email" id="">Email </label>

            <label class="text-primary text-xl m-4" for="">
            <input v-model="password" type="password" name="password" id="">Password
            </label>
            
            <label class="text-primary text-xl m-4" for="">
            <input v-model="confirmPassword" type="password" name="confirm password" id="">Confirm password
           </label> 
           <button class="text-primary border rounded-3xl p-4"type="submit">Submit</button>
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