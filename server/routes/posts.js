import express from 'express'
import Post from '../models/Post.js'
const router = express.Router()

// 获取所有文章
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// 获取单个文章
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post) {
      res.json(post)
    } else {
      res.status(404).json({ message: '文章未找到' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// 创建新文章
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    excerpt: req.body.excerpt,
    tags: req.body.tags,
  })

  try {
    const newPost = await post.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// 更新文章
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post) {
      post.title = req.body.title || post.title
      post.content = req.body.content || post.content
      post.excerpt = req.body.excerpt || post.excerpt
      post.tags = req.body.tags || post.tags

      const updatedPost = await post.save()
      res.json(updatedPost)
    } else {
      res.status(404).json({ message: '文章未找到' })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// 删除文章
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post) {
      await post.deleteOne()
      res.json({ message: '文章已删除' })
    } else {
      res.status(404).json({ message: '文章未找到' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
