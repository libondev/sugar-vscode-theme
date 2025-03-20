import fs from 'node:fs'
import { getTemplate } from './template'
import {
  darkThemeColors,
  fadedDarkThemeColors,
  fadedLightThemeColors,
  lightThemeColors
} from './variable'

async function rewriteColorTheme() {

  const files: Parameters<typeof fs.writeFileSync>[] = [
    [
      'themes/dark.json',
      getTemplate({
        mode: 'dark',
        ...darkThemeColors
      }),
      'utf8'
    ],
    [
      'themes/light.json',
      getTemplate({
        mode: 'light',
        ...lightThemeColors
      }),
      'utf8'
    ],
    [
      'themes/faded-dark.json',
      getTemplate({
        mode: 'dark',
        ...fadedDarkThemeColors
      }),
      'utf8'
    ],
    [
      'themes/faded-light.json',
      getTemplate({
        mode: 'light',
        ...fadedLightThemeColors
      }),
      'utf8'
    ],
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file)
  })

}

rewriteColorTheme()
