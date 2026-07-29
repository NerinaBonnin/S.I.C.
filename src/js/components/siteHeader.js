/**
 * Header y navegación principal, compartidos por todas las páginas.
 * Se renderiza una sola vez por página dentro de <header id="site-header">.
 */

const NAV_LINKS = [
  { href: '/', label: 'Dashboard' },
  { href: '/tributos/', label: 'Tributos' },
  { href: '/distritos/', label: 'Distritos' },
  { href: '/capitolio/', label: 'El Capitolio' },
  { href: '/juegos/', label: 'Los Juegos' },
];

/**
 * @param {string} selector - Contenedor donde montar el header (ej: '#site-header').
 * @param {string} [currentPath] - Path actual, por defecto window.location.pathname.
 */
export function renderSiteHeader(selector, currentPath = window.location.pathname) {
  const container = document.querySelector(selector);
  if (!container) return;

  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

  const navItems = NAV_LINKS.map(({ href, label }) => {
    const isCurrent = href === normalizedPath;
    return `<a href="${href}"${isCurrent ? ' aria-current="page"' : ''}>${label}</a>`;
  }).join('');

  container.innerHTML = `
    <div class="container site-header__inner">
      <a href="/" class="brand" aria-label="Panem Central Database, inicio">
        <span class="brand__indicator" aria-hidden="true"></span>
        PANEM // C.I.S.
      </a>
      <nav class="main-nav" aria-label="Navegación principal">
        ${navItems}
      </nav>
    </div>
  `;
}
