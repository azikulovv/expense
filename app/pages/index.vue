<script setup lang="ts">
import { BudgetOverview } from "~/entity/budget";
import BaseButton from "~/shared/ui/button/BaseButton.vue";
import ExpenseList from "~/widget/expense-list/ui/expense-list.vue";
</script>

<template>
  <h1 class="text-2xl font-medium">Expenses</h1>

  <BudgetOverview class="mt-2" />

  <ExpenseList class="mt-4" />
</template>
