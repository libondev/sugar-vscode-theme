import fs from 'node:fs';
import { getTemplate } from './template';
import {
  sugarDark,
  sugarDarkFleet,
  sugarDarkFocus,
  sugarDarkGithub,
  sugarDarkOne,
  sugarDarkVitesse,
  sugarDarkVS,
  sugarLight,
  sugarLightFocus,
  sugarLightGithub,
  sugarLightVitesse,
  sugarLightVS,
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
      "themes/light-vs.json",
      getTemplate({
        mode: "light",
        name: "Light VS",
        ...sugarLightVS,
      }),
      "utf8",
    ],
    [
      "themes/light-github.json",
      getTemplate({
        mode: "light",
        name: "Light Github",
        ...sugarLightGithub,
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
    [
      "themes/dark-one.json",
      getTemplate({
        mode: "dark",
        name: "Dark One",
        ...sugarDarkOne,
      }),
      "utf8",
    ],
    [
      "themes/dark-github.json",
      getTemplate({
        mode: "dark",
        name: "Dark Github",
        ...sugarDarkGithub,
      }),
      "utf8",
    ],
  ];

  files.forEach((file) => {
    fs.writeFileSync(...file)
  })

}

rewriteColorTheme()
