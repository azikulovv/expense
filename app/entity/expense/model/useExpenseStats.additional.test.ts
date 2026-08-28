import { describe, expect, it, vi } from "vitest";
import type { Expense } from "~/entity/expense/model/types";
import { useExpenseStats } from "./useExpenseStats";

const state = vi.hoisted(() => ({
  list: { value: [] as Expense[] },
}));

vi.mock("~/entity/expense", () => ({
  useExpenseList: () => state,
}));

describe("useExpenseStats — дополнительные показатели", () => {
  it("считает количество операций и форматирует положительный баланс", () => {
    state.list.value = [
      {
        id: "income-1",
        type: "income",
        title: "Зарплата",
        amount: 100_000,
        createdAt: "2026-08-28T09:00:00.000Z",
        updatedAt: "2026-08-28T09:00:00.000Z",
      },
      {
        id: "expense-1",
        type: "expense",
        title: "Кофе",
        amount: 1_800,
        createdAt: "2026-08-28T10:00:00.000Z",
        updatedAt: "2026-08-28T10:00:00.000Z",
      },
    ];

    const { operationCount, balanceLabel } = useExpenseStats();

    expect(operationCount.value).toBe(2);
    expect(balanceLabel.value).toBe(
      `+ ${(98_200).toLocaleString("ru-RU")} ₸`,
    );
  });

  it("ограничивает процент расходов значением 100", () => {
    state.list.value = [
      {
        id: "income-1",
        type: "income",
        title: "Зарплата",
        amount: 10_000,
        createdAt: "2026-08-28T09:00:00.000Z",
        updatedAt: "2026-08-28T09:00:00.000Z",
      },
      {
        id: "expense-1",
        type: "expense",
        title: "Покупки",
        amount: 15_000,
        createdAt: "2026-08-28T10:00:00.000Z",
        updatedAt: "2026-08-28T10:00:00.000Z",
      },
    ];

    const { remaining, percentage, balanceLabel } = useExpenseStats();

    expect(remaining.value).toBe(-5_000);
    expect(percentage.value).toBe(100);
    expect(balanceLabel.value).toBe(
      `− ${(5_000).toLocaleString("ru-RU")} ₸`,
    );
  });

  it("возвращает нулевой процент, если доходов нет", () => {
    state.list.value = [
      {
        id: "expense-1",
        type: "expense",
        title: "Кофе",
        amount: 1_800,
        createdAt: "2026-08-28T10:00:00.000Z",
        updatedAt: "2026-08-28T10:00:00.000Z",
      },
    ];

    const { percentage } = useExpenseStats();

    expect(percentage.value).toBe(0);
  });
});
