/**
 * Renderiza la ficha tecnica del distrito seleccionado dentro del panel lateral
 * @param {HTMLElement} container - Contenedor donde se inserta el panel de detalles
 * @param {Object} district - Objeto con los datos del distrito extraidos del JSON
 * @param {Array} victors - Lista de vencedores asociados a este distrito
 */

export function renderDistrictFicha(container, district, victors = []){
  if (!district) return;

  const victorsListHtml = victors.length > 0
  ? victors.map(v =>`<li class="victor-tag">${v.nombre} (Edición ${v.edicion})</li>`).join('')
    : '<li class="no-victors">SIN REGISTRO DE VENCEDORES</li>';

  container.innerHTML = `
    <div class="hud-card district-card-detail">
      <!-- Esquinas decorativas Sci-Fi -->
      <div class="corner-bracket top-left"></div>
      <div class="corner-bracket top-right"></div>
      <div class="corner-bracket bottom-left"></div>
      <div class="corner-bracket bottom-right"></div>

      <div class="district-card-header">
        <span class="hud-badge">SECTOR TERRITORIAL</span>
        <h2 class="district-name">DISTRITO ${district.id}</h2>
        <h3 class="district-industry">// ${district.especialidad.toUpperCase()}</h3>
      </div>

      <div class="hud-divider"></div>

      <div class="district-card-body">
        <div class="info-group">
          <label>POBLACIÓN ESTIMADA</label>
          <p>${district.poblacion || 'Clasificada'}</p>
        </div>

        <div class="info-group">
          <label>DESCRIPCIÓN OPERATIVA</label>
          <p class="district-description">${district.descripcion}</p>
        </div>

        <div class="info-group">
          <label>VENCEDORES HISTÓRICOS REGISTRADOS</label>
          <ul class="victors-list">
            ${victorsListHtml}
          </ul>
        </div>
      </div>

      <div class="district-card-footer">
        <span class="status-indicator active"></span>
        <span class="status-text">ESTADO: PRODUCCIÓN ACTIVA</span>
      </div>
    </div>
  `;
}