<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LoaderIcon from '@/components/base/icons/LoaderIcon.vue'

export interface ButtonProps {
  disabled?: boolean
  primary?: boolean
  special?: boolean
  noborder?: boolean
  outlines?: boolean
  present?: boolean
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
    background: $primary-btn-linear;
    color: #3c704c;
    border: 0;
    transition: all linear $timeout;
    @media (min-width: 768px) {
      &:hover {
        filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.9));
      }
      &:active {
        opacity: 0.8;
        filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.9));
      }
    }
    &.special {
      background: rgba(251, 233, 255, 0.1);
      color: #fff;
      border: 2px solid rgba(251, 233, 255, 0.1);
      transition: all linear $timeout;
      @media (min-width: 768px) {
        &:hover {
          background: rgba(251, 233, 255, 0.2);
          filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.9));
        }
        &:active {
          opacity: 0.7;
          filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.9));
        }
      }
    }
  }
  &.special {
    background: #fff;
    color: #3c704c;
    border: 0;
    transition: all linear $timeout;
    @media (min-width: 768px) {
      &:hover {
        filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.9));
      }
      &:active {
        opacity: 0.8;
        filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.9));
      }
    }
  }
  &.outlines {
    background: transparent;
    color: #eae288;
    border: 1px solid #eae288;
    @media (min-width: 768px) {
      &:hover {
        opacity: 0.9;
        filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.6));
      }
      &:active {
        opacity: 0.7;
        filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.9));
      }
    }
  }
  &.present {
    color: white;
    transition: all linear $timeout;
    @media (min-width: 768px) {
      transition: all linear $timeout;
      &:hover {
        color: #efd759;
        filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.9));
      }
      &:active {
        opacity: 0.8;
        filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.9));
      }
    }
  }
  &.telegram {
    background: transparent;
    color: #f0d33c;
    border: 1px solid rgba(251, 233, 255, 0.1);
    transition: all linear $timeout;
    @media (min-width: 768px) {
      &:hover {
        transition: all linear $timeout;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: $text-linear;
        filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.8));
      }
      &:active {
        opacity: 0.8;
        filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.3));
      }
    }
  }
  &.noborder {
    background: rgba(251, 233, 255, 0.1);
    transition: all linear $timeout;
    @media (min-width: 768px) {
      &:hover {
        background: rgba(251, 233, 255, 0.2);
        filter: drop-shadow(0 0mm 3mm rgba(234, 226, 136, 0.8));
      }
      &:active {
        opacity: 0.8;
        filter: drop-shadow(0 0mm 3mm rgba(237, 245, 140, 0.3));
      }
    }
  }
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
    @media (min-width: 768px) {
      &:hover {
        opacity: 0.5;
        filter: drop-shadow(0 0mm 0mm rgba(234, 226, 136, 0.3));
      }
      &:active {
        opacity: 0.5;
        filter: drop-shadow(0 0mm 0mm rgba(237, 245, 140, 0.3));
      }
    }
  }
}
</style>
