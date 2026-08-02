import { escapeHTML, attachImageFallback } from '../utils/dom.js';

/**
 * Renderiza la grilla de tarjetas de tributos. Cada tarjeta es un <button>
 * (foco y activación por teclado nativos) que dispara onSelect al hacer clic.
 *
 * @param {string} selector
 * @param {Array<object>} tributos - Lista ya filtrada.
 * @param {{ onSelect?: (tributo: object, triggerEl: HTMLElement) => void }} [options]
 */
export function renderTributeGrid(selector, tributos = [], { onSelect } = {}) {
  const container = document.querySelector(selector);
  if (!container) return;

  if (tributos.length === 0) {
    container.innerHTML = '<p class="data-label">No se encontraron tributos con estos filtros.</p>';
    return;
  }

  container.innerHTML = tributos
    .map((tributo) => {
      const badgeClass = tributo.estado === 'Vencedor' ? 'badge--success' : 'badge--danger';
      const imgTag = tributo.imagen
        ? `<img src="${escapeHTML(tributo.imagen)}" alt="" data-img-fallback loading="lazy" />`
        : '';

      return `
        <button
          type="button"
          class="tribute-card glass-panel glass-panel--interactive hud-corners"
          data-tribute-id="${escapeHTML(tributo.id)}"
        >
          <span class="tribute-card__scan" aria-hidden="true">${imgTag}</span>
          <span class="tribute-card__name">${escapeHTML(tributo.nombre)}</span>
          <span class="data-label">Distrito ${escapeHTML(tributo.distrito)} // Edición ${escapeHTML(tributo.edicion)}</span>
          <span class="badge ${badgeClass}">${escapeHTML(tributo.estado)}</span>
        </button>
      `;
    })
    .join('');

  attachImageFallback(container);

  container.querySelectorAll('[data-tribute-id]').forEach((card) => {
    card.addEventListener('click', () => {
      const tributo = tributos.find((t) => t.id === card.dataset.tributeId);
      if (tributo) onSelect?.(tributo, card);
    });
  });
}
