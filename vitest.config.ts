import { defineConfig } from "vitest/config";
import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineConfig(
  defineVitestConfig({
    test: {
      environment: "nuxt",
      setupFiles: ["./test/setup.ts"],
    },
  }),
);
