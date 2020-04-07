import authenticate from "../../Login/sso-login"

const login = async (request, response) => {
  const { username, password } = request.body

  try {
    const result = await authenticate(username, password)
    console.log(result)

    if (result === "Authentication failed.") {
      response.status(401)
    } else {
      response.status(200)
    }

    response.send(result)

  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    console.log(JSON.stringify(`Incoming request: ${request}`, null, 2))

    response.status(500).json(error)
  }
}

export default login
