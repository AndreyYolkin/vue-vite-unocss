import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetTheme } from 'unocss-preset-theme'

export default defineConfig({
  theme: {
    colors: {
      primary: '#007aff',
      button: {
        primary: '#7a00ff',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      prefix: 'ico-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: {
            primary: '#445511',
            button: {
              primary: '#554411',
            },
          },
        },
      },
      selectors: { dark: '.dark' },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
