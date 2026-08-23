<script setup lang="ts">
import { useExpenseList } from "~/entity/expense/model/useExpenseList";
import ExpenseItem from "~/entity/expense/ui/ExpenseItem.vue";

const { list } = useExpenseList();
</script>

<template>
  <section>
    <h2 class="font-medium text-sm">Список</h2>

    <template v-for="(item, index) in list" :key="index">
      <ExpenseItem
        :icon="'i'"
        :type="item.type"
        :title="item.title"
        :amount="item.amount"
      />
    </template>
  </section>
</template>
