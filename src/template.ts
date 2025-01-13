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

  theme.json ||= theme.tag
  theme.css ||= theme.variable
  theme.key ||= theme.css
  theme.storage ||= theme.keyword
  theme.classes ||= theme.attribute
  theme.sidebarBackground ||= background
  theme.inputBackground ||= background

  return `{
  "name": "Sugar ${mode.slice(0, 1).toUpperCase()}${mode.slice(1)}",
  "base": "vs-${mode}",
  "colors": {
    "activityBar.activeBorder": "${accent}",
    "activityBar.background": "${theme.sidebarBackground}",
    "activityBar.border": "${border}",
    "activityBar.foreground": "${foreground}",
    "activityBar.inactiveForeground": "${inactiveForeground}",
    "activityBarBadge.background": "${accent}",
    "activityBarBadge.foreground": "#fff",
    "badge.background": "${accent}40",
    "badge.foreground": "${foreground}",
    "button.border": "#0000",
    "button.background": "${accent}",
    "button.foreground": "#fff",
    "button.hoverBackground": "${accent}e3",
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
    "editor.findMatchHighlightBackground": "${accent}38",
    "editor.selectionBackground": "${accent}40",
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
    "editorLineNumber.activeForeground": "${foreground}AF",
    "editorLineNumber.foreground": "${foreground}66",
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
    "list.hoverBackground": "${foreground}1f",
    "list.highlightForeground": "${accent}",
    "list.inactiveSelectionBackground": "${border}",
    "menu.border": "${border}",
    "menu.background": "${theme.listBackground}",
    "menu.foreground": "${foreground}",
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
    "terminal.foreground": "${foreground}",
    "terminal.selectionBackground": "${accent}40",
    "terminal.tab.activeBorder": "${accent}",
    "terminalCursor.foreground": "${accent}",
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
        "meta.property-name",
        "meta.at-rule.header",
        "keyword.operator.gradient"
      ],
      "settings": {
        "foreground": "${theme.variable}"
      }
    },
    {
      "scope": [
        "variable.other.property",
        "meta.object-literal.key",
        "variable.other.enummember",
        // css variable
        "variable.argument.css",
        "meta.function-call.less",
        "support.type.custom-property",
        "variable.other.constant.animation-name",
        "punctuation.definition.custom-property.less"
      ],
      "settings": {
        "foreground": "${theme.property}"
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
        "punctuation.definition.group",
        "constant.other.character-class",
        "keyword.operator.quantifier.regexp"
      ],
      "settings": {
        "foreground": "${theme.constant}"
      }
    },
    {
      "scope":[
        "string",
        "entity.name",
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
        "entity.other.attribute-name",
        "invalid.deprecated.entity.other.attribute-name"
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
				"source.coffee.embedded",
				"support.type.property-name.css",
				"support.type.property-name.less",
        "support.type.vendor-prefix.less",
        "support.type.vendored.property-name.css",
        "keyword.other.keyframe-selector.less",
        "support.type.property-name.media",
        "meta.at-rule.media.header.css",
        "entity.name.function.scss",
        "meta.at-rule.keyframe.less",
        "entity.name.tag.custom.css",
        "entity.name.tag.custom.scss"
			],
			"settings": {
				"foreground": "${theme.property}"
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
        // "support.class.component",
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
        "punctuation.definition.template-expression",
        "markup.heading",
        // "punctuation.definition.list",
        "entity.name.section.markdown",
        "variable.other.link.underline",
        "keyword.operator.logical.python",
        "keyword.operator.logic",
        "keyword.operator.logical.and",
        "keyword.operator.logical.scss",
        "keyword.operator.logical.feature"
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
        "punctuation.separator.less",
        "support.type.object.module.js"
      ],
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
        // "meta.embedded.block",
        "meta.attribute.directive",
        // "meta.function.expression",
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
