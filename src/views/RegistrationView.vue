<template>
  <div class="h-[100vh] bg-black rounded-b-[6em] relative background-img overflow-hidden">
    <div class="wrapper h-full m-auto flex flex-col">
      <HeaderSection />
      <RegistrationForm />
    </div>
    <img
      class="absolute bottom-[43%] translate-y-[50%] right-[33%] translate-x-[50%] z-100 sphere"
      src="@/assets/img/star_reg.png"
      alt="hero-sphere"
    />
  </div>
</template>
<script lang="ts" setup>
import HeaderSection from '@/components/nav/HeaderSection.vue'
import RegistrationForm from '@/components/inputs/RegistrationForm.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/main.css';
.wrapper {
  width: var(--container-width);
}
.background-img {
  background-image: url('@/assets/img/registration_sky.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>
