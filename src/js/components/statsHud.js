// Exportamos el archivo dom.js para extraer la funcion escapeHTML.
import { escapeHTML } from '../utils/dom.js';

// Definimos como se van a mostrar los datos en pantalla.
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

// Importamos la funcion renderStatsHud la cual se usa para renderizar los modulos de estadisticas.
export function renderStatsHud(selector, metaEstadisticas = {}) {
  const container = document.querySelector(selector);
  if (!container) return;

  //Agrupa las STAT_LABELS para conservar las estadisticas de cada una.
  const stats = Object.entries(STAT_LABELS).filter(([key]) => metaEstadisticas[key] !== undefined);

  // Si no hay estadisticas disponibles te salta el mensaje que esta en el "container.innerHTML".
  if (stats.length === 0) {
    container.innerHTML = '<p class="data-label">Sin datos estadísticos disponibles.</p>';
    return;
  }

  // Lo que hace es que busca el valor numerico para cada estadictica, lo vuelve algo bonito para mostrar y fabrica la tarjeta.
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
