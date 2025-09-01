import { terminalColors } from './variable';

export function getTemplate(colors: Record<string, string>) {
  const {
    name,
    mode,
    accent,
    border,
    background,
    editorForeground,
    foreground,
    ...theme
  } = colors;

  // window blur foreground
  const inactiveForeground = foreground + '88'

  theme.key ||= theme.css
  theme.css ||= theme.variable
  theme.json ||= theme.property
  theme.regexp ||= theme.string
  theme.storage ||= theme.keyword
  theme.classes ||= theme.attribute
  theme.inputBackground ||= background
  theme.sidebarBackground ||= background
  theme.activeBackground ||= theme.sidebarBackground

  const terminalColorString = Object.keys(terminalColors).reduce((acc, cur) => {
    let [bright, normal] = terminalColors[cur]

    if (mode === 'light') {
      [normal, bright] = [bright, normal]
    }

    acc += `
    "terminal.ansiBright${cur}": "${bright}",
    "terminal.ansi${cur}": "${normal}",`

    return acc
  }, '')

  return `{
  "name": "Sugar ${name}",
  "base": "vs-${mode}",
  "colors": {
    "activityBar.activeBorder": "${accent}",
    "activityBar.background": "${theme.activeBackground}",
    "activityBar.border": "${border}",
    "activityBar.foreground": "${foreground}",
    "activityBar.inactiveForeground": "${inactiveForeground}",
    "activityBarBadge.background": "${accent}",
    "activityBarBadge.foreground": "#fff",
    "badge.background": "${accent}4f",
    "badge.foreground": "${foreground}",
    "button.border": "#0000",
    "button.background": "${accent}",
    "button.foreground": "#fff",
    "button.hoverBackground": "${accent}e8",
    "button.secondaryBackground": "${theme.inputBackground}",
    "button.secondaryForeground": "${foreground}",
    "button.secondaryHoverBackground": "${border}",
    "checkbox.background": "${theme.inputBackground}",
    "checkbox.border": "${border}",
    "debugToolBar.background": "${background}",
    "dropdown.background": "${background}",
    "dropdown.border": "${border}",
    "dropdown.foreground": "${foreground}",
    "dropdown.listBackground": "${theme.listBackground}",
    "editor.background": "${background}",
    "editor.foreground": "${editorForeground}",
    "editor.findMatchBackground": "${accent}68",
    "editor.findMatchHighlightBackground": "${accent}50",
    "editor.selectionBackground": "${accent}60",
    "editorStickyScroll.border": "${border}",
    "editorStickyScroll.shadow": "${border}50",
    "editorStickyScrollHover.background": "${border}",
    "editorWidget.background": "${background}",
    "editorGroupHeader.border": "${border}",
    "editorGroupHeader.tabsBackground": "${theme.sidebarBackground}",
    "editorGroupHeader.tabsBorder": "${border}",
    "editorGutter.addedBackground": "${theme.insert}",
    "editorGutter.deletedBackground": "${theme.delete}",
    "editorGutter.modifiedBackground": "${theme.change}",
    "editorLineNumber.activeForeground": "${foreground}",
    "editorLineNumber.foreground": "${foreground}66",
    "editorInlayHint.foreground": "${theme.symbol}",
    "errorForeground": "${theme.delete}",
    "focusBorder": "#0000",
    "foreground": "${foreground}",
    "input.border": "${border}",
    "input.background": "${theme.inputBackground}",
    "input.foreground": "${foreground}",
    "inputOption.activeBorder": "${accent}",
    "inputOption.activeForeground": "#fff",
    "inputOption.activeBackground": "${accent}",
    "list.activeSelectionForeground": "#fff",
    "list.activeSelectionBackground": "${accent}",
    "list.activeSelectionIconForeground": "${foreground}",
    "list.hoverBackground": "${foreground}2f",
    "list.highlightForeground": "${accent}",
    "list.inactiveSelectionBackground": "${border}",
    "menu.border": "${border}",
    "menu.background": "${theme.listBackground}",
    "menu.foreground": "${foreground}",
    "menu.hoverBackground": "${accent}",
    "menu.selectionBackground": "${accent}",
		"menu.selectionForeground": "#fff",
    "notificationCenterHeader.background": "${theme.listBackground}",
    "notificationCenterHeader.foreground": "${foreground}",
    "notifications.border": "${border}",
    "notifications.background": "${theme.listBackground}",
    "notifications.foreground": "${foreground}",
    "panel.background": "${background}",
    "panel.border": "${border}",
    "panelInput.border": "${border}",
    "panelTitle.activeBorder": "${accent}",
    "panelTitle.activeForeground": "${foreground}",
    "panelTitle.inactiveForeground": "${inactiveForeground}",
    "peekViewResult.background": "${theme.listBackground}",
    "pickerGroup.border": "${border}",
    "progressBar.background": "${accent}",
    "quickInput.background": "${theme.listBackground}",
    "quickInput.foreground": "${foreground}",
    "quickInputList.focusBackground": "${border}",
    "quickInputList.focusForeground": "${foreground}",
    "settings.dropdownBackground": "${theme.inputBackground}",
    "settings.dropdownBorder": "${border}",
    "settings.headerForeground": "${foreground}",
    "settings.numberInputBorder": "${border}",
		"settings.textInputBorder": "${border}",
    "sideBar.border": "${border}",
    "sideBar.background": "${theme.sidebarBackground}",
    "sideBar.foreground": "${foreground}",
    "sideBarSectionHeader.background": "${theme.sidebarBackground}",
    "sideBarSectionHeader.border": "${border}",
    "sideBarSectionHeader.foreground": "${foreground}",
    "sideBarTitle.foreground": "${foreground}",
    "statusBar.background": "${background}",
    "statusBar.border": "${border}",
    "statusBar.debuggingBackground": "${accent}",
    "statusBar.debuggingForeground": "#fff",
    "statusBar.focusBorder": "${accent}",
    "statusBar.foreground": "${foreground}",
    "statusBar.noFolderBackground": "${theme.listBackground}",
    "statusBarItem.errorBackground": "${background}",
    "statusBarItem.focusBorder": "${accent}",
    "statusBarItem.remoteBackground": "${accent}",
    "statusBarItem.remoteForeground": "#fff",
    "tab.activeBackground": "${background}",
    "tab.activeBorder": "${background}",
    "tab.activeBorderTop": "#0000",
    "tab.activeForeground": "${foreground}",
    "tab.border": "${border}",
    "tab.hoverBackground": "${theme.sidebarBackground}af",
    "tab.inactiveBackground": "${theme.sidebarBackground}",
    "tab.inactiveForeground": "${inactiveForeground}",
    "tab.lastPinnedBorder": "${foreground}33",
    "tab.unfocusedActiveBorder": "${theme.listBackground}",
    "tab.unfocusedActiveBorderTop": "${border}",
    "tab.unfocusedHoverBackground": "${theme.listBackground}",
    "terminalCursor.foreground": "${accent}",
    "terminal.foreground": "${foreground}",
    "terminal.selectionBackground": "${accent}4f",
    "terminal.tab.activeBorder": "${accent}",${terminalColorString}
    "textBlockQuote.background": "${border}",
    "textCodeBlock.background": "${border}",
    "textLink.activeForeground": "${accent}",
    "textLink.foreground": "${accent}",
    "textPreformat.background": "${border}",
    "titleBar.border": "${border}",
    "titleBar.activeForeground": "${foreground}",
    "titleBar.activeBackground": "${theme.sidebarBackground}",
    "titleBar.inactiveForeground": "${inactiveForeground}",
    "titleBar.inactiveBackground": "${theme.sidebarBackground}",
    "welcomePage.progress.foreground": "${accent}",
    "welcomePage.tileBackground": "${border}"
  },
  "semanticHighlighting": true,
  "tokenColors": [
    {
      "scope": [
        "comment",
        "string.comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": "${theme.comment}"
      }
    },
    {
      "scope": [
        "support",
        "property",
        "variable",
        "identifier",
        "attribute.name",
        "custom.variable",
        "custom.punctuation",
        "meta.property-value.scss",
        "support.variable.property",
        "entity.name.function.scss",
        "keyword.operator.gradient",
        "meta.at-rule.keyframe.less",
        "meta.function-call.arguments",
        "support.type.custom-property",
        "punctuation.definition.custom-property.less"
      ],
      "settings": {
        "foreground": "${theme.variable}"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name.html.vue"
      ],
      "settings": {
        "foreground": "${['Vitesse', 'VS'].find(key => name.includes(key))
      ? theme.variable
      : theme.attribute}"
      }
    },
    {
      "scope": [
        "support.variable",
        "variable.language"
      ],
      "settings": {
        "foreground": "${theme.caller}"
      }
    },
    {
      "scope": [
        "constant",
        "entity.name.constant",
        "meta.definition.variable",
        "constant.character.escape",
        "keyword.operator.or.regexp",
        "punctuation.definition.group",
        "keyword.operator.quantifier.regexp",
        "punctuation.definition.character-class.regexp"
      ],
      "settings": {
        "foreground": "${theme.constant}"
      }
    },
    {
      "scope": [
        "meta.group.regexp",
        "keyword.control.anchor.regexp",
        "constant.other.character-class"
      ],
      "settings": {
        "foreground": "${theme.regexp}"
      }
    },
    {
      "scope": [
        "string",
        "source.ini",
        "markup.underline.link",
        "meta.embedded.assembly",
				"meta.attribute-selector.scss",
        "constant.other.color.rgb-value",
        "support.constant.property-value",
        "string punctuation.section.embedded source"
      ],
      "settings": {
        "foreground": "${theme.string}"
      }
    },
    {
      "scope": [
        "constant.language",
        "meta.module-reference"
      ],
      "settings": {
        "foreground": "${theme.boolean}"
      }
    },
    {
      "scope": [
        "number",
        "constant.numeric",
        "keyword.other.unit",
        "meta.at-rule.keyframes.scss",
        "entity.other.keyframe-offset",
        "entity.other.attribute-name.scss",
        "source.css.less keyword.other.keyframe-selector.less"
      ],
      "settings": {
        "foreground": "${theme.number}"
      }
    },
    {
      "scope": [
        "variable.parameter.misc.css",
        "variable.parameter.url.scss",
        "entity.other.attribute-name",
        "punctuation.definition.entity.",
        "meta.at-rule.utility.body.tailwind",
        "invalid.deprecated.entity.other.attribute-name",
        "entity.other.attribute-name.parent-selector-suffix"
      ],
      "settings": {
        "foreground": "${theme.attribute}"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.class"
      ],
      "settings": {
        "foreground": "${theme.classes}"
      }
    },
    {
      "scope": [
        "meta.property-name",
        "meta.function-call.less",
        "variable.other.property",
        "meta.object-literal.key",
        "meta.definition.property",
        "variable.object.property",
        "support.variable.property",
        "support.constant.property",
        "variable.other.enummember",
        "variable.other.object.property",
        "variable.other.constant.property",
        "constant.language.import-export-all"
      ],
      "settings": {
        "foreground": "${theme.property}"
      }
    },
    {
			"scope": [
				"source.coffee.embedded",
				"support.type.property-name.css",
				"support.type.property-name.less",
        "support.type.vendor-prefix.less",
        "support.type.vendored.property-name.css",
        "keyword.other.keyframe-selector.less",
        "support.type.property-name.media",
        "meta.at-rule.media.header.css",
        "meta.property-value.css",
        "entity.name.tag.custom.css",
        "entity.name.tag.custom.scss",
        "meta.at-rule.keyframe.less",
        "variable.other.constant.animation-name",
        "support.constant.vendored.property-value.css"
			],
			"settings": {
				"foreground": "${theme.property}"
			}
    },
    {
      "scope": [
        "constant.language.null",
        "constant.language.undefined"
      ],
      "settings": {
        "foreground": "${theme.nil}"
      }
    },
    {
      "scope": [
        "entity.name.tag"
      ],
      "settings": {
        "foreground": "${theme.tag}"
      }
    },
    {
      "scope": [
        "entity.name.tag.yaml",
        "keyword.other.definition.ini",
        "support.type.property-name.json"
      ],
      "settings": {
        "foreground": "${theme.json}"
      }
    },
    {
      "scope": [
        "storage.type",
        "markup.heading",
        "storage.modifier",
        "entity.name.section.markdown",
        "variable.other.link.underline",
        "keyword.operator.logic",
        "keyword.operator.logical.and",
        "keyword.operator.logical.scss",
        "keyword.operator.logical.python",
        "keyword.operator.logical.feature",
        "punctuation.definition.template-expression"
      ],
      "settings": {
        "foreground": "${theme.storage}"
      }
    },
    {
      "scope": [
        "keyword",
        "constant.character",
        "keyword.operator.new",
        "storage.type.class.jsdoc",
        "punctuation.separator.less",
        "keyword.operator.expression",
        "support.type.object.module.js"
      ],
      "settings": {
        "foreground": "${theme.keyword}"
      }
    },
    {
      "scope": [
        "entity",
        "entity.name",
        "support.function",
        "meta.function-call",
        "entity.name.function",
        "variable.language.super",
				"entity.name.operator.custom-literal",
				"source.powershell variable.other.member"
      ],
      "settings": {
        "foreground": "${theme.function}"
      }
    },
    {
      "scope": [
        "entity.name.type.class",
        "entity.name.type.module",
        "support.class.component",
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": "${theme.class}"
      }
    },
    {
      "scope": [
        "support.type",
        "support.class",
        "meta.function",
        "entity.name.type",
        "meta.type.parameters",
				"meta.type.annotation",
				"meta.namespace.declaration",
        "variable.language.relations.prisma"
      ],
      "settings": {
        "foreground": "${theme.type}"
      }
    },
    {
      "scope": [
        "storage.type.error",
        "storage.type.string",
        "storage.type.symbol",
        "storage.type.numeric",
        "storage.type.boolean",
        "support.type.builtin",
        "support.type.primitive"
      ],
      "settings": {
        "foreground": "${theme.baseType}"
      }
    },
    {
      "scope": [
        "meta.jsx.children",
        "meta.embedded.block.html"
      ],
      "settings": {
        "foreground": "${editorForeground}"
      }
    },
    {
      "scope": [
        "keyword.operator.ternary",
        "keyword.operator.logical",
        "keyword.operator.bitwise",
        "keyword.operator.increment",
        "keyword.operator.decrement",
        "keyword.operator.relational",
        "keyword.operator.comparison",
        "keyword.operator.arithmetic",
        "invalid.illegal.combinator.less"
      ],
      "settings": {
        "foreground": "${theme.operator}"
      }
    },
    {
      "scope": [
        "source.ts",
        "delimiter",
        "meta.block",
        "meta.brace",
        "punctuation",
        "meta.parameters",
        "keyword.operator",
        "meta.objectliteral",
        "meta.array.literal",
        "source.prisma.array",
        "punctuation.accessor",
        "meta.type.annotation",
        "meta.feature-query.css",
        "meta.function.calc.css",
        "source.prisma.embedded",
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.attribute.directive",
        "entity.name.tag.reference",
        "storage.type.function.arrow",
        "support.constant.handlebars",
        "keyword.operator.assignment",
        "punctuation.section.function",
        "punctuation.separator.key-value",
        "meta.at-rule.supports.header.css",
        "punctuation.definition.parameters",
        "meta.tag.structure.input.void.html",
        "punctuation.definition.typeparameters",
        "punctuation.definition.attribute-selector",
        "source.css.less punctuation.definition.group",
        "meta.embedded.block.github-actions-expression",
        "invalid.illegal.character-not-allowed-here.html"
      ],
      "settings": {
        "foreground": "${theme.symbol}"
      }
    },
    {
      "scope": "markup.strikethrough",
      "settings": {
        "fontStyle": "strikethrough"
      }
    },
    {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
			"scope": [
        "markup.inserted",
        "punctuation.definition.inserted"
      ],
			"settings": {
				"foreground": "${theme.insert}"
			}
		},
		{
			"scope": [
        "markup.deleted",
        "punctuation.definition.deleted"
      ],
			"settings": {
				"foreground": "${theme.delete}"
			}
		},
		{
			"scope": [
        "markup.changed",
        "punctuation.definition.changed"
      ],
			"settings": {
				"foreground": "${theme.change}"
			}
		},
    {
      "scope": [
        "markup.ignored",
        "markup.untracked"
      ],
      "settings": {
        "foreground": "#2f363d"
      }
    },
    {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#b392f0",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#79b8ff"
      }
    }
  ]
}`
}

// function adjustHexColor(hexColor: string, relativeValue: number) {
//   hexColor = hexColor.replace(/^#/, '');

//   const rgb = [
//     parseInt(hexColor.slice(0, 2), 16),
//     parseInt(hexColor.slice(2, 4), 16),
//     parseInt(hexColor.slice(4, 6), 16),
//   ];

//   const r = Math.floor(Math.max(0, Math.min(255, rgb[0] * relativeValue)));
//   const g = Math.floor(Math.max(0, Math.min(255, rgb[1] * relativeValue)));
//   const b = Math.floor(Math.max(0, Math.min(255, rgb[2] * relativeValue)));

//   const adjustedHexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

//   return adjustedHexColor;
// }
