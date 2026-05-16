export default defineEventHandler(
    async function (event){
    const body = await readBody(event)
    return `Hello ${body.name}`
    }
)