<script setup lang="ts">
import { useUser } from "~/entity/user";
import UiToastContainer from "~/shared/ui/toast/UiToastContainer.vue";
import { BottomNavigation } from "~/widget/bottom-navigation";

const { load } = useUser();

onMounted(() => {
  load();
});
</script>

<template>
  <div
    class="relative mx-auto flex h-dvh w-full max-w-107.5 flex-col overflow-hidden text-slate-800 selection:bg-indigo-500 selection:text-white"
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
      class="relative z-10 flex-1 px-4 overflow-y-auto pt-[calc(1rem+var(--app-safe-area-top))]"
      :class="
        $route.meta.hideBottomNavigation
          ? 'pb-(--app-safe-area-bottom)'
          : 'pb-[calc(6.25rem+var(--app-safe-area-bottom))]'
      "
    >
      <slot />
    </main>

    <BottomNavigation v-if="!$route.meta.hideBottomNavigation" />
  </div>
</template>
