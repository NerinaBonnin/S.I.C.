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
