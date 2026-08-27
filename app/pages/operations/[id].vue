<script lang="ts" setup>
import { useExpense } from "~/entity/expense/model/useExpense";
import PageHeader from "~/widget/layout/page-header.vue";
import BaseButton from "~/shared/ui/button/BaseButton.vue";
import ExpenseCard from "~/widget/expense/ui/expense-card.vue";
import ExpenseError from "~/widget/expense/ui/expense-error.vue";
import ExpenseInformation from "~/widget/expense/ui/expense-information.vue";

definePageMeta({
  hideBottomNavigation: true,
});

useHead({
  title: "Детали операции | Expense",
});

const route = useRoute();

const { expense, errorMessage } = useExpense(route.params.id as string);
</script>

<template>
  <div class="flex min-h-full flex-col pb-4">
    <PageHeader
      to="/"
      title="Детали операции"
      subtitle="Подробная информация о записи"
    />

    <template v-if="errorMessage">
      <ExpenseError />
    </template>

    <template v-else-if="expense">
      <ExpenseCard :expense="expense" />

      <ExpenseInformation :expense="expense" />

      <NuxtLink to="/" class="mt-5">
        <BaseButton :variant="'secondary'"> Вернуться к операциям </BaseButton>
      </NuxtLink>
    </template>
  </div>
</template>
