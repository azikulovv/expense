<script lang="ts" setup>
import { useUser } from "~/entity/user";

const { user } = useUser();
</script>

<template>
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
        {{ user?.firstName?.[0] ?? "-" }}
      </div>

      <div class="min-w-0">
        <h2 class="truncate text-lg font-extrabold text-slate-800">
          {{ user?.firstName ?? "Ваше имя" }} {{ user?.lastName }}
        </h2>

        <p class="mt-0.5 truncate text-sm font-semibold text-slate-500">
          @{{ user?.username ?? "ваш username" }}
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
</template>
