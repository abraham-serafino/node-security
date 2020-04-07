import authenticate from "../../Login/sso-login"
import Joi from "@hapi/joi"
import handleRequest from "../../handleRequest"

const login = async (request, response) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })

  await handleRequest(schema, request, response, async () => {
    const { username, password } = request.body

    const result = await authenticate(username, password)
    console.log(result)

    if (result === "Authentication failed.") {
      return { status: 401, responseBody: result }
    } else {
      return { status: 200, responseBody: result }
    }
  })
}

export default login
