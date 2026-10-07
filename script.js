// ============================================================
// Portfolio — Xabier Quintairos
// Menú móvil, animación al hacer scroll y sistema multi-idioma (ES/EN)
// ============================================================

const translations = {
  es: {
    "nav-about": "Sobre mí",
    "nav-stack": "Stack",
    "nav-project": "Proyecto",
    "nav-experience": "Experiencia",
    "nav-education": "Educación",
    "nav-contact": "Contacto",
    "cv-btn": "Descargar CV",
    "hero-eyebrow": "// desarrollador multiplataforma",
    "hero-sub": "Unity · C# · Realidad Virtual. Construyo experiencias interactivas que van desde apps multiplataforma hasta videojuegos de terror narrativo, de principio a fin.",
    "badge-avail": "Disponible para trabajar",
    "btn-proj": "Ver proyecto destacado",
    "about-eyebrow": "// sobre mí",
    "about-title": "Perfil",
    "about-p1": "Soy desarrollador multiplataforma especializado en Unity y experiencias inmersivas, con prácticas en desarrollo VR para bienestar y estimulación cognitiva, software multiplataforma y soporte técnico. Actualmente curso una especialización en videojuegos y realidad virtual, y desarrollo en solitario un juego de terror narrativo en Unity: diseño, programo y cuido cada sistema, del control del jugador a los efectos visuales retro.",
    "about-p2": "Me interesan la optimización de rendimiento, la interacción inmersiva y construir software que se sienta cuidado de principio a fin — ya sea una app, una experiencia VR o un videojuego.",
    "stack-eyebrow": "// stack",
    "stack-title": "Habilidades",
    "skills-h1": "Juegos & VR",
    "skills-h3": "Herramientas & Datos",
    "tag-vr": "Realidad Virtual",
    "tag-ue": "Unreal Engine (básico)",
    "tag-qa": "QA & Testing",
    "proj-eyebrow": "// proyecto destacado",
    "proj-meta": "Terror narrativo en primera persona · Unity · Proyecto en solitario",
    "proj-desc": "Un juego de terror narrativo ambientado en una casa familiar, donde un protagonista infantil vive tres días que se torcerán poco a poco. Inspirado en juegos como Fears to Fathom, apuesta por el terror cotidiano antes que el susto fácil: la tensión crece desde los pequeños detalles de una casa que deja de sentirse segura.",
    "proj-subhead": "Construido yo solo, de principio a fin:",
    "proj-li1": "Controlador en primera persona y sistema de movimiento del personaje.",
    "proj-li2": "Sistema de interacción con el entorno: puertas, objetos y mecanismos.",
    "proj-li3": "Interfaz de teléfono / mensajes SMS integrada en el juego.",
    "proj-li4": "Efecto de cámara, fiel a la estética de terror analógico.",
    "proj-li5": "Sistema de gestión de días para estructurar la narrativa en tres jornadas.",
    "proj-li6": "NPCs mediante billboards optimizados y cinemáticas de introducción.",
    "btn-play": "🎮 Jugarlo ahora en itch.io",
    "exp-eyebrow": "// experiencia",
    "exp-title": "Experiencia",
    "exp1-role": "Desarrollador VR / Unity (Prácticas)",
    "exp1-desc1": "Desarrollo de experiencias VR en Unity para bienestar y estimulación cognitiva.",
    "exp1-desc2": "Optimización de rendimiento para Meta Quest y Pico.",
    "exp1-desc3": "Testing de aplicaciones y mejora de interfaces para usuarios.",
    "exp2-role": "Desarrollador de Software (Prácticas)",
    "exp2-desc1": "Desarrollo y mantenimiento de aplicaciones multiplataforma.",
    "exp2-desc2": "Gestión de bases de datos SQL y consultas.",
    "exp2-desc3": "Uso de Git para control de versiones y trabajo colaborativo.",
    "exp3-role": "Técnico Informático (Prácticas)",
    "exp3-desc1": "Soporte técnico y mantenimiento de sistemas informáticos.",
    "exp3-desc2": "Configuración básica de redes y soporte Windows/Linux.",
    "edu-eyebrow": "// educación",
    "edu-title": "Educación",
    "edu1-title": "Curso de Especialización en Videojuegos y VR",
    "edu2-title": "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    "edu3-title": "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
    "contact-eyebrow": "// contacto",
    "contact-title": "Hablemos",
    "contact-intro": "Estoy buscando mi primera posición como programador. Si tienes un proyecto, una vacante, o simplemente quieres hablar de Unity y VR, aquí me encuentras:"
  },
  en: {
    "nav-about": "About me",
    "nav-stack": "Stack",
    "nav-project": "Project",
    "nav-experience": "Experience",
    "nav-education": "Education",
    "nav-contact": "Contact",
    "cv-btn": "Download CV",
    "hero-eyebrow": "// cross-platform developer",
    "hero-sub": "Unity · C# · Virtual Reality. I build interactive experiences ranging from cross-platform apps to narrative horror video games, from start to finish.",
    "badge-avail": "Available for work",
    "btn-proj": "View featured project",
    "about-eyebrow": "// about me",
    "about-title": "Profile",
    "about-p1": "I am a cross-platform developer specialized in Unity and immersive experiences, with internships in VR development for wellness and cognitive stimulation, cross-platform software, and technical support. I am currently taking a specialization course in video games and virtual reality, and developing a narrative horror game in Unity solo: designing, programming, and taking care of every system, from player control to retro visual effects.",
    "about-p2": "I am interested in performance optimization, immersive interaction, and building software that feels polished from start to finish — whether it's an app, a VR experience, or a video game.",
    "stack-eyebrow": "// stack",
    "stack-title": "Skills",
    "skills-h1": "Games & VR",
    "skills-h3": "Tools & Data",
    "tag-vr": "Virtual Reality",
    "tag-ue": "Unreal Engine (basic)",
    "tag-qa": "QA & Testing",
    "proj-eyebrow": "// featured project",
    "proj-meta": "First-person narrative horror · Unity · Solo project",
    "proj-desc": "A narrative horror game set in a family home, where a child protagonist experiences three days that gradually unravel. Inspired by games like Fears to Fathom, it focuses on everyday dread rather than cheap jumpscares: tension builds from the small details of a house that stops feeling safe.",
    "proj-subhead": "Built entirely by myself, from scratch:",
    "proj-li1": "First-person controller and character movement system.",
    "proj-li2": "Environment interaction system: doors, objects, and mechanisms.",
    "proj-li3": "Integrated phone / SMS messaging interface.",
    "proj-li4": "Camera effect, faithful to analog horror aesthetics.",
    "proj-li5": "Day management system to structure the narrative across three days.",
    "proj-li6": "Optimized billboard NPCs and introductory cinematics.",
    "btn-play": "🎮 Play now on itch.io",
    "exp-eyebrow": "// experience",
    "exp-title": "Experience",
    "exp1-role": "VR / Unity Developer (Internship)",
    "exp1-desc1": "Development of VR experiences in Unity for wellness and cognitive stimulation.",
    "exp1-desc2": "Performance optimization for Meta Quest and Pico.",
    "exp1-desc3": "App testing and UI/UX improvements for users.",
    "exp2-role": "Software Developer (Internship)",
    "exp2-desc1": "Development and maintenance of cross-platform applications.",
    "exp2-desc2": "SQL database management and querying.",
    "exp2-desc3": "Git version control and collaborative teamwork.",
    "exp3-role": "IT Technician (Internship)",
    "exp3-desc1": "Technical support and maintenance of IT systems.",
    "exp3-desc2": "Basic network configuration and Windows/Linux support.",
    "edu-eyebrow": "// education",
    "edu-title": "Education",
    "edu1-title": "Specialization Course in Video Games and VR",
    "edu2-title": "Higher Degree in Multiplatform Application Development (DAM)",
    "edu3-title": "Intermediate Degree in Microcomputer Systems and Networks (SMR)",
    "contact-eyebrow": "// contact",
    "contact-title": "Let's talk",
    "contact-intro": "I am looking for my first junior developer position. If you have a project, an open vacancy, or just want to talk about Unity and VR, reach out here:"
  }
};

let currentLang = 'es';

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
    
    const htmlRoot = document.getElementById('htmlRoot');
    if (htmlRoot) {
      htmlRoot.setAttribute('lang', currentLang);
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });
  });
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
