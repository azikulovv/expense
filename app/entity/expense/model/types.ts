export type ExpenseType = "income" | "exponse";

export interface Expense {
  id: string;
  type: string;
  title: ExpenseType;
  amount: number;
}
