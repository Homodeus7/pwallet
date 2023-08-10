<template>
  <div>
    <h2 class="font-medium text-3xl pb-[1em]">Bridge</h2>
    <base-card color="#242731" radius="16px" padding="30px 24px" class="flex flex-col gap-[1.2em]">
      <base-selector name="Select NFT" :options="nfts" v-model="name"> </base-selector>
      <base-selector name="To Network" :options="networks" v-model="network"> </base-selector>
      <base-button primary>Send NFT</base-button>
    </base-card>
  </div>
</template>
<script lang="ts" setup>
import BaseCard from '@/components/base/BaseCard.vue'
import BaseSelector from '@/components/base/BaseSelector.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { reactive, ref } from 'vue'

const name = ref('Name1')
const network = ref('Network1')
const nfts = reactive([
  {
    label: 'Name1',
    value: 'Name1'
  },
  {
    label: 'Name2',
    value: 'Name2'
  },
  {
    label: 'Name3',
    value: 'Name3'
  }
])

const networks = reactive([
  {
    label: 'Network1',
    value: 'Network1'
  },
  {
    label: 'Network2',
    value: 'Network2'
  },
  {
    label: 'Network3',
    value: 'Network3'
  }
])
</script>
