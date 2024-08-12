const router = require('express').Router()
const { newAnswer, downloadAnswers } = require("../controller/form")

router.get("/ping", (req, res) => res.json({ statusCode: 200, message: 'pong' }))

const form_routes = require('express').Router()

//  FORM ROUTES
form_routes.post('/', newAnswer)
form_routes.get('/download', downloadAnswers)

router.use('/form', form_routes)

module.exports = router