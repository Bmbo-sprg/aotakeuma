import { configs as tseslintConfigs } from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier/flat";
import pluginImport from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import { configs as storybookConfigs } from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslintConfigs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended(),
  storybookConfigs["flat/recommended"],
  prettier,

  {
    ignores: [
      "build/**",
      "storybook-static/**",
      ".react-router/**",
      ".wrangler/**",
      "public/**",
      "worker-configuration.d.ts",
    ],
  },

  {
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: true,
      },
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "react-refresh/only-export-components": [
        "error",
        {
          allowExportNames: ["meta", "links", "headers", "loader", "action"],
        },
      ],
    },
  },
]);
