<script lang="ts" setup>
import type { Expense } from "~/entity/expense";
import { useExpenseDetails } from "~/widget/expense/model/useExpenseDetails";

const props = defineProps<{ expense: Expense }>();

const { amountLabel, isIncome, timeLabel, typeLabel, dateLabel } =
  useExpenseDetails(props.expense);
</script>

<template>
  <section
    class="relative mt-6 overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-5 backdrop-blur-2xl shadow-[0_12px_38px_rgba(31,38,135,0.08)]"
  >
    <div
      class="pointer-events-none absolute -right-12 -top-14 size-40 rounded-full bg-indigo-200/40 blur-3xl"
    />

    <div class="relative flex items-start justify-between gap-4">
      <div
        class="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/90 bg-linear-to-br from-indigo-50/90 to-blue-100/70 text-2xl font-black text-indigo-600 shadow-sm"
        aria-hidden="true"
      >
        ₸
      </div>

      <span
        class="rounded-xl border px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider shadow-sm"
        :class="
          isIncome
            ? 'border-emerald-100 bg-emerald-50/80 text-emerald-600'
            : 'border-indigo-100 bg-indigo-50/80 text-indigo-600'
        "
      >
        {{ typeLabel }}
      </span>
    </div>

    <div class="relative mt-6">
      <p class="text-sm font-bold text-slate-500">{{ expense.title }}</p>
      <p
        class="mt-1 text-4xl font-black tracking-tight"
        :class="isIncome ? 'text-emerald-600' : 'text-slate-900'"
      >
        {{ amountLabel }}
      </p>
      <p class="mt-2 text-xs font-semibold text-slate-400">
        {{ dateLabel }} · {{ timeLabel }}
      </p>
    </div>
  </section>
</template>
