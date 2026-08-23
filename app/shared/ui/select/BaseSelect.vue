<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Option {
  label: string;
  value: string | number;
  icon?: string;
}

const props = defineProps<{
  label?: string;
  placeholder?: string;
  options: Option[];
  error?: string;
}>();

const model = defineModel<string | number>();
const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

const selectOption = (option: Option) => {
  model.value = option.value;
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));

const selectedOption = computed(() =>
  props.options.find((opt) => opt.value === model.value),
);
</script>

<template>
  <div ref="selectRef" class="relative block w-full">
    <!-- Метка селекта -->
    <span
      v-if="label"
      class="mb-2 inline-block rounded-lg border border-white/80 bg-white/50 px-2.5 py-0.5 text-xs font-semibold text-slate-700 backdrop-blur-md shadow-sm"
    >
      {{ label }}
    </span>

    <!-- Триггер выпадающего списка -->
    <button
      type="button"
      @click="isOpen = !isOpen"
      class="flex h-14 w-full items-center justify-between rounded-2xl border border-white/70 bg-white/40 px-4 text-base font-semibold text-slate-800 outline-none backdrop-blur-xl transition-all duration-200 shadow-[0_4px_20px_rgba(31,38,135,0.04)] hover:bg-white/60 focus:border-indigo-400 focus:bg-white/70 focus:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
      :class="{
        'border-rose-300! bg-rose-50/40! text-rose-900! focus:border-rose-400! focus:shadow-[0_0_20px_rgba(244,63,94,0.2)]!':
          error,
        'border-indigo-400 bg-white/70 shadow-[0_0_20px_rgba(99,102,241,0.2)]':
          isOpen,
      }"
    >
      <span v-if="selectedOption" class="flex items-center gap-2 truncate">
        <span v-if="selectedOption.icon">{{ selectedOption.icon }}</span>
        <span>{{ selectedOption.label }}</span>
      </span>
      <span v-else class="text-slate-400 font-normal">
        {{ placeholder || "Выберите вариант" }}
      </span>

      <!-- Иконка стрелки с поворотом -->
      <span
        class="text-xs text-slate-400 transition-transform duration-300"
        :class="{ 'rotate-180 text-indigo-600': isOpen }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </button>

    <!-- Выпадающее ледяное меню -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0 -translate-y-2"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 -translate-y-2"
    >
      <ul
        v-if="isOpen"
        class="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-white/80 bg-white/70 p-1.5 shadow-[0_10px_40px_rgba(31,38,135,0.15)] backdrop-blur-2xl"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-150 hover:bg-white/80 hover:text-indigo-600"
          :class="{
            'bg-indigo-50/80 text-indigo-600 border border-indigo-100/50':
              model === option.value,
          }"
        >
          <span class="flex items-center gap-2">
            <span v-if="option.icon">{{ option.icon }}</span>
            <span>{{ option.label }}</span>
          </span>
          <span v-if="model === option.value" class="text-xs text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        </li>
      </ul>
    </Transition>

    <!-- Вывод ошибки -->
    <div
      v-if="error"
      class="mt-2 inline-flex items-center gap-1.5 rounded-xl border border-rose-200/80 bg-rose-50/70 px-3 py-1 text-xs font-semibold text-rose-600 backdrop-blur-md shadow-sm"
    >
      <span>{{ error }}</span>
    </div>
  </div>
</template>
