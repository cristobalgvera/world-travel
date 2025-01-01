module.exports = {
  '{apps,libs}/**/*.{ts}': [
    (files) => `nx affected:lint --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
  '*.{js,json}': [
    (files) => `prettier --ignore-unknown --check --write ${files.join(' ')}`,
  ],
};
