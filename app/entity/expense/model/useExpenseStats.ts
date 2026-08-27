import { useExpenseList } from "~/entity/expense";

export const useExpenseStats = () => {
  const { list } = useExpenseList();

  const totalIncome = computed(() =>
    list.value
      ?.filter((item) => item.type === "income")
      ?.map((item) => item.amount)
      ?.reduce((prev, current) => prev + current, 0),
  );

  const totalExpense = computed(() =>
    list.value
      ?.filter((item) => item.type === "expense")
      ?.map((item) => item.amount)
      ?.reduce((prev, current) => prev + current, 0),
  );

  const remaining = computed(() => totalIncome.value - totalExpense.value);

  const percentage = computed(() => {
    if (!totalIncome.value) return 0;

    return Math.min(
      Math.round((totalExpense.value / totalIncome.value) * 100),
      100,
    );
  });

  const balanceLabel = computed(() => {
    const amount = remaining.value ?? 0;
    const sign = amount >= 0 ? "+" : "−";

    return `${sign} ${Math.abs(amount).toLocaleString("ru-RU")} ₸`;
  });

  const operationCount = computed(() => list.value?.length ?? 0);

  return { totalIncome, totalExpense, remaining, percentage, balanceLabel, operationCount };
};
