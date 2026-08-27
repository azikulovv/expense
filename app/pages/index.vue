<script setup lang="ts">
import { BudgetOverview } from "~/widget/budget";
import BaseButton from "~/shared/ui/button/BaseButton.vue";
import ExpenseList from "~/widget/expense/ui/expense-list.vue";
import PageHeader from "~/widget/layout/page-header.vue";

useHead({
  title: "Expense",
});
</script>

<template>
  <div class="flex flex-col">
    <!-- Шапка страницы -->
    <PageHeader title="Expenses" subtitle="Обзор текущего бюджета">
      <div
        class="inline-flex items-center gap-1.5 rounded-2xl border border-white/80 bg-white/50 px-3 py-1.5 text-xs font-bold text-indigo-600 backdrop-blur-xl shadow-sm"
      >
        <span
          class="size-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
        />
        Август 2026
      </div>
    </PageHeader>

    <!-- Обзор бюджета (BudgetOverview) -->
    <BudgetOverview class="mt-4" />

    <!-- Быстрое действие -->
    <div class="mt-4">
      <NuxtLink to="/operations">
        <BaseButton variant="primary">
          <span class="flex items-center gap-2">
            <span class="text-xl">+</span>
            <span>Добавить расход</span>
          </span>
        </BaseButton>
      </NuxtLink>
    </div>

    <!-- Список расходов (ExpenseList) -->
    <ExpenseList class="mt-6" />
  </div>
</template>
