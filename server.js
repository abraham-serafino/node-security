const config = require("./config")
const express = require("express")

const app = express()
const { port } = config

app.use(express.static(`${__dirname}/client/build`))

app.listen(port, () =>
  console.log(`Listening on :${port}`)
)
