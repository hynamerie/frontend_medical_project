/// DELETE LATER


import { createServer, Model } from "miragejs"

createServer({
  models: {
    users: Model,
  },
  seeds(server) {
    server.create("user", { id: "123", email: "a@a.com", password: "123", name: "Healthy"})
  },
  routes() {
    this.namespace = "api"
    this.logging = false

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody)
      const foundUser = schema.users.findBy({ email, password})

      // if (!foundUser) {
      //     return new Response(401, {}, { message: "No user found!" })
      // }

      // foundUser.password = undefined

      return {
        user: foundUser,
        token: "Welcome to Heathy"
      }
    })
  }
})