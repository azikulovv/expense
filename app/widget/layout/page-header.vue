<script lang="ts" setup>
import { ArrowLeft } from "@primeicons/vue";
import IconButton from "~/shared/ui/button/IconButton.vue";

const props = defineProps<{ to?: string; title: string; subtitle: string }>();

const router = useRouter();
const { $telegram } = useNuxtApp();

onMounted(() => {
  const { to } = props;

  if (to) {
    $telegram.backButton.show().on(() => router.push(to));
  }
});

onUnmounted(() => {
  const { to } = props;

  if (to) {
    $telegram.backButton.off(() => router.push(to)).hide();
  }
});
</script>

<template>
  <header class="flex items-center justify-between gap-3 py-1">
    <div class="flex items-center gap-3">
      <NuxtLink v-if="to" :to="to" aria-label="Вернуться назад">
        <IconButton variant="secondary">
          <ArrowLeft />
        </IconButton>
      </NuxtLink>

      <div>
        <h1 class="text-xl font-black tracking-tight text-slate-800">
          {{ title }}
        </h1>
        <p class="mt-0.5 text-xs font-semibold text-slate-500">
          {{ subtitle }}
        </p>
      </div>
    </div>

    <slot />
  </header>
</template>
