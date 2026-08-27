<script lang="ts" setup>
import { ChartBar, CreditCard, Wallet } from "@primeicons/vue";
import { useExpenseStats } from "~/entity/expense";

const { remaining, totalExpense, totalIncome, operationCount, balanceLabel } =
  useExpenseStats();
</script>

<template>
  <section class="mt-5">
    <div class="mb-3 flex items-center gap-2 px-1">
      <span
        class="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
      <h2 class="text-xs font-bold uppercase tracking-wider text-slate-600">
        Статистика
      </h2>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div
        class="rounded-3xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl shadow-[0_8px_25px_rgba(31,38,135,0.05)]"
      >
        <div
          class="flex size-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/80 text-emerald-600 shadow-sm"
        >
          <Wallet />
        </div>
        <p class="mt-4 text-xs font-bold text-slate-500">Доходы</p>
        <p class="mt-1 truncate text-lg font-black text-emerald-600">
          {{ totalIncome.toLocaleString("ru-RU") }}
        </p>
      </div>

      <div
        class="rounded-3xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl shadow-[0_8px_25px_rgba(31,38,135,0.05)]"
      >
        <div
          class="flex size-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50/80 text-indigo-600 shadow-sm"
        >
          <CreditCard />
        </div>
        <p class="mt-4 text-xs font-bold text-slate-500">Расходы</p>
        <p class="mt-1 truncate text-lg font-black text-indigo-600">
          {{ totalExpense.toLocaleString("ru-RU") }}
        </p>
      </div>
    </div>

    <div
      class="mt-3 flex items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl shadow-[0_8px_25px_rgba(31,38,135,0.05)]"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-indigo-600 shadow-sm"
        >
          <ChartBar />
        </div>
        <div>
          <p class="text-xs font-bold text-slate-500">Текущий баланс</p>
          <p
            class="mt-0.5 text-lg font-black"
            :class="remaining >= 0 ? 'text-slate-900' : 'text-rose-600'"
          >
            {{ balanceLabel }}
          </p>
        </div>
      </div>

      <div class="text-right">
        <p class="text-xs font-bold text-slate-500">Операций</p>
        <p class="mt-0.5 text-lg font-black text-slate-800">
          {{ operationCount }}
        </p>
      </div>
    </div>
  </section>
</template>
