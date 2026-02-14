import { configs as tseslintConfigs } from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier/flat";
import pluginImport from "eslint-plugin-import";
import { configs as storybookConfigs } from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslintConfigs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  storybookConfigs["flat/recommended"],
  prettier,

  {
    ignores: [
      "build/**",
      ".react-router/**",
      ".wrangler/**",
      "node_modules/**",
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
    },
  },
]);
