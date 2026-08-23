<script setup lang="ts">
defineProps<{
  icon: string;
  type: string;
  title: string;
  amount: number;
}>();
</script>

<template>
  <button
    class="group flex w-full items-center gap-3.5 rounded-2xl border border-white/70 bg-white/40 p-3 text-left transition-all duration-200 backdrop-blur-xl shadow-[0_4px_20px_rgba(31,38,135,0.05)] hover:border-white/90 hover:bg-white/60 hover:shadow-[0_8px_25px_rgba(91,134,229,0.12)] active:scale-[0.98] active:bg-white/30"
  >
    <div
      class="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/80 bg-linear-to-br from-indigo-50/80 to-blue-100/60 text-xl text-indigo-600 shadow-sm transition-transform group-hover:scale-105"
    >
      {{ icon }}
    </div>

    <div class="min-w-0 flex-1">
      <p class="truncate text-sm font-bold text-slate-800">
        {{ title }}
      </p>

      <span
        class="mt-1 inline-block rounded-md border border-white/80 bg-white/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 shadow-sm"
      >
        {{ type }}
      </span>
    </div>

    <span
      class="rounded-xl border border-indigo-100 bg-indigo-50/80 px-2.5 py-1 text-xs font-extrabold text-indigo-600 backdrop-blur-md shadow-sm"
    >
      {{ type === "income" ? "+" : "-" }}{{ amount.toLocaleString() }} ₸
    </span>
  </button>
</template>
