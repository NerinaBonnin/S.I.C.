import { buildBiometricFichaMarkup } from './biometricFicha.js';

/**
 * Elige un tributo al azar entre los que tienen estado "Vencedor"
 * y renderiza su ficha biométrica, estilo pantalla de monitoreo del Capitolio.
 * @param {string} selector
 * @param {Array<object>} tributos
 */
export function renderFeaturedVictor(selector, tributos = []) {
  const container = document.querySelector(selector);
  if (!container) return;

  const vencedores = tributos.filter((tributo) => tributo.estado === 'Vencedor');

  if (vencedores.length === 0) {
    container.innerHTML = '<p class="data-label">No hay expedientes de vencedores disponibles.</p>';
    return;
  }

  const victor = vencedores[Math.floor(Math.random() * vencedores.length)];

  container.innerHTML = `
    <div class="victor-card__scan" aria-hidden="true">
      <span class="victor-card__scan-label">FEED EN VIVO // CÁMARA 04</span>
    </div>
    <div class="victor-card__body">
      ${buildBiometricFichaMarkup(victor)}
    </div>
  `;
}
