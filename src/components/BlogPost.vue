<template>
  <article class="blog-post">
    <h2>{{ title }}</h2>
    <div class="metadata">
      <span>{{ date }}</span>
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="content" v-html="content"></div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  tags: Array,
  content: String,
})
</script>

<style scoped>
.blog-post {
  margin: 2rem 0;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.metadata {
  color: #666;
  margin: 0.5rem 0;
}

.tag {
  background: #e9ecef;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}
</style>
