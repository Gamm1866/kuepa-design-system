# Kuepa Design System

Design tokens y utilidades CSS extraídas del sistema de diseño de Kuepa.

## Estructura

```
kuepa-design-system/
├── tokens/
│   ├── tokens.css      # CSS custom properties (:root)
│   └── tokens.json     # Tokens en formato JSON
├── css/
│   └── utilities.css   # 404 clases utilitarias (dsk-*)
├── docs/
│   └── index.html      # Preview visual del design system
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

## Font

El sistema usa **Poppins** (Google Fonts):

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```
