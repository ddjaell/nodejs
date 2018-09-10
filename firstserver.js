const http = require('http') // http
const port = 3000 //사용 포트 번호
const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
} // 서버 리퀘스트

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
