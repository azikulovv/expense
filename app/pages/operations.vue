<script setup lang="ts">
import { AddExpenseForm } from "~/feature/add-expense-form";
</script>

<template>
  <div class="flex flex-col">
    <!-- Шапка страницы с кнопкой «Назад» -->
    <header class="flex items-center justify-between py-1">
      <div>
        <h2 class="text-2xl font-black tracking-tight text-slate-800">
          Новая операция
        </h2>
        <p class="mt-0.5 text-xs font-semibold text-slate-500">
          Внесите данные о расходе 
        </p>
      </div>
    </header>

    <!-- Стеклянная карточка-обертка для формы -->
    <section
      class="mt-5 rounded-3xl border border-white/70 bg-white/40 p-5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
    >
      <AddExpenseForm class="space-y-4" />
    </section>
  </div>
</template>
