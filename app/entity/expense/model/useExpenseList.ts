import type { Expense } from "~/entity/expense";

export const useExpenseList = () => {
  const list = useState<Expense[]>("expense:list", () => []);

  function add(value: Expense) {
    list.value = [...list.value, value];
  }

  function remove(id: string) {
    list.value = list.value.filter((item) => item.id !== id);
  }

  return { list, add, remove };
};
