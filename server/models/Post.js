import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Post', postSchema)
