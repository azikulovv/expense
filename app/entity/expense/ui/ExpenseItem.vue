<script setup lang="ts">
defineProps<{
  icon: string;
  type: string;
  title: string;
  amount: number;
}>();
</script>

<template>
  <button class="flex w-full items-center gap-3 py-3 text-left">
    <div
      class="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-zinc-800 text-xl"
    >
      {{ icon }}
    </div>

    <div class="min-w-0 flex-1">
      <p class="truncate font-medium text-white">
        {{ title }}
      </p>

      <p class="mt-0.5 text-xs text-zinc-500">
        {{ type }}
      </p>
    </div>

    <span class="font-semibold text-white">
      -{{ amount.toLocaleString() }} ₸
    </span>
  </button>
</template>
