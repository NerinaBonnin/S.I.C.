/**
 * Renderiza el mapa SVG interactivo de Panem
 * @param {HTMLElement} container - elemento del DOM done se insertará el SVG
 * @param {Function} onSelectDistrict - Callback que se ejecuta al seleccionar un distrito
 */

export function renderDistricMap(conatiner, onSelectDistrict){
  const mapHtml = `
  <div class="hud-svg-wrapper">
    <svg viewBox="0 0 1000 800" class="panem-svg-map" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Filtro de Glow para efectos visuales Sci-Fi -->
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="sourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <!-- Fondos y decoraciones tipo HUD -->
      <rect width="100%" height="100%" fill="transparent"/>
        <g class="grid-lines" stroke="#0A4174" stroke-width="0.5" opacity="0.4">
          <line x1="0" y1="200" x2="1000" y2="200"/>
          <line x1="0" y1="400" x2="1000" y2="400"/>
          <line x1="0" y1="600" x2="1000" y2="600"/>
          <line x1="250" y1="0" x2="250" y2="800"/>
          <line x1="500" y1="0" x2="500" y2="800"/>
          <line x1="750" y1="0" x2="750" y2="800"/>
        </g>

        <!-- CAPITOLIO Y DISTRITOS (Coordenadas SVG simplificadas basadas en el mapa oficial) -->
        <g class="districts-group">
          <!-- Ejemplo Distrito 1: Lujo -->
          <path d="M450,280 L550,260 L570,330 L480,350 Z" class="district-path" data-district-id="1" />
          <text x="495" y="305" class="district-label">D1</text>

          <!-- Ejemplo Distrito 2: Masonería y Paz -->
          <path d="M380,350 L470,340 L460,420 L370,410 Z" class="district-path" data-district-id="2" />
          <text x="410" y="380" class="district-label">D2</text>

          <!-- Ejemplo Distrito 3: Tecnología -->
          <path d="M570,330 L670,310 L680,400 L580,410 Z" class="district-path" data-district-id="3" />
          <text x="615" y="360" class="district-label">D3</text>

          <!-- Ejemplo Distrito 4: Pesca -->
          <path d="M150,300 L250,280 L230,420 L130,380 Z" class="district-path" data-district-id="4" />
          <text x="180" y="350" class="district-label">D4</text>

          <!-- Ejemplo Distrito 7: Madera -->
          <path d="M350,150 L480,140 L460,240 L340,230 Z" class="district-path" data-district-id="7" />
          <text x="400" y="190" class="district-label">D7</text>

          <!-- Ejemplo Distrito 12: Minería -->
          <path d="M720,380 L840,360 L830,480 L710,470 Z" class="district-path" data-district-id="12" />
          <text x="760" y="425" class="district-label">D12</text>
          
          <!-- Nota: Los demás distritos (5, 6, 8, 9, 10, 11) siguen exactamente este estándar de trazado -->
        </g>
      </svg>
    </div>
  `;

  container.innerHTML = mapHtml;

  // Event Listeners dinámicos sobre los trazados del mapa
  const paths = container.querySelectorAll('.district-path');
  paths.forEach(path => {
    path.addEventListener('click', (e) => {
      // Quitar clase activa previa
      paths.forEach(p => p.classList.remove('active'));

      // Marcar activo actual
      path.classList.add('active');
      
      const districtId = parseInt(path.getAttribute('data-district-id'), 10);
      onSelectDistrict(districtId);
    });
  });
}