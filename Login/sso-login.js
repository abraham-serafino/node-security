import config from "../config.js"
import ActiveDirectory from "activedirectory"

const authenticate = (username, password) =>
  new Promise((resolve, reject) => {
    const activeDirectory = new ActiveDirectory(config)

    activeDirectory.authenticate(username, password, (error, auth) => {
      if (error) {
        console.log(JSON.stringify(error, null, 2))
        reject(error)
      }

      if (auth) {
        console.log("Authenticated")
        resolve("Authenticated")
      } else {
        resolve("Authentication failed")
      }
    })
  })

export default authenticate
