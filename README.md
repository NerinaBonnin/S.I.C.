# Panem Central Database

Sistema de inteligencia central del Capitolio — un sitio interactivo inspirado
en el universo de *Los Juegos del Hambre*, construido como pieza de portafolio.

## Stack

- Vite (vanilla JS, ES6+)
- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, glassmorphism)
- Datos locales en JSON (`src/data/panemData.json`)

## Cómo correrlo

```bash
npm install
npm run dev
```

## Arquitectura

Multi-page app con Vite: cada sección es una carpeta con su propio `index.html`
real (no hay router ni SPA). El header/nav se repite como HTML estático en cada
página a propósito, para que la navegación no dependa de que el JS cargue.

```
/              → Home / Dashboard
/tributos/     → Registro de tributos (filtros + ficha modal)
/distritos/    → Mapa de distritos (placeholder)
/capitolio/    → Historia + expedientes (placeholder)
/juegos/       → Cronología + Vasallajes (placeholder)
```

## Estado del proyecto

- [x] Estructura inicial + design tokens (paleta HUD del Capitolio)
- [x] `index.html` base con header, hero y contenedores de sección
- [x] `panemData.json` con tributos, distritos y boletines
- [x] Efecto de tecleo en el hero
- [x] Panel de estadísticas HUD dinámico
- [x] Ficha de vencedor destacado (aleatoria)
- [x] Boletín de alertas
- [x] Vista `/tributos` con filtros (Estado + Distrito) y ficha modal
- [x] Nav estático en HTML + scaffold navegable de las 5 páginas
- [x] Mapa SVG interactivo de `/distritos` (12 distritos + expediente modal)
- [ ] Contenido real de `/capitolio` (hoy es un placeholder)
- [ ] Contenido real de `/juegos` (hoy es un placeholder)
