import { expect, it, describe, vi, beforeEach } from "vitest";
import { useExpenseList } from "./useExpenseList";
import type { Expense } from "./types";

describe("useExpenseList", () => {
  it("изначально содержит пустой список", () => {
    const { list } = useExpenseList();

    expect(list.value).toEqual([]);
  });

  it("добавление в список нового объекта", () => {
    const { list, add } = useExpenseList();

    const expense: Expense = {
      id: "1",
      type: "expense",
      title: "Кофе",
      amount: 100,
    };

    add(expense);

    expect(list.value).toEqual([expense]);
  });

  it("удаление из списка после добавления нового объекта", () => {
    const { list, add, remove } = useExpenseList();

    const expense: Expense = {
      id: "2",
      type: "expense",
      title: "Шоколад",
      amount: 100,
    };

    add(expense);
    remove("1");

    expect(list.value).toEqual([expense]);
  });

  it("удаление несуществующего expense", () => {
    const { list, remove } = useExpenseList();

    remove("2");
    remove("99");
    remove("random-id");

    expect(list.value).toEqual([]);
  });
});
