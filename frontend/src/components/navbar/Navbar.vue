<script setup>
import MenuIcon from "@/components/navbar/icon/MenuIcon.vue";
import HomeIcon from "@/components/navbar/icon/HomeIcon.vue";
import FriendIcon from "@/components/navbar/icon/FriendIcon.vue";
import CreateIcon from "@/components/navbar/icon/CreateIcon.vue";
import SearchIcon from "@/components/navbar/icon/SearchIcon.vue";
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Navbar -->
      <nav class="navbar w-full bg-white border-b border-base-300">
        <div class="navbar-start">
          <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <MenuIcon />
          </label>
          <div class="px-4" style="font-size: 30px">AiFriends</div>
        </div>
        <div class="navbar-center w-4/5 max-w-180 flex justify-center">
          <div class="join w-4/5 flex justify-center">
            <input class="input join-item rounded-l-full w-4/5" placeholder="搜索你感兴趣的内容" />
            <button class="btn join-item rounded-r-full gap-0">
              <SearchIcon />
              搜索
            </button>
          </div>
        </div>
        <div class="navbar-end">
          <RouterLink
          :to="{name: 'user-account-login-index'}"
          class="btn btn-ghost text-lg"
          :class="{
            'btn-active': route.name === 'user-account-login-index' || route.name === 'user-account-register-index'
          }"
          >登录
          </RouterLink>
        </div>
      </nav>
      <!-- Page content here -->
      <slot></slot>
    </div>

    <div class="drawer-side is-drawer-close:overflow-visible">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-64">
        <!-- Sidebar content here -->
        <ul class="menu w-full grow">
          <!-- List item -->
          <li>
            <RouterLink :to="{name: 'homepage-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="首页">
              <HomeIcon />
              <span class="is-drawer-close:hidden text-base ml-2">首页</span>
            </RouterLink>
          </li>

          <!-- List item -->
         <li>
            <RouterLink :to="{name: 'friend-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="好友">
              <FriendIcon />
              <span class="is-drawer-close:hidden text-base ml-2">好友</span>
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{name: 'create-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="创作">
              <CreateIcon />
              <span class="is-drawer-close:hidden text-base ml-2">创作</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>