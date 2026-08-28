export type ExpenseType = "income" | "expense";

export interface Expense {
  id: string;
  type: ExpenseType;
  title: string;
  amount: number;
  updatedAt: string | Date;
  createdAt: string | Date;
}
