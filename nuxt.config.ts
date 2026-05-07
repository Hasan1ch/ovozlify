// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/supabase'],
  app: { head: {link: [
    {rel:"preconnect", href:"https://fonts.googleapis.com"},
    {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:""},
    {href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap", rel:"stylesheet"}
   ]}},
  supabase:{
    redirectOptions:{
      login:'/login',
      callback:'/confirm',
      exclude:['/*']
    }
  }
})
