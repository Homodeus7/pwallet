<template>
  <main ref="container" data-scroll-container class="main-bg">
    <hero-section data-scroll-section />
    <join-section data-scroll-section />
    <roadmap-section data-scroll-section />
    <presentation-section data-scroll-section />
    <footer-nav data-scroll-section />
  </main>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import JoinSection from '@/components/landing/JoinSection.vue'
import RoadmapSection from '@/components/landing/RoadmapSection.vue'
import PresentationSection from '@/components/landing/PresentationSection.vue'
import FooterNav from '@/components/landing/nav/FooterNav.vue'

import { ref, onMounted } from 'vue'
import LocomotiveScroll from 'locomotive-scroll'

const container = ref<HTMLElement | undefined>(undefined)

const setLocomotiveScroll = () => {
  new LocomotiveScroll({
    el: container.value,
    smooth: true,
    multiplier: 2
  })
}

onMounted(() => {
  setLocomotiveScroll()
})
</script>
<style lang="scss" scoped>
.main-bg {
  background: linear-gradient(to right, #b467c5, #e067a8);
  @media (min-width: 768px) {
    background: linear-gradient(to right, #e067a8, #8e67e0);
  }
}
</style>
