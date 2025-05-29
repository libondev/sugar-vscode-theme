import fs from 'node:fs';
import { getTemplate } from './template';
import {
  sugarDark,
  sugarDarkFleet,
  sugarDarkFocus,
  sugarDarkVitesse,
  sugarDarkVS,
  sugarLight,
  sugarLightFocus,
  sugarLightVitesse
} from './variable';

async function rewriteColorTheme() {

  const files: Parameters<typeof fs.writeFileSync>[] = [
    [
      "themes/dark.json",
      getTemplate({
        mode: "dark",
        name: "Dark",
        ...sugarDark,
      }),
      "utf8",
    ],
    [
      "themes/light.json",
      getTemplate({
        mode: "light",
        name: "Light",
        ...sugarLight,
      }),
      "utf8",
    ],
    [
      "themes/dark-focus.json",
      getTemplate({
        mode: "dark",
        name: "Dark Focus",
        ...sugarDarkFocus,
      }),
      "utf8",
    ],
    [
      "themes/light-focus.json",
      getTemplate({
        mode: "light",
        name: "Light Focus",
        ...sugarLightFocus,
      }),
      "utf8",
    ],
    [
      "themes/dark-vitesse.json",
      getTemplate({
        mode: "dark",
        name: "Dark Vitesse",
        ...sugarDarkVitesse,
      }),
      "utf8",
    ],
    [
      "themes/light-vitesse.json",
      getTemplate({
        mode: "light",
        name: "Light Vitesse",
        ...sugarLightVitesse,
      }),
      "utf8",
    ],
    [
      "themes/dark-vs.json",
      getTemplate({
        mode: "dark",
        name: "Dark VS",
        ...sugarDarkVS,
      }),
      "utf8",
    ],
    [
      "themes/dark-fleet.json",
      getTemplate({
        mode: "dark",
        name: "Dark Fleet",
        ...sugarDarkFleet,
      }),
      "utf8",
    ],
  ];

  files.forEach((file) => {
    fs.writeFileSync(...file)
  })

}

rewriteColorTheme()
