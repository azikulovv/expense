export type ExpenseType = "income" | "exponse";

export interface Expense {
  id: string;
  type: ExpenseType;
  title: string;
  amount: number;
}
