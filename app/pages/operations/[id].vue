<script lang="ts" setup>
import { useExpense } from "~/entity/expense/model/useExpense";

definePageMeta({
  hideBottomNavigation: true,
});

const route = useRoute();

const { expense, errorMessage } = useExpense(route.params.id as string);
</script>

<template>
  <template v-if="errorMessage">
    <p>{{ errorMessage }}</p>
  </template>

  <template v-else>
    <p>{{ expense?.title }}</p>
    <p>{{ expense?.amount }}</p>
    <p>{{ expense?.type }}</p>
  </template>
</template>
