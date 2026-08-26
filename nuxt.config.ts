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
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
      script: [
        {
          src: "https://telegram.org/js/telegram-web-app.js?63",
        },
      ],
    },
  },
});
