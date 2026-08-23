<script setup lang="ts">
import { useBudget } from "~/entity/budget";

const { incoming, outcoming, percentage } = useBudget();
</script>

<template>
  <section class="rounded-[28px] bg-white p-5 text-zinc-950">
    <p class="text-sm font-medium text-zinc-500">Осталось бюджета</p>

    <div class="mt-2 text-3xl font-bold tracking-tight">{{ incoming }} ₸</div>

    <div class="mt-6">
      <div class="h-2 overflow-hidden rounded-full bg-zinc-200">
        <div
          class="h-full w-1 rounded-full bg-zinc-950"
          :style="{ width: `${percentage}%` }"
        />
      </div>

      <div class="mt-2 flex justify-between text-xs text-zinc-500">
        <span>{{ outcoming }} ₸ потрачено</span>
        <span>{{ percentage }}%</span>
      </div>
    </div>
  </section>
</template>
