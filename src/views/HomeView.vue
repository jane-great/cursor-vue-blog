<template>
  <main class="main-container">
    <h1 class="page-title">我的博客</h1>
    <div class="posts-container">
      <article v-for="post in posts" :key="post._id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p class="excerpt">{{ post.excerpt }}</p>
        <div class="meta">
          <span class="date">{{ new Date(post.date).toLocaleDateString() }}</span>
          <router-link :to="{ name: 'post', params: { id: post._id } }" class="read-more">
            阅读更多
          </router-link>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBlogStore } from '../stores/blog'

const blogStore = useBlogStore()
const posts = ref([])

onMounted(async () => {
  await blogStore.fetchPosts()
  posts.value = blogStore.posts
})
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.5em;
}

.posts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.post-card {
  margin-bottom: 30px;
  padding: 25px;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.post-card h2 {
  margin: 0 0 15px 0;
  color: #2c3e50;
  font-size: 1.5em;
}

.excerpt {
  color: #666;
  margin: 15px 0;
  line-height: 1.6;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  margin-top: 20px;
}

.read-more {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.read-more:hover {
  background-color: rgba(66, 185, 131, 0.1);
  text-decoration: none;
}
</style>
