# Design Guidelines

## Color Palette Tokens

Primitive tokens defined in `_sass/_chrome.scss` under the `// Palette tokens` block. These are theme-independent and must be referenced by semantic theme variables — never use raw hex values outside this block.

| Token | Value | Usage |
|---|---|---|
| `--color-dark` | `#030301` | Replaces black |
| `--color-light` | `#FFFCF9` | Replaces white |
| `--color-green` | `#0CCE6B` | Accent — green |
| `--color-blue` | `#08BDBD` | Accent — blue |
| `--color-red` | `#F21B3F` | Accent — red |
| `--color-orange` | `#FF312E` | Accent — orange |
| `--color-yellow` | `#FF8811` | Accent — yellow |
| `--color-magenta` | `#C200FB` | Accent — magenta |
| `--color-purple` | `#6874E8` | Accent — purple |

## Color Usage

### Philosophy

The design follows a **high-contrast** style. Backgrounds sit at one extreme of the value scale; text and borders sit at the opposing extreme. Intermediate grays are used only for muted/secondary content — never for primary text or structural borders.

### Dark / Light Contrast Rule

| Role | Dark mode | Light mode |
|---|---|---|
| Background | `--color-dark` | `--color-light` |
| Text (primary) | `--color-light` | `--color-dark` |
| Borders | `--color-light` | `--color-dark` |
| Text (muted/secondary) | reduced-opacity `--color-light` | reduced-opacity `--color-dark` |

Use `--color-dark` and `--color-light` exclusively for these roles. Never substitute a gray or mid-tone for a primary text or border color.

### Accent Color

The accent is fixed — there is no user color selection. `--accent` is set to `--color-light` in dark mode and `--color-dark` in light mode, so it always contrasts with the background.

A companion variable `--accent-text` holds the text color for elements sitting on an accent-colored background:
- Dark mode: `--accent-text = --color-dark`
- Light mode: `--accent-text = --color-light`

**`--accent` is used for:**
- Heading backgrounds (with `--accent-text` for the text)
- Inline code backgrounds (with `--accent-text` for the text)
- Code block header backgrounds
- Interactive states: links, hover fill, focus
- Selected / checked states (e.g. checkboxes)

### Sidebar Background

The sidebar is always dark (`--color-dark`) regardless of theme, creating a persistent dark sidebar with a light content area in light mode.

| Mode | Sidebar background | Content background |
|---|---|---|
| Dark | `--color-dark` | `--color-dark` |
| Light | `--color-dark` | `--color-light` |

### What accent is NOT used for

- Backgrounds of content areas (body, sections)
- Body text color
- Borders on static (non-interactive) elements
- Sidebar hover/active colors (sidebar always uses `--color-light` for highlights since sidebar is always dark)

## Typography

### Fonts

| Font | Role | Loaded weights |
|---|---|---|
| `Quicksand` | Sans-serif — body, headings, UI | 400, 500, 700 |
| `JetBrains Mono` | Monospace — code, tags, labels | 400, 700 |

Fonts are loaded via Google Fonts in `_layouts/default.html`. Only the weights listed above are available — do not reference other weights in CSS.

### Scale

| Name | Size | Usage |
|---|---|---|
| `xs` | `0.65rem` | Tags |
| `sm` | `0.75rem` | UI labels (code block header, section labels) |
| `meta` | `0.85rem` | Post metadata, timestamps |
| `nav` | `0.95rem` | Sidebar navigation items |
| `base` | `1rem` | Body text |
| `table` | `0.9rem` | Table content |
| Headings | browser default scale | `h1`–`h6`, styled via Quicksand 700 |

### Weights

| Weight | Usage |
|---|---|
| 400 | Monospace default (code, labels) |
| 500 | Body text default |
| 700 | Headings, links, active nav, table headers, bold text |

Weight 800 does not exist in the loaded fonts — use 700 as the heaviest weight.

### Semantic Usage

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| `h1`–`h6` | Quicksand | browser default | 700 | line-height 1.25 |
| Body (`p`, `li`) | Quicksand | base (1rem) | 500 | line-height 1.7 |
| Sidebar nav | Quicksand | nav (0.95rem) | 500 / 700 active | `text-transform: lowercase` |
| Section labels | Quicksand | sm (0.75rem) | 700 | `uppercase`, `letter-spacing: 0.08em` |
| Post metadata | Quicksand | meta (0.85rem) | 500 | muted color |
| Inline `code` | JetBrains Mono | 0.875em | 400 | relative to parent |
| Code block content | JetBrains Mono | 0.9em | 400 | relative to block |
| Code block labels | JetBrains Mono | sm (0.75rem) | 400 | lang label + copy button |
| OL bullet counter | JetBrains Mono | 0.8em | 700 | relative to `li` |
| Tags | JetBrains Mono | xs (0.65rem) | 400 | |
| Blockquote text | Quicksand | base (1rem) | 500 | `strong` uses 700 |
| Table content | Quicksand | table (0.9rem) | 500 / 700 headers | |

## Borders & Shape

- All borders are **2px solid**
- **No border-radius** — all elements are sharp (square corners)
- Border color comes from `--content-border`

## Links

- Color: `--accent`
- Underline style: dotted, 2px thickness, 3px offset
- Hover: switches to solid underline
- Footnote links have no underline

## Navigation (Sidebar)

- Active item: dotted underline, 2px thickness, accent color, weight 700
- Hover: accent color, no underline

## Code Blocks

- Background: dark (`#313244`) in both light and dark themes
- Border: 2px solid `--content-border`
- Header bar shows language label (left) and copy button (right)
- Horizontal scrolling on overflow

## Ordered Lists

- Custom bullet using CSS counters — no native list marker
- Bullet is a dark pill/circle containing the number(s), monospaced weight 700
- Nested lists show hierarchical counters (e.g. `1.1`, `1.2`)

## Tags

- Border: 2px solid `--content-border`, sharp corners
- Font: `JetBrains Mono`, 0.65rem
- Text color matches border color
- Hover: both border and text switch to `--accent`
