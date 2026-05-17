import { defineConfig } from "vitest/config";

// Storybook の addon-vitest とは別に、workers/ の unit テスト用の設定
export default defineConfig({
  test: {
    include: ["workers/**/*.test.ts"],
    environment: "node",
  },
});
