let db = db.getSiblingDB('admin')
db.auth('admin', 'password')

// 创建 blog 数据库
db = db.getSiblingDB('blog')

// 创建 blog 专用用户
db.createUser({
  user: 'blog_user',
  pwd: 'blog_password',
  roles: [
    {
      role: 'readWrite',
      db: 'blog',
    },
  ],
})

// 创建一些初始集合
db.createCollection('posts')
db.createCollection('users')
db.createCollection('comments')
