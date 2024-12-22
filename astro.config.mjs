// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  base: isProd ? "/legal" : "/",

});