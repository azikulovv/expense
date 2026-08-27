<script lang="ts" setup>
import { ArrowLeft } from "@primeicons/vue";
import IconButton from "~/shared/ui/button/IconButton.vue";

defineProps<{ to: string; title: string; subtitle: string }>();
</script>

<template>
  <header class="flex items-center gap-3 py-1">
    <NuxtLink :to="to" aria-label="Вернуться назад">
      <IconButton variant="secondary">
        <ArrowLeft />
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
