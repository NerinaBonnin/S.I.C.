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
