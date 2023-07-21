import type { Preview } from '@storybook/react';

import { Global, css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', ['Color', 'Typo', '...'], 'modules'],
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
  ],
};

export default preview;
