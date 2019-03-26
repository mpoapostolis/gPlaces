import proxy from "http-proxy-middleware"

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:8080/api" }))
}
