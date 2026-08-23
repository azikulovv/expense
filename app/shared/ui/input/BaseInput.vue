<script setup lang="ts">
defineProps<{
  label?: string;
  placeholder?: string;
  error?: string;
}>();

const model = defineModel<string | number>();
</script>

<template>
  <label class="block">
    <!-- Метка поля ввода -->
    <span
      v-if="label"
      class="mb-2 inline-block rounded-lg border border-white/80 bg-white/50 px-2.5 py-0.5 text-xs font-semibold text-slate-700 backdrop-blur-md shadow-sm"
    >
      {{ label }}
    </span>

    <!-- Поле ввода -->
    <input
      v-model="model"
      :placeholder="placeholder"
      class="h-14 w-full rounded-2xl border border-white/70 bg-white/40 px-4 text-base font-semibold text-slate-800 outline-none backdrop-blur-xl transition-all duration-200 placeholder:text-slate-400 shadow-[0_4px_20px_rgba(31,38,135,0.04)] focus:border-indigo-400 focus:bg-white/70 focus:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
      :class="{
        '!border-rose-300 !bg-rose-50/40 !text-rose-900 focus:!border-rose-400 focus:!shadow-[0_0_20px_rgba(244,63,94,0.2)]':
          error,
      }"
    />

    <!-- Сообщение об ошибке -->
    <div
      v-if="error"
      class="mt-2 inline-flex items-center gap-1.5 rounded-xl border border-rose-200/80 bg-rose-50/70 px-3 py-1 text-xs font-semibold text-rose-600 backdrop-blur-md shadow-sm"
    >
      <span>⚠️</span>
      <span>{{ error }}</span>
    </div>
  </label>
</template>
