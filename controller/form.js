const formDataBase = require("../database/schema/form")
const { formCreateValidation } = require("../database/schemaValidations/form")
const autoIncrement = require("../utils/autoIncrement")

async function newAnswer(req, res) {

    try {
        // const id = autoIncrement()

        const tabela = await formDataBase.find().sort({ "id": -1 })
        req.body.id = autoIncrement(tabela)
        formCreateValidation.parse(req.body)
        formDataBase.create(req.body)
        res.status(201).json({
            statusCode: 201,
            message: 'Formulario inserido com sucesso'
        })
    }
    catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: 'erro ao inserir novo formulario',
            err
        })
    }

}

async function downloadAnswers(req, res) {
    try {

        const resultado = await formDataBase.find({})

        if (resultado.length > 0) {
            let csv = ""

            // extract titles from object to table header
            const tableHeaders = Object.keys(resultado[0].toObject())
            tableHeaders.map((title) => csv += `${title};`)
            csv += "\n"

            //Insert all object in csv

            resultado.map((obj) => {

                tableHeaders.map((title) => {
                    csv += `${obj[title]};`
                })
                csv += "\n"
            })

            res.setHeader('Content-Type', 'text/csv');
            res.attachment('dados.csv');
            res.send(csv);
            return

        } else {
            res.status(200).json({
                statusCode: 200,
                message: 'Banco de dados vazio, insira valores.'
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            statusCode: 500,
            message: 'Erro ao baixar formulário',
            err
        });
    }
}

module.exports = { newAnswer, downloadAnswers }