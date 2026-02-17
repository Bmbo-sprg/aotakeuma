import type { Preview } from "@storybook/react-vite";
import {
  withRouter,
  reactRouterParameters,
} from "storybook-addon-remix-react-router";
import "../app/app.css";

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
