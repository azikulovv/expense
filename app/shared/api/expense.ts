import { expenseList } from "~/constants/expenese-list";
import type { Expense } from "~/entity/expense";

export class ExpenseApi {
  private list: Expense[] = expenseList.toSorted(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  get getList() {
    return this.list;
  }

  getById(id: string) {
    return this.list.filter((item) => item.id === id)[0];
  }

  add(item: Omit<Expense, "id">) {
    this.list.push({ ...item, id: crypto.randomUUID() });
  }

  remove(id: string) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
