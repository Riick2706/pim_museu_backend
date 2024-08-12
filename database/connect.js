const { error } = require("console");
const { default: mongoose } = require("mongoose");
const { resolve } = require("path")
const dotenv = require("dotenv").config(resolve(__dirname + '../' + '.env'))

const { DATABASE_STRING } = process.env;

async function connect() {

    const connect = await mongoose.connect(DATABASE_STRING
        ,{
            dbName:'pim_1_2_semestre'
        }
    )

    if (connect.connection.readyState !== 1) {
        throw error("Conexão com o banco mal sucedida", { code: 500 })
    }
    console.log("Conectado com sucesso ao banco de dados")
    return connect

}

module.exports = connect