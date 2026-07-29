// ============================================================================
// PANEM CENTRAL INTELLIGENCE SYSTEM — Entry point
// Orquesta la carga de datos y la inicialización de cada componente del
// dashboard. La lógica de renderizado vive en su propio módulo dentro de
// src/js/components/.
// ============================================================================

import panemData from '../data/panemData.json';
import { initTypewriter } from './utils/typewriter.js';
import { renderStatsHud } from './components/statsHud.js';
import { renderFeaturedVictor } from './components/victorCard.js';
import { renderAlertsPanel } from './components/alertsPanel.js';

// Un script type="module" ya se ejecuta después de parsear el DOM
// (comportamiento equivalente a "defer"), por lo que no hace falta
// esperar a DOMContentLoaded.

initTypewriter('#typing-text', 'CAPITOL CENTRAL DATABASE // ACCESO RESTRINGIDO');
renderStatsHud('#stats-grid', panemData.metaEstadisticas);
renderFeaturedVictor('#featured-victor', panemData.tributos);
renderAlertsPanel('#alerts-panel', panemData.boletines);
