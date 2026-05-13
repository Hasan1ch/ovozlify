<template>
    <div class=" flex flex-col items-center">
        <img class="invert m-2 w-16" src="/book-2.svg" />
        <h1 class="text-primary text-5xl m-2 font-sans">Your Library</h1>
        <h2 class="text-secondary text-2xl m-2 font-sans">No books yet. Upload your first PDF to get started.</h2>
        <input type="file" @change="handleFileChange" id="myInput" class="bg-accent-terracotta border rounded-2xl">
        <button type="submit" id="myInput" class="bg-accent-terracotta p-2 rounded-xl m-2 font-sans" >Upload your first book</button>
    </div>
</template>

<script setup >
import {ref} from 'vue'


const myInput = ref(null)

function handleFileChange(event){
    const file = event.target.files[0]

    if (file.type!=="application/pdf"){
       return console.log("Только PDF")
    }

    const formData = new FormData()
    formData.append('file',file)
    console.log(formData.get('file'))


    async function uploadFile(formData){
        
       await fetch('/api/upload', {
            method:'POST',
            body: formData
        })
    }
    uploadFile(formData)

    console.log(event.target.files[0])
    console.log(file.size/1024/1024)

}




definePageMeta ({
    middleware:'auth',
    layout:'default'
})



</script>

<style></style>