import { buildDistrictFichaMarkup } from './districtFicha.js';

let dialogEl = null;
let contentEl = null;
let lastTriggerEl = null;

function getRefs() {
  dialogEl ??= document.querySelector('#district-modal');
  contentEl ??= document.querySelector('#district-modal-content');
  return { dialogEl, contentEl };
}

/**
 * Conecta los listeners globales del modal (cierre por click en backdrop y
 * devolución de foco al elemento que lo abrió). Llamar una sola vez por página.
 */
export function initDistrictModal() {
  const { dialogEl } = getRefs();
  if (!dialogEl) return;

  dialogEl.addEventListener('click', (event) => {
    if (event.target === dialogEl) dialogEl.close();
  });

  dialogEl.addEventListener('close', () => {
    lastTriggerEl?.focus();
  });
  // Nota: <dialog> ya cierra con la tecla Escape de forma nativa.
}

/**
 * Abre el modal con el expediente del distrito seleccionado (o el aviso de
 * "sin datos" si todavía no está cargado en panemData.json).
 * @param {object|undefined} distrito
 * @param {number} id
 * @param {HTMLElement} [triggerEl]
 */
export function openDistrictModal(distrito, id, triggerEl) {
  const { dialogEl, contentEl } = getRefs();
  if (!dialogEl || !contentEl) return;

  lastTriggerEl = triggerEl ?? null;
  dialogEl.setAttribute(
    'aria-label',
    distrito ? `Expediente: ${distrito.nombre}` : `Distrito ${id}: expediente no disponible`
  );

  contentEl.innerHTML = `
    <div class="district-modal__toolbar">
      <button type="button" class="district-modal__close" data-close-modal aria-label="Cerrar expediente">✕</button>
    </div>
    ${distrito ? buildDistrictFichaMarkup(distrito) : ''}
  `;

  contentEl.querySelector('[data-close-modal]')?.addEventListener('click', () => dialogEl.close());

  dialogEl.showModal();
}
