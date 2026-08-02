import { escapeHTML } from '../utils/dom.js';

/**
 * Genera el panel de "foto" de un tributo (el rectángulo estilo feed de
 * cámara). Si `tributo.imagen` existe, se intenta mostrar esa imagen; si el
 * archivo no existe o falla la carga, se elimina el <img> y queda visible el
 * degradado de fondo del panel como respaldo (ver CSS: .victor-card__scan).
 *
 * @param {object} tributo
 * @param {string} [label] - Texto superpuesto (ej: "FEED EN VIVO // CÁMARA 04").
 * @returns {string} HTML string
 */
export function buildScanPanelMarkup(tributo, label = 'FEED EN VIVO') {
  const imgTag = tributo.imagen
    ? `<img src="${escapeHTML(tributo.imagen)}" alt="" data-img-fallback loading="lazy" />`
    : '';

  return `
    <div class="victor-card__scan" aria-hidden="true">
      ${imgTag}
      <span class="victor-card__scan-label">${escapeHTML(label)}</span>
    </div>
  `;
}
