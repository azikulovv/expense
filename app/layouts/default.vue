<script setup lang="ts">
import UiToastContainer from "~/shared/ui/toast/UiToastContainer.vue";
import { BottomNavigation } from "~/widget/bottom-navigation";

const contentSafeArea = getComputedStyle(
  document.documentElement,
).getPropertyValue("--tg-content-safe-area-inset-top");
const safeArea = getComputedStyle(document.documentElement).getPropertyValue(
  "--tg-safe-area-inset-top",
);
const appSafeArea = getComputedStyle(document.documentElement).getPropertyValue(
  "--app-safe-area-top",
);
</script>

<template>
  <div
    class="relative mx-auto flex min-h-dvh w-full max-w-107.5 flex-col overflow-hidden text-slate-800 selection:bg-indigo-500 selection:text-white"
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
      class="relative z-10 flex-1 min-h-0 overflow-auto px-4 pt-[calc(var(--app-safe-area-top)+16px)] pb-[calc(var(--app-safe-area-bottom)+100px)]"
    >
      <slot />
      <ClientOnly>
        <p>content: {{ contentSafeArea }}</p>
        <p>safearea: {{ safeArea }}</p>
        <p>app: {{ appSafeArea }}</p>
      </ClientOnly>
    </main>

    <BottomNavigation />
  </div>
</template>
