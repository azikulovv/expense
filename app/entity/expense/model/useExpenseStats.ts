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

  return { totalIncome, totalExpense, remaining, percentage };
};
