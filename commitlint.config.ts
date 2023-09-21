// @ts-nocheck

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
    'enhanced-scope-enum': [
      2,
      'always',
      ['global','packages/config', 'packages/eslint', 'packages/tsconfig', 'packages/ui'],
    ],
    'header-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 120],
    'scope-min-length': [2, 'always', 4],
    'scope-empty': [2, 'never'],
  },
  plugins: [
    {
      rules: {
        'enhanced-scope-enum': (parsed, when = 'always', value = []) => {
          if (!parsed.scope) {
            return [true, ''];
          }

          // only use comma sign as seperator
          const scopeSegments = parsed.scope.split(',');

          const check = (value, enums) => {
            if (value === undefined) {
              return false;
            }
            if (!Array.isArray(enums)) {
              return false;
            }
            return enums.indexOf(value) > -1;
          };

          const negated = when === 'never';
          const result =
            value.length === 0 ||
            scopeSegments.every((scope) => check(scope, value));

          return [
            negated ? !result : result,
            `scope must ${negated ? `not` : null} be one of [${value.join(
              ', '
            )}]`,
          ];
        },
      },
    },
  ],
};
