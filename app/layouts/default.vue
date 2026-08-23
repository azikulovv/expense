<script setup lang="ts">
import { BottomNavigation } from "~/widget/bottom-navigation";
</script>

<template>
  <div
    class="relative mx-auto min-h-dvh h-screen overflow-auto w-full max-w-107.5 bg-zinc-950 text-white"
  >
    <main class="p-4 pb-[calc(env(safe-area-inset-bottom)+64px)]">
      <slot />
    </main>

    <BottomNavigation />
  </div>
</template>
