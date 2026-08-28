import { expect, it, describe } from "vitest";
import { useExpenseList } from "./useExpenseList";
import { useExpenseStats, type Expense } from "~/entity/expense";

const income: Expense = {
  id: "1",
  amount: 10000,
  title: "job",
  type: "income",
  createdAt: new Date(),
  updatedAt: new Date(),
};
const expense: Expense = {
  id: "2",
  amount: 5000,
  title: "coffee",
  type: "expense",
  createdAt: new Date(),
  updatedAt: new Date(),
};
const expense2: Expense = {
  id: "3",
  amount: 2000,
  title: "bread",
  type: "expense",
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("useExpenseStats", () => {
  it("изначально все переменные содержат нулевые значения", () => {
    const { totalIncome, totalExpense, remaining, percentage } =
      useExpenseStats();

    expect(totalIncome.value).toBe(0);
    expect(totalExpense.value).toBe(0);
    expect(remaining.value).toBe(0);
    expect(percentage.value).toBe(0);
  });

  it("проверка дохода без расхода", () => {
    const { list, add } = useExpenseList();
    const { totalIncome, totalExpense, remaining, percentage } =
      useExpenseStats();

    add(income);

    expect(list.value).toEqual([income]);
    expect(totalIncome.value).toBe(10000); // 10 000 взял из income
    expect(remaining.value).toBe(10000);
    expect(totalExpense.value).toBe(0);
    expect(percentage.value).toBe(0);
  });

  it("проверка расхода", () => {
    const { list, add } = useExpenseList();
    const { totalIncome, totalExpense, remaining, percentage } =
      useExpenseStats();

    add(expense);

    expect(list.value).toEqual([income, expense]);
    expect(totalIncome.value).toBe(10000); // 10 000 взял из income
    expect(remaining.value).toBe(5000); // 5 000 потому что в income 10 000 - expense 5 000
    expect(totalExpense.value).toBe(5000); // общий расход состовляет 5 000
    expect(percentage.value).toBe(50);
  });
});
