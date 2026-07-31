import { buildBiometricFichaMarkup } from './biometricFicha.js';

let dialogEl = null;
let contentEl = null;
let lastTriggerEl = null;

function getRefs() {
  dialogEl ??= document.querySelector('#tribute-modal');
  contentEl ??= document.querySelector('#tribute-modal-content');
  return { dialogEl, contentEl };
}

/**
 * Conecta los listeners globales del modal (cierre por click en backdrop y
 * devolución de foco al elemento que lo abrió). Llamar una sola vez por página.
 */
export function initTributeModal() {
  const { dialogEl } = getRefs();
  if (!dialogEl) return;

  // Clic en el backdrop nativo del <dialog>: el target es el propio <dialog>
  // (nunca el contenido interno), así que este chequeo alcanza para detectarlo.
  dialogEl.addEventListener('click', (event) => {
    if (event.target === dialogEl) dialogEl.close();
  });

  dialogEl.addEventListener('close', () => {
    lastTriggerEl?.focus();
  });
  // Nota: <dialog> ya cierra con la tecla Escape de forma nativa.
}

/**
 * Abre el modal con la ficha biométrica del tributo seleccionado.
 * @param {object} tributo
 * @param {HTMLElement} [triggerEl] - Elemento que disparó la apertura (para devolver el foco).
 */
export function openTributeModal(tributo, triggerEl) {
  const { dialogEl, contentEl } = getRefs();
  if (!dialogEl || !contentEl) return;

  lastTriggerEl = triggerEl ?? null;
  dialogEl.setAttribute('aria-label', `Ficha biométrica: ${tributo.nombre}`);

  contentEl.innerHTML = `
    <div class="tribute-modal__toolbar">
      <button type="button" class="tribute-modal__close" data-close-modal aria-label="Cerrar ficha">✕</button>
    </div>
    <div class="victor-card__scan" aria-hidden="true">
      <span class="victor-card__scan-label">FEED EN VIVO // ARCHIVO CENTRAL</span>
    </div>
    <div class="victor-card__body">
      ${buildBiometricFichaMarkup(tributo)}
    </div>
  `;

  contentEl.querySelector('[data-close-modal]')?.addEventListener('click', () => dialogEl.close());

  dialogEl.showModal();
}
