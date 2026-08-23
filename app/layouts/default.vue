<script setup lang="ts">
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

    <!-- Ледяная стеклянная шапка -->
    <header
      class="sticky top-0 z-40 flex items-center justify-between border-b border-white/60 bg-white/40 px-5 py-3.5 backdrop-blur-xl shadow-sm"
    >
      <div class="flex items-center gap-2">
        <span
          class="size-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        />
        <span class="text-xs font-bold tracking-wider text-slate-700 uppercase"
          >Wallet</span
        >
      </div>
      <span
        class="rounded-full border border-white/80 bg-indigo-50/80 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-600 backdrop-blur-md"
      >
        v1.0
      </span>
    </header>

    <!-- Основной контент со скроллом -->
    <main
      class="relative z-10 flex-1 overflow-auto p-4 pb-[calc(env(safe-area-inset-bottom)+100px)]"
    >
      <slot />
    </main>

    <BottomNavigation />
  </div>
</template>
