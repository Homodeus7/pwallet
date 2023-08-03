<template>
  <div class="h-[100vh] bg-black rounded-b-[6em] relative">
    <div class="wrapper h-full m-auto flex flex-col">
      <HeaderSection />
      <RegistrationForm />
    </div>
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
</style>
