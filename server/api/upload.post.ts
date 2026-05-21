
export default defineEventHandler(async(event)=>{
    const response = await readMultipartFormData(event)
    if (!response) throw createError({ statusCode: 400, message: 'Tekst oshibki' })
    const file = response.find(part=>part.filename)
    if (!file)throw createError({statusCode:400, message:'Tekst oshibki'})
    const size = file.data.length
    if (!size)throw createError({statusCode:400, message:'Tekst oshibki '})
    return {name:file.filename, size:size}
})