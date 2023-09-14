module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'build',
        'ci',
        'docs',
        'refactor',
        'style',
        'test',
        'merge',
        'chore',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      ['package/config', 'package/eslint', 'package/tsconfig', 'package/ui'],
    ],
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 120],
    'scope-min-length': [2, 'always', 4],
  },
};
