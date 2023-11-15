const express = require('express')
const app = express()
const port = 3000
//route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//khi chạy app sẽ được khởi tạo từ express và lắng nghe từ cổng 3000 từ trình duyệt 
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})