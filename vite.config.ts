/// <reference types="vitest" />
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    include: ['tests/**/*.test.ts', 'src/**/*.test.ts'],
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/types/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      globalNamespaces: ['components', 'layouts'],
      dirs: ['src/components', 'src/layouts'],
      resolvers: [VueUseComponentsResolver()],
    }),
    // https://github.com/antfu/unocss
    Unocss(),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),
  ],

  server: {
    host: true,
  },
})
