import type { Expense } from "~/entity/expense";

export class ExpenseApi {
  private list: Expense[] = [];

  get getList() {
    return this.list;
  }

  add(item: Omit<Expense, "id">) {
    this.list.push({ ...item, id: crypto.randomUUID() });
  }

  remove(id: string) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
