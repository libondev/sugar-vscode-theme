export function getTemplate(colors: Record<string, string>) {
  const {
    name,
    mode,
    accent,
    border,
    background,
    inactiveBorder,
    listBackground,
    editorForeground,
    foreground,
    inputBackground,
    ...theme
  } = colors;

  theme.json ||= theme.css
  theme.storage ||= theme.keyword
  theme.classes ||= theme.attribute

  return `{
  "name": "Sugar ${mode.slice(0, 1).toUpperCase()}${mode.slice(1)}",
  "base": "vs-${mode}",
  "colors": {
    "activityBar.activeBorder": "${accent}",
    "activityBar.background": "${background}",
    "activityBar.border": "${border}",
    "activityBar.foreground": "${foreground}",
    "activityBar.inactiveForeground": "${inactiveBorder}",
    "activityBarBadge.background": "${accent}",
    "activityBarBadge.foreground": "#fff",
    "badge.background": "${inputBackground}",
    "badge.foreground": "${foreground}",
    "button.border": "#0000",
    "button.background": "${accent}",
    "button.foreground": "#fff",
    "button.hoverBackground": "${accent}e3",
    "button.secondaryBackground": "${inputBackground}",
    "button.secondaryForeground": "${foreground}",
    "button.secondaryHoverBackground": "${border}",
    "checkbox.background": "${inputBackground}",
    "checkbox.border": "${border}",
    "debugToolBar.background": "${background}",
    "dropdown.background": "${inputBackground}",
    "dropdown.border": "${border}",
    "dropdown.foreground": "${foreground}",
    "dropdown.listBackground": "${listBackground}",
    "editor.background": "${background}",
    "editor.foreground": "${editorForeground}",
    "editorGroupHeader.tabsBackground": "${background}",
    "editorGroupHeader.tabsBorder": "${border}",
    "editorGutter.addedBackground": "${theme.insert}",
    "editorGutter.deletedBackground": "${theme.delete}",
    "editorGutter.modifiedBackground": "${theme.change}",
    "editorLineNumber.activeForeground": "${foreground}88",
    "editorLineNumber.foreground": "${foreground}50",
    "errorForeground": "#dc2626",
    "focusBorder": "${accent}",
    "foreground": "${foreground}",
    "icon.foreground": "${foreground}",
    "input.background": "${inputBackground}",
    "input.border": "${background}",
    "input.foreground": "${foreground}",
    "inputOption.activeBorder": "${accent}",
    "inputOption.activeForeground": "#fff",
    "inputOption.activeBackground": "${accent}",
    "list.activeSelectionForeground": "#fff",
    "list.activeSelectionBackground": "${accent}",
    "list.activeSelectionIconForeground": "#fff",
    "list.hoverBackground": "${border}",
    "menu.border": "${border}",
    "menu.background": "${listBackground}",
    "menu.foreground": "${foreground}",
    "menu.selectionBackground": "${accent}",
		"menu.selectionForeground": "#fff",
    "notificationCenterHeader.background": "${listBackground}",
    "notificationCenterHeader.foreground": "${foreground}",
    "notifications.border": "${border}",
    "notifications.background": "${listBackground}",
    "notifications.foreground": "${foreground}",
    "panel.background": "${background}",
    "panel.border": "${border}",
    "panelInput.border": "${border}",
    "panelTitle.activeBorder": "${accent}",
    "panelTitle.activeForeground": "${foreground}",
    "panelTitle.inactiveForeground": "${inactiveBorder}",
    "peekViewResult.background": "${listBackground}",
    "pickerGroup.border": "${border}",
    "progressBar.background": "${accent}",
    "quickInput.background": "${background}",
    "quickInput.foreground": "${foreground}",
    "quickInputList.focusBackground": "${accent}",
    "settings.dropdownBackground": "${inputBackground}",
    "settings.dropdownBorder": "${border}",
    "settings.headerForeground": "${foreground}",
    "settings.numberInputBorder": "${border}",
		"settings.textInputBorder": "${border}",
    "sideBar.border": "${border}",
    "sideBar.background": "${theme.sidebarBackground || background}",
    "sideBar.foreground": "${foreground}",
    "sideBarSectionHeader.background": "#0000",
    "sideBarSectionHeader.border": "${border}",
    "sideBarSectionHeader.foreground": "${foreground}",
    "sideBarTitle.foreground": "${foreground}",
    "statusBar.background": "${background}",
    "statusBar.border": "${border}",
    "statusBar.debuggingBackground": "${accent}",
    "statusBar.debuggingForeground": "#fff",
    "statusBar.focusBorder": "${accent}",
    "statusBar.foreground": "${foreground}",
    "statusBar.noFolderBackground": "${listBackground}",
    "statusBarItem.errorBackground": "${background}",
    "statusBarItem.focusBorder": "${accent}",
    "statusBarItem.remoteBackground": "${accent}",
    "statusBarItem.remoteForeground": "#fff",
    "tab.activeBackground": "${inputBackground}",
    "tab.activeBorder": "#0000",
    "tab.activeBorderTop": "${accent}",
    "tab.activeForeground": "${foreground}",
    "tab.border": "${border}",
    "tab.hoverBackground": "${background}",
    "tab.inactiveBackground": "${background}",
    "tab.inactiveForeground": "${inactiveBorder}",
    "tab.lastPinnedBorder": "${foreground}33",
    "tab.unfocusedActiveBorder": "${listBackground}",
    "tab.unfocusedActiveBorderTop": "${border}",
    "tab.unfocusedHoverBackground": "${listBackground}",
    "terminal.foreground": "${foreground}",
    "terminal.selectionBackground": "${accent}55",
    "terminal.tab.activeBorder": "${accent}",
    "terminalCursor.foreground": "${accent}",
    "textBlockQuote.background": "${border}",
    "textCodeBlock.background": "${border}",
    "textLink.activeForeground": "${accent}",
    "textLink.foreground": "${accent}",
    "textPreformat.background": "${border}",
    "titleBar.border": "#0000",
    "titleBar.activeBackground": "${background}",
    "titleBar.activeForeground": "${foreground}",
    "titleBar.inactiveBackground": "${background}",
    "titleBar.inactiveForeground": "${inactiveBorder}",
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
        "meta.property-name"
      ],
      "settings": {
        "foreground": "${theme.variable}"
      }
    },
    {
      "scope": [
        "variable.other.property",
        "meta.object-literal.key",
        "variable.other.enummember"
      ],
      "settings": {
        "foreground": "${theme.css}"
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
        "constant.character.escape"
      ],
      "settings": {
        "foreground": "${theme.constant}"
      }
    },
    {
      "scope":[
        "string",
        "entity.name",
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
        "support.type.builtin",
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
        "variable.css",
        "variable.scss",
        "support.type.custom-property",
        "variable.argument.css",
        "entity.other.attribute-name",
        "invalid.deprecated.entity.other.attribute-name"
      ],
      "settings": {
        "foreground": "${theme.attribute}"
      }
    },
    {
      "scope": [
        "constant.other.character-class",
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.class",
        "keyword.operator.quantifier.regexp"
      ],
      "settings": {
        "foreground": "${theme.classes}"
      }
    },
    {
			"scope": [
				"source.coffee.embedded",
				"support.type.property-name.css",
				"support.type.property-name.less",
        "support.type.vendor-prefix.less",
        "support.type.vendored.property-name.css",
        "meta.property-value.css",
        "keyword.other.keyframe-selector.less",
        "support.type.property-name.media",
        "meta.at-rule.media.header.css",
        "entity.name.function.scss",
        "meta.at-rule.keyframe.less"
			],
			"settings": {
				"foreground": "${theme.css}"
			}
    },
    {
      "scope": [
        "constant.language.null",
        "constant.language.undefined",
        "keyword.operator.or.regexp",
        "constant.language.import-export-all.ts",
        "punctuation.definition.character-class.regexp"
      ],
      "settings": {
        "foreground": "${theme.nil}"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "support.class.component",
        "keyword.control.anchor.regexp"
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
        "punctuation.definition.template-expression"
      ],
      "settings": {
        "foreground": "${theme.storage}"
      }
    },
    {
      "scope": [
        "keyword",
        "storage.modifier",
        "keyword.operator.new",
        "storage.type.class.jsdoc",
        "keyword.operator.expression",
        "support.type.object.module.js"
      ],
      "settings": {
        "foreground": "${theme.keyword}"
      }
    },
    {
      "scope": "punctuation.definition.group",
      "settings": {
        "foreground": "${theme.keyword}"
      }
    },
    {
      "scope": [
        "support.function",
        "entity.name.function",
        "variable.language.super",
        "support.constant.handlebars",
				"entity.name.operator.custom-literal",
				"source.powershell variable.other.member"
      ],
      "settings": {
        "foreground": "${theme.function}"
      }
    },
    {
      "scope": [
        "support.class",
        "entity.name.type.class",
        "entity.name.type.module",
        "entity.other.inherited-class"
      ],
      "settings": {
        "foreground": "${theme.class}"
      }
    },
    {
      "scope": [
        "support.type",
        "entity.name.type",
        "meta.type.parameters",
				"meta.namespace.declaration",
				"meta.function,meta.type.annotation"
      ],
      "settings": {
        "foreground": "${theme.tsType}"
      }
    },
    {
      "scope": [
        "support.type.primitive",
        "storage.type.string.go",
        "storage.type.numeric.go"
      ],
      "settings": {
        "foreground": "${theme.tsBaseType}"
      }
    },
    {
      "scope": [
        "meta.jsx.children",
        "entity.name.tag.custom.css",
        "entity.name.tag.custom.scss",
        "meta.embedded.block.html"
      ],
      "settings": {
        "foreground": "${editorForeground}"
      }
    },
    {
      "scope": [
        "punctuation.accessor",
        "keyword.operator.ternary",
        "keyword.operator.logical",
        "keyword.operator.bitwise",
        "keyword.operator.increment",
        "keyword.operator.decrement",
        "keyword.operator.relational",
        "keyword.operator.comparison",
        "keyword.operator.arithmetic",
        "keyword.operator.assignment",
        "invalid.illegal.combinator.less"
      ],
      "settings": {
        "foreground": "${theme.secondary}"
      }
    },
    {
      "scope": [
        "meta.brace",
        "punctuation",
        "meta.parameters",
        "keyword.operator",
        "meta.array.literal",
        "meta.embedded.block",
        "meta.attribute.directive",
        "meta.function.expression",
        "storage.type.function.arrow",
        "punctuation.section.function",
        "punctuation.definition.entity",
        "punctuation.separator.key-value",
        "punctuation.definition.parameters",
        "punctuation.definition.typeparameters",
        "punctuation.definition.attribute-selector",
        "source.css.less punctuation.definition.group",
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
        "markup.heading",
        "markup.underline.link",
        // "punctuation.definition.list",
        "entity.name.section.markdown",
        "variable.other.link.underline"
      ],
      "settings": {
        "foreground": "${theme.storage}"
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

function adjustHexColor(hexColor: string, relativeValue: number) {
  hexColor = hexColor.replace(/^#/, '');

  const rgb = [
    parseInt(hexColor.slice(0, 2), 16),
    parseInt(hexColor.slice(2, 4), 16),
    parseInt(hexColor.slice(4, 6), 16),
  ];

  // 计算相对值
  const r = Math.floor(Math.max(0, Math.min(255, rgb[0] * relativeValue)));
  const g = Math.floor(Math.max(0, Math.min(255, rgb[1] * relativeValue)));
  const b = Math.floor(Math.max(0, Math.min(255, rgb[2] * relativeValue)));

  // 将 RGB 转换回 16 进制颜色值
  const adjustedHexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return adjustedHexColor;
}
