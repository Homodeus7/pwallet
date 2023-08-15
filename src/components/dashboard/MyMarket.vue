<template>
  <div class="w-[920px] mx-auto flex flex-col gap-[2em]">
    <h2 class="font-medium text-[1.5em] lg:text-[2.25em]">Market</h2>
    <div>
      <div class="grid grid-cols-5 justify-between">
        <div
          v-for="title in marketTableTitles"
          :key="title"
          class="py-[1em] text-start text-[0.8em] text-[#93989A] border-b border-b-[#2B2E41]"
        >
          {{ title }}
        </div>
      </div>
      <div
        v-for="nft in nfts"
        :key="nft.id"
        class="grid grid-cols-5 justify-between text-start py-[1.5em] border-b border-b-[#2B2E41]"
      >
        <div>{{ nft.id }}</div>
        <div>{{ nft.rarity }}</div>
        <div>{{ nft.network }}</div>
        <div>{{ nft.seller }}</div>
        <div class="flex gap-2">
          <img src="@/assets/icon/ethereum.svg" />
          <span>{{ toReduction(nft.price) }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <vue-awesome-paginate
        :total-items="50"
        :items-per-page="5"
        :max-pages-shown="2"
        v-model="currentPage"
        :on-click="onClickHandler"
      >
        <template #prev-button>
          <span>
            <img src="@/assets/icon/arrow-circle-left.svg" height="25" />
          </span>
        </template>
        <template #next-button>
          <span>
            <img src="@/assets/icon/arrow-circle-right.svg" height="25" />
          </span>
        </template>
      </vue-awesome-paginate>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { toReduction } from '@/use/utils'
const onClickHandler = (page: number) => {
  console.log(page)
}
const currentPage = ref(1)

const marketTableTitles = ref(['ID', 'Rarity', 'Network', 'Seller', 'Price'])

const nfts = reactive([
  {
    id: '#276378',
    rarity: 'Uncommon',
    network: 'ERC-20',
    seller: 'Name',
    price: 0.00045
  },
  {
    id: '#276378',
    rarity: 'Common',
    network: 'TRC-20',
    seller: 'Name',
    price: 0.045
  },
  {
    id: '#276378',
    rarity: 'Rare',
    network: 'BEP-20',
    seller: 'Name',
    price: 45.0
  },
  {
    id: '#276378',
    rarity: 'Uncommon',
    network: 'ERC-20',
    seller: 'Name',
    price: 0.45
  },
  {
    id: '#276378',
    rarity: 'Common',
    network: 'TRC-20',
    seller: 'Name',
    price: 0.00045
  },
  {
    id: '#276378',
    rarity: 'Rare',
    network: 'BEP-20',
    seller: 'Name',
    price: 4232
  }
])
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
}
.paginate-buttons:hover {
  color: #767eba;
}
.active-page {
  color: #767eba;
}
.active-page:hover {
}
#prev-button-active:hover {
  opacity: 0.5;
}
</style>
