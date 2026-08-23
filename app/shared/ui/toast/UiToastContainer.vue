<script setup lang="ts">
import UiToast from "./UiToast.vue";
import { useToast } from "~/shared/composables/useToast";

const { toasts, remove } = useToast();
</script>

<template>
  <div
    class="fixed top-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-107.5 -translate-x-1/2 flex-col gap-2.5 pointer-events-none"
  >
    <TransitionGroup
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 scale-95 opacity-0"
      enter-to-class="transform translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 scale-100 opacity-100"
      leave-to-class="transform -translate-y-2 scale-95 opacity-0"
    >
      <UiToast
        v-for="toast in toasts"
        :key="toast.id"
        v-bind="toast"
        @close="remove"
        class="pointer-events-auto"
      />
    </TransitionGroup>
  </div>
</template>
