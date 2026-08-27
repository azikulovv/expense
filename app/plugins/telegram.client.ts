import { telegram } from "~/shared/lib/telegram";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      telegram,
    },
  };
});
