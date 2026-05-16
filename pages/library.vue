<template>
    <div class=" flex flex-col items-center">
        <img class="invert m-2 w-16" src="/book-2.svg" />
        <h1 class="text-primary text-5xl m-2 font-sans">Your Library</h1>
        <h2 class="text-secondary text-2xl m-2 font-sans">No books yet. Upload your first PDF to get started.</h2>
        <input type="file" @change="handleFileChange" id="myInput" class="bg-accent-terracotta border rounded-2xl">
        <button @click="uploadFile()" type="submit" id="myInput" class="bg-accent-terracotta p-2 rounded-xl m-2 font-sans" >Upload your first book</button>
        <h2 class="text-secondary text-2xl"> {{ file.name }} {{ size }} MB</h2>
        <h3 class="text-secondary text-xl">{{ pdfErrorMessage }}</h3>
    </div>
</template>

<script setup >
import {ref} from 'vue'
const size = ref('')
const file = ref('')
const pdfErrorMessage= ref('')

function handleFileChange(event){
    pdfErrorMessage.value= ''
    console.log(event.target.files[0]);
    file.value = (event.target.files[0]);


    size.value = Math.round((event.target.files[0].size / (1024*1024) ) )

    if(file.value.type!=='application/pdf'){
        return pdfErrorMessage.value = "Только PDF"
    }
}

async function uploadFile(){
    try{
        const formData = new FormData()
    formData.append('file', file.value)
    const response = await fetch ('/api/upload', {
        method: 'POST',
        body: formData
    })
    }catch(error){
        console.log(error)
    }
    

}

definePageMeta ({
    middleware:'auth',
    layout:'default'
})



</script>

<style></style>