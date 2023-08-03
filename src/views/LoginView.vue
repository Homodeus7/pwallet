<template>
  <div class="h-[100vh] bg-black rounded-b-[6em] relative">
    <div class="wrapper h-full m-auto flex flex-col">
      <HeaderSection />
      <LoginForm />
    </div>
  </div>
</template>
<script lang="ts" setup>
import HeaderSection from '@/components/nav/HeaderSection.vue'
import LoginForm from '@/components/inputs/LoginForm.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';
.wrapper {
  width: var(--container-width);
}
</style>
