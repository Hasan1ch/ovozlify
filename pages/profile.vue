<template>
    <div class="flex justify-center items-center flex-col">
        <h1 class="text-primary text-5xl">
            Profile
        </h1>
        <h1 class="text-primary text-xl m-8">Email: {{ user.email }}</h1>
        <button type="submit" class="border rounded-xl text-secondary p-2 ">Delete account</button>
    </div>

</template>

<script setup>
const user = useSupabaseUser()


definePageMeta({
    middleware:'auth',
    layout:'default'
})


console.log(user.value)
</script>

