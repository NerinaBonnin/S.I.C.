import { escapeHTML } from '../utils/dom.js';

const RECORDS = {
  1: { 
    region: 'Región Noroeste', 
    especialidad: 'Fabricación de artículos de lujo', 
    historia: 'El Distrito 1 es uno de los distritos más ricos y privilegiados de Panem. Se especializa en la producción de artículos de lujo, como joyas y objetos costosos, destinados principalmente al Capitolio. Debido a su riqueza y cercanía con el poder, sus habitantes suelen tener mejores condiciones de vida que otros distritos. Además, es conocido por los “tributos profesionales”, jóvenes que se entrenan voluntariamente desde pequeños para participar y ganar los Juegos del Hambre.', 
    relevantes: ['Cashmere', 'Gloss', 'Glimmer', 'Marvel', 'Silka Sharp', 'Panache Barker'], 
    afecto: 86,
    nivel: 'ALTO', 
    fotos: ['distrito1-referencia1.webp', 'distrito1-referencia2.webp', 'distrito1-referencia3.webp'] 
  },

  2: { 
    region: 'Antiguas Montañas Rocosas', 
    especialidad: 'Cantería, armamento y entrenamiento militar', 
    historia: 'El Distrito 2 es uno de los distritos más poderosos y favorecidos de Panem. Se especializa en la extracción de piedra y otros materiales, además de estar estrechamente relacionado con la fabricación de armas y el entrenamiento militar. Sus habitantes suelen ser leales al Capitolio y, al igual que en el Distrito 1, muchos jóvenes se preparan para convertirse en tributos profesionales y participar voluntariamente en los Juegos del Hambre.', 
    relevantes: ['Cato', 'Enobaria', 'Brutus', 'Clove'], 
    afecto: 94,
    nivel: 'MUY ALTO',
    fotos: ['distrito2-referencia1.webp', 'distrito2-referencia2.webp', 'distrito2-referencia3.webp'] 
  },

  3: {
    region: 'Antigua centro-este', 
    especialidad: 'Electrónica y tecnología', 
    historia: 'El Distrito 3 es conocido por su especialización en la tecnología, la electrónica y la fabricación de aparatos. Sus habitantes son especialmente inteligentes y habilidosos para reparar o crear dispositivos, armas y mecanismos. A diferencia de los distritos más ricos, sus tributos suelen destacar más por su ingenio e inteligencia que por su fuerza física.', 
    relevantes: ['Beetee Latier', 'Wiress'], 
    afecto: 55, 
    nivel: 'MEDIO', 
    fotos: ['distrito3-referencia1.webp', 'distrito3-referencia2.webp', 'distrito3-referencia3.webp'] 
  },

  4: { 
    region: 'Costa oeste', 
    especialidad: 'Pesca y productos marinos',
    historia: 'El Distrito 4 es un distrito costero especializado en la pesca y la producción de alimentos provenientes del mar. Sus habitantes suelen tener grandes habilidades para nadar, pescar y sobrevivir en entornos acuáticos. También es uno de los distritos conocidos por tener tributos profesionales, por lo que algunos de sus participantes llegan a los Juegos del Hambre con entrenamiento previo.', 
    relevantes: ['Finnick Odair', 'Mags Flanagan', 'Annie Cresta'], 
    afecto: 68,
    nivel: 'MEDIO', 
    fotos: ['distrito4-referencia1.webp', 'distrito4-referencia2.webp', 'distrito4-referencia3.webp'] 
  },

  5: { 
    region: 'Antigua región suroeste',
    especialidad: 'Energía', 
    historia: 'El Distrito 5 está especializado en la producción y generación de energía para Panem. Sus habitantes trabajan con diferentes fuentes energéticas que ayudan a abastecer tanto al Capitolio como a los demás distritos. A pesar de su importancia, sus habitantes viven bajo el control y la explotación del Capitolio, como ocurre en gran parte de Panem.', 
    relevantes: ['Foxface', 'Porter Tripp'], 
    afecto: 61, 
    nivel: 'MEDIO', 
    fotos: ['distrito5-referencia1.webp', 'distrito5-referencia2.webp', 'distrito5-referencia3.webp'] 
  },

  6: {
    region: 'Antigua región del Medio Oeste', 
    especialidad: 'Transporte', 
    historia: 'El Distrito 6 es conocido por encargarse del transporte en Panem. Sus habitantes trabajan principalmente con trenes, vehículos y otros medios de transporte que permiten conectar los diferentes distritos con el Capitolio. Es un distrito industrial y sus habitantes suelen tener conocimientos relacionados con la maquinaria y el funcionamiento de los sistemas de transporte.', 
    relevantes: ['Titus Fenton'], 
    afecto: 37, 
    nivel: 'BAJO', 
    fotos: ['distrito6-referencia1.webp', 'distrito6-referencia2.webp', 'distrito6-referencia3.webp'] 
  },

  7: { 
    region: 'Antiguo Noroeste del Pacífico', 
    especialidad: 'Madera y silvicultura', 
    historia: 'El Distrito 7 se especializa en la madera y la industria forestal. Sus habitantes trabajan principalmente talando árboles y procesando madera para abastecer a Panem. Son conocidos por ser hábiles con las hachas y otras herramientas, lo que puede convertir a sus tributos en competidores peligrosos durante los Juegos del Hambre.',
    relevantes: ['Johanna Mason', 'Treech'], 
    afecto: 42, 
    nivel: 'BAJO', 
    fotos: ['distrito7-referencia1.webp', 'distrito7-referencia2.webp', 'distrito7-referencia3.webp'] 
  },

  8: { 
    region: 'región centro-sureste', 
    especialidad: 'Textiles', 
    historia: 'El Distrito 8 se especializa en la producción de textiles y ropa para Panem. Sus habitantes trabajan en fábricas, confeccionando prendas y otros productos textiles, generalmente en condiciones muy duras. Es un distrito con una fuerte tradición de resistencia y rebelión contra el Capitolio.', 
    relevantes: ['Sin expedientes'], 
    afecto: 32, 
    nivel: 'BAJO', 
    fotos: ['distrito8-referencia1.webp', 'distrito8-referencia2.webp', 'distrito8-referencia3.webp'] 
  },

  9: { 
    region: 'Antigua región central de Norteamérica', 
    especialidad: 'Granos', 
    historia: 'El Distrito 9 es conocido por su producción de granos y cereales, que abastecen de alimentos a gran parte de Panem. Sus habitantes trabajan principalmente en grandes campos agrícolas y en el procesamiento de cultivos. A pesar de ser fundamental para la alimentación del país, es un distrito relativamente pobre y controlado por el Capitolio.', 
    relevantes: ['Sin expedientes'], 
    afecto: 49, 
    nivel: 'MEDIO', 
    fotos: ['distrito9-referencia1.webp', 'distrito9-referencia2.webp', 'distrito9-referencia3.webp'] 
  },

  10: { 
    region: 'región suroeste', 
    especialidad: 'Ganadería', 
    historia: 'El Distrito 10 se especializa en la ganadería y la producción de carne para Panem. Sus habitantes trabajan principalmente con ganado y en actividades relacionadas con la cría y procesamiento de animales. Es un distrito rural, con condiciones de vida bastante humildes y una economía fuertemente controlada por el Capitolio.', 
    relevantes: ['Sin expedientes'], 
    afecto: 46, 
    nivel: 'MEDIO', 
    fotos: ['distrito10-referencia1.webp', 'distrito10-referencia2.webp', 'distrito10-referencia3.webp'] 
  },

  11: { 
    region: 'Antigua región sur y sureste', 
    especialidad: 'Agricultura', 
    historia: 'El Distrito 11 es conocido por su agricultura, especialmente por la producción de frutas, verduras y otros cultivos. Sus habitantes trabajan largas jornadas en los campos y viven bajo un fuerte control del Capitolio. A pesar de producir gran cantidad de alimentos para Panem, el distrito es muy pobre y sus habitantes sufren hambre y explotación.', 
    relevantes: ['Chaff', 'Seeder', 'Rue', 'Thresh'], 
    afecto: 28, 
    nivel: 'MUY BAJO', 
    fotos: ['distrito11-referencia1.webp', 'distrito11-referencia2.webp', 'distrito11-referencia3.webp']
  },

  12: { 
    region: 'Antigua Montañas Apalaches', 
    especialidad: 'Minería de carbón', 
    historia: 'El Distrito 12 es conocido principalmente por la minería del carbón. Es uno de los distritos más pobres de Panem, con condiciones de vida muy duras y escasez de alimentos. Sus habitantes trabajan principalmente en las minas y viven bajo una fuerte vigilancia del Capitolio. Es también el distrito de origen de Katniss Everdeen, protagonista de Los Juegos del Hambre.', 
    relevantes: ['Haymitch Abernathy', 'Katniss Everdeen', 'Peeta Mellark', 'Lucy Gray Baird'], 
    afecto: 12, 
    nivel: 'CRÍTICO', 
    fotos: ['distrito12-referencia1.webp', 'distrito12-referencia2.webp', 'distrito12-referencia3.webp'] 
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
    return `<figure class="district-modal__camera-frame">${source ? `<img src="/assets/img/distritos/referencias/${encodeURIComponent(source)}" alt="Archivo visual relacionado con ${escapeHTML(distrito.nombre)}" data-img-fallback />` : ''}<figcaption>FEED ${String(index + 1).padStart(2, '0')}</figcaption></figure>`;
  }).join('')}</section>`;
}

export function buildDistrictFichaMarkup(distrito) {
  return `${galleryMarkup(distrito)}<header class="district-modal__header"><img class="district-modal__logo" src="/assets/img/distritos/distrito-${distrito.id}.jpg" alt="Emblema del ${escapeHTML(distrito.nombre)}" data-img-fallback /><div class="district-modal__title"><h3>${escapeHTML(distrito.nombre)}</h3><p class="data-label">${escapeHTML(distrito.region)}</p></div></header><p class="data-label district-modal__specialty">Especialidad: ${escapeHTML(distrito.especialidad)}</p><p class="district-modal__desc">${escapeHTML(distrito.historia)}</p><div class="district-modal__winners"><p class="data-label">Vencedores / personas relevantes</p><ul>${distrito.relevantes.map((nombre) => `<li>${escapeHTML(nombre)}</li>`).join('')}</ul></div><section class="district-modal__affection" aria-label="Nivel de afecto hacia el Capitolio"><div><p class="data-label">Nivel de afecto hacia el Capitolio</p><span>${escapeHTML(distrito.nivel)}</span></div><div class="district-modal__meter" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${distrito.afecto}" aria-label="Afecto hacia el Capitolio"><i style="width:${distrito.afecto}%"></i></div></section>`;
}
