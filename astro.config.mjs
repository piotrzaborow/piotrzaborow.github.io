import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.zaborowski.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});