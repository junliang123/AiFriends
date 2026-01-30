<script setup>

import MenuIcon from "@/components/navbar/icon/MenuIcon.vue";
import HomeIcon from "@/components/navbar/icon/HomeIcon.vue";
import FriendIcon from "@/components/navbar/icon/FriendIcon.vue";
import CreateIcon from "@/components/navbar/icon/CreateIcon.vue";
import SearchIcon from "@/components/navbar/icon/SearchIcon.vue";
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
        <div class="navbar-center w-4/5 max-w-180">
          <div class="join w-4/5">
            <input class="input join-item rounded-l-full w-4/5" placeholder="搜索你感兴趣的内容" />
            <button class="btn join-item rounded-r-full gap-0">
              <SearchIcon />
              搜索
            </button>
          </div>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost text-lg">登录</button>
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
            <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="首页">
              <HomeIcon />
              <span class="is-drawer-close:hidden text-base ml-2">首页</span>
            </button>
          </li>

          <!-- List item -->
         <li>
            <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="好友">
              <FriendIcon />
              <span class="is-drawer-close:hidden text-base ml-2">好友</span>
            </button>
          </li>

          <li>
            <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3" data-tip="创作">
              <CreateIcon />
              <span class="is-drawer-close:hidden text-base ml-2">创作</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>