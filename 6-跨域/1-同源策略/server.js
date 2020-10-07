const express = require('express')

const app = express()

app.get('/home', (request, response) => {
  // sendFile响应一个页面当前目录下的index.html
  response.sendFile(__dirname + '/index.html')
})

app.get('/data', (request, response) => {
  response.send('用户数据')
})

app.listen(9000, () => {
  console.log('服务已经启动...')
})
