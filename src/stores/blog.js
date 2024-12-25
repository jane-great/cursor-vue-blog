import { defineStore } from 'pinia'
import { API_BASE_URL } from '@/config'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
    currentPost: null,
    loading: false,
  }),

  actions: {
    async fetchPosts() {
      this.loading = true
      try {
        const response = await fetch(`${API_BASE_URL}/api/posts`)
        this.posts = await response.json()
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchPost(id) {
      this.loading = true
      try {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`)
        this.currentPost = await response.json()
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        this.loading = false
      }
    },
  },
})
