<script setup></script>

<template>
  <div class="about">
    <h1>关于我的博客</h1>
    <div class="content">
      <p>这是一个使用 Vue 3 和 Express 构建的个人博客系统。</p>
      <p>主要功能：</p>
      <ul>
        <li>文章展示</li>
        <li>标签分类</li>
        <li>响应式设计</li>
      </ul>
      <p>技术栈：</p>
      <ul>
        <li>前端：Vue 3, Vite, Pinia</li>
        <li>后端：Express, MongoDB</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.content {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

p {
  margin: 16px 0;
  line-height: 1.6;
  color: #2c3e50;
}

ul {
  margin: 16px 0;
  padding-left: 20px;
}

li {
  margin: 8px 0;
  color: #2c3e50;
}
</style>
