import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      script: [
        {
          src: "https://telegram.org/js/telegram-web-app.js?63",
        },
      ],
    },
  },
});
