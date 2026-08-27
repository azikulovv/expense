import type { Expense } from "~/entity/expense";

export const useExpenseDetails = (expense: Expense) => {
  const isIncome = computed(() => expense.type === "income");

  const typeLabel = computed(() => (isIncome.value ? "Доход" : "Расход"));

  const dateLabel = computed(() => {
    if (!expense) return "";

    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(expense.createdAt));
  });

  const amountLabel = computed(() => {
    if (!expense) return "";

    return `${isIncome.value ? "+" : "−"} ${expense.amount.toLocaleString("ru-RU")} ₸`;
  });

  const timeLabel = computed(() => {
    if (!expense) return "";

    return new Intl.DateTimeFormat("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(expense.createdAt));
  });

  return { isIncome, amountLabel, timeLabel, dateLabel, typeLabel };
};
