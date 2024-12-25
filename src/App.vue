<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-brand">
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="40" height="40" />
        <h1>我的博客</h1>
      </div>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link">首页</RouterLink>
        <RouterLink to="/about" class="nav-link">关于</RouterLink>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.navbar {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-brand h1 {
  margin: 0;
  color: #2c3e50;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #42b983;
}

.main-content {
  flex: 1;
  padding: 2rem;
  /* max-width: 1200px; */
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
