import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import postsRoutes from './routes/posts.js'
import process from 'process'

const app = express()

// 连接数据库
connectDB()

// 中间件
app.use(cors())
app.use(express.json())

// 路由
app.use('/api/posts', postsRoutes)

// 启动服务器
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
