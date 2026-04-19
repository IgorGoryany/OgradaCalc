import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import type { ManifestOptions } from 'vite-plugin-pwa';
import { VitePWA } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> = {
  theme_color: '#161616',
  background_color: '#161616',
  icons: [
    {
      purpose: 'maskable',
      sizes: '512x512',
      src: 'icon512_maskable.png',
      type: 'image/png',
    },
    {
      purpose: 'any',
      sizes: '512x512',
      src: 'icon512_rounded.png',
      type: 'image/png',
    },
  ],
  screenshots: [
    {
      src: '/screenshots/desktop.png',
      type: 'image/png',
      sizes: '1905x917',
      form_factor: 'wide',
    },
    {
      src: '/screenshots/mobile.png',
      type: 'image/png',
      sizes: '376x818',
      form_factor: 'narrow',
    },
  ],
  orientation: 'any',
  display: 'standalone',
  lang: 'ru',
  name: 'FenceCalc',
  short_name: 'FC',
  start_url: '/',
  scope: 'https://ograda-calc.vercel.app/',
};

// https://vitejs.dev/config/x
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*{html,css,js,ts,ico.png,svg}'],
      },
      manifest,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  publicDir: 'assets',
  build: {
    outDir: 'dist',
  },
});
