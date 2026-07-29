// ============================================================================
// PÁGINA: /tributos
// Orquesta filtros, grilla y modal. La lógica de cada uno vive en su propio
// componente dentro de src/js/components/.
// ============================================================================

import panemData from '../../data/panemData.json';
import { renderTributeFilters } from '../components/tributeFilters.js';
import { renderTributeGrid } from '../components/tributeGrid.js';
import { initTributeModal, openTributeModal } from '../components/tributeModal.js';

const { tributos } = panemData;

initTributeModal();

function updateResultCount(count) {
  const el = document.querySelector('#tribute-count');
  if (!el) return;
  el.textContent = `${count} expediente${count === 1 ? '' : 's'} encontrado${count === 1 ? '' : 's'}`;
}

function applyFilters({ estado, distrito }) {
  const filtrados = tributos.filter((tributo) => {
    const coincideEstado = estado === 'todos' || tributo.estado === estado;
    const coincideDistrito = distrito === 'todos' || String(tributo.distrito) === String(distrito);
    return coincideEstado && coincideDistrito;
  });

  renderTributeGrid('#tribute-grid', filtrados, { onSelect: openTributeModal });
  updateResultCount(filtrados.length);
}

renderTributeFilters('#tribute-filters', tributos, { onChange: applyFilters });
applyFilters({ estado: 'todos', distrito: 'todos' });
