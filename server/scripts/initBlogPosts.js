import mongoose from 'mongoose'
import Post from '../models/Post.js'

// 数据库连接配置
const MONGO_URI = 'mongodb://admin:password@localhost:27017/blog?authSource=admin'

// 示例博客数据
const initialPosts = [
  {
    title: '开始我的博客之旅',
    content: `
      今天是我开始写博客的第一天。在这里，我将会分享我的技术心得、
      学习经验以及一些有趣的发现。

      期待与大家一起成长！
    `,
    excerpt: '这是我的第一篇博客文章，记录了开始写博客的初心。',
    tags: ['随笔', '生活'],
  },
  {
    title: 'MongoDB 使用技巧分享',
    content: `
      MongoDB 是一个流行的 NoSQL 数据库，本文将分享一些实用的 MongoDB 技巧：

      1. 正确使用索引
      2. 数据模型设计的最佳实践
      3. 常用查询优化方法
    `,
    excerpt: '分享一些 MongoDB 的实用技巧和最佳实践。',
    tags: ['MongoDB', '数据库', '技术'],
  },
  {
    title: 'Node.js 异步编程指南',
    content: `
      异步编程是 Node.js 的核心特性之一。本文将详细讲解：

      - Promise 的使用
      - async/await 语法
      - 常见的异步陷阱
    `,
    excerpt: '深入理解 Node.js 中的异步编程概念和实践。',
    tags: ['Node.js', 'JavaScript', '编程'],
  },
]

// 初始化数据库
async function initDatabase() {
  try {
    // 连接数据库
    await mongoose.connect(MONGO_URI)
    console.log('数据库连接成功')

    // 清空现有数据
    await Post.deleteMany({})
    console.log('已清空现有文章数据')

    // 插入示例数据
    const result = await Post.insertMany(initialPosts)
    console.log(`成功插入 ${result.length} 篇文章`)

    // 查询并显示插入的数据
    const posts = await Post.find({})
    console.log('当前数据库中的文章：')
    posts.forEach((post) => {
      console.log(`- ${post.title} (${post.tags.join(', ')})`)
    })
  } catch (error) {
    console.error('初始化数据库失败:', error)
  } finally {
    // 关闭数据库连接
    await mongoose.connection.close()
    console.log('数据库连接已关闭')
  }
}

// 运行初始化
initDatabase()
