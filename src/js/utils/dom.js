/**
 * Escapa caracteres especiales de HTML para evitar inyección de markup
 * al interpolar texto dinámico dentro de innerHTML.
 * @param {unknown} value
 * @returns {string}
 */
export function escapeHTML(value) {
  if (value === null || value === undefined) return '';

  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Busca <img data-img-fallback> dentro de `root` y, si alguna falla al
 * cargar (archivo inexistente, 404, etc.), la elimina del DOM para que quede
 * visible el fondo degradado del contenedor como respaldo visual.
 * @param {HTMLElement} root
 */
export function attachImageFallback(root) {
  root.querySelectorAll('img[data-img-fallback]').forEach((img) => {
    img.addEventListener('error', () => img.remove(), { once: true });
  });
}

/**
 * Variante para logos dentro de SVG (<image data-logo-fallback>), como los
 * del mapa de distritos: a diferencia de attachImageFallback, acá el
 * elemento anterior en el DOM es un grupo de "respaldo" (ícono o número) que
 * hay que OCULTAR cuando el logo real sí carga, y dejar visible si falla.
 * @param {HTMLElement} root
 */
export function attachLogoFallback(root) {
  root.querySelectorAll('[data-logo-fallback]').forEach((image) => {
    image.addEventListener(
      'load',
      () => {
        image.classList.add('is-loaded');
        image.previousElementSibling?.classList.add('is-hidden');
      },
      { once: true }
    );
    image.addEventListener('error', () => image.remove(), { once: true });
  });
}
