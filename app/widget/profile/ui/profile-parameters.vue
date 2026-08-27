<script setup lang="ts">
import { List } from "@primeicons/vue";
</script>

<template>
  <section class="mt-5">
    <div class="mb-3 flex items-center gap-2 px-1">
      <span
        class="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
      <h2 class="text-xs font-bold uppercase tracking-wider text-slate-600">
        Параметры
      </h2>
    </div>

    <div
      class="overflow-hidden rounded-3xl border border-white/70 bg-white/30 p-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
    >
      <div class="flex items-center gap-3 px-3 py-3.5">
        <div
          class="flex size-9 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-sm font-black text-indigo-600 shadow-sm"
        >
          ₸
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-extrabold text-slate-800">Валюта</p>
          <p class="mt-0.5 text-xs font-semibold text-slate-500">
            Казахстанский тенге
          </p>
        </div>
        <span
          class="rounded-xl border border-indigo-100 bg-indigo-50/80 px-2.5 py-1 text-xs font-extrabold text-indigo-600"
        >
          KZT
        </span>
      </div>

      <div class="flex items-center gap-3 border-t border-white/70 px-3 py-3.5">
        <div
          class="flex size-9 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-indigo-600 shadow-sm"
        >
          <List />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-extrabold text-slate-800">Все операции</p>
          <p class="mt-0.5 text-xs font-semibold text-slate-500">
            Просмотр истории расходов и доходов
          </p>
        </div>
        <NuxtLink
          to="/"
          aria-label="Открыть все операции"
          class="flex size-9 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-slate-500 shadow-sm transition-colors hover:bg-white/80 hover:text-indigo-600"
        >
          <span class="text-lg leading-none">›</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
