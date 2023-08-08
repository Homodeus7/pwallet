<template>
  <header class="header">
    <router-link to="/dashboard">Hello world!</router-link>
    <div></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: #0f0f0f;
  border-bottom: 2px solid #2b2e41;
  padding: 0 50px 0 30px;
  height: 124px;
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}
</style>
