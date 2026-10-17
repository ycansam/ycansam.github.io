// ===== PROJECT DATA =====
const projects = {
  // ——— Experience (Albums) ———
  'zara': {
    emoji: '👔',
    title: 'Frontend Dev — Oxigent Technologies (Zara.com)',
    type: 'Álbum',
    tag: 'Experiencia',
    year: '2023–act.',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    description: 'Desarrollo frontend en Oxigent Technologies para Zara.com (Inditex), con sede en Barcelona. Enfoque en producto, rendimiento, mantenibilidad y accesibilidad. Trabajo con observabilidad y monitoreo (logging, tracing, métricas con Grafana), feature flags, experimentación A/B (GrowthBook), Event-Driven Architecture (WebRTC y bus local), patrones de diseño, refactorización y gestión de deuda técnica en entornos SSR.',
    features: [
      'Observabilidad y monitoreo (logging, tracing, métricas, Grafana)',
      'Feature flags y experimentación A/B (GrowthBook)',
      'Performance & optimización (caching, patrones de alto rendimiento)',
      'Documentación técnica clara y mantenible',
      'Refactorización y gestión de deuda técnica',
      'Event-Driven Architecture (WebRTC y bus local)',
      'Gestión de stakeholders',
      'Metodologías ágiles (Scrum, Kanban)',
      'Planificación técnica (roadmaps, estimaciones, milestones)',
      'Accesibilidad, usabilidad y testabilidad',
      'Entorno SSR con React y Node.js',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'SSR', 'GrowthBook', 'Grafana', 'WebRTC', 'React Testing Library', 'Enzyme', 'Jira', 'GitHub'],
    demoUrl: 'https://www.zara.com',
    codeUrl: null,
  },
  'insyde': {
    emoji: '💻',
    title: 'Full Stack Dev — INSYDE SL',
    type: 'Álbum',
    tag: 'Experiencia',
    year: '2022–2023',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    description: 'Desarrollador Full Stack en INSYDE SL, Gandía (Valencia). Refactorización completa de QRLOCATE (base de datos, backend y frontend). Desarrollo de aplicaciones móviles con IONIC y Angular. Testing con Jest y React Testing Library. Control de código con Git y Microsoft Azure.',
    features: [
      'Refactorización completa de QRLOCATE (BBDD, Back y Front)',
      'Desarrollo Full Stack con MongoDB, Express, React y Node.js',
      'Desarrollo de apps móviles con IONIC y Angular',
      'Control de código Git y Microsoft Azure',
      'Testing frontend con Jest y React Testing Library',
      'Testing backend con Jest',
    ],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'IONIC', 'Angular', 'Jest', 'React Testing Library', 'Git', 'Azure'],
    demoUrl: null,
    codeUrl: null,
  },
  'ysolve': {
    emoji: '🚀',
    title: 'Autónomo — Ysolve.es',
    type: 'Álbum',
    tag: 'Experiencia',
    year: '2022–2023',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    description: 'Desarrollador Full Stack autónomo en Gandía (Valencia). Dos proyectos principales: TPV para comercios con integración de máquinas de auto cobro en efectivo (MQTT + Raspberry Pi), y refactorización completa de la web O-city.org con arquitectura de microservicios.',
    features: [
      'TPV adaptado a farmacias, bares, restaurantes y comercios',
      'Integración con máquinas de auto cobro via MQTT y Raspberry Pi 3',
      'Software completo con React, Electron, Node.js y MySQL',
      'Diseño industrial de caja para máquinas de auto cobro',
      'Refactorización completa de O-city.org (ReactJS + Node.js)',
      'Arquitectura de microservicios para el backend',
      'Mapas y funcionalidades geoespaciales con Leaflet',
      'Bases de datos MongoDB y SQL/Sequelize',
      'Metodologías ágiles (SCRUM) y Trello',
    ],
    techStack: ['React', 'Electron', 'Node.js', 'MySQL', 'MongoDB', 'Sequelize', 'MQTT', 'Raspberry Pi', 'Leaflet', 'JavaScript', 'Python'],
    demoUrl: 'https://ysolve.es',
    codeUrl: null,
  },
  // ——— Education (Aparece en) ———
  'carrefour': {
    emoji: '🛒',
    title: 'Carrefour España',
    type: 'Álbum',
    tag: 'Experiencia',
    year: '2019–2020',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    description: 'Dos puestos en Carrefour España, Alzira (Valencia). Jefe de stock (verano 2020): gestión de inventario, coordinación de reposición y control logístico. Merchant (verano 2019): atención al cliente, gestión de producto y visual merchandising.',
    features: [
      'Jefe de stock — Gestión de inventario y logística (2020)',
      'Merchant — Atención al cliente y merchandising (2019)',
      'Coordinación de equipos de reposición',
      'Control de stock y gestión de almacén',
    ],
    techStack: ['Gestión de stock', 'Logística', 'Atención al cliente', 'Trabajo en equipo'],
    demoUrl: null,
    codeUrl: null,
  },
  // ——— Education (Aparece en) ———
  'upv': {
    emoji: '🎓',
    title: 'Grado en Tecnologías Interactivas',
    type: 'Aparece en',
    tag: 'Formación',
    year: '2019–2023',
    gradient: 'linear-gradient(135deg, #1a3a5c, #0d1b2a)',
    description: 'Grado en Tecnologías Interactivas (Ingeniería de Software) por la Universitat Politècnica de València. Formación en desarrollo de software, interfaces interactivas, inteligencia artificial, electrónica y diseño de experiencias digitales.',
    features: [
      'Desarrollo de software y aplicaciones web',
      'Interfaces interactivas y UX/UI',
      'Inteligencia artificial y machine learning',
      'Electrónica y sistemas embebidos',
      'Producción multimedia y 3D',
    ],
    techStack: ['C++', 'Java', 'Python', 'JavaScript', 'Unity', 'Arduino', 'OpenCV'],
    demoUrl: null,
    codeUrl: null,
  },
  'bachillerato': {
    emoji: '📐',
    title: 'Bachillerato Científico Tecnológico',
    type: 'Aparece en',
    tag: 'Formación',
    year: '2016–2019',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
    description: 'Bachillerato Científico Tecnológico cursado en el IES José María Parra, Alzira (Valencia). Formación orientada a ciencias y tecnología con base sólida en matemáticas, física y tecnología industrial.',
    features: [
      'Matemáticas avanzadas y cálculo',
      'Física y química',
      'Tecnología industrial',
      'Dibujo técnico',
    ],
    techStack: ['Matemáticas', 'Física', 'Tecnología', 'Dibujo técnico'],
    demoUrl: null,
    codeUrl: null,
  },
  'eso': {
    emoji: '📚',
    title: 'Educación Secundaria Obligatoria',
    type: 'Aparece en',
    tag: 'Formación',
    year: '2012–2016',
    gradient: 'linear-gradient(135deg, #3a6073, #16222a)',
    description: 'Educación Secundaria Obligatoria cursada en el IES José María Parra, Alzira (Valencia). Formación general con orientación científico-tecnológica.',
    features: [
      'Formación general multidisciplinar',
      'Orientación científico-tecnológica',
      'Base en matemáticas y ciencias',
    ],
    techStack: ['Ciencias', 'Matemáticas', 'Tecnología', 'Informática'],
    demoUrl: null,
    codeUrl: null,
  },
  // ——— Personal Projects (Singles) ———
  'guess-investor': {
    emoji: '🚀',
    title: 'Guess Investor',
    type: 'Sencillo',
    tag: 'Full-Stack + ML',
    year: '2025–2026',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    description: 'Aplicación móvil de predicción de mercados financieros con Machine Learning. Analiza activos en tiempo real, genera predicciones basadas en múltiples factores técnicos y fundamentales, y permite hacer seguimiento de la precisión del modelo.',
    features: [
      'Predicciones ML con red neuronal entrenada en datos reales',
      'Clasificación automática de activos por tipo de inversión',
      'Sistema de tracking de precisión con métricas históricas',
      'Análisis técnico con indicadores RSI, MACD, Bollinger',
      'Calendario económico integrado y noticias de mercado',
    ],
    techStack: ['React Native', 'TypeScript', 'Python', 'TensorFlow', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    demoUrl: null,
    codeUrl: 'https://github.com/ycansam/guess-investor',
  },
  'portfolio-3d': {
    emoji: '🌐',
    title: 'Portfolio 3D',
    type: 'Sencillo',
    tag: 'Frontend',
    year: '2021',
    gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    description: 'Portfolio personal interactivo construido con Three.js. Presenta proyectos y habilidades en un entorno 3D inmersivo con modelos, animaciones y transiciones fluidas entre secciones.',
    features: [
      'Escena 3D interactiva con Three.js',
      'Modelos 3D animados y controlados por scroll',
      'Transiciones suaves entre secciones',
      'Diseño responsivo adaptado a dispositivos móviles',
    ],
    techStack: ['Three.js', 'JavaScript', 'WebGL', 'GLSL', 'HTML5', 'CSS3'],
    demoUrl: null,
    codeUrl: 'https://github.com/ycansam/portfolio',
  },
  'wordmu': {
    emoji: '🔤',
    title: 'WORDMU',
    type: 'Sencillo',
    tag: 'Full-Stack',
    year: '2022',
    gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    description: 'Aplicación web multijugador de adivinar palabras construida con JavaScript y Node.js. Usa sockets y eventos en tiempo real para la comunicación entre jugadores.',
    features: [
      'Multijugador en tiempo real con WebSockets',
      'Sistema de eventos para sincronizar estado de juego',
      'Salas de juego con código único',
      'Interfaz responsiva para móvil y escritorio',
    ],
    techStack: ['JavaScript', 'Node.js', 'Socket.io', 'Express', 'HTML5', 'CSS3'],
    demoUrl: null,
    codeUrl: null,
  },
  'asistente-zara': {
    emoji: '💬',
    title: 'Asistente Virtual Zara.com',
    type: 'Sencillo',
    tag: 'Frontend',
    year: '2023–2026',
    gradient: 'linear-gradient(135deg, #fddb92, #d1fdff)',
    description: 'Aplicación web integrada como componente remoto en Zara.com, desarrollada con React y TypeScript. Monitorizada con Grafana, aplicando accesibilidad, testabilidad y gestión con stakeholders.',
    features: [
      'Componente remoto integrado en Zara.com',
      'Monitorización con Grafana y observabilidad',
      'Accesibilidad (WAI-ARIA) y testing exhaustivo',
      'Gestión y coordinación con stakeholders',
      'Experimentación A/B con GrowthBook',
    ],
    techStack: ['React', 'TypeScript', 'Grafana', 'React Testing Library', 'SSR', 'Node.js'],
    demoUrl: 'https://www.zara.com',
    codeUrl: null,
  },
  'tpv-electron': {
    emoji: '🏪',
    title: 'TPV Electron',
    type: 'Sencillo',
    tag: 'Full-Stack',
    year: '2022–2023',
    gradient: 'linear-gradient(135deg, #c1dfc4, #deecdd)',
    description: 'Creación desde cero de un TPV para pequeños comercios (farmacias, bares, restaurantes). Integrado con máquinas de autocobro en efectivo mediante puente MQTT con Raspberry Pi 3. Incluye diseño industrial de la caja de instalación.',
    features: [
      'App de escritorio con Electron',
      'Interfaz React con gestión de estado Redux',
      'Conexión MQTT con máquinas de autocobro vía Raspberry Pi',
      'Diseño industrial de caja de instalación',
      'Compatible con farmacias, bares, restaurantes',
    ],
    techStack: ['Electron', 'React', 'Redux', 'MQTT', 'Node.js', 'MariaDB', 'Python', 'C++', 'Raspberry Pi'],
    demoUrl: null,
    codeUrl: null,
  },
  'dron-forestal': {
    emoji: '🚁',
    title: 'Dron de Control Forestal',
    type: 'Sencillo',
    tag: 'Hardware + C++',
    year: '2018–2019',
    gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)',
    description: 'Montaje de un dron con sensores para detección de incendios forestales. Desarrollado un programa en C++ para el funcionamiento autónomo del dron y procesamiento de datos de sensores.',
    features: [
      'Montaje físico de dron con sensores ambientales',
      'Programa de control en C++',
      'Detección de incendios forestales',
      'Procesamiento de datos de sensores en tiempo real',
    ],
    techStack: ['C++', 'Arduino', 'Sensores', 'Hardware'],
    demoUrl: null,
    codeUrl: null,
  },
  'cdio-sonda': {
    emoji: '🛠️',
    title: 'Proyecto Electrónico CDIO',
    type: 'Sencillo',
    tag: 'Hardware + C++',
    year: '2019–2020',
    gradient: 'linear-gradient(135deg, #ad5389, #3c1053)',
    description: 'Montaje de una sonda con distintos sensores para la detección y recolección de datos ambientales. Desarrollo de un programa que permitía recoger los datos de la sonda y transmitirlos. Metodología CDIO.',
    features: [
      'Montaje de sonda con múltiples sensores',
      'Programa de recolección y transmisión de datos',
      'Metodología CDIO (Concebir, Diseñar, Implementar, Operar)',
      'Gestión con Scrum y Trello',
    ],
    techStack: ['C++', 'Arduino', 'Sensores', 'Hardware'],
    demoUrl: null,
    codeUrl: null,
  },
  'easyfield': {
    emoji: '🌾',
    title: 'EasyField',
    type: 'Sencillo',
    tag: 'Full-Stack',
    year: '2020',
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    description: 'Aplicación web enfocada en el sector agrícola que muestra a los usuarios los datos recogidos por sondas instaladas en su plantación. Permite ver calidad, posición y área de recolección en tiempo real desde cualquier lugar.',
    features: [
      'Visualización de datos de sondas agrícolas en tiempo real',
      'Mapa interactivo con posición y área de sensores',
      'Panel de control de calidad de plantaciones',
      'Gestión con Scrum y Trello',
    ],
    techStack: ['jQuery', 'JavaScript', 'HTML5', 'CSS', 'MySQL', 'PHP'],
    demoUrl: null,
    codeUrl: null,
  },
  'murbin': {
    emoji: '🏙️',
    title: 'Murbin — Smart Cities IoT',
    type: 'Sencillo',
    tag: 'IoT + Full-Stack',
    year: '2020–2021',
    gradient: 'linear-gradient(135deg, #f12711, #f5af19)',
    description: 'Proyecto IoT enfocado en Smart Cities para mejorar el mobiliario urbano municipal. Elementos inteligentes, sostenibles y eficientes conectados mediante MQTT, controlados por Raspberry Pi y M5Stack.',
    features: [
      'IoT con Android Things y Raspberry Pi',
      'Hardware M5Stack y ESP32',
      'Comunicación App–RPi vía MQTT',
      'App móvil en Java con Firebase',
      'Diseño industrial y prototipado',
    ],
    techStack: ['Java', 'C++', 'Android Things', 'MQTT', 'Firebase', 'Raspberry Pi', 'ESP32'],
    demoUrl: null,
    codeUrl: null,
  },
  'earth-33': {
    emoji: '🎮',
    title: 'Earth 33 — Videojuego',
    type: 'Sencillo',
    tag: 'Game Dev',
    year: '2021',
    gradient: 'linear-gradient(135deg, #6a3093, #a044ff)',
    description: 'Videojuego de aventuras y exploración Low Poly con carácter fantástico. El jugador puede elegir entre 3 modos: atacar, poseer enemigos y poseer objetos del entorno, cada uno con habilidades únicas.',
    features: [
      'Videojuego 3D Low Poly en Unity',
      '3 modos de juego: ataque, posesión de enemigos y objetos',
      'Habilidades únicas por modo',
      'Modelado 3D con 3Ds Max',
      'Gestión con Scrum y Trello',
    ],
    techStack: ['C#', 'Unity', '3Ds Max', 'Game Design'],
    demoUrl: null,
    codeUrl: null,
  },
  'juego-cartas': {
    emoji: '🃏',
    title: 'Juego de Cartas WebSocket',
    type: 'Sencillo',
    tag: 'Full-Stack',
    year: '2021',
    gradient: 'linear-gradient(135deg, #e44d26, #f7df1e)',
    description: 'Videojuego de cartas 1v1 en web con sistema de colas mediante WebSockets. Permite jugar desde cualquier dispositivo y navegador, con salas ilimitadas sin interferencias.',
    features: [
      'Juego de cartas 1v1 en tiempo real',
      'Sistema de colas con WebSockets',
      'Salas ilimitadas e independientes',
      'Animaciones con Anime.js',
    ],
    techStack: ['JavaScript', 'Node.js', 'WebSockets', 'Anime.js', 'MySQL', 'HTML5', 'CSS'],
    demoUrl: null,
    codeUrl: null,
  },
  'music2you': {
    emoji: '🎤',
    title: 'Music2you',
    type: 'Sencillo',
    tag: 'Full-Stack + Mobile',
    year: '2022–2023',
    gradient: 'linear-gradient(135deg, #fc466b, #3f5efb)',
    description: 'Web y aplicación móvil orientada a músicos urbanos emergentes. Permite vender merchandising propio, construir su marca y darse a conocer. Integra Blockchain para gestión de activos digitales.',
    features: [
      'Plataforma web y app móvil para músicos',
      'Venta de merchandising integrada',
      'Integración con Blockchain',
      'Perfiles de artista y descubrimiento',
    ],
    techStack: ['Angular', 'Node.js', 'React Native', 'Blockchain'],
    demoUrl: null,
    codeUrl: null,
  },
  'qrlocate': {
    emoji: '📱',
    title: 'QRLocate',
    type: 'Sencillo',
    tag: 'Full-Stack',
    year: '2022',
    gradient: 'linear-gradient(135deg, #00b4db, #0083b0)',
    description: 'Refactorización completa de una aplicación web para seguimiento de contenedores mediante códigos QR. Proyecto desarrollado en INSYDE con stack MERN.',
    features: [
      'Seguimiento de contenedores vía QR',
      'Refactorización completa del frontend y backend',
      'Stack MERN (MongoDB, Express, React, Node)',
      'Panel de gestión y trazabilidad',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    demoUrl: null,
    codeUrl: null,
  },
  'geswat': {
    emoji: '🌡️',
    title: 'GESWAT Environmental Sensor',
    type: 'Sencillo',
    tag: 'IoT + Full-Stack',
    year: '2021–2022',
    gradient: 'linear-gradient(135deg, #373b44, #4286f4)',
    description: 'Dispositivo esclavo-maestro escalable capaz de recoger hasta 17 medidas diferentes de calidad del aire. Datos interpretables desde una aplicación web con mapa interactivo para usuarios técnicos y ayuntamientos.',
    features: [
      'Dispositivos con conexiones escalables esclavo-maestro',
      'Hasta 17 medidas de calidad del aire',
      'Desarrollo de firmware para las placas',
      'Mapa interactivo con Leaflet',
      'Gestión con Scrum y Trello',
    ],
    techStack: ['C++', 'Angular', 'Node.js', 'Leaflet', 'Python', 'Hardware'],
    demoUrl: null,
    codeUrl: null,
  },
  'hatsukimanga': {
    emoji: '📚',
    title: 'HatsukiManga App',
    type: 'Sencillo',
    tag: 'Mobile',
    year: '2022',
    gradient: 'linear-gradient(135deg, #ff9966, #ff5e62)',
    description: 'Aplicación móvil de lectura de libros/manga basada en una plataforma web existente. Desarrollo nativo para iOS y Android con backend en Node.js.',
    features: [
      'App móvil para iOS y Android',
      'Lectura de manga y libros digitales',
      'Backend con Node.js',
      'Adaptación de plataforma web a móvil',
    ],
    techStack: ['React Native', 'Node.js', 'iOS', 'Android'],
    demoUrl: null,
    codeUrl: null,
  },
  'perfect-square': {
    emoji: '◻️',
    title: 'Perfect Square',
    type: 'Sencillo',
    tag: 'Game Dev + Mobile',
    year: '2020–2021',
    gradient: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    description: 'Juego móvil para Android publicado en Google Play Store. El jugador debe realizar cuadrados perfectos con el teléfono. Incluye varios modos de juego con dificultad progresiva.',
    features: [
      'Publicado en Google Play Store',
      'Varios modos de juego',
      'Mecánica de crear cuadrados perfectos',
      'Dificultad progresiva',
      'Desarrollado con Unity',
    ],
    techStack: ['Unity', 'C#', 'Android', 'Google Play'],
    demoUrl: null,
    codeUrl: null,
  },
  'tfg-non-euclidean': {
    emoji: '🌀',
    title: 'Mundos No Euclídeos — TFG',
    type: 'Sencillo',
    tag: 'Game Dev + TFG',
    year: '2023',
    gradient: 'linear-gradient(135deg, #7f00ff, #e100ff)',
    description: 'Trabajo de Fin de Grado: desarrollo de un videojuego con mundos no euclídeos en Unity. Exploración de geometrías imposibles, portales y espacios que desafían la percepción del jugador.',
    features: [
      'Geometrías no euclídeas en tiempo real',
      'Portales y espacios imposibles',
      'Motor de renderizado adaptado',
      'Investigación académica aplicada',
      'Trabajo de Fin de Grado (UPV)',
    ],
    techStack: ['Unity', 'C#', 'Shaders', 'HLSL', 'Game Design'],
    demoUrl: null,
    codeUrl: null,
  },
};

// ===== DOM ELEMENTS =====
const topbar = document.getElementById('topbar');
const npCover = document.getElementById('npCover');
const npTitle = document.getElementById('npTitle');
const npTag = document.getElementById('npTag');
const npDemo = document.getElementById('npDemo');
const npCode = document.getElementById('npCode');
const npDetailBtn = document.getElementById('npDetailBtn');
const npPrev = document.getElementById('npPrev');
const npNext = document.getElementById('npNext');
const npPlay = document.getElementById('npPlay');
const npHeart = document.getElementById('npHeart');
const npProgressFill = document.getElementById('npProgressFill');

// Detail side panel
const detailPanel = document.getElementById('detailPanel');
const panelClose = document.getElementById('panelClose');
const panelScroll = document.getElementById('panelScroll');
const panelCover = document.getElementById('panelCover');
const panelEmoji = document.getElementById('panelEmoji');
const panelType = document.getElementById('panelType');
const panelTitle = document.getElementById('panelTitle');
const panelMeta = document.getElementById('panelMeta');
const panelDesc = document.getElementById('panelDesc');
const panelFeatures = document.getElementById('panelFeatures');
const panelChips = document.getElementById('panelChips');
const panelDemo = document.getElementById('panelDemo');
const panelCode = document.getElementById('panelCode');

let currentProject = null;
let panelOpen = false;

// Ordered list of project keys for navigation (follows DOM/visual order)
const projectKeys = [...new Set([...document.querySelectorAll('[data-project]')].map(el => el.dataset.project))];

// ===== TOPBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  topbar.classList.toggle('topbar--scrolled', window.scrollY > 300);
});

// ===== OPEN / CLOSE PANEL =====
function openPanel() {
  if (panelOpen) return;
  panelOpen = true;
  detailPanel.classList.add('detail-panel--open');
  document.body.classList.add('panel-open');
}

function closePanel() {
  if (!panelOpen) return;
  panelOpen = false;
  detailPanel.classList.remove('detail-panel--open');
  document.body.classList.remove('panel-open');
}

function togglePanel() {
  panelOpen ? closePanel() : openPanel();
}

// ===== FILL PANEL WITH PROJECT DATA =====
function fillPanel(data) {
  panelCover.style.background = data.gradient;
  panelEmoji.textContent = data.emoji;
  panelType.textContent = data.type;
  panelTitle.textContent = data.title;
  panelMeta.textContent = `Yeray Candel · ${data.year} · ${data.tag}`;
  panelDesc.textContent = data.description;

  // Features
  panelFeatures.innerHTML = data.features.map((f) => `<li>${f}</li>`).join('');

  // Tech chips
  panelChips.innerHTML = data.techStack.map((t) => `<span class="chip">${t}</span>`).join('');

  // Demo button
  if (data.demoUrl) {
    panelDemo.href = data.demoUrl;
    panelDemo.classList.remove('panel-btn--hidden');
  } else {
    panelDemo.classList.add('panel-btn--hidden');
  }

  // Code button
  if (data.codeUrl) {
    panelCode.href = data.codeUrl;
    panelCode.classList.remove('panel-btn--hidden');
  } else {
    panelCode.classList.add('panel-btn--hidden');
  }

  // Scroll panel to top on project change
  panelScroll.scrollTop = 0;
}

// ===== SELECT A PROJECT =====
function selectProject(projectId) {
  const data = projects[projectId];
  if (!data) return;

  const isSameProject = currentProject === projectId;
  currentProject = projectId;

  // Update now-playing bar
  npCover.innerHTML = `<span>${data.emoji}</span>`;
  npCover.style.background = data.gradient;
  npTitle.textContent = data.title;
  npTag.textContent = `${data.tag} · ${data.year}`;

  // Show/hide demo link
  if (data.demoUrl) {
    npDemo.href = data.demoUrl;
    npDemo.style.display = 'flex';
  } else {
    npDemo.style.display = 'none';
  }

  // Show/hide code link
  if (data.codeUrl) {
    npCode.href = data.codeUrl;
    npCode.style.display = 'flex';
  } else {
    npCode.style.display = 'none';
  }

  // Always show detail button
  npDetailBtn.style.display = 'flex';

  // Reset heart
  npHeart.classList.remove('active');

  // Animate progress bar
  if (npProgressFill) {
    npProgressFill.style.transition = 'none';
    npProgressFill.style.width = '0%';
    requestAnimationFrame(() => {
      npProgressFill.style.transition = 'width 8s linear';
      npProgressFill.style.width = '100%';
    });
  }

  // Update prev/next button states
  const idx = projectKeys.indexOf(projectId);
  npPrev.disabled = idx <= 0;
  npNext.disabled = idx >= projectKeys.length - 1;

  // Highlight active track
  document.querySelectorAll('.track').forEach((t) => t.classList.remove('track--active'));
  const activeTrack = document.querySelector(`.track[data-project="${projectId}"]`);
  if (activeTrack) activeTrack.classList.add('track--active');

  // Highlight active album card + swap play/pause icons
  const playSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M8 5.14v14l11-7-11-7z"/></svg>';
  const pauseSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
  document.querySelectorAll('.album-card').forEach((c) => {
    c.classList.remove('album-card--active');
    const btn = c.querySelector('.album-card__play');
    if (btn) btn.innerHTML = playSVG;
  });
  const activeCard = document.querySelector(`.album-card[data-project="${projectId}"]`);
  if (activeCard) {
    activeCard.classList.add('album-card--active');
    const btn = activeCard.querySelector('.album-card__play');
    if (btn) btn.innerHTML = pauseSVG;
    activeCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }

  // Animate content swap in panel if switching projects
  if (!isSameProject) {
    detailPanel.classList.add('detail-panel--switching');
    setTimeout(() => {
      fillPanel(data);
      detailPanel.classList.remove('detail-panel--switching');
    }, 150);
  }

  // Open panel if not already open
  openPanel();
}

// ===== EVENT LISTENERS =====

// Tracks → select project (opens panel)
document.querySelectorAll('.track').forEach((track) => {
  track.addEventListener('click', () => {
    const id = track.dataset.project;
    if (id) selectProject(id);
  });
});

// Album card play buttons → select project
document.querySelectorAll('.album-card__play').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.album-card');
    const id = card?.dataset.project;
    if (id) selectProject(id);
  });
});

// Album card click → select project
document.querySelectorAll('.album-card').forEach((card) => {
  card.addEventListener('click', () => {
    const id = card.dataset.project;
    if (id) selectProject(id);
  });
});

// Action bar play button → select project or toggle panel
const playBtn = document.querySelector('.play-btn');
playBtn?.addEventListener('click', () => {
  if (currentProject) {
    togglePanel();
  } else {
    selectProject('zara');
  }
});

// Now-playing title click → toggle panel
npTitle.addEventListener('click', () => {
  if (currentProject) togglePanel();
});

// Now-playing detail button → toggle panel
npDetailBtn.addEventListener('click', () => {
  if (currentProject) togglePanel();
});

// Close panel
panelClose.addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePanel();
  }
});

// Prev / Next / Play controls
npPrev.addEventListener('click', () => {
  if (!currentProject) return;
  const idx = projectKeys.indexOf(currentProject);
  if (idx > 0) selectProject(projectKeys[idx - 1]);
});

npNext.addEventListener('click', () => {
  if (!currentProject) return;
  const idx = projectKeys.indexOf(currentProject);
  if (idx < projectKeys.length - 1) selectProject(projectKeys[idx + 1]);
});

npPlay.addEventListener('click', () => {
  if (currentProject) {
    togglePanel();
  } else {
    selectProject(projectKeys[0]);
  }
});

// Heart toggle
npHeart.addEventListener('click', () => {
  npHeart.classList.toggle('active');
});

// ===== SHOW ALL / COLLAPSE GRID =====
document.querySelectorAll('.show-all-btn').forEach(btn => {
  const cardRow = btn.previousElementSibling;
  if (!cardRow || !cardRow.classList.contains('card-row')) return;

  // Show button if content overflows (vertical or horizontal)
  const overflows = cardRow.scrollHeight > cardRow.clientHeight + 10 ||
                    cardRow.scrollWidth > cardRow.clientWidth + 10;
  if (overflows) {
    btn.style.display = '';
  }

  btn.addEventListener('click', () => {
    const isExpanded = cardRow.classList.toggle('card-row--expanded');
    btn.textContent = isExpanded ? 'Mostrar menos' : 'Mostrar todos';
  });
});

// ===== VIEW MODE TOGGLE (compact / list) =====
const sectionConfig = {
  albums: {
    keys: ['zara', 'insyde', 'ysolve', 'carrefour'],
    cardRow: document.querySelector('#albums .card-row'),
    timeline: document.getElementById('albumsTimeline'),
  },
  singles: {
    keys: ['guess-investor', 'tfg-non-euclidean', 'asistente-zara', 'tpv-electron', 'music2you', 'wordmu', 'qrlocate', 'hatsukimanga', 'geswat', 'portfolio-3d', 'earth-33', 'juego-cartas', 'perfect-square', 'murbin', 'easyfield', 'cdio-sonda', 'dron-forestal'],
    cardRow: document.querySelector('#singles .card-row'),
    timeline: document.getElementById('singlesTimeline'),
  },
  education: {
    keys: ['upv', 'bachillerato', 'eso'],
    cardRow: document.querySelector('#education .card-row'),
    timeline: document.getElementById('educationTimeline'),
  },
};

function parseYearRange(yearStr) {
  // e.g. "2023–2026" → [2023, 2026], "2021" → [2021, 2021]
  const parts = yearStr.split(/[–-]/);
  return parts.map(p => parseInt(p.trim(), 10)).filter(n => !isNaN(n));
}

function buildTimelineHTML(keys) {
  // Group projects by start year, sort descending (newest first)
  const grouped = {};
  keys.forEach(key => {
    const data = projects[key];
    const years = parseYearRange(data.year);
    const startYear = years[0] || 0;
    if (!grouped[startYear]) grouped[startYear] = [];
    grouped[startYear].push({ key, data, startYear, endYear: years[1] || startYear });
  });

  const sortedYears = Object.keys(grouped).map(Number).sort((a, b) => b - a);
  let html = '';

  sortedYears.forEach(year => {
    // Year marker
    const endYear = grouped[year].reduce((max, p) => Math.max(max, p.endYear), year);
    const yearLabel = endYear > year ? `${year} — ${endYear}` : `${year}`;
    html += `<div class="timeline-year"><span class="timeline-year__dot"></span><span class="timeline-year__label">${yearLabel}</span></div>`;

    grouped[year].forEach(({ key, data }) => {
      const linksHTML = [];
      if (data.demoUrl) {
        linksHTML.push(`<a href="${data.demoUrl}" target="_blank" rel="noopener" class="timeline-item__link timeline-item__link--primary" onclick="event.stopPropagation()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          Demo
        </a>`);
      }
      if (data.codeUrl) {
        linksHTML.push(`<a href="${data.codeUrl}" target="_blank" rel="noopener" class="timeline-item__link timeline-item__link--secondary" onclick="event.stopPropagation()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          Código
        </a>`);
      }

      html += `
        <article class="timeline-item" data-project="${key}">
          <div class="timeline-item__header">
            <div class="timeline-item__cover" style="background: ${data.gradient}">
              <span>${data.emoji}</span>
            </div>
            <div class="timeline-item__info">
              <h3 class="timeline-item__title">${data.title}</h3>
              <p class="timeline-item__meta">${data.year} · ${data.tag}</p>
            </div>
            <span class="timeline-item__tag">${data.tag}</span>
          </div>
          <p class="timeline-item__desc">${data.description}</p>
          <ul class="timeline-item__features">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="timeline-item__tech">
            ${data.techStack.map(t => `<span class="chip">${t}</span>`).join('')}
          </div>
          ${linksHTML.length ? `<div class="timeline-item__links">${linksHTML.join('')}</div>` : ''}
        </article>
      `;
    });
  });

  return html;
}

function attachTimelineListeners(container) {
  container.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.project;
      if (id) selectProject(id);
    });
  });
}

// Wire up all view toggle buttons
document.querySelectorAll('.view-toggle').forEach(toggle => {
  const sectionId = toggle.dataset.section;
  const config = sectionConfig[sectionId];
  if (!config) return;

  toggle.querySelectorAll('.view-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      toggle.querySelectorAll('.view-toggle__btn').forEach(b => b.classList.remove('view-toggle__btn--active'));
      btn.classList.add('view-toggle__btn--active');

      const view = btn.dataset.view;
      const showAllBtn = config.cardRow.parentElement.querySelector('.show-all-btn');
      if (view === 'list') {
        config.cardRow.style.display = 'none';
        if (showAllBtn) showAllBtn.style.display = 'none';
        config.timeline.style.display = 'block';
        // Build content if empty (lazy)
        if (!config.timeline.innerHTML.trim()) {
          config.timeline.innerHTML = buildTimelineHTML(config.keys);
          attachTimelineListeners(config.timeline);
        }
      } else {
        config.cardRow.style.display = '';
        config.timeline.style.display = 'none';
        // Re-show button if row overflows
        if (showAllBtn && (config.cardRow.scrollHeight > config.cardRow.clientHeight + 10 ||
            config.cardRow.scrollWidth > config.cardRow.clientWidth + 10)) {
          showAllBtn.style.display = '';
        }
      }
    });
  });
});

// ===== REVEAL ON SCROLL (enhanced with stagger) =====
const revealSections = document.querySelectorAll('.content-section');
const revealCards = document.querySelectorAll('.album-card, .contact-card');
const revealTracks = document.querySelectorAll('.track');
const revealAbout = document.querySelectorAll('.artist-about');

function applyStaggerDelays(elements) {
  elements.forEach((el, i) => {
    el.classList.add('reveal');
    el.setAttribute('data-delay', Math.min(i + 1, 10));
  });
}

revealSections.forEach((el) => el.classList.add('reveal'));
applyStaggerDelays(revealTracks);
applyStaggerDelays(revealCards);
revealAbout.forEach((el) => el.classList.add('reveal'));

// Skill chips in about section get scale animation (only inside .artist-about, not modal chips)
document.querySelectorAll('.artist-about .chip, .skills-group .chip').forEach((chip, i) => {
  chip.classList.add('reveal', 'reveal--scale');
  chip.setAttribute('data-delay', Math.min(i + 1, 10));
});

const allRevealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

allRevealElements.forEach((el) => revealObserver.observe(el));

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
