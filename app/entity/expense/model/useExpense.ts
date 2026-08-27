import { api } from "~/shared/api";

export const useExpense = (id: string) => {
  const errorMessage = ref<string>();
  const expense = computed(() => api.expense.getById(id));

  if (!expense.value) {
    errorMessage.value = "Не удалось найти расход по id!";
  }

  return { expense, errorMessage };
};
