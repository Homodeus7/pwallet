<template>
  <div class="sidebar">
    <router-link to="/nft">
      <img class="w-[8em] lg:w-[10.5em] pt-5 pb-10" src="@/assets/logo.png" />
    </router-link>
    <div v-for="link in links" class="flex flex-col gap-5 text-[0.8em]">
      <div class="flex flex-col gap-4">
        <span>Assets</span>
        <router-link
          class="sidebar__link"
          v-for="(item, idx) in link.assets"
          :key="idx"
          :to="item.href"
        >
          <img class="w-[1.75em]" :src="`/categories/${item.img}`" />
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex flex-col gap-4">
        <span>Play modes:</span>
        <router-link
          class="sidebar__link"
          v-for="(item, idx) in link.play_models"
          :key="idx"
          :to="item.href"
        >
          <img class="w-[1.75em]" :src="`/categories/${item.img}`" />
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex flex-col gap-4">
        <span>Dashboards:</span>
        <router-link
          class="sidebar__link"
          v-for="(item, idx) in link.dashboard"
          :key="idx"
          :to="item.href"
        >
          <img class="w-[1.75em] img" :src="`/categories/${item.img}`" />
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex flex-col gap-4">
        <span class="pb-3">DAO:</span
        ><router-link
          class="sidebar__link"
          v-for="(item, idx) in link.dao"
          :key="idx"
          :to="item.href"
        >
          <img class="w-[1.75em]" :src="`/categories/${item.img}`" />
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const links = reactive([
  {
    assets: [
      {
        name: 'PlayW',
        href: '/playw',
        img: 'strongbox.svg'
      },
      { name: 'NFT', href: '/nft', img: 'gallery.svg' }
    ],
    play_models: [{ name: 'Market Masters', href: '/market', img: 'shop.svg' }],
    dashboard: [{ name: 'Project Overview', href: '/project', img: 'category.svg' }],
    dao: [{ name: 'Proposals', href: '/proposals', img: 'chart-success.svg' }]
  }
])
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 0;
  height: 100%;
  background: #0f0f0f;
  border-right: 2px solid #2b2e41;
  position: fixed;
  width: 322px;
  padding: 20px 46px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  z-index: 50;
  &__link {
    display: flex;
    gap: 16px;
    color: #93989a;
    border-radius: 0.65em;
    padding: 10px;
    margin-left: -10px;
    transition: 0.2s;
    font-weight: 500;
    font-size: 1em;
    margin-bottom: 8px;
    &:hover {
      color: #8d92ff;
      background-color: rgb(85, 104, 255, 0.1);
    }
  }
}
</style>
