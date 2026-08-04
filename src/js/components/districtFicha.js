import { escapeHTML } from '../utils/dom.js';

/**
 * Genera el markup de la ficha completa de un distrito (cuando sí hay datos
 * cargados en panemData.json).
 * @param {object} distrito
 * @returns {string} HTML string
 */
export function buildDistrictFichaMarkup(distrito) {
  const vencedores = distrito.vencedoresHistoricos ?? [];

  return `
    <header class="district-modal__header">
      <h3>${escapeHTML(distrito.nombre)}</h3>
      <span class="data-label">${escapeHTML(distrito.region)}</span>
    </header>

    <p class="data-label">Especialidad: ${escapeHTML(distrito.especialidad)}</p>

    <p class="district-modal__desc">${escapeHTML(distrito.historia)}</p>

    <div class="district-modal__winners">
      <p class="data-label">Vencedores históricos</p>
      ${
        vencedores.length > 0
          ? `<ul>${vencedores.map((nombre) => `<li>${escapeHTML(nombre)}</li>`).join('')}</ul>`
          : '<p>No hay vencedores registrados para este distrito.</p>'
      }
    </div>
  `;
}

/**
 * Genera el markup de respaldo cuando un distrito todavía no tiene expediente
 * cargado en el sistema (la mayoría, por ahora: solo 2, 11 y 12 tienen datos).
 * @param {number} id
 * @returns {string} HTML string
 */
export function buildMissingDistrictMarkup(id) {
  return `
    <header class="district-modal__header">
      <h3>Distrito ${escapeHTML(id)}</h3>
    </header>
    <p class="data-label">Expediente no disponible</p>
    <p class="district-modal__desc">
      Este distrito todavía no tiene un expediente cargado en el sistema central.
    </p>
  `;
}
