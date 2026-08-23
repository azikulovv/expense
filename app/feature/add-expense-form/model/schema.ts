import { z } from "zod";

export const formSchema = z.object({
  type: z.enum(["expense", "income"], {
    message: "Выберите тип операции",
  }),
  title: z
    .string()
    .min(1, "Введите название")
    .max(100, "Название слишком длинное"),
  amount: z.number().positive("Сумма должна быть больше 0"),
});

export type FormSchema = z.infer<typeof formSchema>;
