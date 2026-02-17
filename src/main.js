import './style.css'

// Theme selector functionality:
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

  // Handle theme selection:
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      const theme = option.getAttribute('data-theme');
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      updateThemeIcon(theme);
      themeMenu.classList.add('hidden');
    });
  });

  // Update the icon based on selected theme:
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = '';
    
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

// Navigation functionality:
const initNavigation = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');
  const navWrapper = document.querySelector('.nav-wrapper');
  const navToggle = document.getElementById('navToggle');
  const navToggleLabel = document.getElementById('navToggleLabel');
  
  // Set About as active by default:
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
      
      // Hide all sections:
      sections.forEach(section => section.classList.add('hidden'));
      
      // Show target section:
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
      
      // Update active state:
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update mobile nav label with current section name:
      if (navToggleLabel) {
        navToggleLabel.textContent = link.textContent.trim();
      }

      // Close mobile dropdown after selection:
      if (navWrapper && window.innerWidth <= 640) {
        navWrapper.classList.remove('nav-open');
      }
    });
  });
};

// Tech stack carousel functionality:
const initTechStack = () => {
  const techStackScroll = document.querySelector('.tech-stack-scroll');
  if (!techStackScroll) return;
  
  // Clone items for infinite scroll effect
  const techItems = Array.from(techStackScroll.children);
  techItems.forEach(item => {
    const clone = item.cloneNode(true);
    techStackScroll.appendChild(clone);
  });
  
  // Pause animation on individual item hover:
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

// Initialize all functionality:
const initAll = () => {
  initThemeSelector();
  initNavigation();
  initTechStack();
};

// Initialize when DOM is ready:
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
