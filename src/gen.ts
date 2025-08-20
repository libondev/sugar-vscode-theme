import fs from 'node:fs';
import { getTemplate } from './template';
import {
  sugarDark, sugarDarkFocus,
  sugarDarkGithub,
  sugarDarkMidnight,
  sugarDarkOne,
  sugarDarkVitesse,
  sugarDarkVS,
  sugarLight,
  sugarLightFocus,
  sugarLightOne,
  sugarLightVitesse,
  sugarLightVS
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
      "themes/dark-focus.json",
      getTemplate({
        mode: "dark",
        name: "Dark Focus",
        ...sugarDarkFocus,
      }),
    ],
    [
      "themes/light-focus.json",
      getTemplate({
        mode: "light",
        name: "Light Focus",
        ...sugarLightFocus,
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
      "themes/dark-github.json",
      getTemplate({
        mode: "dark",
        name: "Dark Github",
        ...sugarDarkGithub,
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
      "themes/light-one.json",
      getTemplate({
        mode: "light",
        name: "Light One",
        ...sugarLightOne,
      }),
    ],
  ];

  files.forEach((file) => {
    // @ts-expect-error
    fs.writeFileSync(...file, 'utf-8')
  })

}

rewriteColorTheme()
