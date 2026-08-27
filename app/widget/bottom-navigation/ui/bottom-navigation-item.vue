<script lang="ts" setup>
import { Home, PlusCircle, User } from "@primeicons/vue";

defineProps<{
  to: string;
  icon: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex flex-col items-center gap-1 text-xs font-medium w-full"
  >
    <template v-if="icon === 'home'">
      <Home />
    </template>

    <template v-else-if="icon === 'user'">
      <User />
    </template>

    <template v-else>
      <PlusCircle />
    </template>
  </NuxtLink>
</template>
