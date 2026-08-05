// Se exporta el archivo biometricFicha.js para extraer la funcion buildBiometricFichaMarkup para la ficha biometrica de los tributos.
import { buildBiometricFichaMarkup } from './biometricFicha.js';

// Se exporta el archivo scanPanel.json para extraer la funcion buildScanPanelMarkup para el scan de panel de los tributos.
import { buildScanPanelMarkup } from './scanPanel.js';

// Exportamos esta funcion de auxilio del archivo dom.js por las dudas que si la imagen de los tributos falla se muestre otra imagen por defecto.
import { attachImageFallback } from '../utils/dom.js';

/**
 * Elige un tributo al azar entre los que tienen estado "Vencedor"
 * y renderiza su ficha biométrica, estilo pantalla de monitoreo del Capitolio.
 * @param {string} selector
 * @param {Array<object>} tributos
 */

// Lo que hace esta funcion es buscar en el html #feacturedVictor y lo rellena con la informacion de los tributos que estan en panemData.json.
export function renderFeaturedVictor(selector, tributos = []) {
  const container = document.querySelector(selector);
  if (!container) return;

  // revisar la lista completa de tributos y se queda solamente con los vencedores.
  const vencedores = tributos.filter((tributo) => tributo.estado === 'Vencedor');

  // Si no hay tributos vencedores se muestra el mensaje que se expone en el container.
  if (vencedores.length === 0) {
    container.innerHTML = '<p class="data-label">No hay expedientes de vencedores disponibles.</p>';
    return;
  }

  // Elige al azar los tributos vencedores.
  const victor = vencedores[Math.floor(Math.random() * vencedores.length)];

  // Mediante innerHTML se rellena con toda informacion de los vencedores al azar con Victor.
  container.innerHTML = `
    ${buildScanPanelMarkup(victor, 'FEED EN VIVO // CÁMARA 04')}
    <div class="victor-card__body">
      ${buildBiometricFichaMarkup(victor)}
    </div>
  `;

  // Se pone esto por si llega a fallar las imagenes de los tributos vencedores pongan una imagen desterminada, tambien protege las mismas.
  attachImageFallback(container);
}
