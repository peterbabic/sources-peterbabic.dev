const http = require("http")
const fs = require("fs")

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" })
  fs.createReadStream("index.html").pipe(res)
})

server.listen(port)

console.log(`Listening on the port ${port}.`)
