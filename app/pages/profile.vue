<script setup lang="ts">
import { ChartBar, CreditCard, List, User, Wallet } from "@primeicons/vue";
import { useExpenseList, useExpenseStats } from "~/entity/expense";
import { getTelegramWebApp } from "~/shared/lib/telegram/web-app";
import PageHeader from "~/widget/layout/page-header.vue";

useHead({
  title: "Профиль | Expense",
});

const { list } = useExpenseList();
const { totalIncome, totalExpense, remaining } = useExpenseStats();

const displayName = ref("Мой профиль");
const profileSubtitle = ref("Личные финансы в одном месте");
const initials = ref("E");

onMounted(() => {
  const user = getTelegramWebApp()?.initDataUnsafe?.user;

  if (!user) return;

  displayName.value = [user.first_name, user.last_name]
    .filter(Boolean)
    .join(" ");
  profileSubtitle.value = user.username
    ? `@${user.username}`
    : "Telegram аккаунт";
  initials.value =
    `${user.first_name?.[0] ?? ""}${user.last_name?.[0] ?? ""}`
      .trim()
      .toUpperCase() || "E";
});

const formatAmount = (amount: number) => `${amount.toLocaleString("ru-RU")} ₸`;

const balanceLabel = computed(() => {
  const amount = remaining.value ?? 0;
  const sign = amount >= 0 ? "+" : "−";

  return `${sign} ${Math.abs(amount).toLocaleString("ru-RU")} ₸`;
});

const operationCount = computed(() => list.value?.length ?? 0);
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

  <section
    class="relative mt-5 overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-5 backdrop-blur-2xl shadow-[0_12px_38px_rgba(31,38,135,0.08)]"
  >
    <div
      class="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full bg-indigo-200/50 blur-3xl"
    />
    <div class="relative flex items-center gap-4">
      <div
        class="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/90 bg-linear-to-br from-indigo-500 via-indigo-600 to-sky-500 text-xl font-black text-white shadow-[0_8px_22px_rgba(79,70,229,0.28)]"
        aria-hidden="true"
      >
        {{ initials }}
      </div>

      <div class="min-w-0">
        <h2 class="truncate text-lg font-extrabold text-slate-800">
          {{ displayName }}
        </h2>
        <p class="mt-0.5 truncate text-sm font-semibold text-slate-500">
          {{ profileSubtitle }}
        </p>
      </div>
    </div>

    <div
      class="relative mt-5 flex w-fit items-center gap-2 rounded-2xl border border-white/80 bg-white/50 px-3 py-2.5 text-xs font-semibold text-slate-600 shadow-sm"
    >
      <span
        class="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.55)]"
      />
      Профиль активен
    </div>
  </section>

  <section class="mt-5">
    <div class="mb-3 flex items-center gap-2 px-1">
      <span
        class="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
      <h2 class="text-xs font-bold uppercase tracking-wider text-slate-600">
        Статистика
      </h2>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div
        class="rounded-3xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl shadow-[0_8px_25px_rgba(31,38,135,0.05)]"
      >
        <div
          class="flex size-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/80 text-emerald-600 shadow-sm"
        >
          <Wallet />
        </div>
        <p class="mt-4 text-xs font-bold text-slate-500">Доходы</p>
        <p class="mt-1 truncate text-lg font-black text-emerald-600">
          {{ formatAmount(totalIncome ?? 0) }}
        </p>
      </div>

      <div
        class="rounded-3xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl shadow-[0_8px_25px_rgba(31,38,135,0.05)]"
      >
        <div
          class="flex size-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50/80 text-indigo-600 shadow-sm"
        >
          <CreditCard />
        </div>
        <p class="mt-4 text-xs font-bold text-slate-500">Расходы</p>
        <p class="mt-1 truncate text-lg font-black text-indigo-600">
          {{ formatAmount(totalExpense ?? 0) }}
        </p>
      </div>
    </div>

    <div
      class="mt-3 flex items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl shadow-[0_8px_25px_rgba(31,38,135,0.05)]"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-indigo-600 shadow-sm"
        >
          <ChartBar />
        </div>
        <div>
          <p class="text-xs font-bold text-slate-500">Текущий баланс</p>
          <p
            class="mt-0.5 text-lg font-black"
            :class="remaining >= 0 ? 'text-slate-900' : 'text-rose-600'"
          >
            {{ balanceLabel }}
          </p>
        </div>
      </div>

      <div class="text-right">
        <p class="text-xs font-bold text-slate-500">Операций</p>
        <p class="mt-0.5 text-lg font-black text-slate-800">
          {{ operationCount }}
        </p>
      </div>
    </div>
  </section>

  <section class="mt-5">
    <div class="mb-3 flex items-center gap-2 px-1">
      <span
        class="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.6)]"
      />
      <h2 class="text-xs font-bold uppercase tracking-wider text-slate-600">
        Параметры
      </h2>
    </div>

    <div
      class="overflow-hidden rounded-3xl border border-white/70 bg-white/30 p-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
    >
      <div class="flex items-center gap-3 px-3 py-3.5">
        <div
          class="flex size-9 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-sm font-black text-indigo-600 shadow-sm"
        >
          ₸
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-extrabold text-slate-800">Валюта</p>
          <p class="mt-0.5 text-xs font-semibold text-slate-500">
            Казахстанский тенге
          </p>
        </div>
        <span
          class="rounded-xl border border-indigo-100 bg-indigo-50/80 px-2.5 py-1 text-xs font-extrabold text-indigo-600"
        >
          KZT
        </span>
      </div>

      <div class="flex items-center gap-3 border-t border-white/70 px-3 py-3.5">
        <div
          class="flex size-9 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-indigo-600 shadow-sm"
        >
          <List />
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-sm font-extrabold text-slate-800">Все операции</p>
          <p class="mt-0.5 text-xs font-semibold text-slate-500">
            Просмотр истории расходов и доходов
          </p>
        </div>
        <NuxtLink
          to="/"
          aria-label="Открыть все операции"
          class="flex size-9 items-center justify-center rounded-xl border border-white/80 bg-white/60 text-slate-500 shadow-sm transition-colors hover:bg-white/80 hover:text-indigo-600"
        >
          <span class="text-lg leading-none">›</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
