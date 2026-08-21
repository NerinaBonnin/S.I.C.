import { escapeHTML } from '../utils/dom.js';

const RECORDS = {
  1: { 
    region: 'Noreste acomodado', 
    especialidad: 'Artículos de lujo', 
    historia: 'Distrito dedicado a bienes de lujo para el Capitolio. Sus tributos solían llegar a la arena con preparación previa y una imagen cuidadosamente construida.', 
    relevantes: ['Cashmere', 'Gloss', 'Glimmer'], 
    afecto: 86,
    nivel: 'ALTO', 
    fotos: ['Cashmere.webp', 'Gloss.webp', 'Glimmer.webp'] 
  },

  2: { 
    region: 'Antiguas Montañas Rocosas', 
    especialidad: 'Cantería, armamento y entrenamiento militar', 
    historia: 'Sede histórica de la cantería, la producción de armamento y la formación de tributos profesionales. Fue uno de los aliados más firmes del Capitolio.', 
    relevantes: ['Cato', 'Enobaria', 'Brutus'], 
    afecto: 94,
    nivel: 'MUY ALTO',
    fotos: ['Cato.webp', 'Enobaria.webp', 'Brutus.webp'] 
  },

  3: {
    region: 'Zona tecnológica', 
    especialidad: 'Electrónica y tecnología', 
    historia: 'Centro de producción tecnológica de Panem. Sus habitantes se distinguían por su ingenio, reparación de sistemas y lectura estratégica de los mecanismos.', 
    relevantes: ['Beetee Latier', 'Wiress'], 
    afecto: 55, 
    nivel: 'MEDIO', 
    fotos: ['beetee latier.webp', 'Wiress.webp'] 
  },

  4: { 
    region: 'Costa occidental', 
    especialidad: 'Pesca y productos marinos',
    historia: 'Distrito costero especializado en pesca. Sus tributos crecían cerca del agua y a menudo dominaban redes, nudos y supervivencia marina.', 
    relevantes: ['Finnick Odair', 'Mags Flanagan', 'Coral'], 
    afecto: 68,
    nivel: 'MEDIO', 
    fotos: ['Finnick.webp', 'mags.jpg', 'Coral.webp'] 
  },

  5: { 
    region: 'Zona de plantas energéticas',
    especialidad: 'Energía', 
    historia: 'Responsable de producir y administrar la energía que sostenía la infraestructura de Panem y el consumo del Capitolio.', 
    relevantes: ['Foxface', 'Porter Tripp'], 
    afecto: 61, 
    nivel: 'MEDIO', 
    fotos: ['Comadreja.webp', 'Porter_Tripp.webp'] 
  },

  6: {
    region: 'Corredor industrial', 
    especialidad: 'Transporte', 
    historia: 'Distrito de redes ferroviarias, vehículos y transporte de carga. La presión productiva y la dependencia de sustancias marcaban su vida cotidiana.', 
    relevantes: ['Morphling', 'Titus Fenton'], 
    afecto: 37, 
    nivel: 'BAJO', 
    fotos: ['Titus Fenton.webp'] 
  },

  7: { 
    region: 'Antiguo noroeste boscoso', 
    especialidad: 'Madera y silvicultura', 
    historia: 'Distrito forestal encargado de la extracción de madera y papel. Sus habitantes desarrollaban fuerza física y conocimiento del bosque.',
    relevantes: ['Johanna Mason', 'Blight', 'Treech'], 
    afecto: 42, 
    nivel: 'BAJO', 
    fotos: ['Johanna Mason.webp', 'Treech.webp'] 
  },

  8: { 
    region: 'Centro manufacturero', 
    especialidad: 'Textiles', 
    historia: 'Una enorme red de fábricas textiles abastecía al Capitolio. La población trabajaba bajo turnos intensos y vigilancia constante.', 
    relevantes: ['Cecelia', 'Woof'], 
    afecto: 32, 
    nivel: 'BAJO', 
    fotos: ['Louella McCoy.webp'] 
  },

  9: { 
    region: 'Llanuras centrales', 
    especialidad: 'Granos', 
    historia: 'Proveedor de cereales y molienda para Panem. Su producción estaba integrada a las rutas de abastecimiento del Capitolio.', 
    relevantes: ['Tributos del Distrito 9'], 
    afecto: 49, 
    nivel: 'MEDIO', 
    fotos: [] 
  },

  10: { 
    region: 'Tierras ganaderas', 
    especialidad: 'Ganadería', 
    historia: 'Distrito dedicado a la cría y procesamiento de ganado. Sus habitantes conocían de cerca el trabajo rural y el manejo de animales.', 
    relevantes: ['Tanner', 'Brandy'], 
    afecto: 46, 
    nivel: 'MEDIO', 
    fotos: [] 
  },

  11: { 
    region: 'Antiguo sureste de EE. UU.', 
    especialidad: 'Agricultura', 
    historia: 'El distrito más extenso de Panem, responsable de la producción agrícola que abastecía al Capitolio. Estuvo sometido a una vigilancia particularmente estricta.', 
    relevantes: ['Chaff', 'Seeder', 'Rue', 'Thresh'], 
    afecto: 28, 
    nivel: 'MUY BAJO', 
    fotos: ['Chaff.webp', 'Rue.webp', 'Thresh.webp']
  },

  12: { 
    region: 'Antigua Appalachia', 
    especialidad: 'Minería de carbón', 
    historia: 'El distrito más pobre y menos poblado de Panem, encargado de extraer carbón para la industria energética. Después de los 74.º Juegos se convirtió en símbolo de la rebelión.', 
    relevantes: ['Haymitch Abernathy', 'Katniss Everdeen', 'Peeta Mellark', 'Lucy Gray Baird'], 
    afecto: 12, 
    nivel: 'CRÍTICO', 
    fotos: ['Haymitch Abernathy.webp', 'Katniss.webp', 'peeta mellark.webp'] 
  },
};

export function getDistrictRecord(id, districtData) {
  const record = RECORDS[id];
  if (!record) return null;
  return { id, nombre: districtData?.nombre ?? `Distrito ${id}`, region: districtData?.region ?? record.region, especialidad: districtData?.especialidad ?? record.especialidad, historia: districtData?.historia ?? record.historia, relevantes: districtData?.vencedoresHistoricos ?? record.relevantes, ...record };
}

function galleryMarkup(distrito) {
  return `<section class="district-modal__gallery" aria-label="Galería visual del ${escapeHTML(distrito.nombre)}">${[0, 1, 2].map((index) => {
    const source = distrito.fotos[index];
    return `<figure class="district-modal__camera-frame">${source ? `<img src="/assets/img/tributos/${encodeURIComponent(source)}" alt="Archivo visual relacionado con ${escapeHTML(distrito.nombre)}" data-img-fallback />` : ''}<figcaption>FEED ${String(index + 1).padStart(2, '0')}</figcaption></figure>`;
  }).join('')}</section>`;
}

export function buildDistrictFichaMarkup(distrito) {
  return `${galleryMarkup(distrito)}<header class="district-modal__header"><img class="district-modal__logo" src="/assets/img/distritos/distrito-${distrito.id}.jpg" alt="Emblema del ${escapeHTML(distrito.nombre)}" data-img-fallback /><div class="district-modal__title"><h3>${escapeHTML(distrito.nombre)}</h3><p class="data-label">${escapeHTML(distrito.region)}</p></div></header><p class="data-label district-modal__specialty">Especialidad: ${escapeHTML(distrito.especialidad)}</p><p class="district-modal__desc">${escapeHTML(distrito.historia)}</p><div class="district-modal__winners"><p class="data-label">Vencedores / personas relevantes</p><ul>${distrito.relevantes.map((nombre) => `<li>${escapeHTML(nombre)}</li>`).join('')}</ul></div><section class="district-modal__affection" aria-label="Nivel de afecto hacia el Capitolio"><div><p class="data-label">Nivel de afecto hacia el Capitolio</p><span>${escapeHTML(distrito.nivel)}</span></div><div class="district-modal__meter" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${distrito.afecto}" aria-label="Afecto hacia el Capitolio"><i style="width:${distrito.afecto}%"></i></div></section>`;
}
