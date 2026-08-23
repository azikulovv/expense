import { useExpenseList } from "~/entity/expense";

export const useBudget = () => {
  const { list } = useExpenseList();

  const outcoming = computed(() =>
    list.value
      ?.filter((item) => item.type === "expense")
      ?.map((item) => item.amount)
      ?.reduce((prev, current) => prev + current, 0),
  );

  const incoming = computed(
    () =>
      list.value
        ?.filter((item) => item.type === "income")
        ?.map((item) => item.amount)
        ?.reduce((prev, current) => prev + current, 0) - outcoming.value,
  );

  const percentage = computed(() => {
    if (!incoming.value) return 0;

    return Math.min(Math.round((outcoming.value / incoming.value) * 100), 100);
  });

  return { incoming, outcoming, percentage };
};
