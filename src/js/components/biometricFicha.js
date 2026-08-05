// Importamos la funcion escapeHTML del archivo dom.js
import { escapeHTML } from '../utils/dom.js';

/**
 * Genera el markup interno de una ficha biométrica de tributo.
 * Reutilizado por el vencedor destacado del Home y el modal de /tributos,
 * para no duplicar la estructura de la ficha en dos lugares.
 *
 * @param {object} tributo
 * @returns {string} HTML string
 */

// Lo que hace esta funcion es definir el ritmo cardiacp, la temperatura y presion para cada distrito y despues de eso filtran solamente para que aparezcan los tributos vencedores y para retornar toman elementos HTML y los transforman para que aparezcan en la pantalla del Dashboard.
export function buildBiometricFichaMarkup(tributo) {
  const { ritmoCardiaco, temperaturaF, presion } = tributo.signosVitales ?? {};
  const badgeClass = tributo.estado === 'Vencedor' ? 'badge--success' : 'badge--danger';

  return `
    <header class="victor-card__header">
      <h3>${escapeHTML(tributo.nombre)}</h3>
      <span class="badge ${badgeClass}">${escapeHTML(tributo.estado)}</span>
    </header>

    <p class="data-label">Distrito ${escapeHTML(tributo.distrito)} // Edición ${escapeHTML(tributo.edicion)}</p>

    <p class="victor-card__desc">${escapeHTML(tributo.descripcion)}</p>

    <dl class="vitals">
      <div class="vitals__item">
        <dt>Ritmo cardíaco</dt>
        <dd>${escapeHTML(ritmoCardiaco)}<span class="vitals__unit">BPM</span></dd>
      </div>
      <div class="vitals__item">
        <dt>Temperatura corporal</dt>
        <dd>${escapeHTML(temperaturaF)}<span class="vitals__unit">°F</span></dd>
      </div>
      <div class="vitals__item">
        <dt>Presión arterial</dt>
        <dd>${escapeHTML(presion)}</dd>
      </div>
    </dl>

    <p class="data-label victor-card__specialty">Especialidad: ${escapeHTML(tributo.especialidad)}</p>
  `;
}
