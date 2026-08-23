<script setup lang="ts">
import UiToastContainer from "~/shared/ui/toast/UiToastContainer.vue";
import { BottomNavigation } from "~/widget/bottom-navigation";
</script>

<template>
  <div
    class="relative mx-auto flex h-screen min-h-dvh w-full max-w-107.5 flex-col overflow-hidden bg-[#E0E8F5] text-slate-800 selection:bg-indigo-500 selection:text-white"
  >
    <!-- Фоновые ледяные орбы для создания эффекта преломления стекла -->
    <div
      class="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-300/50 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-indigo-200/60 blur-3xl"
    />
    <div
      class="pointer-events-none absolute -left-10 bottom-20 h-64 w-64 rounded-full bg-slate-300/40 blur-3xl"
    />

    <UiToastContainer />

    <!-- Основной контент со скроллом -->
    <main
      class="relative z-10 flex-1 overflow-auto p-4 pb-[calc(env(safe-area-inset-bottom)+100px)]"
    >
      <slot />
    </main>

    <BottomNavigation />
  </div>
</template>
