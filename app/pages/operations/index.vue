<script setup lang="ts">
import { AddExpenseForm } from "~/feature/add-expense-form";
import PageHeader from "~/widget/layout/page-header.vue";

useHead({
  title: "Новая операция | Expense",
});
</script>

<template>
  <div class="flex flex-col">
    <PageHeader title="Новая операция" subtitle="Внесите данные о расходе" />

    <section
      class="mt-5 rounded-3xl border border-white/70 bg-white/40 p-5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
    >
      <AddExpenseForm class="space-y-4" />
    </section>
  </div>
</template>
