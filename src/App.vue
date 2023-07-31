<template>
  <component :is="layout" v-if="layout" />
</template>

<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Dashboard from '@/layouts/DashboardLayout.vue'
import Landing from '@/layouts/LandingLayout.vue'

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {
    Dashboard,
    Landing
  }
}
</script>
