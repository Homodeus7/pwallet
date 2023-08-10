<template>
  <div ref="card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

export interface CardProps {
  color?: string
  radius?: string
  width?: string
  height?: string
  padding?: string
}

const props = withDefaults(defineProps<CardProps>(), {})
const card = ref<HTMLDivElement>()

onMounted(() => {
  try {
    const tag = card.value
    if (!tag) return
    tag.style.borderRadius = props.radius ?? tag.style.borderRadius
    tag.style.backgroundColor = props.color ?? tag.style.backgroundColor
    tag.style.width = props.width ?? tag.style.width
    tag.style.height = props.height ?? tag.style.height
    tag.style.padding = props.padding ?? tag.style.padding
  } catch (e) {
    console.error(e)
  }
})
</script>
