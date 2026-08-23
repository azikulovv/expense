import { ref } from "vue";
import type { ToastProps } from "~/shared/ui/toast/UiToast.vue";

const toasts = ref<ToastProps[]>([]);

export const useToast = () => {
  const add = (toast: Omit<ToastProps, "id">, duration = 3000) => {
    const id = crypto.randomUUID();
    const newToast = { ...toast, id };

    toasts.value.push(newToast);

    if (duration > 0) {
      setTimeout(() => {
        remove(id);
      }, duration);
    }
  };

  const remove = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  };

  return {
    toasts,
    add,
    remove,
    success: (title: string, description?: string) =>
      add({ title, description, type: "success" }),
    error: (title: string, description?: string) =>
      add({ title, description, type: "error" }),
    info: (title: string, description?: string) =>
      add({ title, description, type: "info" }),
  };
};
