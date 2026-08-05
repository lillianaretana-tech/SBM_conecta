const articleData = {
  accidentes: {tag:'EHS / Seguridad',tagClass:'ehs',title:'Reporte inmediato de accidentes',lead:'Así se gestiona un accidente laboral, paso a paso.',body:'<ol><li><strong>Reporte inmediato:</strong> el funcionario informa de inmediato a su líder o supervisor.</li><li><strong>Reporte interno a EHS:</strong> se genera el reporte, se investiga y se propone un plan de acción.</li><li><strong>Investigación y clasificación:</strong> EHS recopila la información, recomienda acciones y clasifica el evento.</li><li><strong>Registro y cierre:</strong> el site registra el caso en Gestión Documental y 4Insite; el proyecto implementa las acciones y entrega evidencias.</li></ol><p><strong>La respuesta de líderes, supervisores y encargados de proyecto es clave</strong> para facilitar el cierre del evento a tiempo.</p>',image:'assets/reporte_accidentes/page-1.png',pdf:'docs/reporte-inmediato-accidentes.pdf'},
  estadisticas: {tag:'EHS / Resultados',tagClass:'ehs',title:'Reporte de eventos – Julio 2026',lead:'13 días sin accidentes registrables y 24 eventos reportados durante julio.',body:'<ul><li><strong>RO:</strong> 10</li><li><strong>NWR:</strong> 13</li><li><strong>FA:</strong> 0</li><li><strong>REC:</strong> 1</li></ul><p>Los datos fueron tomados de 4Insite al 30 de julio de 2026.</p>',image:'assets/estadisticas/page-1.png',pdf:'docs/estadisticas-ehs.pdf'},
  goodcatch: {tag:'Reconocimiento',tagClass:'recognition',title:'Good Catch destacados',lead:'Una mirada atenta puede convertir pequeños detalles en grandes prevenciones.',body:'<p>Felicitaciones a <strong>Stefany Sánchez</strong> de Abbott Vascular, <strong>Pamela Badilla</strong> de Terumo Neuro y <strong>Francis Pérez</strong> de Edwards Lifesciences.</p><p>Su compromiso ayuda a cuidar al equipo y fortalece la cultura de seguridad.</p>',image:'assets/good_catch/page-1.png',pdf:'docs/good-catch.pdf'},
  asistencia: {tag:'Recursos Humanos',tagClass:'recognition',title:'Mejoremos la asistencia al trabajo',lead:'La puntualidad y la comunicación oportuna ayudan a mantener una operación organizada.',body:'<ul><li>Evite las llegadas tardías.</li><li>Avise cuando tenga un contratiempo o no pueda presentarse.</li><li>Recuerde que un comprobante médico no es una incapacidad.</li></ul>',image:'assets/rh/page-1.png',pdf:'docs/recursos-humanos-agosto.pdf'},
  telefono: {tag:'Recursos Humanos',tagClass:'recognition',title:'Uso del teléfono 4Insite',lead:'El dispositivo asignado es una herramienta de trabajo y debe permanecer en el proyecto.',body:'<ul><li>Uso exclusivo laboral.</li><li>No instalar aplicaciones no autorizadas.</li><li>Dejarlo en el lugar pactado antes de salir.</li><li>Mantenerlo limpio e informar cualquier inconveniente.</li></ul>',image:'assets/rh/page-2.png',pdf:'docs/recursos-humanos-agosto.pdf'},
  equipo: {tag:'Recursos Humanos',tagClass:'recognition',title:'Somos un equipo de trabajo',lead:'El respeto, la confianza y la comunicación nos permiten alcanzar objetivos comunes.',body:'<p>Trabajamos mejor cuando respetamos a los compañeros y al cliente, aceptamos la autoridad, reconocemos los logros, cumplimos los horarios y acudimos a la Política de Puertas Abiertas cuando corresponde.</p>',image:'assets/rh/page-3.png',pdf:'docs/recursos-humanos-agosto.pdf'},
  politica: {tag:'Comunicado general',tagClass:'recognition',title:'Política Integrada del Sistema de Gestión',lead:'Diez requerimientos que fortalecen nuestra cultura organizacional.',body:'<p>Cumplir los procesos, dar seguimiento real a los indicadores, mantener disciplina documental, conocer los roles, asegurar capacidades adecuadas, cumplir requisitos, promover la mejora continua, corregir causas raíz, seguir procedimientos y participar en los resultados de métricas.</p>',image:'assets/comunicado_1/page-1.png',pdf:'docs/politica-integrada.pdf'},
  problema: {tag:'Comunicado general',tagClass:'recognition',title:'¿Qué hacer cuando se presenta un problema?',lead:'Todo colaborador tiene derecho a expresar sus inquietudes y solicitar ayuda.',body:'<p>Esto aplica tanto en áreas comunes como en cuartos limpios. Pedir ayuda oportunamente protege la operación, la calidad y el trabajo de nuestros clientes.</p>',image:'assets/comunicado_2/page-1.png',pdf:'docs/pedir-ayuda.pdf'},
  cuartolimpio: {tag:'Comunicado general',tagClass:'ehs',title:'¿Qué hacer cuando ocurre una situación accidental?',lead:'Mantenga la calma, detenga el trabajo e informe de inmediato.',body:'<ul><li>Preste atención al entorno y muévase cuidadosamente.</li><li>Si toca accidentalmente equipos o materiales, pare el trabajo.</li><li>Nunca toque ni intente reacomodar el producto terminado del cliente.</li></ul>',image:'assets/comunicado_3/page-1.png',pdf:'docs/incidente-cuarto-limpio.pdf'},
  rotulos: {tag:'Innovación',tagClass:'innovation',title:'Rotulaciones magnéticas',lead:'Una señalización más visible para prevenir ingresos durante tareas de limpieza.',body:'<p><strong>Problema:</strong> algunas personas no respetaban las señalizaciones mientras SBM realizaba limpiezas en cuartos limpios o detrás de una puerta.</p><p><strong>Solución:</strong> instalar rótulos magnéticos en entradas y áreas específicas.</p><p><strong>Beneficio:</strong> mayor visibilidad y acceso restringido cuando existe un riesgo, como un piso mojado.</p>',image:'assets/innovacion_1/page-1.png',pdf:'docs/innovacion-rotulos-magneticos.pdf'},
  portaelementos: {tag:'Innovación',tagClass:'innovation',title:'Porta elementos metálico',lead:'Mayor resistencia, adaptación y duración para el uso constante de la industria.',body:'<p><strong>Problema:</strong> los soportes plásticos se desgastan rápidamente.</p><p><strong>Solución:</strong> sustituirlos por una estructura metálica simple y resistente.</p><p><strong>Beneficios:</strong> soporta mayor peso, reduce la fricción, requiere poco mantenimiento y puede fabricarse en distintas medidas.</p>',image:'assets/innovacion_2/page-1.png',pdf:'docs/innovacion-porta-elementos.pdf'}
};

let currentView = 'portada';
let previousView = 'portada';
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('menuBtn');

function showView(name, updateHash = true) {
  const target = document.getElementById(`view-${name}`);
  if (!target) return;
  if (name !== 'articulo') previousView = currentView === 'articulo' ? previousView : currentView;
  currentView = name;
  views.forEach(v => v.classList.toggle('active', v === target));
  target.scrollTop = 0;
  navLinks.forEach(b => b.classList.toggle('active', b.dataset.view === name));
  mobileMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  if (updateHash) history.replaceState(null, '', `#${name}`);
}

navLinks.forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.article-link').forEach(card => {
  const open = () => openArticle(card.dataset.article);
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }});
});

function openArticle(key) {
  const data = articleData[key];
  if (!data) return;
  previousView = currentView;
  const tag = document.getElementById('articleTag');
  tag.textContent = data.tag;
  tag.className = `tag ${data.tagClass}`;
  document.getElementById('articleTitle').textContent = data.title;
  document.getElementById('articleLead').textContent = data.lead;
  document.getElementById('articleBody').innerHTML = data.body;
  document.getElementById('articleImage').src = data.image;
  document.getElementById('articleImage').alt = data.title;
  document.getElementById('articlePdf').href = data.pdf;
  document.getElementById('fullImageBtn').dataset.image = data.image;
  showView('articulo');
}

document.getElementById('backBtn').addEventListener('click', () => showView(previousView || 'destacados'));

const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewerImage');
document.getElementById('fullImageBtn').addEventListener('click', e => {
  viewerImage.src = e.currentTarget.dataset.image;
  viewer.showModal();
});
document.getElementById('closeViewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', e => { if (e.target === viewer) viewer.close(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && currentView === 'articulo' && !viewer.open) showView(previousView || 'destacados');
});

const initial = location.hash.replace('#','');
showView(document.getElementById(`view-${initial}`) ? initial : 'portada', false);
