import { useBudget } from "~/entity/budget";
import { useExpenseList } from "~/entity/expense";
import {
  formSchema,
  type FormSchema,
} from "~/feature/add-expense-form/model/schema";

export const useExpenseForm = () => {
  const { add } = useExpenseList();
  const { withdraw, deposit } = useBudget();

  const form = reactive<FormSchema>({
    type: "expense",
    title: "",
    amount: 0,
  });
  const errors = ref<Partial<Record<keyof FormSchema, string[]>>>({});

  function submit() {
    errors.value = {};
    const result = formSchema.safeParse(form);

    if (!result.success) {
      errors.value = result.error.flatten().fieldErrors;
      console.log(result.error.flatten().fieldErrors);

      return;
    }

    if (result.data.type === "expense") {
      withdraw(result.data.amount);
    } else {
      deposit(result.data.amount);
    }

    add({
      ...result.data,
      id: crypto.randomUUID(),
    });
  }

  return {
    form,
    errors,
    submit,
  };
};
