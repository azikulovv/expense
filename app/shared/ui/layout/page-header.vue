<script lang="ts" setup>
defineProps<{ to: string; title: string; subtitle: string }>();
</script>

<template>
  <header class="flex items-center gap-3 py-1">
    <NuxtLink
      :to="to"
      aria-label="Вернуться назад"
      class="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/50 text-slate-700 shadow-sm backdrop-blur-xl transition-all hover:bg-white/75 hover:text-indigo-600 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.8"
        stroke="currentColor"
        class="size-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </NuxtLink>

    <div>
      <h1 class="text-xl font-black tracking-tight text-slate-800">
        {{ title }}
      </h1>
      <p class="mt-0.5 text-xs font-semibold text-slate-500">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>
