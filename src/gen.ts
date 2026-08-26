import fs from "node:fs"
import { getTemplate } from "./template"
import {
  sugarDark,
  sugarDarkFleet,
  sugarDarkMidnight,
  sugarDarkOne,
  sugarDarkOneMonokai,
  sugarDarkVitesse,
  sugarDarkVS,
  sugarLight,
  sugarLightVitesse,
  sugarLightVS,
} from "./variable"
type WriteFileSyncArgs = Parameters<typeof fs.writeFileSync>

async function rewriteColorTheme() {
  const files: [WriteFileSyncArgs[0], WriteFileSyncArgs[1]][] = [
    [
      "themes/dark.json",
      getTemplate({
        mode: "dark",
        name: "Dark",
        ...sugarDark,
      }),
    ],
    [
      "themes/light.json",
      getTemplate({
        mode: "light",
        name: "Light",
        ...sugarLight,
      }),
    ],
    [
      "themes/dark-vitesse.json",
      getTemplate({
        mode: "dark",
        name: "Dark Vitesse",
        ...sugarDarkVitesse,
      }),
    ],
    [
      "themes/light-vitesse.json",
      getTemplate({
        mode: "light",
        name: "Light Vitesse",
        ...sugarLightVitesse,
      }),
    ],
    [
      "themes/dark-vs.json",
      getTemplate({
        mode: "dark",
        name: "Dark VS",
        ...sugarDarkVS,
      }),
    ],
    [
      "themes/light-vs.json",
      getTemplate({
        mode: "light",
        name: "Light VS",
        ...sugarLightVS,
      }),
    ],
    [
      "themes/dark-midnight.json",
      getTemplate({
        mode: "dark",
        name: "Dark Midnight",
        ...sugarDarkMidnight,
      }),
    ],
    [
      "themes/dark-one.json",
      getTemplate({
        mode: "dark",
        name: "Dark One",
        ...sugarDarkOne,
      }),
    ],
    [
      "themes/dark-fleet.json",
      getTemplate({
        mode: "dark",
        name: "Fleet",
        ...sugarDarkFleet,
      }),
    ],
    [
      "themes/dark-one-monokai.json",
      getTemplate({
        mode: "dark",
        name: "Dark One Monokai",
        ...sugarDarkOneMonokai,
      }),
    ]
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file, "utf-8")
  })
}

rewriteColorTheme()
