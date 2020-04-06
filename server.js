const config = require("./config")
const express = require("express")

const app = express()
const { port } = config

app.use(express.static(`${__dirname}/public`))

app.listen(port, () =>
  console.log(`Listening on :${port}`)
)
