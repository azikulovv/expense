import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Expense } from "~/entity/expense/model/types";
import { api } from "~/shared/api";
import { useExpense } from "./useExpense";

vi.mock("~/shared/api", () => ({
  api: {
    expense: {
      getById: vi.fn(),
    },
  },
}));

const expense: Expense = {
  id: "expense-42",
  type: "expense",
  title: "Кофе",
  amount: 1_800,
  createdAt: "2026-08-28T10:00:00.000Z",
  updatedAt: "2026-08-28T10:00:00.000Z",
};

describe("useExpense", () => {
  beforeEach(() => {
    vi.mocked(api.expense.getById).mockReset();
  });

  it("возвращает найденную операцию без сообщения об ошибке", () => {
    vi.mocked(api.expense.getById).mockReturnValue(expense);

    const result = useExpense(expense.id);

    expect(api.expense.getById).toHaveBeenCalledWith(expense.id);
    expect(result.expense.value).toBe(expense);
    expect(result.errorMessage.value).toBeUndefined();
  });

  it("возвращает сообщение об ошибке, если операция не найдена", () => {
    vi.mocked(api.expense.getById).mockReturnValue(undefined);

    const result = useExpense("missing-id");

    expect(result.expense.value).toBeUndefined();
    expect(result.errorMessage.value).toBe("Не удалось найти расход по id!");
  });
});
