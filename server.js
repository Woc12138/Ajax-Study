// 1.引入express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由规则
app.get('/server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*') // 允许跨域
  // 设置响应体
  response.send('hello express get!')
})

// all可以接受任意类型的请求（包括get、post、options）
app.all('/server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*') // 允许跨域
  response.setHeader('Access-Control-Allow-Headers', '*') // 允许所有自定义的请求头

  // 设置响应体
  response.send('hello express post!')
})

// JSON响应
app.all('/json-server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*') // 允许跨域
  response.setHeader('Access-Control-Allow-Headers', '*') // 允许所有自定义的请求头

  // 设置响应的数据
  const data = {
    name: 'wy',
  }
  // 对data对象进行字符串转换
  const str = JSON.stringify(data)
  // 设置响应体
  response.send(str) // send里只接收字符串和buffer所以需要将data对象转换成JSON格式的字符串
})

// 针对IE缓存
app.get('/ie', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*') // 允许跨域
  // 设置响应体
  response.send('hello ie!!')
})

// 延时响应
app.get('/delay', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*') // 允许跨域
  setTimeout(() => {
    response.send('hello delay!!')
  }, 3000)
})

// jQuery服务
app.all('/jquery-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*') // 允许所有自定义的请求头
  const data = { name: 'wy' }
  const str = JSON.stringify(data)
  response.send(str)
})

// axios服务
app.all('/axios-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*') // 允许所有自定义的请求头
  const data = { name: 'wy' }
  const str = JSON.stringify(data)
  response.send(str)
})

// fetch服务
app.all('/fetch-server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*') // 允许所有自定义的请求头
  const data = { name: 'wy' }
  const str = JSON.stringify(data)
  response.send(str)
})

// jsonp服务
app.all('/jsonp-server', (request, response) => {
  const data = { name: 'wy' }
  const str = JSON.stringify(data)
  response.send(`handle(${str})`)
})

//用户名检测是否存在
app.all('/check-username', (request, response) => {
  const data = {
    exist: 1,
    msg: '用户名已经存在',
  }
  let str = JSON.stringify(data)
  response.send(`handle(${str})`)
})

app.all('/jquery-jsonp-server', (request, response) => {
  const data = {
    name: 'wy',
  }
  //将数据转化为字符串
  let str = JSON.stringify(data)
  //接收 callback 参数
  let cb = request.query.callback

  //返回结果
  response.send(`${cb}(${str})`)
})

// cors跨域资源共享解决跨域问题
app.all('/cors-server', (request, response) => {
  //设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', '*')
  response.setHeader('Access-Control-Allow-Method', '*')
  // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  response.send('hello CORS')
})

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log('listening on 8000...')
})

// cnpm i nodemon -g 全局安装nodemon工具用来自动监测js文件，改变就自启动
// nodemon server.js 启动
