<script setup lang="ts">
import { BottomNavigationItem } from "~/widget/bottom-navigation/ui";

const items = [
  {
    to: "/",
    icon: "home",
  },
  {
    to: "/operations",
    icon: "plus",
  },
];
</script>

<template>
  <nav
    class="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-97.5 -translate-x-1/2 rounded-3xl border border-white/80 bg-white/40 p-1.5 backdrop-blur-2xl"
  >
    <div class="grid grid-cols-2 gap-1.5">
      <BottomNavigationItem
        v-for="item in items"
        :key="item.to"
        :to="item.to"
        :icon="item.icon"
        class="flex items-center justify-center gap-2 rounded-2xl border border-transparent py-2.5 text-xs font-bold text-slate-600 transition-all duration-300 hover:text-indigo-600 aria-[current=page]:border-white/80 aria-[current=page]:bg-white/70 aria-[current=page]:text-indigo-600 aria-[current=page]:shadow-[0_4px_16px_rgba(91,134,229,0.15)]"
      />
    </div>
  </nav>
</template>
