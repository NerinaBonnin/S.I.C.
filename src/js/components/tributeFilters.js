const ESTADO_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'Vencedor', label: 'Vencedor' },
  { value: 'Caído', label: 'Caído' },
];

/**
 * Renderiza los filtros de Estado (chips) y Distrito (select), calculado
 * dinámicamente a partir de los distritos presentes en los datos.
 *
 * @param {string} selector
 * @param {Array<object>} tributos
 * @param {{ onChange?: (state: { estado: string, distrito: string }) => void }} [options]
 */
export function renderTributeFilters(selector, tributos = [], { onChange } = {}) {
  const container = document.querySelector(selector);
  if (!container) return;

  const distritos = [...new Set(tributos.map((t) => t.distrito))].sort((a, b) => a - b);
  const state = { estado: 'todos', distrito: 'todos' };

  container.innerHTML = `
    <fieldset class="filter-group">
      <legend class="data-label">Estado</legend>
      <div class="filter-chips" role="group" aria-label="Filtrar por estado">
        ${ESTADO_OPTIONS.map(
          (opt, index) => `
            <button
              type="button"
              class="filter-chip${index === 0 ? ' is-active' : ''}"
              data-filter="estado"
              data-value="${opt.value}"
              aria-pressed="${index === 0}"
            >${opt.label}</button>
          `
        ).join('')}
      </div>
    </fieldset>

    <div class="filter-group">
      <label class="data-label" for="filter-distrito">Distrito</label>
      <select id="filter-distrito" class="filter-select">
        <option value="todos">Todos</option>
        ${distritos.map((d) => `<option value="${d}">Distrito ${d}</option>`).join('')}
      </select>
    </div>
  `;

  const chipButtons = container.querySelectorAll('[data-filter="estado"]');

  chipButtons.forEach((button) => {
    button.addEventListener('click', () => {
      chipButtons.forEach((btn) => {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');

      state.estado = button.dataset.value;
      onChange?.({ ...state });
    });
  });

  container.querySelector('#filter-distrito')?.addEventListener('change', (event) => {
    state.distrito = event.target.value;
    onChange?.({ ...state });
  });
}
