<script setup lang="ts">
import { BottomNavigationItem } from "~/widget/bottom-navigation/ui";

const items = [
  {
    label: "Главная",
    to: "/",
    icon: "home",
  },
  {
    label: "Добавить",
    to: "/operations",
    icon: "plus",
  },
];
</script>

<template>
  <nav
    class="fixed inset-x-4 bottom-4 z-50 border rounded-full border-zinc-200/15 bg-zinc/90 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]"
  >
    <div class="mx-auto flex h-16 max-w-md items-center">
      <BottomNavigationItem
        v-for="item in items"
        :to="item.to"
        :label="item.label"
        :icon="item.icon"
      />
    </div>
  </nav>
</template>
