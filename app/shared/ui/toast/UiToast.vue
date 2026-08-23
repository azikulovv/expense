<script setup lang="ts">
export interface ToastProps {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "error" | "info";
}

const props = withDefaults(defineProps<ToastProps>(), {
  type: "info",
});

const emit = defineEmits<{
  (e: "close", id: string): void;
}>();
</script>

<template>
  <div
    class="relative flex w-full max-w-sm items-start gap-3 overflow-hidden rounded-2xl border border-white/80 bg-white/60 p-4 shadow-[0_10px_35px_rgba(31,38,135,0.12)] backdrop-blur-2xl transition-all duration-300"
  >
    <!-- Градиентная плашка-индикатор слева -->
    <div
      class="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-xl border border-white/80 text-xs shadow-sm"
      :class="{
        'bg-indigo-50/80 text-indigo-600 border-indigo-100': type === 'info',
        'bg-emerald-50/80 text-emerald-600 border-emerald-100':
          type === 'success',
        'bg-rose-50/80 text-rose-600 border-rose-100': type === 'error',
      }"
    >
      <span v-if="type === 'info'">ℹ️</span>
      <span v-else-if="type === 'success'">✓</span>
      <span v-else-if="type === 'error'">⚠️</span>
    </div>

    <!-- Текстовый блок -->
    <div class="flex-1">
      <h4 class="text-sm font-bold text-slate-800">
        {{ title }}
      </h4>
      <p v-if="description" class="mt-0.5 text-xs font-semibold text-slate-500">
        {{ description }}
      </p>
    </div>

    <!-- Кнопка закрытия -->
    <button
      type="button"
      @click="emit('close', id)"
      class="flex size-6 items-center justify-center rounded-lg border border-white/60 bg-white/40 text-xs text-slate-400 transition-all hover:bg-white/80 hover:text-slate-700 active:scale-95"
    >
      ✕
    </button>
  </div>
</template>
