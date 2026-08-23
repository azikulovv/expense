import { useExpenseList } from "~/entity/expense/model/useExpenseList";
import {
  formSchema,
  type FormSchema,
} from "~/feature/add-expense-form/model/schema";

export const useExpenseForm = () => {
  const { add } = useExpenseList();

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

    add({
      ...result.data,
      id: useId(),
      description: "description",
    });
  }

  return {
    form,
    errors,
    submit,
  };
};
