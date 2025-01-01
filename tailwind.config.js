const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

module.exports = {
  baseConfig(dirname) {
    /** @type {import('tailwindcss').Config} */
    return {
      content: [
        join(dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        ...createGlobPatternsForDependencies(dirname),
      ],
      theme: {
        extend: {},
      },
      plugins: [require('flyonui')],
    };
  },
};
