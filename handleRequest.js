const joiValidate = (schema, request, response) => {
  const { error } = schema.validate(request.body, { abortEarly: false })

  if (error) {
    response.status(400).send(error.details)
    return false
  } else {
    return true
  }
}

const handleRequest = async (schema, request, response, cb) => {
  const { body, originalUrl, method } = request

  console.log("Incoming request: " +
    JSON.stringify({ originalUrl, method, body }, null, 2)
  )

  if (!joiValidate(schema, request, response)) {
    return
  }

  try {
    const { status, responseBody } = await cb(request)

    console.log("Response: " +
      JSON.stringify({ status, responseBody }, null, 2)
    )

    response.status(status).send(responseBody)
  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    response.status(500).json(error)
  }
}

export default handleRequest
