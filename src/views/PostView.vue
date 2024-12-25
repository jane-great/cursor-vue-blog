<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '../stores/blog'

const route = useRoute()
const blogStore = useBlogStore()
const post = ref(null)

onMounted(async () => {
  const postId = route.params.id
  await blogStore.fetchPost(postId)
  post.value = blogStore.currentPost
})
</script>

<template>
  <main class="post-view">
    <div v-if="post" class="post-content">
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <span class="date">{{ new Date(post.date).toLocaleDateString() }}</span>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="content">{{ post.content }}</div>
    </div>
    <div v-else class="loading">加载中...</div>
  </main>
</template>

<style scoped>
.post-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0 0 20px 0;
  color: #2c3e50;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: #666;
}

.tags {
  display: flex;
  gap: 10px;
}

.tag {
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
}

.content {
  line-height: 1.6;
  color: #2c3e50;
}

.loading {
  text-align: center;
  color: #666;
  padding: 40px;
}
</style>
