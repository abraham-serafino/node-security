const process = require("process")

const config = {
  port: 3000
}

module.exports = {
  ...config,
  ...require(`./config-${process.env.NODE_ENV}`)
}
