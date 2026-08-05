// ============================================================================
// PANEM CENTRAL INTELLIGENCE SYSTEM — Entry point
// Orquesta la carga de datos y la inicialización de cada componente del
// dashboard. La lógica de renderizado vive en su propio módulo dentro de
// src/js/components/.
// ============================================================================

// Importo el archivo panemData.json y le doy un nombre que sería panemData
import panemData from '../data/panemData.json';
// Importo el archivo typerwriter.js que tiene la funcion initTyperwriter que nesecitamos
import { initTypewriter } from './utils/typewriter.js';
// Importo el archivo statsHud.js que tiene la funcion renderStatsHud que nesecitamos
import { renderStatsHud } from './components/statsHud.js';
// Importo el archivo victorCard.js que tiene la funcion renderFeacturedVictor que nesecitamos
import { renderFeaturedVictor } from './components/victorCard.js';
// Importo el archivo alertsPanel.js que tiene la funcion renderAlertsPanel que nesecitamos
import { renderAlertsPanel } from './components/alertsPanel.js';


// El initTypewriter() hace que se busque el id en el html y se rellene con el texto que esta al lado dando un efecto de tecleado.
initTypewriter('#typing-text', 'CAPITOL CENTRAL DATABASE // ACCESO RESTRINGIDO');

// El renderStatsHud() hace que busque el id en el html y se llene con la información metaEstadisticas que esta adentro de PanemData que lo que hace es mostrar el estado biometrico de cada tributo.
renderStatsHud('#stats-grid', panemData.metaEstadisticas);

// El renderFeacturedVictor() hace que busque el id en el html y se llene con la información de tributos dentro de PanemData que lo que hace es elegir y mostrar un tribuito vencedor al azar.
renderFeaturedVictor('#featured-victor', panemData.tributos);

// El renderAlertsPanel() hace que busque el id en el html y se rellene con la información de boletines dentro de panemData que lo que hace es mostrar el texto de los boletines de alerta.
renderAlertsPanel('#alerts-panel', panemData.boletines);
