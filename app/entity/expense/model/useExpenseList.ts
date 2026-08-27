import type { Expense } from "~/entity/expense";
import { api } from "~/shared/api";

export const useExpenseList = () => {
  const list = useState<Expense[]>("expense:list", () => []);

  function add(item: Omit<Expense, "id">) {
    api.expense.add(item);
  }

  function remove(id: string) {
    api.expense.remove(id);
  }

  onMounted(() => {
    list.value = api.expense.getList;
  });

  return { list, add, remove };
};
