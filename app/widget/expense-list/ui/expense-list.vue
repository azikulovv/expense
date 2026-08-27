<script setup lang="ts">
import { ExpenseItem, useExpenseList } from "~/entity/expense";

const { list } = useExpenseList();
</script>

<template>
  <section class="mt-6">
    <!-- Заголовок секции со стеклянным бейджем -->
    <div class="mb-3 flex items-center justify-between px-1">
      <div class="flex items-center gap-2">
        <span
          class="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
        />
        <h2 class="text-xs font-bold uppercase tracking-wider text-slate-600">
          Последние операции
        </h2>
      </div>

      <span
        v-if="list?.length"
        class="rounded-full border border-white/80 bg-white/50 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-600 backdrop-blur-md shadow-sm"
      >
        {{ list.length }}
      </span>
    </div>

    <!-- Основная стеклянная панель списка -->
    <div
      class="overflow-hidden rounded-3xl border border-white/70 bg-white/30 p-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
    >
      <div v-if="list?.length" class="flex flex-col gap-1.5">
        <NuxtLink
          v-for="item in list"
          :key="item.id"
          :to="`/operations/${item.id}`"
        >
          <ExpenseItem :expense="item" />
        </NuxtLink>
      </div>

      <!-- Состояние для пустого списка -->
      <div
        v-else
        class="flex flex-col items-center justify-center py-8 text-center"
      >
        <div
          class="flex size-12 items-center justify-center rounded-2xl border border-white/80 bg-indigo-50/60 text-xl text-indigo-400 backdrop-blur-md"
        >
          ❄️
        </div>
        <p class="mt-3 text-sm font-semibold text-slate-700">
          Список расходов пуст
        </p>
        <p class="mt-0.5 text-xs text-slate-400">Добавьте новую операцию</p>
      </div>
    </div>
  </section>
</template>
