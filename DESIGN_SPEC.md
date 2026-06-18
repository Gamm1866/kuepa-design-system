# Kuepa Design System — Especificación para Claude Code

> Carga este archivo al inicio de cualquier tarea de diseño/frontend con:
> `claude --include DESIGN_SPEC.md` o referenciándolo en el CLAUDE.md del proyecto.

---

## IDENTIDAD DE MARCA

- **Nombre**: Kuepa
- **Tagline**: Líderes en educación técnica y empleabilidad
- **Color primario**: `#FD531E` (naranja Kuepa)
- **Gradiente de marca**: `linear-gradient(90deg, #FE8C00 0%, #F83600 100%)`
- **Modo oscuro**: soportado (prefijo `dark-` en tokens)

---

## FUENTES

```css
/* Cargar siempre estas 4 fuentes */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined');
```

| Fuente | Uso |
|--------|-----|
| **Poppins** | Tipografía base del sistema, headings, display |
| **Barlow** | Labels, inputs, header, código |
| **Nunito** | Texto de cuerpo, descripciones |
| **Material Icons** | Iconografía (clases: `material-icons`, `material-icons-outline`) |

---

## ESCALA TIPOGRÁFICA

| Clase | Tamaño | Peso | Uso |
|-------|--------|------|-----|
| `dsk-text-display-lg` | ~3rem | 700 | Títulos hero principales |
| `dsk-text-display-m` | ~2.25rem | 700 | Títulos de sección grandes |
| `dsk-text-display-s` | ~1.75rem | 700 | Títulos de subsección |
| `dsk-text-heading-xl` | ~1.5rem | 600 | Headings de página |
| `dsk-text-heading-lg` | ~1.25rem | 600 | Headings de tarjeta |
| `dsk-text-heading-m` | ~1rem | 600 | Headings de componente |
| `dsk-text-body-lg` | 1rem | 400 | Texto principal |
| `dsk-text-body-m` | 0.875rem | 400 | Texto secundario |
| `dsk-text-body-s` | 0.75rem | 400 | Texto auxiliar, captions |
| `dsk-text-label-lg` | 0.875rem | 600 uppercase | Labels de campo |
| `dsk-text-label-m` | 0.75rem | 600 uppercase | Labels pequeños |

**Pesos disponibles**: `dsk-bold` (700) · `dsk-semibold` (600) · `dsk-medium` (500) · `dsk-regular` (400)

---

## PALETA DE COLORES COMPLETA

### Colores base
```
--white: #FFF
--black: #292929
```

### Orange (Color primario de marca)
```
--orange-50:  #FFEEE5    --orange-500: #FB5020  ← uso principal
--orange-100: #FEC5B5    --orange-600: #D1431B
--orange-200: #FDA890    --orange-700: #A73515
--orange-300: #FC8A6A    --orange-800: #7E2810
--orange-400: #FC6D45    --orange-900: #541B0B
```

### Gray (Neutrales UI)
```
--gray-50:  #F3F4F4    --gray-500: #848788
--gray-100: #F0F1F2    --gray-600: #707274
--gray-200: #CFCFCF    --gray-700: #5C5F60
--gray-300: #AFB1B2    --gray-800: #4A4C4D
--gray-400: #999B9D    --gray-900: #38393A
```

### Green (Éxito / positivo)
```
--green-50:  #D3E7DC    --green-500: #149852  ← uso principal
--green-100: #B1DDC5    --green-600: #117F44
--green-200: #8ACCA9    --green-700: #0D6537
--green-300: #62BA8C    --green-800: #0A4C29
--green-400: #3BA96F    --green-900: #07331B
```

### Jungle (Acento turquesa)
```
--jungle-500: #41CEAD   --jungle-100: #C0EFE4
```

### Navy (Azul corporativo)
```
--navy-500: #338EBF     --navy-600: #007AAA
--navy-100: #C8E0F4     --navy-900: #003E5B
```

### Sky, Yellow, Red, Pink, Violet
```
--sky-500:    #1FBBFC   /* Acento claro */
--yellow-500: #EAAD07   /* Advertencia */
--red-500:    #C32E13   /* Error */
--pink-500:   #FE9FE1   /* Decorativo */
--violet-500: #9725B9   /* Premium */
```

---

## TOKENS SEMÁNTICOS

### Brand
```css
--alliance-primary:   #FD531E   /* Naranja Kuepa — botones CTA, acciones primarias */
--alliance-secondary: #292929   /* Negro Kuepa — textos, botones secundarios */
--gradient-1: linear-gradient(90deg, #FE8C00 0%, #F83600 100%)   /* Gradiente marca */
--gradient-2: linear-gradient(90deg, #fe8c0020 0%, #F8360020 100%) /* Gradiente sutil */
```

### Estados del sistema
```css
--success-state: #0ABF6B   /* Verde — éxito, confirmación */
--warning-state: #FACC15   /* Amarillo — advertencia */
--danger-state:  #DA313D   /* Rojo — error, peligro */
```

### Texto
```css
/* Light mode */
--text-primary:     #292929   /* Texto principal */
--text-secondary:   #848788   /* Texto secundario, hints */
--text-disabled:    #CFCFCF   /* Texto deshabilitado */
--text-placeholder: #AFB1B2   /* Placeholders */
--text-error:       #CD513A   /* Mensajes de error */

/* Dark mode */
--dark-text-primary:     #FFF
--dark-text-secondary:   #FAFAFA
--dark-text-disabled:    #5C5F60
--dark-text-placeholder: #999B9D
```

### Fondos
```css
/* Light mode */
--background-primary:   #FFF
--background-secondary: #F0F1F2
--background-tertiary:  #FAFAFA

/* Dark mode */
--dark-background-primary:   #1A1C1D
--dark-background-secondary: #292929
--dark-background-tertiary:  #38393A
```

### Bordes
```css
--border-primary:   #C5C7C7
--border-secondary: #AFB1B2
```

---

## ESCALA DE ESPACIADO

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--spacing-1` | 2px | Separación mínima |
| `--spacing-2` | 4px | Micro gaps |
| `--spacing-3` | 8px | Radio de borde, padding icono |
| `--spacing-4` | 12px | Padding vertical botón sm |
| `--spacing-5` | 16px | Padding base, gap compacto |
| `--spacing-6` | 24px | Gap estándar |
| `--spacing-7` | 32px | Padding horizontal botón lg |
| `--spacing-8` | 40px | Altura botón lg |
| `--spacing-9` | 48px | Sección pequeña |
| `--spacing-10` | 64px | Sección media |
| `--spacing-11` | 80px | Sección grande |
| `--spacing-12` | 96px | Sección XL |
| `--spacing-13` | 160px | Hero / separación mayor |

---

## COMPONENTES

### BUTTON

**Estructura**: `<button class="button-container [variante] [tamaño] [modificador]">`

#### Variantes
| Clase | Descripción |
|-------|-------------|
| `primary` | Fondo `--alliance-primary` (#FD531E), texto blanco. Hover → gradiente de marca |
| `secondary` | Fondo negro `#292929`, texto blanco. Hover → `--gray-900` |
| `tertiary` | Borde 1px negro, fondo transparente. Hover → borde naranja |
| `only-text` | Sin fondo ni borde, texto naranja. Hover → underline |

#### Tamaños
| Clase | Alto | Padding | Solo icono |
|-------|------|---------|------------|
| `button-lg` | max 48px | 12px 32px | 48×48px |
| `button-m` | max 40px | 12px 32px | 40×40px |
| `button-sm` | max 32px | 8px 24px | 32×32px |

#### Modificadores
- `with-icon` — tiene ícono (ajusta padding)
- `only-icon` — solo ícono (cuadrado)
- `icon-right` — ícono a la derecha
- `dark` — variante modo oscuro (requiere wrapper `.dark-button-container`)

#### HTML completo
```html
<!-- Primario grande -->
<button class="button-container primary button-lg">Inscríbete</button>

<!-- Secundario con ícono -->
<button class="button-container secondary button-m with-icon">
  <span class="material-icons">school</span>
  Ver cursos
</button>

<!-- Terciario pequeño -->
<button class="button-container tertiary button-sm">Cancelar</button>

<!-- Solo texto -->
<button class="button-container only-text">Ver más</button>

<!-- Solo ícono -->
<button class="button-container primary button-m only-icon">
  <span class="material-icons">add</span>
</button>

<!-- Dark mode -->
<div class="dark-button-container">
  <button class="button-container dark primary button-lg">Empezar</button>
</div>

<!-- Deshabilitado -->
<button class="button-container primary button-lg" disabled>No disponible</button>
```

---

### TABS

```html
<div class="tabs-container">
  <div class="tabs">
    <!-- Tab activo -->
    <div class="tab-item active">
      <span class="tab-label">Descripción</span>
    </div>
    <!-- Tab con badge -->
    <div class="tab-item">
      <span class="tab-label">Notificaciones</span>
      <span class="badge">5</span>
    </div>
    <!-- Tab grande -->
    <div class="tab-item lg">
      <span class="tab-label">Cursos</span>
    </div>
    <!-- Tab deshabilitado -->
    <div class="tab-item disabled">
      <span class="tab-label">Bloqueado</span>
    </div>
  </div>
</div>
```

**Estados**: `active` (borde inferior 3px naranja) · `disabled` (cursor not-allowed) · `.lg` (variante grande)

---

### INPUT

**Estructura base**: `.dsk-input-group > .label-input + .input-container > .input-component`

```html
<!-- Text input estándar -->
<div class="dsk-input-group">
  <label class="label-input">Nombre completo</label>
  <div class="input-container">
    <input class="input-component" type="text" placeholder="Ingresa tu nombre" />
  </div>
</div>

<!-- Input con ícono izquierdo -->
<div class="dsk-input-group">
  <div class="input-container">
    <div class="icon-container icon-left">
      <span class="material-icons">search</span>
    </div>
    <input class="input-component" type="text" placeholder="Buscar..." />
  </div>
</div>

<!-- Input con ícono derecho -->
<div class="dsk-input-group">
  <div class="input-container">
    <input class="input-component" type="password" placeholder="Contraseña" />
    <div class="icon-container icon-right">
      <span class="material-icons">visibility</span>
    </div>
  </div>
</div>

<!-- Textarea -->
<div class="dsk-input-group">
  <label class="label-input">Descripción</label>
  <textarea class="text-area-component" placeholder="Escribe aquí..."></textarea>
</div>

<!-- Selector / Dropdown -->
<div class="dsk-input-group">
  <div class="selector-container">
    <div class="selector-toggle">
      <span class="simple-value">Selecciona una opción</span>
      <span class="toggle-icon material-icons">expand_more</span>
    </div>
    <div class="options-container">
      <div class="options-list">
        <div class="option-item">Opción 1</div>
        <div class="option-item">Opción 2</div>
      </div>
    </div>
  </div>
</div>

<!-- Radio inputs -->
<div class="input-radio-container">
  <div class="radio-input">
    <input type="radio" name="opciones" />
    <label>Opción A</label>
  </div>
</div>

<!-- Disabled -->
<input class="input-component disabled" disabled placeholder="No editable" />

<!-- Dark mode -->
<div class="dsk-input-group dark">
  <input class="input-component" type="text" />
</div>
```

---

### TOGGLE (Switch)

```html
<!-- Toggle pequeño — OFF -->
<div class="toggle-container">
  <div class="toogle-group">
    <div class="toggle-item size-s">
      <div class="circle"></div>
    </div>
  </div>
</div>

<!-- Toggle pequeño — ON -->
<div class="toggle-item size-s active">
  <div class="circle"></div>
</div>

<!-- Toggle mediano — ON -->
<div class="toggle-item size-m active">
  <div class="circle"></div>
</div>
```

**Tamaños**: `size-s` (32×16px, circle 10px) · `size-m` (círculo mayor)
**Estado ON**: clase `active` desplaza el círculo con `padding-left`

---

### TOOLTIP

```html
<!-- Tooltip arriba (default) -->
<div class="tooltip-component">
  <button class="button-container primary button-sm">Hover</button>
  <div class="tooltip-item">
    <div class="tooltip-content">
      Este es el texto del tooltip
      <div class="arrow-item top"></div>
    </div>
  </div>
</div>
```

**12 posiciones disponibles**:
`top` · `top-left` · `top-right` · `bottom` · `bottom-left` · `bottom-right` · `left` · `left-top` · `left-bottom` · `right` · `right-top` · `right-bottom`

---

### GRID SYSTEM

```html
<!-- Container -->
<div class="dsk-grid-container">
  <div class="dsk-grid">

    <!-- 12 columnas responsivas -->
    <div class="dsk-col-6 dsk-col-lg-4 dsk-col-m-12">
      Columna 6/12 (desktop) · 4/12 (large) · 12/12 (mobile)
    </div>

    <!-- Con offset de inicio/fin -->
    <div class="dsk-col-start-2 dsk-col-end-10">
      Columnas 2 a 10
    </div>

  </div>
</div>
```

**Breakpoints**: default · `lg` · `m` · `s` · `xl`
**Columnas**: 1–12 con `dsk-col-{n}`, `dsk-col-start-{n}`, `dsk-col-end-{n}`

---

### FLEXBOX UTILITIES

```html
<div class="dsk-flex dsk-justify-content-center dsk-align-items-center dsk-direction-row">
  Flex centrado
</div>

<div class="dsk-inline-flex dsk-justify-content-space-between dsk-align-items-start">
  Inline flex
</div>
```

**justify-content**: `start` · `center` · `end` · `space-between` · `space-around` · `space-evenly`
**align-items**: `start` · `center` · `end` · `baseline` · `stretch`
**flex-direction**: `row` · `row-reverse` · `column` · `column-reverse`

---

### SOMBRAS

```html
<div class="dsk-shadow-strong">Sombra fuerte — 0 8px 24px rgba(0,0,0,0.2)</div>
<div class="dsk-shadow-medium">Sombra media — 0 4px 12px rgba(0,0,0,0.12)</div>
<div class="dsk-shadow-light">Sombra suave — 0 2px 6px rgba(0,0,0,0.07)</div>
```

---

### COLOR / BACKGROUND / BORDER utilities

```html
<!-- Texto -->
<p class="dsk-color-primary">Texto principal</p>
<p class="dsk-color-secondary">Texto secundario</p>
<p class="dsk-color-error">Texto de error</p>
<p class="dsk-color-alliance-gradient">Texto gradiente naranja</p>

<!-- Fondo -->
<div class="dsk-background-primary">Fondo blanco</div>
<div class="dsk-background-secondary">Fondo gris claro</div>
<div class="dsk-background-alliance-gradient">Fondo gradiente</div>

<!-- Borde -->
<div class="dsk-border-color-primary">Borde estándar</div>
<div class="dsk-border-color-alliance-gradient">Borde con gradiente</div>

<!-- Por paleta (todas las 11 paletas × 10 shades) -->
<div class="dsk-color-orange-500">Naranja 500</div>
<div class="dsk-background-navy-100">Fondo navy 100</div>
<div class="dsk-border-color-green-500">Borde verde 500</div>

<!-- Dark mode -->
<div class="dark:dsk-background-primary dark:dsk-color-primary">Dark mode</div>
```

---

## REGLAS DE DISEÑO PARA CLAUDE CODE

Al diseñar interfaces con este sistema:

1. **Color CTA primario**: siempre `--alliance-primary` (#FD531E) o `--gradient-1` para acciones principales
2. **Fondo de página**: `--background-secondary` (#F0F1F2) como canvas, `--background-primary` (#FFF) para tarjetas/paneles
3. **Texto siempre sobre fondo**: usar `--text-primary` / `--text-secondary`, nunca colores de paleta directamente
4. **Botones**: uppercase automático (CSS), radio `--spacing-3` (8px)
5. **Inputs**: siempre envueltos en `.dsk-input-group` con `.label-input` encima
6. **Spacing**: usar tokens `--spacing-N`, no valores arbitrarios
7. **Iconos**: siempre Material Icons (`<span class="material-icons">nombre</span>`)
8. **Dark mode**: añadir clase `dark` al contenedor padre y usar tokens `dark-*`
9. **Tipografía**: Poppins para headings, Barlow para labels/UI, Nunito para cuerpo
10. **Grid**: 12 columnas, usar `dsk-col-{n}` con variantes responsive

---

## CÓMO USAR ESTE SPEC EN CLAUDE CODE

### Opción A — Proyecto específico
```bash
# Copiar al proyecto
cp path/to/DESIGN_SPEC.md ./DESIGN_SPEC.md

# Referenciar en CLAUDE.md del proyecto
echo "@DESIGN_SPEC.md" >> CLAUDE.md
```

### Opción B — Con --include en CLI
```bash
claude --include /path/to/kuepa-design-system/DESIGN_SPEC.md "Crea un formulario de registro"
```

### Opción C — En el mensaje directamente
```
Usa el design system en DESIGN_SPEC.md para crear una card de curso con imagen, título, descripción, precio y botón CTA.
```

---

## ARCHIVOS DEL REPO

```
tokens/tokens.css       — Cargar siempre (146 CSS custom properties)
css/utilities.css       — Sistema de clases utilitarias dsk-* (404 clases)
css/components.css      — Button + Tabs + Input + Toggle + Tooltip + Menu + Header
```

**CDN rápido** (si el repo es público en GitHub Pages):
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/Gamm1866/kuepa-design-system/main/tokens/tokens.css">
<link rel="stylesheet" href="https://raw.githubusercontent.com/Gamm1866/kuepa-design-system/main/css/utilities.css">
<link rel="stylesheet" href="https://raw.githubusercontent.com/Gamm1866/kuepa-design-system/main/css/components.css">
```
