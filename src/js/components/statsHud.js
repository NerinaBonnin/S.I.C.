import { escapeHTML } from '../utils/dom.js';

/** Mapea claves de metaEstadisticas -> etiqueta visible en español. */
const STAT_LABELS = {
  edicionesRegistradas: 'Ediciones registradas',
  distritosEnProduccion: 'Distritos en producción',
  vasallajesRealizados: 'Vasallajes realizados',
};

/**
 * Renderiza los módulos de estadística general (HUD) dentro del contenedor.
 * @param {string} selector
 * @param {Record<string, number|string>} metaEstadisticas
 */
export function renderStatsHud(selector, metaEstadisticas = {}) {
  const container = document.querySelector(selector);
  if (!container) return;

  const stats = Object.entries(STAT_LABELS).filter(([key]) => metaEstadisticas[key] !== undefined);

  if (stats.length === 0) {
    container.innerHTML = '<p class="data-label">Sin datos estadísticos disponibles.</p>';
    return;
  }

  container.innerHTML = stats
    .map(([key, label]) => {
      const value = metaEstadisticas[key];
      return `
        <article class="stat-card glass-panel glass-panel--interactive hud-corners">
          <p class="stat-card__value">${escapeHTML(value)}</p>
          <p class="data-label">${escapeHTML(label)}</p>
        </article>
      `;
    })
    .join('');
}
