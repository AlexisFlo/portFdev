// El español vive en index.html; aquí solo está la traducción al inglés
const TRANSLATIONS_EN = {
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.contact": "Contact",
  "hero.phrase": "Two swords: one to create, one to hunt bugs.",
  "experience.title": "Experience",
  "experience.airon.date": "FEB 2026-Present",
  "experience.airon.desc": "UI development and design (Figma) of the internal corporate system, building dynamic SPAs. Implemented a workflow management module to monitor and track tasks across departments, and developed a secure calibration control system. I also support the physical network infrastructure, including the setup and cabling of servers, nodes and security cameras.",
  "experience.sinergitec.desc": "Deployed full stack architectures and WhatsApp automation, cutting support calls by 60%. Optimized CI/CD pipelines with Rust to reduce costs and built cross-platform mobile apps with React Native, Supabase and Zustand.",
  "experience.itgam.title": "Developer",
  "experience.itgam.date": "JAN 2023 - JUN 2023",
  "experience.itgam.desc": "Network infrastructure monitoring and specialized technical support. I contributed to the technical design and connections for the remodeling of the networking labs, and helped develop the web inventory system used to manage technology assets.",
  "projects.title": "Projects",
  "projects.cfdi.desc": "Page to look up and download invoices for Franco auto parts.",
  "projects.huitz.desc": "Page to browse the menu and place orders online.",
  "projects.sme.desc": "Awareness site about the stereotypes held about, or created around, older adults.",
  "projects.elmayor.desc": "Website for a support center for older adults.",
  "about.title": "About me",
  "about.bio1": "I'm an ICT Engineer with a specialty that defines everything I do: <strong>Web Application Design</strong>. To me, developing isn't just spitting out code; it's designing solutions that actually work, always prioritizing clarity and data structure.",
  "about.bio2": "I've spent more than 3 years in the software world, moving between full stack development and systems engineering. I like getting my hands dirty with high-performance languages like <strong>Rust and Go</strong>, but I always keep the focus on the end user. One example was when I implemented a WhatsApp agent that cut support calls by 60%; it wasn't just programming, it was understanding where the bottleneck was and solving it.",
  "about.bio3": "My technical training began in high school as a programmer and was consolidated with my engineering degree, which gives me a complete view: from configuring networks and supporting infrastructure to building mobile apps with React Native and Supabase or speeding up CI/CD workflows.",
  "about.bio4": "I'm not satisfied with what I already know. I'm a lifelong learning enthusiast because in this world, if you don't evolve, you fall behind. My goal is simple: to be a better developer today than I was yesterday, delivering scalable, clean and efficient software.",
  "about.degree": "Information and Communication Technologies Engineering",
  "about.specialty": "Specialty: Web Application Design",
  "about.technician": "Programming Technician",
  "about.softSkills": "Self-taught, project documentation, logical thinking, structure and organization.",
  "about.languages": "Spanish (Native) / English (Fluent)",
  "services.title": "Services",
  "services.headline": "TECHNOLOGY <span>WITHIN YOUR REACH</span>",
  "services.lead": "From troubleshooting to developing your ideas, I help you keep your technology running. Technology solutions for your business, project or team.",
  "services.dev.title": "DEVELOPMENT",
  "services.dev.tagline": "Ideas that become solutions",
  "services.dev.item1": "Websites",
  "services.dev.item2": "Web systems",
  "services.dev.item3": "Mobile apps",
  "services.dev.item4": "Desktop apps",
  "services.dev.item5": "Database integration and management",
  "services.dev.item6": "Dashboards and data visualization",
  "services.support.title": "TECHNICAL SUPPORT",
  "services.support.tagline": "Fast, effective solutions",
  "services.support.item1": "Incident and technical fault resolution",
  "services.support.item2": "Equipment maintenance (PCs / laptops / peripherals)",
  "services.support.item3": "Software installation and setup",
  "services.support.item4": "System cleanup and optimization",
  "services.support.item5": "Basic IT consulting and training",
  "services.network.title": "NETWORKS AND CONNECTIVITY",
  "services.network.tagline": "Your network, always working",
  "services.network.item1": "Network setup and troubleshooting",
  "services.network.item2": "Routers and switches",
  "services.network.item3": "Connection troubleshooting",
  "services.network.item4": "Network security (firewalls, best practices)",
  "services.network.item5": "Network optimization and monitoring",
  "services.automation.title": "AUTOMATION",
  "services.automation.tagline": "More efficient processes, less effort",
  "services.automation.item1": "Task and process automation",
  "services.automation.item2": "Automation scripts and tools",
  "services.automation.item3": "Workflow setup",
  "services.automation.item4": "Process management and optimization",
  "services.automation.item5": "Custom integrations and solutions",
  "services.pc.title": "PC BUILDING",
  "services.pc.tagline": "Your machine, ready and safe",
  "services.pc.item1": "Custom PC builds",
  "services.pc.item2": "Component selection based on your needs",
  "services.pc.item3": "Cabling and component organization",
  "services.pc.item4": "Functional and performance testing",
  "services.why.label": "[WHY_CHOOSE_ME]",
  "services.why.item1": "Experience in support, networks, development and automation.",
  "services.why.item2": "Focus on practical, personalized solutions.",
  "services.why.item3": "Direct, no-hassle communication.",
  "services.why.item4": "Commitment to your project.",
  "services.cta": "REQUEST A QUOTE",
  "contact.title": "Contact",
  "contact.message": "Transmitting encrypted data. For direct access, start a secure connection.",
  "services.ctaHref": "mailto:floresfernandezalexishr@gmail.com?subject=Service%20quote%20request",
  "contact.emailTitle": "Send an email to Alexis at floresfernandezalexishr@gmail.com",
};

const langToggle = document.getElementById('lang-toggle');
const translated = [
  ...[...document.querySelectorAll('[data-i18n]')].map(el => ({
    key: el.dataset.i18n,
    original: el.innerHTML,
    apply: (value) => { el.innerHTML = value; }
  })),
  ...[...document.querySelectorAll('[data-i18n-href]')].map(el => ({
    key: el.dataset.i18nHref,
    original: el.getAttribute('href'),
    apply: (value) => el.setAttribute('href', value)
  })),
  ...[...document.querySelectorAll('[data-i18n-title]')].map(el => ({
    key: el.dataset.i18nTitle,
    original: el.getAttribute('title'),
    apply: (value) => el.setAttribute('title', value)
  }))
];

function savedLanguage() {
  try {
    return localStorage.getItem('lang');
  } catch {
    return null;
  }
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  translated.forEach(({ key, original, apply }) => {
    apply(lang === 'en' ? TRANSLATIONS_EN[key] : original);
  });

  langToggle.querySelectorAll('[data-lang]').forEach(option => {
    option.classList.toggle('is-active', option.dataset.lang === lang);
  });
  langToggle.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');

  try {
    localStorage.setItem('lang', lang);
  } catch {
    // Sin almacenamiento el idioma solo dura hasta recargar
  }
}

langToggle.addEventListener('click', (event) => {
  const current = document.documentElement.lang;
  setLanguage(event.target.dataset.lang || (current === 'en' ? 'es' : 'en'));
});

setLanguage(savedLanguage() || (navigator.language.startsWith('en') ? 'en' : 'es'));
