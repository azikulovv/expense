import type { Expense } from "~/entity/expense";
import { api } from "~/shared/api";

export const useExpenseList = () => {
  const apiExpense = api.expense;
  const list = useState<Expense[]>("expense:list", () => []);

  function add(item: Omit<Expense, "id">) {
    apiExpense.add(item);
  }

  function remove(id: string) {
    apiExpense.remove(id);
  }

  onMounted(() => {
    list.value = api.expense.getList;
  });

  return { list, add, remove };
};
