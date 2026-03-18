# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | Yes                |

## Scope

mcp-tool-shop.github.io is a **static documentation site** built with Astro and deployed to GitHub Pages. It does not handle user data, authentication, or server-side logic.

## Reporting a Vulnerability

If you discover a security issue (e.g., XSS in generated HTML, malicious dependency):

1. **Email**: 64996768+mcp-tool-shop@users.noreply.github.com
2. **Subject**: `[SECURITY] mcp-tool-shop.github.io: <brief description>`

We will acknowledge reports within 7 days.

## Security Practices

- No secrets or credentials in this repository
- Static site — no server-side code execution
- Dependencies managed via npm with lockfile
- Deployed via GitHub Pages with HTTPS
