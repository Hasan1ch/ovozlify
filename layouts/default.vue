<template >
    <div class="bg-dark-bg text-white p-12 ">
        <div class="flex justify-between">
            <h1 class="primary ">Ovozlify</h1>
            <button @click="logout" type="submit">Logout</button>
        
        </div>
        <slot>
        </slot>

    </div>
    
</template>

<script setup>
const supabase = useSupabaseClient()  

const logout = async()=>{
    await supabase.auth.signOut()

    navigateTo('/login')
}
</script>

<style>

</style>