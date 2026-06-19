# Contexto de Proyecto: Kuepa Design System

## Identidad del Proyecto

- **Nombre**: Kuepa Design System
- **Organización**: Kuepa — Líderes en educación técnica y empleabilidad
- **Repositorio de documentación**: `kuepa-design-system` (este repo)
- **Librería fuente de verdad**: carpeta `core/dsk` (React + TypeScript + SCSS)
- **Rol del desarrollador**: Frontend Engineer + Design System Specialist
- **Zona horaria**: UTC-5

---

## Arquitectura del sistema — DOS REPOS, UNA FUENTE DE VERDAD

Este proyecto tiene dos repositorios con roles distintos. Es crítico entender la diferencia:

| Repo | Tecnología | Propósito |
|------|-----------|-----------|
| `core/dsk` | React + TypeScript + SCSS | **FUENTE DE VERDAD**. Librería consumible de componentes. |
| `kuepa-design-system` | HTML + CSS + Vanilla JS | Sitio de **documentación y showcase** de los componentes. |

### Regla de prioridad absoluta

```
PRIORIDAD 1: core/dsk  →  Sus tokens y componentes mandan sobre todo
PRIORIDAD 2: Figma     →  Solo para componentes que NO existan en core
PRIORIDAD 3: kuepa-design-system  →  Nunca es fuente de verdad, solo espejo
```

Cuando existe conflicto entre lo que dice `kuepa-design-system` y `core`, **siempre gana `core`**.

---

## Stack tecnológico

### Librería de componentes (`core/dsk`)

```
React 18 + TypeScript
SCSS (con @use para módulos)
Material Icons (Google Fonts)
Fuentes: Barlow + Nunito (Google Fonts)
```

### Sitio de documentación (`kuepa-design-system`)

```
HTML estático
CSS puro (variables CSS nativas, sin preprocesador)
Vanilla JavaScript (ES Modules)
tokens/tokens.css  →  fuente de tokens para el doc site
tokens/tokens.json →  exportación consumible por herramientas externas
```

---

## Tokens de diseño

Todos los tokens viven en **dos lugares sincronizados**:

| Archivo | Uso |
|--------|-----|
| `core/dsk/styles/global.scss` | Fuente canónica (SCSS `:root`) |
| `tokens/tokens.css` | Espejo CSS para el doc site |
| `tokens/tokens.json` | Exportación para herramientas (Figma Tokens, Style Dictionary) |

### Regla crítica de tokens

> **NUNCA escribas valores hardcodeados.** Todo color, espaciado, sombra o radio debe referenciar una variable CSS de `tokens.css` o una variable SCSS de `global.scss`.

```css
/* ❌ PROHIBIDO */
padding: 13px;
color: #FB5020;
border-radius: 8px;

/* ✅ CORRECTO */
padding: var(--spacing-4);        /* 12px */
color: var(--alliance-primary);   /* #FD531E */
border-radius: var(--spacing-3);  /* 8px */
```

---

## Paleta de colores

### Primitivos — Escala completa disponible

Todas las paletas tienen escala del 50 al 900:

| Paleta | Token base | Valor 500 | Uso principal |
|--------|-----------|-----------|---------------|
| Orange | `--orange-*` | `#FB5020` | Interacciones secundarias |
| Gray | `--gray-*` | `#848788` | Neutros UI |
| Green | `--green-*` | `#149852` | Estado success |
| Jungle | `--jungle-*` | `#41CEAD` | Acento secundario |
| Navy | `--navy-*` | `#338EBF` | Información |
| Sky | `--sky-*` | `#1FBBFC` | Info / links |
| Yellow | `--yellow-*` | `#EAAD07` | Warning |
| Red | `--red-*` | `#C32E13` | Error / danger |
| Pink | `--pink-*` | `#FE9FE1` | Decorativo |
| Violet | `--violet-*` | `#9725B9` | Decorativo |

### Tokens semánticos — Los que debes usar en componentes

```css
/* Marca */
--alliance-primary: #FD531E      /* naranja Kuepa — CTAs principales */
--alliance-secondary: #292929    /* negro Kuepa */
--gradient-1: linear-gradient(90deg, #FE8C00 0%, #F83600 100%)
--gradient-2: linear-gradient(90deg, #fe8c0020 0%, #F8360020 100%)  /* versión sutil */

/* Estados */
--success-state: #0ABF6B
--warning-state: #FACC15
--danger-state: #DA313D

/* Texto — modo claro */
--text-primary: #292929
--text-secondary: #848788
--text-disabled: #CFCFCF
--text-placeholder: #AFB1B2
--text-error: #CD513A

/* Texto — modo oscuro */
--dark-text-primary: #FFF
--dark-text-secondary: #FAFAFA
--dark-text-disabled: #5C5F60
--dark-text-placeholder: #999B9D

/* Fondos — modo claro */
--background-primary: #FFF
--background-secondary: #F0F1F2
--background-tertiary: #FAFAFA

/* Fondos — modo oscuro */
--dark-background-primary: #1A1C1D
--dark-background-secondary: #292929
--dark-background-tertiary: #38393A

/* Bordes */
--border-primary: #C5C7C7
--border-secondary: #AFB1B2
--dark-border-primary: #C5C7C7
--dark-border-secondary: #DCDDDD

/* Neutros */
--neutral-gray-light: #F0F1F2
--neutral-gray-dark: #848788
--neutral-white: #FFF
--neutral-black-light: #292929
--neutral-black-dark: #1A1C1D
```

---

## Escala de espaciado

```css
--spacing-1:  2px
--spacing-2:  4px
--spacing-3:  8px    ← border-radius base de componentes
--spacing-4:  12px   ← padding interno compacto
--spacing-5:  16px   ← padding interno estándar
--spacing-6:  24px
--spacing-7:  32px
--spacing-8:  40px
--spacing-9:  48px
--spacing-10: 64px
--spacing-11: 80px
--spacing-12: 96px
--spacing-13: 160px
```

Las clases utilitarias de spacing siguen el patrón:
`dsk-padding-{n}`, `dsk-margin-{n}`, `dsk-gap-{n}`, `dsk-border-radius-{n}`

Con variantes por eje: `-top-`, `-bottom-`, `-left-`, `-right-`, `-x-`, `-y-`
Y por breakpoint: `dsk-xl-*` (≥1600px), `dsk-lg-*` (≤1599px), `dsk-m-*` (≤992px), `dsk-s-*` (≤576px)

---

## Tipografía

### Fuentes del sistema

```css
/* Barlow — Títulos, headings, labels, UI */
font-family: 'Barlow', sans-serif;

/* Nunito — Cuerpo de texto, descripciones */
font-family: 'Nunito', sans-serif;
```

> **Nota importante**: `DESIGN_SPEC.md` menciona Poppins, pero la fuente canónica de `core` es **Barlow para headings** y **Nunito para body**. Barlow/Nunito mandan.

### Escala tipográfica — Clases CSS disponibles

| Clase | Font | Tamaño | Peso | Uso |
|-------|------|--------|------|-----|
| `dsk-text-display-lg` | Barlow | 62px | 700 | Hero principal |
| `dsk-text-display-m` | Barlow | 56px | 600 | Sección grande |
| `dsk-text-display-s` | Barlow | 48px | 600 | Subsección |
| `dsk-text-heading-xl` | Barlow | 40px | 700 | Heading de página |
| `dsk-text-heading-lg` | Barlow | 32px | 700 | Heading de tarjeta |
| `dsk-text-heading-m` | Barlow | 21px | 700 | Heading de componente |
| `dsk-text-title-xxl` | Barlow | 24px | 700 | — |
| `dsk-text-title-xl` | Barlow | 22px | 700 | — |
| `dsk-text-title-lg` | Barlow | 18px | 700 | — |
| `dsk-text-title-m` | Barlow | 18px | 700 | Botones lg |
| `dsk-text-title-s` | Barlow | 16px | 700 | Botones m/sm |
| `dsk-text-title-xs` | Barlow | 14px | 600 | — |
| `dsk-text-body-xxl` | Nunito | 22px | 400 | — |
| `dsk-text-body-xl` | Nunito | 20px | 400 | — |
| `dsk-text-body-lg` | Nunito | 18px | 400 | Texto principal |
| `dsk-text-body-m` | Nunito | 16px | 400 | Texto secundario |
| `dsk-text-body-s` | Nunito | 14px | 400 | Texto auxiliar |
| `dsk-text-body-xs` | Nunito | 14px | 400 | — |
| `dsk-text-caption-lg` | Nunito | 12px | 400 | Caption |
| `dsk-text-caption-m` | Nunito | 10px | 400 | — |
| `dsk-text-caption-s` | Nunito | 8px | 400 | — |

Modificadores de peso: `dsk-bold` (700) · `dsk-semibold` (600) · `dsk-medium` (500) · `dsk-regular` (400)

---

## Sombras

```css
/* Modo claro */
.dsk-shadow-strong  → box-shadow: 4px 8px 16px rgba(41, 41, 41, 0.25)
.dsk-shadow-medium  → box-shadow: 4px 8px 8px rgba(41, 41, 41, 0.12)
.dsk-shadow-light   → box-shadow: 2px 4px 8px rgba(41, 41, 41, 0.08)

/* Modo oscuro */
.dark:dsk-shadow-strong  → rgba(207, 209, 214, 0.25)
.dark:dsk-shadow-medium  → rgba(207, 209, 214, 0.12)
.dark:dsk-shadow-light   → rgba(207, 209, 214, 0.08)
```

---

## Iconografía

- **Librería**: Material Icons (Google Fonts)
- **Clases**: `.material-icons` (filled) · `.material-icons-outline` (outlined)
- **Tamaño base**: 24px
- **Componente wrapper en core**: `IconComponent` (`core/dsk/components/atoms/iconComponent/iconComponent.tsx`)

```tsx
// Uso en React (core)
<IconComponent icon="home" variant="outline" className="dsk-icon-button" />
```

> **Regla**: Nunca uses emojis ni SVGs externos como íconos. Solo Material Icons.

---

## Catálogo de componentes

### Átomos (`core/dsk/components/atoms/`)

| Componente | Archivos | Props clave |
|-----------|---------|-------------|
| `Button` | `button/button.tsx` | `size: 'lg'\|'m'\|'sm'`, `type: 'primary'\|'secondary'\|'tertiary'\|'only-text'`, `darkMode`, `iconData`, `disabled` |
| `Input` | `input/input.tsx` + `input.types.ts` | `type: InputType`, `size: 's'\|'m'\|'lg'`, `errorState`, `darkMode`, `handleChange` |
| `Toggle` | `toggle/toggle.tsx` | `size: 'm'\|'s'`, `active`, `label`, `auxText`, `onChange` |
| `Tabs` | `tabs/tabs.tsx` + `tab.tsx` + `index.tsx` | — |
| `Tooltip` | `Tooltip/tooltip.tsx` | — |
| `CodeBox` | `codeBox/codeBox.tsx` | — |
| `CornerAlert` | `cornerAlert/cornerAlert.tsx` | — |
| `Logo` | `Logo/logo.tsx` + `logos.tsx` | — |
| `IconComponent` | `iconComponent/iconComponent.tsx` | `icon: string`, `variant?: 'outline'`, `className` |

### Subtipos de Input (`core/dsk/components/atoms/input/inputTypes/`)

| Subtipo | Archivo | `InputType` value |
|--------|---------|------------------|
| TextInput | `text/TextInput.tsx` | `'text'` / `'password'` / `'number'` |
| TextAreaInput | `textArea/TextAreaInput.tsx` | `'text-area'` |
| SelectInput | `select/SelectInput.tsx` | `'select'` |
| RadioInput | `radio/RadioInput.tsx` | `'radio'` |
| DateInput | `date/DateInput.tsx` | `'date'` |
| AudioInput | `audio/AudioInput.tsx` | `'audio'` |

### Moléculas (`core/dsk/components/molecules/`)

| Componente | Archivos |
|-----------|---------|
| `Card` | `card/card.tsx` + `card.scss` |
| `Menu` | `menu/menu.tsx` + `menu.scss` |
| `Header` | `header/header.tsx` + `heder.scss` |

### Componentes en Figma pero aún no en core (candidatos futuros)

| Componente | Figma Page ID | Variantes | Notas |
|-----------|--------------|-----------|-------|
| Toast / Snackbar | `3075:3579` | 5 tipos × 3 layouts | Listo para implementar |
| Chat Bar | `2178:444` | — | Listo para implementar |
| Breadcrumb | `3124:912` | — | Listo para implementar |
| Modal | `186:4916` | — | 🚧 WIP en Figma |
| Dialogo | `2744:18310` | — | 🚧 WIP en Figma |
| Sidebar | `79:276` | — | 🚧 WIP en Figma |
| Tablas | `186:4915` | — | En revisión |

---

## Clases de color — Sistema de utilidades

El sistema expone clases utilitarias para aplicar tokens semánticos directamente en HTML/JSX. Patrón: `dsk-{propiedad}-{token}`.

```css
/* Texto */
.dsk-color-primary          → color: var(--text-primary)
.dsk-color-secondary        → color: var(--text-secondary)
.dsk-color-alliance-primary → color: var(--alliance-primary)

/* Fondo */
.dsk-background-primary     → background-color: var(--background-primary)
.dsk-background-alliance-gradient → background: var(--gradient-1)

/* Borde */
.dsk-border-color-primary   → border: 1px solid var(--border-primary)

/* Dark mode (mismo patrón con prefijo dark\:) */
.dark\:dsk-color-primary    → color: var(--dark-text-primary)
.dark\:dsk-background-primary → background-color: var(--dark-background-primary)
```

Paletas completas disponibles con el mismo patrón para: `orange`, `gray`, `green`, `jungle`, `navy`, `sky`, `yellow`, `red`, `pink`, `violet` (escalas 50–900).

---

## Modo oscuro

El modo oscuro se activa añadiendo la clase `.dark` al contenedor padre. Los componentes de `core` reciben la prop `darkMode?: boolean`.

```tsx
// React — prop del componente
<Button type="primary" size="lg" darkMode={true} onClick={fn}>Texto</Button>

// HTML — clase contenedor
<div class="dark">
  <button class="button-container dark primary button-lg">...</button>
</div>
```

---

## Convenciones de nomenclatura

### CSS / SCSS

```
Prefijo de clases:      dsk-
Componentes:            kebab-case (.button-container, .toggle-item)
Utilidades semánticas:  dsk-{propiedad}-{token}  (.dsk-background-primary)
Dark mode:              dark\:dsk-{propiedad}-{token}
Breakpoint prefix:      dsk-{bp}-{propiedad}-{n}  (.dsk-lg-padding-4)
```

### TypeScript / React

```
Interfaces de props:    I{NombreComponente}Props
Types de variantes:     I{NombreComponente}Sizes / I{NombreComponente}Types
Componentes:            PascalCase (Button, Toggle, IconComponent)
Archivos componente:    camelCase  (button.tsx, cornerAlert.tsx)
Archivos de estilos:    mismo nombre que el componente (button.scss)
Exports default:        un componente por archivo
```

### Estructura de archivos para nuevos componentes en `core`

```
atoms/
└── nuevoComponente/
    ├── nuevoComponente.tsx      ← componente React
    ├── nuevoComponente.scss     ← estilos
    └── nuevoComponente.types.ts ← solo si los tipos son complejos
```

---

## Breakpoints del sistema

| Nombre | Breakpoint | Prefijo CSS |
|--------|-----------|-------------|
| Mobile S | ≤ 576px | `dsk-s-*` / `dsk-text-s-*` |
| Tablet M | ≤ 992px | `dsk-m-*` / `dsk-text-m-*` |
| Desktop L | ≤ 1599px | `dsk-lg-*` / `dsk-text-lg-*` |
| Desktop XL | ≥ 1600px | `dsk-xl-*` / `dsk-text-xl-*` |

---

## Grids y Flexbox

El sistema tiene clases utilitarias completas para flex y grid en `flexBox.scss` / `grids.scss`, expuestas como CSS en `css/components/flexBox.css` y `css/components/grid.css`.

```css
/* Flexbox */
.dsk-flex            → display: flex
.dsk-flex-center     → align + justify center
.dsk-flex-col        → flex-direction: column
/* etc. — ver flexBox.css */

/* Grid */
.dsk-grid-12-col     → grid estándar 12 columnas
/* etc. — ver grid.css */
```

---

## Utilidades disponibles en core

```typescript
// core/dsk/utils/commons.ts

// Genera IDs únicos (para inputs sin id externo)
generateId(length: number): string

// Elimina acentos de strings (para búsquedas normalizadas)
removeAccents(str: string): string
```

---

## Restricciones absolutas

1. **NUNCA hardcodees valores de diseño.** Sin `#FB5020`, sin `padding: 13px`, sin `font-size: 18px`. Todo via variable CSS.

2. **No crees componentes desde cero si ya existe uno en `core`.** Importa y reutiliza. Busca primero en `core/dsk/components/` antes de escribir cualquier nuevo TSX.

3. **No apliques tokens de Figma si el componente ya existe en `core`.** Figma solo es fuente para componentes completamente nuevos.

4. **No uses fuentes distintas a Barlow y Nunito** para heading/body. Poppins no está en uso en la implementación real.

5. **Los íconos solo son Material Icons.** No SVGs inline, no emojis, no Font Awesome.

6. **El CSS del doc site debe ser CSS plano** (sin SCSS, sin Tailwind). Los tokens se consumen via `var(--token)`.

7. **No introduzcas dependencias nuevas** en `kuepa-design-system`. Es un sitio estático sin bundler ni npm.

8. **Todo componente nuevo debe soportar modo oscuro** desde el diseño inicial, usando los tokens `dark-*`.

---

## Flujo de trabajo recomendado

### Para modificar un componente existente

1. Editar el `.tsx` + `.scss` en `core/dsk/components/`
2. Actualizar el CSS compilado equivalente en `kuepa-design-system/css/components/`
3. Actualizar el snippet de demo en `kuepa-design-system/js/components/`
4. Verificar que no haya valores hardcodeados en ninguno de los dos

### Para agregar un componente nuevo desde Figma

1. Verificar que el componente **no exista** en `core` (busca en `core/dsk/components/`)
2. Leer la especificación en Figma con `get_design_context(nodeId)`
3. Mapear cada valor de Figma a un token existente en `tokens.css`
4. Crear `nombre.tsx` + `nombre.scss` en `core/dsk/components/atoms/` o `molecules/`
5. Crear el CSS showcase y el JS demo en `kuepa-design-system/`
6. Si hay subcomponentes (botones, íconos, badges), importarlos desde `core`, no recrearlos

### Para agregar tokens nuevos

1. Agregar la variable en `core/dsk/styles/global.scss` (dentro de `:root`)
2. Replicar en `tokens/tokens.css` con el mismo nombre y valor
3. Replicar en `tokens/tokens.json` con la estructura de objeto anidado correspondiente
4. Si es un color, agregar las clases utilitarias `.dsk-color-*`, `.dsk-background-*`, `.dsk-border-color-*` en `core/dsk/styles/colors.scss` + `css/components/colors.css`

---

## Estado actual del repositorio (Jun 2026)

### Pendiente de sincronización

- `cornerAlert-B-PguQGR.css` → renombrar a `cornerAlert.css` (tiene hash de bundler en el nombre)
- `DESIGN_SPEC.md` → corregir mención de Poppins como fuente principal (es Barlow)
- Subtipos de Input (Radio, Date, Audio, TextArea, Text, Select) → sin CSS showcase en `kuepa-design-system`

### Próximos componentes a implementar (desde Figma)

- Toast / Snackbar — 5 tipos de alerta × 3 variantes de contenido
- Chat Bar
- Breadcrumb
