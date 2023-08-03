<template>
  <div class="h-[100vh] bg-black rounded-b-[6em] background-img relative">
    <div class="wrapper h-full m-auto flex flex-col">
      <HeaderSection />
      <LoginForm />
    </div>
    <img
      class="absolute bottom-[36%] translate-y-[50%] right-[33%] translate-x-[50%] z-100 sphere"
      src="@/assets/img/sphere_login.png"
      alt="hero-sphere"
    />
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
.background-img {
  background-image: url('@/assets/img/login_sky.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
.sphere {
  width: calc(var(--index) * var(--side-img));
}
</style>
