<script lang="ts" setup>
import IconButton from "~/shared/ui/button/IconButton.vue";

defineProps<{ to: string; title: string; subtitle: string }>();
</script>

<template>
  <header class="flex items-center gap-3 py-1">
    <NuxtLink :to="to" aria-label="Вернуться назад">
      <IconButton variant="secondary">
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
      </IconButton>
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
