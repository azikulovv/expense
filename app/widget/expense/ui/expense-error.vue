<template>
  <section
    class="mt-8 flex flex-col items-center rounded-3xl border border-white/70 bg-white/40 px-6 py-10 text-center backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.06)]"
  >
    <div
      class="flex size-14 items-center justify-center rounded-2xl border border-rose-200/80 bg-rose-50/70 text-2xl text-rose-500 shadow-sm"
    >
      !
    </div>
    <h2 class="mt-4 text-base font-extrabold text-slate-800">
      Операция не найдена
    </h2>
    <p class="mt-1 max-w-64 text-sm font-medium leading-5 text-slate-500">
      Проверьте ссылку или вернитесь к списку операций
    </p>
    <NuxtLink
      to="/"
      class="mt-6 inline-flex h-11 items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-50/80 px-5 text-sm font-bold text-indigo-600 shadow-sm transition-colors hover:bg-indigo-100"
    >
      К операциям
    </NuxtLink>
  </section>
</template>
