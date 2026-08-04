/**
 * Conecta cada nodo [data-district] dentro del mapa SVG (ya presente en el
 * HTML, no generado por JS) con el callback de selección. Cubre clic y
 * teclado (Enter/Espacio), ya que un <g> de SVG no tiene el comportamiento
 * nativo de un <button>.
 *
 * @param {string} selector - Selector del <svg> contenedor.
 * @param {{ onSelect?: (id: number, triggerEl: SVGElement) => void }} [options]
 */
export function initDistrictMap(selector, { onSelect } = {}) {
  const root = document.querySelector(selector);
  if (!root) return;

  root.querySelectorAll('[data-district]').forEach((node) => {
    const id = Number(node.dataset.district);

    const trigger = () => onSelect?.(id, node);

    node.addEventListener('click', trigger);
    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        trigger();
      }
    });
  });
}
