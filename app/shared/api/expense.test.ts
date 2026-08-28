// @vitest-environment node

import { beforeEach, describe, expect, it, vi } from "vitest";
import { ExpenseApi } from "~/shared/api/expense";

const expense = {
  type: "expense" as const,
  title: "Кофе",
  amount: 1_800,
  createdAt: "2026-08-28T10:00:00.000Z",
  updatedAt: "2026-08-28T10:00:00.000Z",
};

describe("ExpenseApi", () => {
  beforeEach(() => {
    vi.spyOn(crypto, "randomUUID").mockReturnValue(
      "generated-expense-id" as `${string}-${string}-${string}-${string}-${string}`,
    );
  });

  it("возвращает операции в порядке от новых к старым", () => {
    const api = new ExpenseApi();

    expect(api.getList.map(({ id }) => id)).toEqual([
      "expense-2",
      "expense-1",
      "expense-3",
      "expense-4",
      "expense-5",
      "expense-6",
    ]);
  });

  it("находит операцию по id и возвращает undefined для неизвестного id", () => {
    const api = new ExpenseApi();

    expect(api.getById("expense-2")).toMatchObject({
      id: "expense-2",
      title: "Такси",
    });
    expect(api.getById("missing-id")).toBeUndefined();
  });

  it("добавляет операцию с автоматически созданным id", () => {
    const api = new ExpenseApi();

    api.add(expense);

    expect(api.getById("generated-expense-id")).toEqual({
      ...expense,
      id: "generated-expense-id",
    });
  });

  it("удаляет только операцию с переданным id", () => {
    const api = new ExpenseApi();

    api.remove("expense-2");

    expect(api.getById("expense-2")).toBeUndefined();
    expect(api.getList).toHaveLength(5);
    expect(api.getById("expense-1")).toBeDefined();
  });
});
