import type { SiteConfig } from '@mcptoolshop/site-theme';

export const config: SiteConfig = {
  title: 'MCP Tool Shop',
  description: 'AI tools for developers — built to run locally, no cloud required.',
  logoBadge: 'MT',
  brandName: 'MCP Tool Shop',
  repoUrl: 'https://github.com/mcp-tool-shop-org/mcp-tool-shop.github.io',
  footerText: 'MIT Licensed — built by <a href="https://github.com/mcp-tool-shop-org" style="color:var(--color-muted);text-decoration:underline">MCP Tool Shop</a>',

  hero: {
    badge: 'Open source',
    headline: 'AI tools that run',
    headlineAccent: 'on your machine.',
    description: 'Open-source MCP servers, desktop apps, and developer tools. Everything runs locally — your GPU, your data, no cloud required.',
    primaryCta: { href: '#tools', label: 'Browse tools' },
    secondaryCta: { href: 'https://github.com/mcp-tool-shop-org', label: 'GitHub org' },
    previews: [
      { label: 'MCP', code: 'npx file-compass            # file search agent' },
      { label: 'Voice', code: 'dotnet run --project SoundboardPlugin' },
      { label: 'Translate', code: 'ollama run translategemma:12b   # local GPU' },
    ],
  },

  sections: [
    {
      kind: 'features',
      id: 'why',
      title: 'Why MCP Tool Shop',
      subtitle: 'Tools designed for developers who value privacy and performance.',
      features: [
        { title: 'Local-first', desc: 'Every tool runs on your hardware. No API keys, no cloud bills, no data leaving your machine.' },
        { title: 'MCP native', desc: 'Built for the Model Context Protocol — plug into Claude, Cursor, and any MCP-compatible agent.' },
        { title: 'GPU-accelerated', desc: 'Translation, TTS, and image generation run on your GPU via Ollama, ONNX, and CUDA.' },
      ],
    },
    {
      kind: 'data-table',
      id: 'tools',
      title: 'Tools',
      subtitle: 'What we build.',
      columns: ['Tool', 'Category', 'Stack'],
      rows: [
        ['[File Compass](https://github.com/mcp-tool-shop-org/file-compass)', 'MCP Server', 'TypeScript'],
        ['[Tool Compass](https://github.com/mcp-tool-shop-org/tool-compass)', 'MCP Server', 'TypeScript'],
        ['[Brain-Dev](https://github.com/mcp-tool-shop-org/brain-dev)', 'MCP Server', 'TypeScript'],
        ['[Voice Soundboard](https://github.com/mcp-tool-shop-org/voice-soundboard)', 'Desktop App', 'C# · WinUI 3'],
        ['[Comfy-Headless](https://github.com/mcp-tool-shop-org/comfy-headless)', 'Automation', 'Python'],
        ['[Polyglot MCP](https://github.com/mcp-tool-shop-org/polyglot-mcp)', 'MCP Server', 'TypeScript · Ollama'],
        ['[Context Window Manager](https://github.com/mcp-tool-shop-org/context-window-manager)', 'VS Code Extension', 'TypeScript'],
      ],
    },
    {
      kind: 'code-cards',
      id: 'quickstart',
      title: 'Quick start',
      cards: [
        { title: 'MCP server', code: '# Add to your MCP config\n{\n  "file-compass": {\n    "command": "npx",\n    "args": ["-y", "file-compass"]\n  }\n}' },
        { title: 'Local translation', code: '# Install Ollama, then:\nollama pull translategemma:12b\n\n# Start the MCP translation server\nnpx polyglot-mcp' },
      ],
    },
  ],
};
