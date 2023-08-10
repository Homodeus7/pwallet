<template>
  <div class="flex gap-[1em] items-center w-full">
    <div class="flex flex-col w-full">
      <div
        class="border-b-[1px]"
        :style="{
          borderColor: props.color ?? ''
        }"
      ></div>
      <div></div>
    </div>
    <slot />
    <div class="flex flex-col w-full">
      <div
        class="border-b-[1px]"
        :style="{
          borderColor: props.color ?? ''
        }"
      ></div>
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface decor {
  color?: string
}
//#334155 login color
const props = defineProps<decor>()
</script>
