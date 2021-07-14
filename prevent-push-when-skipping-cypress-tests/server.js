const http = require("http")

const server = http.createServer((_, res) => {
  res.setHeader("Content-Type", "text/html")
  res.end()
})

server.listen(3000)
