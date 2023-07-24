import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img width={120} src="https://docs.sweep.dev/banner.png" style={{borderRadius: 5}}/>,
  head: (
    <head>
      <link rel="icon" type="image/png" href="./favicon.png" />
    </head>
  ),
  project: {
    link: 'https://github.com/sweepai/sweep',
  },
  chat: {
    link: 'https://discord.gg/sweep-ai',
  },
  docsRepositoryBase: 'https://github.com/sweepai/sweep-docs',
  darkMode: true,
  primaryHue: 270,
  footer: {
    text: 'Sweep AI © 2023',
  },
}

export default config
