
export default defineEventHandler(async(event)=>{
    const response = await readMultipartFormData(event)
    if (!response) throw createError({ statusCode: 400, message: 'Tekst oshibki' })

    const name = response.find(part=>part.filename)
    if (!name)throw createError({statusCode:400, message:'Tekst oshibki'})
    const size = name.data.length
    if (!size)throw createError({statusCode:400, message:'Tekst oshibki '})
    return {name:name.filename, size:size}
})