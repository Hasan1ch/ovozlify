<template >
    <div class="bg-dark-bg">
  <div class="text-accent-terracotta bg-brown-surface p-12 rounded-xl m-8">
        <div class="flex justify-between">
            <h1 class="primary text-3xl">Ovozlify</h1>
            <button @click="logout" type="submit" class="border rounded-xl border-color-primary text-primary px-2">Logout</button>
        
        </div>
        <slot>
        </slot>
    </div>
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