import type { Expense } from "~/entity/expense/model/types";

export const useExpenseList = () => {
  const list = useState<Expense[]>("expense:list", () => [
    {
      id: "1",
      amount: 5000,
      description: "description",
      type: "food",
      title: "title",
    },
  ]);

  function add(value: Expense) {
    list.value = [...list.value, value];
  }

  function remove(value: Expense) {
    list.value = list.value.filter((item) => item.id != value.id);
  }

  return { list, add, remove };
};
