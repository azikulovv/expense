<script setup lang="ts">
defineProps<{
  label?: string;
  placeholder?: string;
}>();

const model = defineModel<string | number>();
</script>

<template>
  <label class="block">
    <span v-if="label" class="mb-2 block text-sm font-medium text-zinc-300">
      {{ label }}
    </span>

    <input
      v-model="model"
      :placeholder="placeholder"
      class="h-14 w-full text-sm rounded-xl border border-white/5 bg-zinc-900 px-4 text-white outline-none placeholder:text-zinc-600 focus:border-white/15"
    />
  </label>
</template>
