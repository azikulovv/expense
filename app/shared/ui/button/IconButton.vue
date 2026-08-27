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
    class="flex h-11 w-11 items-center justify-center rounded-2xl border text-base font-semibold tracking-wide backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 disabled:scale-100 disabled:shadow-none"
    :class="{
      'border-white/40 bg-linear-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white shadow-[0_8px_25px_rgba(79,70,229,0.35)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.5)]':
        variant === 'primary',
      'border-white/80 bg-white/50 text-slate-800 shadow-[0_4px_20px_rgba(31,38,135,0.06)] hover:bg-white/75 hover:shadow-[0_8px_25px_rgba(31,38,135,0.12)]':
        variant === 'secondary',
      'border-white/40 bg-linear-to-r from-rose-500 to-pink-500 text-white shadow-[0_8px_25px_rgba(244,63,94,0.35)] hover:shadow-[0_12px_30px_rgba(244,63,94,0.5)]':
        variant === 'danger',
    }"
  >
    <slot />
  </button>
</template>
