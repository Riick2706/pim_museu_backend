const { z } = require("zod")

const formCreateValidation = z.object({
    id: z.number().min(1),
    response: z.array(z.string().max(1).min(1)),
    formName: z.enum(['santos_dumont', 'arte_moderna', 'videogames', 'olimpiadas'])
})

module.exports = { formCreateValidation }