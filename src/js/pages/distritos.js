// ============================================================================
// PÁGINA: /distritos
// Orquesta el mapa y el modal. La lógica de cada uno vive en su propio
// componente dentro de src/js/components/.
// ============================================================================

import panemData from '../../data/panemData.json';
import { initDistrictMap } from '../components/districtMap.js';
import { initDistrictModal, openDistrictModal } from '../components/districtModal.js';
import { attachLogoFallback } from '../utils/dom.js';

const { distritos } = panemData;

initDistrictModal();
attachLogoFallback(document.querySelector('#district-map'));

initDistrictMap('#district-map', {
  onSelect: (id, triggerEl) => {
    const distrito = distritos.find((d) => d.id === id);
    openDistrictModal(distrito, id, triggerEl);
  },
});
