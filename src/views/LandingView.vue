<template>
  <main ref="container" class="main-bg">
    <HeroSection data-scroll-section />
    <JoinSection data-scroll-section />
    <RoadmapSection data-scroll-section />
    <PresentationSection data-scroll-section />
    <FooterSection data-scroll-section />
  </main>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import JoinSection from '@/components/landing/JoinSection.vue'
import RoadmapSection from '@/components/landing/RoadmapSection.vue'
import PresentationSection from '@/components/landing/PresentationSection.vue'
import FooterSection from '@/components/nav/FooterSection.vue'

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
<style lang="scss">
.main-bg {
  background: linear-gradient(to right, #b467c5, #e067a8);
  @media (min-width: 768px) {
    background: linear-gradient(to right, #e067a8, #8e67e0);
  }
}
</style>
