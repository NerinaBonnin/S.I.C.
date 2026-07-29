import { escapeHTML } from '../utils/dom.js';

/** Mapea el nivel del boletín -> clase modificadora de color/estado. */
const LEVEL_CLASS = {
  info: 'alert--info',
  advertencia: 'alert--warning',
  alerta: 'alert--danger',
};

/**
 * Renderiza la lista de boletines del estado (alertas del sistema).
 * @param {string} selector
 * @param {Array<{ id: string, nivel: 'info'|'advertencia'|'alerta', timestamp: string, mensaje: string }>} boletines
 */
export function renderAlertsPanel(selector, boletines = []) {
  const container = document.querySelector(selector);
  if (!container) return;

  if (boletines.length === 0) {
    container.innerHTML = '<p class="data-label">No hay boletines activos.</p>';
    return;
  }

  container.innerHTML = boletines
    .map((boletin) => {
      const levelClass = LEVEL_CLASS[boletin.nivel] ?? '';
      return `
        <div class="alert ${levelClass}">
          <span class="alert__indicator" aria-hidden="true"></span>
          <span class="alert__time data-label">${escapeHTML(boletin.timestamp)}</span>
          <p class="alert__message">${escapeHTML(boletin.mensaje)}</p>
        </div>
      `;
    })
    .join('');
}
