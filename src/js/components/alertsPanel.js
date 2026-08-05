// Exportamos el archivo dom.js para extraer la funcion escapeHTML
import { escapeHTML } from '../utils/dom.js';

// Ponemos los niveles de alerta conjunto con sus colores correspondientes que nos va a dar el CSS para que se vea en el panel de alertas del Dashboard.
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

// Aca importa la funcion renderAlertsPanel la cual se encarga de renderizar los boletines de alerta en el panel.
export function renderAlertsPanel(selector, boletines = []) {
  const container = document.querySelector(selector);
  if (!container) return;

  // Sin embargo, si no se encuentran boletines va a saltar el mensaje que esta dentro del "container.innerHTML".
  if (boletines.length === 0) {
    container.innerHTML = '<p class="data-label">No hay boletines activos.</p>';
    return;
  }

  // La funcion de esto es que cada boletin de noticas sea recubierto por el css asi le da la priodad de color y tambien a todos los boletines los pone en un div para que esten todos juntos.
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
