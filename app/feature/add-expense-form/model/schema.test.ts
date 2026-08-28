// @vitest-environment node

import { describe, expect, it } from "vitest";
import { formSchema } from "~/feature/add-expense-form/model/schema";

describe("formSchema", () => {
  it.each([
    ["expense", "Кофе", 1_800],
    ["income", "Зарплата", 250_000],
  ])("принимает корректную операцию: %s", (type, title, amount) => {
    const result = formSchema.safeParse({ type, title, amount });

    expect(result.success).toBe(true);
  });

  it.each([
    ["type", { type: "transfer", title: "Перевод", amount: 100 }],
    ["title", { type: "expense", title: "", amount: 100 }],
    ["too long title", { type: "expense", title: "a".repeat(101), amount: 100 }],
    ["amount", { type: "expense", title: "Кофе", amount: 0 }],
    ["negative amount", { type: "expense", title: "Кофе", amount: -1 }],
  ])("отклоняет некорректное поле: %s", (_, value) => {
    const result = formSchema.safeParse(value);

    expect(result.success).toBe(false);
  });

  it("возвращает ошибки по именам полей", () => {
    const result = formSchema.safeParse({
      type: "expense",
      title: "",
      amount: 0,
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors).toMatchObject({
        title: ["Введите название"],
        amount: ["Сумма должна быть больше 0"],
      });
    }
  });
});
