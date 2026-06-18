# Kuepa Design System

Design tokens, utilidades CSS y componentes extraídos del sistema de diseño de Kuepa.

## Estructura

```
kuepa-design-system/
├── tokens/
│   ├── tokens.css          # CSS custom properties (:root) — 146 tokens
│   └── tokens.json         # Tokens en formato JSON
├── css/
│   ├── utilities.css       # 404 clases utilitarias (dsk-*)
│   ├── components.css      # CSS de todos los componentes combinados
│   └── components/         # CSS por componente individual
│       ├── button.css
│       ├── tabs.css
│       ├── input.css
│       ├── toggles.css
│       ├── tooltips.css
│       ├── menu.css
│       ├── header.css
│       └── ...
├── js/components/          # JS minificado de cada componente (referencia)
├── docs/
│   └── index.html          # Preview visual del design system
└── README.md
```

## Uso rápido

### 1. Solo tokens de diseño

```html
<link rel="stylesheet" href="tokens/tokens.css" />
```

```css
.mi-boton {
  background-color: var(--alliance-primary);   /* #FD531E */
  color: var(--white);
  padding: var(--spacing-4) var(--spacing-6);  /* 12px 24px */
}
```

### 2. Tokens + utilidades completas

```html
<link rel="stylesheet" href="tokens/tokens.css" />
<link rel="stylesheet" href="css/utilities.css" />
```

```html
<div class="dsk-background-primary dsk-color-primary dsk-padding-5">
  Contenido con tokens
</div>
```

### 3. Importar tokens JSON (para JS/TS o Style Dictionary)

```js
import tokens from './tokens/tokens.json';
console.log(tokens.colors.orange[500]); // "#FB5020"
```

## Tokens

| Categoría | Cantidad |
|-----------|----------|
| Paletas de color | 110 (11 colores × 10 shades) |
| Tokens semánticos | 23 (texto, fondo, borde, estado) |
| Spacing | 13 pasos (2px → 160px) |
| **Total** | **146 tokens** |

## Paletas de color

| Paleta | Uso |
|--------|-----|
| `--orange-*` | Color primario de marca |
| `--gray-*` | Neutrales UI |
| `--green-*` | Éxito / positivo |
| `--jungle-*` | Acento secundario |
| `--navy-*` | Azul corporativo |
| `--sky-*` | Acento claro |
| `--yellow-*` | Advertencia |
| `--red-*` | Error / peligro |
| `--pink-*` | Acento decorativo |
| `--violet-*` | Acento premium |

## Tokens semánticos clave

```css
/* Brand */
--alliance-primary: #FD531E
--gradient-1: linear-gradient(90deg, #FE8C00 0%, #F83600 100%)

/* Estados */
--success-state: #0ABF6B
--warning-state: #FACC15
--danger-state: #DA313D

/* Texto */
--text-primary / --dark-text-primary
--text-secondary / --dark-text-secondary

/* Fondo */
--background-primary / --dark-background-primary
--background-secondary / --dark-background-secondary
```

## Clases utilitarias (dsk-*)

404 clases organizadas en categorías:

- **Color/Background/Border** — `dsk-color-primary`, `dsk-background-secondary`, `dsk-border-color-primary`
- **Tipografía** — `dsk-text-display-lg`, `dsk-text-body-m`, `dsk-bold`, `dsk-semibold`
- **Flexbox** — `dsk-flex`, `dsk-direction-row`, `dsk-justify-content-center`, `dsk-align-items-center`
- **Grid** — `dsk-grid-container`, `dsk-col-{n}`, `dsk-col-lg-{n}`
- **Spacing** — `dsk-padding-{n}`, `dsk-margin-{n}`, `dsk-gap-{n}`
- **Sombras** — `dsk-shadow-strong`, `dsk-shadow-medium`, `dsk-shadow-light`
- **Responsive** — prefijos `dsk-m-`, `dsk-s-`, `dsk-lg-`, `dsk-xl-`

## Componentes

| Componente | CSS | Clases principales |
|------------|-----|--------------------|
| **Button** | `css/components/button.css` | `.button-container` · `.primary` `.secondary` `.tertiary` `.only-text` · `.button-lg` `.button-m` `.button-sm` · `.dark` |
| **Tabs** | `css/components/tabs.css` | `.tabs-container` · `.tab-item` · `.active` `.disabled` · `.badge` · `.lg` |
| **Input** | `css/components/input.css` | `.dsk-input-group` · `.input-component` · `.text-area-component` · `.selector-container` · `.input-radio-container` · `.date-picker-component` · `.disabled` · `.dark` |
| **Toggle** | `css/components/toggles.css` | `.toggle-container` · `.toggle-item` · `.size-s` `.size-m` · `.active` |
| **Tooltip** | `css/components/tooltips.css` | `.tooltip-component` · `.tooltip-item` · `.top` `.bottom` `.left` `.right` (+ variantes) |
| **Menu** | `css/components/menu.css` | `.menu-container` · `.tab-container` · `.toggle-tab` · `.option-item` |
| **Header** | `css/components/header.css` | `.header-container` · `.logo-container` · `.search-bar-container` |

### Button — variantes y tamaños

```html
<!-- Tamaños: button-lg / button-m / button-sm -->
<!-- Variantes: primary / secondary / tertiary / only-text -->
<button class="button-container primary button-lg">Texto</button>
<button class="button-container secondary button-m">Texto</button>
<button class="button-container tertiary button-sm">Texto</button>
<button class="button-container only-text">Solo texto</button>

<!-- Con ícono -->
<button class="button-container primary button-lg with-icon">
  <span class="material-icons">arrow_forward</span>
  Texto
</button>

<!-- Solo ícono -->
<button class="button-container primary button-m only-icon">
  <span class="material-icons">add</span>
</button>

<!-- Dark mode -->
<div class="dark-button-container">
  <button class="button-container dark primary button-lg">Texto</button>
</div>
```

### Input — tipos

```html
<!-- Text input -->
<div class="dsk-input-group">
  <label class="label-input">Etiqueta</label>
  <div class="input-container">
    <input class="input-component" type="text" placeholder="Placeholder" />
  </div>
</div>

<!-- Con ícono izquierdo -->
<div class="dsk-input-group">
  <div class="input-container">
    <div class="icon-container icon-left">
      <span class="material-icons">search</span>
    </div>
    <input class="input-component" type="text" />
  </div>
</div>

<!-- Textarea -->
<textarea class="text-area-component"></textarea>

<!-- Disabled -->
<input class="input-component disabled" disabled />
```

### Tabs

```html
<div class="tabs-container">
  <div class="tabs">
    <div class="tab-item active">
      <span class="tab-label">Tab 1</span>
    </div>
    <div class="tab-item">
      <span class="tab-label">Tab 2</span>
      <span class="badge">3</span>
    </div>
    <div class="tab-item disabled">
      <span class="tab-label">Disabled</span>
    </div>
  </div>
</div>
```

### Toggle

```html
<!-- Size S -->
<div class="toggle-container">
  <div class="toogle-group">
    <div class="toggle-item size-s active">
      <div class="circle"></div>
    </div>
  </div>
</div>

<!-- Size M -->
<div class="toggle-item size-m">
  <div class="circle"></div>
</div>
```

### Tooltip

```html
<!-- Posiciones: top / top-left / top-right / bottom / bottom-left / bottom-right / left / right -->
<div class="tooltip-component">
  <button>Hover me</button>
  <div class="tooltip-item">
    <div class="tooltip-content">
      Texto del tooltip
      <div class="arrow-item top"></div>
    </div>
  </div>
</div>
```

## Fuentes

El sistema usa **3 fuentes**:

```html
<!-- Poppins — tipografía base del sistema -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Barlow — labels, inputs, header -->
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Nunito — texto de cuerpo -->
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Material Icons — iconografía -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">
```
