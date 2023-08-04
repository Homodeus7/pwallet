<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LoaderIcon from '@/components/base/icons/LoaderIcon.vue'

export interface ButtonProps {
  disabled?: boolean
  primary?: boolean
  special?: boolean
  bspecial?: boolean
  connect?: boolean
  outlines?: boolean
  white?: boolean
  telegram?: boolean
  icon?: boolean
  width?: string
  loading?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {})

const emit = defineEmits(['click'])
const button = ref<HTMLElement | null>(null)

const onClick = () => {
  if (props.disabled) return
  emit('click')
}

onMounted(() => {
  try {
    const tag = button.value as any

    if (props.width) {
      tag.style.width = props.width
    }
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <button
    v-bind="props"
    :class="[
      {
        ...props
      }
    ]"
    @click="onClick"
  >
    <slot name="prefix-icon"></slot>
    <slot></slot>
    <LoaderIcon v-if="loading" size="18px" class="animate-spin" />
    <slot name="suffix-icon"></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/main.css';

$timeout: 0.1s;

button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1em;
  font: {
    weight: 500;
  }
  transition: all linear $timeout;
  &.primary {
    padding: 0.7em 1.7em;
    background: #6271eb;
    color: white;
    border: 0;
    border-radius: 0.7em;
    transition: all linear $timeout;
    @media (min-width: 768px) {
      transition: all linear $timeout;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
  &.special {
    padding: 0.7em 1.7em;
    font-size: 0.8em;
    font-weight: normal;
    color: white;
    background: #272727;
    border-radius: 3.125em;
    text-align: center;
    border: 1px solid #3d3d3d;
    text-decoration: none;
    transition: all linear $timeout;
    z-index: 1;
    @media (min-width: 768px) {
      transition: all linear $timeout;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.7;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 113%;
      height: 135%;
      left: -0.55em;
      bottom: -0.5em;
      z-index: -1;
      border-radius: 3.75em;
      border: 1px solid #303030;
    }
  }
  &.bspecial {
    padding: 0.7em 1.7em;
    font-size: 0.8em;
    font-weight: normal;
    color: white;
    background: #272727;
    border-radius: 3.125em;
    text-align: center;
    border: 1px solid #3d3d3d;
    text-decoration: none;
    transition: all linear $timeout;
    z-index: 1;
    @media (min-width: 768px) {
      transition: all linear $timeout;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.7;
      }
    }
    &::before {
      content: '';
      position: absolute;
      width: 107%;
      height: 135%;
      left: -0.55em;
      bottom: -0.5em;
      z-index: -1;
      border-radius: 3.75em;
      border: 1px solid #303030;
    }
  }
  &.white {
    padding: 0.9em 1.2em;
    background: white;
    color: black;
    transition: all linear $timeout;
    @media (min-width: 768px) {
      transition: all linear $timeout;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
  &.outlines {
    padding: 0.9em 1.2em;
    background: transparent;
    color: white;
    border: 1px solid #3d3d3d;
    @media (min-width: 768px) {
      transition: all linear $timeout;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
  &.connect {
    font-size: 0.8em;
    padding: 0.5em 3.3em;
    background: rgba(51, 65, 85, 0.4);
    transition: all linear $timeout;
    @media (min-width: 768px) {
      &:hover {
        filter: drop-shadow(0 0mm 3mm rgba(100, 127, 165, 0.5));
      }
      &:active {
        opacity: 0.8;
        filter: drop-shadow(0 0mm 3mm rgba(100, 127, 165, 0.2));
      }
    }
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    @media (min-width: 768px) {
      &:hover {
        background: #6271eb;
        color: white;
        opacity: 0.5;
      }
      &:active {
        background: #6271eb;
        color: white;
        opacity: 0.5;
      }
    }
  }
}
</style>
