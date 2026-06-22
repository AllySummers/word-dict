import { defineConfig } from 'vitest/config';

const { GITHUB_WORKSPACE: githubWorkspace, GITHUB_ACTIONS: isGithubActions } =
  // oxlint-disable-next-line node/no-process-env -- this shouldn't rely on the env package to run tests
  process.env;

export default defineConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      reporter: ['text-summary', 'html'],
      reportsDirectory: './coverage',
    },
    // https://vitest.dev/guide/reporters.html#github-actions-reporter
    reporters: isGithubActions
      ? [
          'default',
          [
            'github-actions',
            {
              onWritePath: (path: string) =>
                githubWorkspace && path.startsWith(`${githubWorkspace}/`)
                  ? path.slice(githubWorkspace.length + 1)
                  : path,
            },
          ],
          'junit',
        ]
      : ['default'],
    outputFile: isGithubActions
      ? {
          junit: './test-results/vitest-junit.xml',
        }
      : undefined,
  },
});
