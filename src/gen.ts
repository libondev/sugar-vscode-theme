import fs from 'node:fs'
import { getTemplate } from './template'
import {
  sugarDark,
  sugarDarkFocus,
  sugarLight,
  sugarLightFocus
} from './variable'

async function rewriteColorTheme() {

  const files: Parameters<typeof fs.writeFileSync>[] = [
    [
      'themes/dark.json',
      getTemplate({
        mode: 'dark',
        ...sugarDark
      }),
      'utf8'
    ],
    [
      'themes/light.json',
      getTemplate({
        mode: 'light',
        ...sugarLight
      }),
      'utf8'
    ],
    [
      'themes/focus-dark.json',
      getTemplate({
        mode: 'dark',
        ...sugarDarkFocus
      }),
      'utf8'
    ],
    [
      'themes/focus-light.json',
      getTemplate({
        mode: 'light',
        ...sugarLightFocus
      }),
      'utf8'
    ],
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file)
  })

}

rewriteColorTheme()
