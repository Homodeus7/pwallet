<template>
  <main ref="container">
    <HeroSection />
    <JoinSection />
    <HeroSection />
    <HeroSection />
  </main>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import JoinSection from '@/components/landing/JoinSection.vue'
import { ref, onMounted } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

const container = ref(null)

const setLocomotiveScroll = () => {
  new LocomotiveScroll({
    el: container.value,
    smooth: true,
    multiplier: 6
  })
}

onMounted(() => {
  setLocomotiveScroll()
})
</script>
