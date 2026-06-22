# **AI Agent Directives**

Before generating any code or suggesting architectural changes, you MUST read and adhere to the following directives.

## **1\. Tooling & Monorepo Rules (CRITICAL)**

- **Use mise tasks:** This monorepo uses mise for task management. **ALWAYS** use `mise run <task>` or `mise <task>` instead of raw npm, yarn, or pnpm run commands.
- **Mise MCP Server Preference:** Agents should prefer using the mise MCP server for task execution if available, and only resort to the CLI if the MCP server is not accessible.
- **Package Manager:** We use pnpm workspaces for package linking under the hood, but mise acts as the primary orchestrator. Do not suggest Nx or Turborepo.
- **Linting & Formatting:** Use oxlint and oxfmt exclusively. Do not install ESLint or Prettier unless specifically requested for a fallback edge-case.

### Key commands (all via mise)

- **Lint:** `mise lint` (oxlint)
- **Format:** `mise format` / `mise format -- --check`
- **Test:** `mise test` (vitest)
- **Typecheck:** `mise typecheck` (runs `tsc -b` across all workspaces)
- **Build:** `mise build`
