/**
 * Aplica un efecto de tecleo caracter por caracter sobre un elemento.
 * Si el usuario prefiere movimiento reducido, muestra el texto de forma
 * inmediata en lugar de animarlo.
 *
 * @param {string} selector - Selector CSS del elemento destino.
 * @param {string} text - Texto a "tipear".
 * @param {{ speed?: number, startDelay?: number }} [options]
 */
export function initTypewriter(selector, text, { speed = 45, startDelay = 300 } = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    el.textContent = text;
    return;
  }

  let charIndex = 0;
  el.textContent = '';

  const typeNextChar = () => {
    if (charIndex >= text.length) return;
    el.textContent += text.charAt(charIndex);
    charIndex += 1;
    setTimeout(typeNextChar, speed);
  };

  setTimeout(typeNextChar, startDelay);
}
