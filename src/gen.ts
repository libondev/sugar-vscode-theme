import fs from 'node:fs'
import { getTemplate } from './template'
import {
  darkThemeColors,
  fleetDarkThemeColors,
  lightThemeColors,
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
      'themes/dark-fleet.json',
      getTemplate({
        mode: 'dark',
        ...fleetDarkThemeColors
      }),
      'utf8'
    ],
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file)
  })

}

rewriteColorTheme()
