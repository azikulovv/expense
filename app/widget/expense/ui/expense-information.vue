<script lang="ts" setup>
import type { Expense } from "~/entity/expense";
import { useExpenseDetails } from "~/widget/expense/model/useExpenseDetails";

const props = defineProps<{ expense: Expense }>();

const { typeLabel, dateLabel } = useExpenseDetails(props.expense);
</script>

<template>
  <section class="mt-5">
    <div class="mb-3 flex items-center gap-2 px-1">
      <span
        class="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
      <h2 class="text-xs font-bold uppercase tracking-wider text-slate-600">
        Информация
      </h2>
    </div>

    <div
      class="overflow-hidden rounded-3xl border border-white/70 bg-white/30 p-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
    >
      <dl class="divide-y divide-white/70">
        <div class="flex items-center justify-between gap-4 px-3 py-3.5">
          <dt class="text-sm font-semibold text-slate-500">Название</dt>
          <dd
            class="max-w-52 truncate text-right text-sm font-extrabold text-slate-800"
          >
            {{ expense.title }}
          </dd>
        </div>

        <div class="flex items-center justify-between gap-4 px-3 py-3.5">
          <dt class="text-sm font-semibold text-slate-500">Тип операции</dt>
          <dd class="text-sm font-extrabold text-slate-800">
            {{ typeLabel }}
          </dd>
        </div>

        <div class="flex items-center justify-between gap-4 px-3 py-3.5">
          <dt class="text-sm font-semibold text-slate-500">Дата создания</dt>
          <dd class="text-right text-sm font-extrabold text-slate-800">
            {{ dateLabel }}
          </dd>
        </div>

        <div class="flex items-center justify-between gap-4 px-3 py-3.5">
          <dt class="text-sm font-semibold text-slate-500">
            Последнее изменение
          </dt>
          <dd class="text-right text-sm font-extrabold text-slate-800">
            {{ new Date(expense.updatedAt).toLocaleDateString("ru-RU") }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
