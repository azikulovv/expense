<script setup lang="ts">
import { useExpenseStats } from "~/entity/expense/model/useExpenseStats";

const { incoming, outcoming, percentage } = useExpenseStats();
</script>

<template>
  <section
    class="relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-6 text-slate-800 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
  >
    <div
      class="inline-block rounded-full border border-white/80 bg-white/60 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm"
    >
      Осталось бюджета
    </div>

    <div class="mt-3 text-4xl font-bold tracking-tight text-slate-900">
      {{ incoming.toLocaleString() }}
      <span class="text-2xl font-light text-slate-500">₸</span>
    </div>

    <div class="mt-6">
      <div
        class="h-3.5 w-full overflow-hidden rounded-full border border-white/80 bg-slate-200/50 p-0.5 backdrop-blur-sm"
      >
        <div
          class="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-500 shadow-[0_2px_8px_rgba(91,134,229,0.4)] transition-all duration-500"
          :style="{ width: `${percentage}%` }"
        />
      </div>

      <div
        class="mt-3 flex justify-between text-xs font-semibold text-slate-600"
      >
        <span class="rounded-md bg-white/60 px-2 py-1 border border-white/80">
          {{ outcoming.toLocaleString() }} ₸ потрачено
        </span>
        <span
          class="rounded-md bg-indigo-50 px-2 py-1 text-indigo-600 border border-indigo-100"
        >
          {{ percentage }}%
        </span>
      </div>
    </div>
  </section>
</template>
