import './style.css'

// Simple i18n setup
const translations = {
  en: {
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Git In Touch',
    'contact.title': 'Git In Touch',
    'contact.subtitle': 'Have a project in mind, a question, or just want to say hi? Drop a message below and it will be routed straight to my inbox.',
    'contact.nameLabel': 'Name',
    'contact.emailLabel': 'Email',
    'contact.messageLabel': 'Message',
    'contact.send': 'Send Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'you@example.com',
    'contact.messagePlaceholder': "Tell me a bit about what you're looking for",
    'hero.title': "Hey, I'm Monica Caires.",
    'hero.subtitle': "Fullstack developer, turning complex ideas into sleek, user-friendly experiences — think of me as a digital Marie Kondo, but with code.",
    'about.p1': "I build responsive, dynamic web apps with Astro, TailwindCSS and React—focusing on clean code, intuitive design, and great user experiences.",
    'about.p2': 'Eager to contribute to dynamic projects while continuously expanding my skills in building scalable and responsive web applications.',
    'about.p3': "When I'm not deep in development mode, you'll either find me on the tennis court, running along scenic trails, or enjoying a well-earned rest day—while humbly accepting that my pets are the true project managers at home.",
    'about.techTitle': 'Tech Stack',
    'projects.gitpeek.title': 'GitPeek',
    'projects.gitpeek.description': 'Web application for quickly visualizing GitHub user profiles and repositories.',
    'projects.gitpeek.tag.html': 'HTML',
    'projects.gitpeek.tag.css': 'CSS',
    'projects.gitpeek.tag.js': 'JavaScript',
    'projects.gitpeek.tag.api': 'GitHub API',
    'projects.tts.title': 'Text to Speech',
    'projects.tts.description': "Converts user-inputted text into spoken words using the browser\'s built-in Speech Synthesis API.",
    'projects.tts.tag.html': 'HTML',
    'projects.tts.tag.css': 'CSS',
    'projects.tts.tag.js': 'JavaScript',
    'projects.tts.tag.api': 'Speech Synthesis API',
    'experience.item1.title': 'Project Management Office Analyst',
    'experience.item1.company': 'Teleperformance Portugal SA',
    'experience.item1.date': 'January 2025 — Present',
    'experience.item1.location': 'Lisbon, Portugal',
    'experience.item1.description': "Integrated Microsoft\'s Partners Process Excellence department. Tracked progress, identified risks, and implemented solutions to improve project outcomes. I managed workflows, facilitated communication, and introduced innovations to enhance efficiency and processes. Through analysis and reporting, I ensured data-driven decisions and successful project delivery.",
    'experience.item2.title': 'Operational Trainer',
    'experience.item2.company': 'Teleperformance Portugal SA',
    'experience.item2.date': 'May 2021 — January 2025',
    'experience.item2.location': 'Lisbon, Portugal',
    'experience.item2.description': "As part of Microsoft\'s Partners training department, I provide guidance and training as well as create training materials, leveraging the SAP SuccessFactors suite, and report training data through Microsoft Excel and Power BI. Additionally, I supported my team by serving as a backup Training Manager, which has allowed me to interact with high-level roles.",
    'experience.item3.title': 'Operations Customer Expert',
    'experience.item3.company': 'Teleperformance Portugal SA',
    'experience.item3.date': 'July 2019 — May 2021',
    'experience.item3.location': 'Lisbon, Portugal',
    'experience.item3.description': 'Delivered exceptional customer service by addressing client concerns and ensuring satisfaction, while also supporting project management in maintaining team morale and assisting colleagues with procedure and service-related questions.',
    'education.course1.title': 'CS50x: Introduction to Computer Science',
    'education.course1.provider': 'Harvard University',
    'education.course1.description': "Harvard\'s comprehensive introduction to computer science and programming. Covers fundamental concepts including algorithms, data structures, web development, and software engineering principles.",
'education.course2.title': 'Fullstack Developer Path',
    'education.course2.provider': 'Scrimba',
    'education.course2.description': 'Comprehensive fullstack program covering modern frontend and backend development with HTML, CSS, JavaScript, React, Node.js, SQL, TypeScript, and Next.js.',
    'education.course3.title': 'The Complete Web Developer in 2024',
    'education.course3.provider': 'Zero to Mastery',
    'education.course3.description': 'Full-stack web development bootcamp covering frontend and backend technologies, databases, deployment, and industry best practices for building modern web applications.',
  },
  pt: {
    'nav.menu': 'Menu',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.education': 'Formação',
    'nav.contact': 'Git In Touch',
    'contact.title': 'Git In Touch',
    'contact.subtitle': 'Tem uma ideia de projeto, uma pergunta ou quer apenas dizer olá? Envie uma mensagem abaixo e ela irá diretamente para a minha caixa de entrada.',
    'contact.nameLabel': 'Nome',
    'contact.emailLabel': 'Email',
    'contact.messageLabel': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    'contact.namePlaceholder': 'O seu nome',
    'contact.emailPlaceholder': 'voce@exemplo.com',
    'contact.messagePlaceholder': 'Conte-me um pouco sobre o que procura',
    'hero.title': 'Olá, eu sou a Monica Caires.',
    'hero.subtitle': 'Desenvolvedora fullstack, transformando ideias complexas em experiências digitais simples e intuitivas — pense em mim como uma Marie Kondo digital, mas do código.',
    'about.p1': 'Crio aplicações web responsivas e dinâmicas com Astro, TailwindCSS e React, sempre focando em código limpo, design intuitivo e ótimas experiências de utilização.',
    'about.p2': 'Tenho vontade de contribuir para projetos dinâmicos enquanto continuo a expandir as minhas competências em construir aplicações web escaláveis e responsivas.',
    'about.p3': 'Quando não estou em modo de desenvolvimento, pode encontrar-me no campo de ténis, a correr por trilhos ou a aproveitar um merecido dia de descanso — aceitando humildemente que os meus animais de estimação são os verdadeiros gestores de projeto em casa.',
    'about.techTitle': 'Stack Tecnológico',
    'projects.gitpeek.title': 'GitPeek',
    'projects.gitpeek.description': 'Aplicação web para visualizar rapidamente perfis e repositórios de utilizadores do GitHub.',
    'projects.gitpeek.tag.html': 'HTML',
    'projects.gitpeek.tag.css': 'CSS',
    'projects.gitpeek.tag.js': 'JavaScript',
    'projects.gitpeek.tag.api': 'GitHub API',
    'projects.tts.title': 'Text to Speech',
    'projects.tts.description': 'Converte texto inserido pelo utilizador em fala, usando a API de síntese de voz do navegador.',
    'projects.tts.tag.html': 'HTML',
    'projects.tts.tag.css': 'CSS',
    'projects.tts.tag.js': 'JavaScript',
    'projects.tts.tag.api': 'Speech Synthesis API',
    'experience.item1.title': 'Project Management Office Analyst',
    'experience.item1.company': 'Teleperformance Portugal SA',
    'experience.item1.date': 'Janeiro 2025 — Presente',
    'experience.item1.location': 'Lisboa, Portugal',
    'experience.item1.description': 'Integrada no departamento Partners Process Excellence da Microsoft. Acompanhei progresso, identifiquei riscos e implementei soluções para melhorar os resultados dos projetos, gerindo fluxos de trabalho, facilitando a comunicação e introduzindo melhorias de eficiência e processos.',
    'experience.item2.title': 'Operational Trainer',
    'experience.item2.company': 'Teleperformance Portugal SA',
    'experience.item2.date': 'Maio 2021 — Janeiro 2025',
    'experience.item2.location': 'Lisboa, Portugal',
    'experience.item2.description': 'No departamento de formação para parceiros da Microsoft, forneci orientação e formação, criei materiais, utilizei a suite SAP SuccessFactors e reporteis dados de formação com Excel e Power BI, apoiando também a gestão de formação como backup Training Manager.',
    'experience.item3.title': 'Operations Customer Expert',
    'experience.item3.company': 'Teleperformance Portugal SA',
    'experience.item3.date': 'Julho 2019 — Maio 2021',
    'experience.item3.location': 'Lisboa, Portugal',
    'experience.item3.description': 'Prestei um serviço de apoio ao cliente de elevada qualidade, respondendo a questões e garantindo a satisfação, ao mesmo tempo que apoiava a gestão do projeto na manutenção da motivação da equipa e no apoio a colegas com dúvidas sobre procedimentos e serviços.',
    'education.course1.title': 'CS50x: Introduction to Computer Science',
    'education.course1.provider': 'Universidade de Harvard',
    'education.course1.description': 'Introdução abrangente à ciência da computação e programação, cobrindo algoritmos, estruturas de dados, desenvolvimento web e princípios de engenharia de software.',
'education.course2.title': 'Fullstack Developer Path',
    'education.course2.provider': 'Scrimba',
    'education.course2.description': 'Percurso completo de desenvolvimento fullstack, cobrindo frontend e backend modernos com HTML, CSS, JavaScript, React, Node.js, SQL, TypeScript e Next.js.',
    'education.course3.title': 'The Complete Web Developer in 2024',
    'education.course3.provider': 'Zero to Mastery',
    'education.course3.description': 'Bootcamp de desenvolvimento web full-stack cobrindo tecnologias de frontend e backend, bases de dados, deployment e boas práticas para aplicações web modernas.',
  },
};

const applyTranslations = (lang) => {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value) {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key];
    if (value) {
      el.placeholder = value;
    }
  });
};

const initLanguageSwitcher = () => {
  const toggle = document.getElementById('languageToggle');
  const menu = document.getElementById('languageMenu');
  const options = document.querySelectorAll('.language-option');
  if (!toggle || !menu) return;

  let currentLang = localStorage.getItem('lang') || 'en';
  document.documentElement.lang = currentLang;
  applyTranslations(currentLang);

  const closeMenu = () => menu.classList.add('hidden');
  const openMenu = () => menu.classList.remove('hidden');

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (menu.classList.contains('hidden')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      if (!lang || !translations[lang]) return;
      currentLang = lang;
      localStorage.setItem('lang', currentLang);
      document.documentElement.lang = currentLang;
      applyTranslations(currentLang);
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });
};

// Theme selector functionality
const initThemeSelector = () => {
  const themeToggle = document.getElementById('themeToggle');
  const themeMenu = document.getElementById('themeMenu');
  const themeOptions = document.querySelectorAll('.theme-option');
  const html = document.documentElement;

  // Load saved theme from localStorage:
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Toggle theme menu:
  themeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    themeMenu.classList.toggle('hidden');
  });

  // Close menu when clicking outside:
  document.addEventListener('click', (e) => {
    if (!themeMenu.contains(e.target) && !themeToggle.contains(e.target)) {
      themeMenu.classList.add('hidden');
    }
  });

  // Handle theme selection.
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      const theme = option.getAttribute('data-theme');
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeIcon(theme);
      themeMenu.classList.add('hidden');
    });
  });

  // Update the icon based on selected theme.
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = ''; // Clear existing classes.
    
    switch(theme) {
      case 'light':
        icon.className = 'fa-solid fa-sun text-zinc-400 hover:text-black transition-colors';
        break;
      case 'dark':
        icon.className = 'fa-solid fa-moon text-zinc-400 hover:text-black transition-colors';
        break;
      case 'night-owl':
        icon.className = 'fa-solid fa-cloud-moon text-zinc-400 hover:text-black transition-colors';
        break;
      case 'high-contrast':
        icon.className = 'fa-solid fa-circle-half-stroke text-zinc-400 hover:text-black transition-colors';
        break;
      default:
        icon.className = 'fa-solid fa-moon text-zinc-400 hover:text-black transition-colors';
    }
  }
};

// Navigation functionality
const initNavigation = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');
  const navWrapper = document.querySelector('.nav-wrapper');
  const navToggle = document.getElementById('navToggle');
  const navToggleLabel = document.getElementById('navToggleLabel');
  
  // Set About as active by default
  const aboutLink = document.querySelector('a[href="#about"]');
  if (aboutLink) {
    aboutLink.classList.add('active');
  }
  if (navToggleLabel) {
    navToggleLabel.textContent = aboutLink ? aboutLink.textContent.trim() : 'About';
  }

  if (navToggle && navWrapper) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      navWrapper.classList.toggle('nav-open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      
      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));
      
      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
      
      // Update active state
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update mobile nav label with current section name
      if (navToggleLabel) {
        navToggleLabel.textContent = link.textContent.trim();
      }

      // Close mobile dropdown after selection
      if (navWrapper && window.innerWidth <= 640) {
        navWrapper.classList.remove('nav-open');
      }
    });
  });
};

// Tech stack carousel functionality
const initTechStack = () => {
  const techStackScroll = document.querySelector('.tech-stack-scroll');
  if (!techStackScroll) return;
  
  // Clone items for infinite scroll effect
  const techItems = Array.from(techStackScroll.children);
  techItems.forEach(item => {
    const clone = item.cloneNode(true);
    techStackScroll.appendChild(clone);
  });
  
  // Pause animation on individual item hover
  const allTechItems = document.querySelectorAll('.tech-item');
  allTechItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      techStackScroll.style.animationPlayState = 'paused';
    });
    
    item.addEventListener('mouseleave', () => {
      techStackScroll.style.animationPlayState = 'running';
    });
  });
};

// Footer functionality (no pet toggle needed now)
const initFooter = () => {
  // placeholder in case we add footer interactions later
};

// Initialize all functionality
const initAll = () => {
  initLanguageSwitcher();
  initThemeSelector();
  initNavigation();
  initTechStack();
  initFooter();
};
// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
