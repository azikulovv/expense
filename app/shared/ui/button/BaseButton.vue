<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
  },
);
</script>

<template>
  <button
    :disabled="disabled"
    class="flex h-14 w-full items-center justify-center rounded-2xl px-5 text-sm font-semibold transition active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
    :class="{
      'bg-white text-zinc-950': variant === 'primary',
      'bg-zinc-800 text-white': variant === 'secondary',
      'bg-rose-500/15 text-rose-400': variant === 'danger',
    }"
  >
    <slot />
  </button>
</template>
