<script setup lang="ts">
import PageHeader from "~/widget/layout/page-header.vue";
import { BudgetStats } from "~/widget/budget";
import { ProfileCard, ProfileParameters } from "~/widget/profile";
import { User } from "@primeicons/vue";

useHead({
  title: "Профиль | Expense",
});
</script>

<template>
  <PageHeader title="Профиль" subtitle="Настройка и статистика">
    <div
      class="flex size-11 items-center justify-center rounded-2xl border border-white/80 bg-white/50 text-indigo-600 shadow-sm backdrop-blur-xl"
      aria-hidden="true"
    >
      <User />
    </div>
  </PageHeader>

  <ProfileCard />

  <BudgetStats />

  <ProfileParameters />
</template>
