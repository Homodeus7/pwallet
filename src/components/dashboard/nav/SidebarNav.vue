<template>
  <div class="sidebar" :class="['sidebar', { sidebar_isopen: props.openSidebar }]">
    <router-link to="/nft" class="hidden lg:block">
      <img class="w-[8em] lg:w-[10.5em] pt-5 pb-10" src="@/assets/logo.svg" />
    </router-link>
    <div v-for="link in links" class="flex flex-col gap-5 text-[0.8em]">
      <div class="flex flex-col gap-4 -mb-12">
        <span>Assets</span>
        <router-link
          class="sidebar__link"
          v-for="item in link.assets"
          :key="item.name"
          :to="item.href"
          @click="item.isOpen = !item.isOpen"
        >
          <component :is="item.component"></component>
          {{ item.name }}
        </router-link>

        <div v-for="item in link.assets" :key="item.name" class="pl-12 -mt-11 mb-11">
          <transition name="slide">
            <div v-if="item.isOpen" class="list">
              <router-link
                class="sidebar__sublink border-l border-l-[#E2E8F0]"
                v-for="subitem in item.submenu"
                :to="subitem.href"
                >{{ subitem.name }}</router-link
              >
            </div>
          </transition>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <span>Dashboards:</span>
        <router-link
          class="sidebar__link"
          v-for="item in link.dashboard"
          :key="item.name"
          :to="item.href"
        >
          <component :is="item.component"></component>
          {{ item.name }}
        </router-link>
      </div>
      <div class="flex flex-col gap-4">
        <span class="pb-3">DAO:</span
        ><router-link
          class="sidebar__link"
          v-for="item in link.dao"
          :key="item.name"
          :to="item.href"
        >
          <component :is="item.component"></component>
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProposalsIcon from '@/components/base/icons/sidebar/ProposalsIcon.vue'
import MarketIcon from '@/components/base/icons/sidebar/MarketIcon.vue'
import NftIcon from '@/components/base/icons/sidebar/NftIcon.vue'
import PlayWIcon from '@/components/base/icons/sidebar/PlayWIcon.vue'
import OverviewIcon from '@/components/base/icons/sidebar/OverviewIcon.vue'
import { reactive } from 'vue'

interface Bar {
  openSidebar?: boolean
}

const props = defineProps<Bar>()

const links = reactive([
  {
    assets: [
      {
        name: 'PlayW',
        href: '/playw',
        component: PlayWIcon
      },
      { name: 'NFT', href: '/nft', component: NftIcon },
      {
        isOpen: false,
        name: 'Play Models',
        href: '/market-masters',
        component: MarketIcon,
        submenu: [
          { name: 'Market Masters', href: '/market-masters' },
          { name: 'Walking mode', href: '/walking-mode' },
          { name: 'Event Battle', href: '/event-battle' }
        ]
      }
    ],
    dashboard: [{ name: 'Project Overview', href: '/project', component: OverviewIcon }],
    dao: [{ name: 'Proposals', href: '/proposals', component: ProposalsIcon }]
  }
])
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  position: fixed;
  top: 82px;
  left: 0;
  height: 100%;
  background: #0f0f0f;
  border-right: 2px solid #2b2e41;
  padding: 20px 35px;
  transition: 0.2s;
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
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
    &:hover svg {
      stroke: #8d92ff;
    }
  }
  &__sublink {
    display: flex;
    gap: 16px;
    color: #93989a;
    padding: 12px 20px;
    margin-left: -10px;
    transition: 0.2s;
    font-weight: 300;
    font-size: 1em;
    &:hover {
      color: #8d92ff;
    }
    &:hover svg {
      stroke: #8d92ff;
    }
  }
  @media (min-width: 1024px) {
    transform: translateX(0px);
    width: 322px;
    left: 0;
    top: 0;
    z-index: 20;
  }
}
.list {
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
}
.slide-enter-from,
.slide-leave-active {
  transform: scaleY(0);
}
</style>
