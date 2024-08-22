const server = require("express")()
const { urlencoded, json } = require("express")
const cors = require("cors")
const { resolve } = require("path")
const routes = require("./routes/routes")
const mongoose = require("mongoose")
const connectDB = require("./database/connect")
require("dotenv").config(resolve(__dirname + '/.env'))

// CONFIG SERVER MIDDLEWARE

const { PORT } = process.env

mongoose.Promise = global.Promise

server.use(json())
server.use(urlencoded({ extended: false }))
server.use(cors())

connectDB().then(() => {

    server.get("/", (req, res) => {

        res.json({
            "Server Status:": "Ok",
            "Para mais informações sobre rotas consulte a documentação em": "https://github.com/Riick2706/pim_museu_backend"
        })
    })
    server.use('/', routes)


    server.listen(PORT, () => console.log("SERVER RUNNING AT ", PORT))

})
