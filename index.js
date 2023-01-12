const express = require('express')
var cors = require('cors')
const bodyParser = require("body-parser");
const GroupRouters = require("./src/router/index.js")

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/',GroupRouters)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})