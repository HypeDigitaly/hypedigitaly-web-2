# 🎨 CSS a JavaScript Architektura

## CSS Architektura

### Struktura souborů

```
src/styles/
├── variables.css      # CSS Custom Properties
├── base.css          # Reset, typografie, základní styly
├── animations.css    # Keyframes a animace
├── components.css    # Styly pro komponenty
└── utilities.css     # Utility třídy
```

### variables.css

```css
:root {
  /* Barvy - Dark Theme */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #111111;
  --color-bg-tertiary: #1a1a1a;
  
  /* Accent barvy */
  --color-accent-cyan: #00d4ff;
  --color-accent-purple: #a855f7;
  --color-accent-pink: #ec4899;
  --color-accent-green: #10b981;
  
  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-text-muted: #666666;
  
  /* Gradienty */
  --gradient-primary: linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-purple));
  --gradient-hero: linear-gradient(to bottom, transparent, var(--color-bg-primary));
  --gradient-card: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
  --shadow-glow-cyan: 0 0 20px rgba(0, 212, 255, 0.3);
  --shadow-glow-purple: 0 0 20px rgba(168, 85, 247, 0.3);
  
  /* Border radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
  
  /* Z-index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
}
```

### base.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }

p { color: var(--color-text-secondary); }

a {
  color: var(--color-accent-cyan);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent-purple);
}

/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

/* Section */
.section {
  padding: var(--space-24) 0;
}

/* Selection */
::selection {
  background: var(--color-accent-cyan);
  color: var(--color-bg-primary);
}
```

### animations.css

```css
/* Fade animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale animations */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Pulse/Glow */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes glow {
  0%, 100% { box-shadow: var(--shadow-glow-cyan); }
  50% { box-shadow: var(--shadow-glow-purple); }
}

/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Scroll reveal classes */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-left.active {
  opacity: 1;
  transform: translateX(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-right.active {
  opacity: 1;
  transform: translateX(0);
}

/* Stagger delays */
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }
.delay-400 { transition-delay: 400ms; }
.delay-500 { transition-delay: 500ms; }
```

### components.css

```css
/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius-lg);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-glow-cyan);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--color-accent-cyan);
  color: var(--color-accent-cyan);
}

.btn-secondary:hover {
  background: rgba(0, 212, 255, 0.1);
}

/* Cards */
.card {
  background: var(--gradient-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
}

.card:hover {
  border-color: var(--color-accent-cyan);
  transform: translateY(-5px);
}

/* Glass effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Gradient text */
.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Logo grayscale */
.logo-grayscale {
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all var(--transition-base);
}

.logo-grayscale:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

---

## JavaScript Architektura

### Struktura souborů

```
src/scripts/
├── translations.js   # Vícejazyčná podpora
├── animations.js     # Scroll reveal, parallax
├── components.js     # Inicializace komponent
└── utils.js         # Utility funkce
```

### translations.js

```javascript
// Centralizovaný systém překladů
const translations = {
  cs: {
    nav: {
      about: "O nás",
      services: "Služby",
      chatbot: "AI Chatbot",
      consulting: "Konzultace",
      references: "Reference",
      contact: "Kontakt",
      cta: "Začít spolupráci"
    },
    hero: {
      title: "Transformujeme vaše podnikání pomocí AI",
      subtitle: "Vytváříme inteligentní chatboty a AI řešení",
      cta_primary: "Domluvit konzultaci",
      cta_secondary: "Zjistit více"
    },
    footer: {
      cta_title: "Pojďme spolupracovat",
      cta_subtitle: "Rezervujte si bezplatnou konzultaci",
      description: "Transformujeme digitální komunikaci pomocí AI chatbotů.",
      copyright: "© {year} HypeDigitaly. Všechna práva vyhrazena.",
      privacy: "Zásady ochrany osobních údajů",
      recommendation: "Doporučení"
    },
    faq: {
      title: "Často kladené otázky",
      subtitle: "Odpovědi na nejčastější dotazy"
    },
    // ... další překlady
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      chatbot: "AI Chatbot",
      consulting: "Consulting",
      references: "References",
      contact: "Contact",
      cta: "Start collaboration"
    },
    hero: {
      title: "We transform your business with AI",
      subtitle: "Creating intelligent chatbots and AI solutions",
      cta_primary: "Book consultation",
      cta_secondary: "Learn more"
    },
    footer: {
      cta_title: "Let's collaborate",
      cta_subtitle: "Book a free consultation",
      description: "Transforming digital communication with AI chatbots.",
      copyright: "© {year} HypeDigitaly. All rights reserved.",
      privacy: "Privacy Policy",
      recommendation: "Recommendation"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions"
    },
    // ... další překlady
  }
};

class TranslationManager {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'cs';
    this.translations = translations;
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.updateDOM();
    document.documentElement.lang = lang;
    
    // Dispatch event pro komponenty
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'cs' ? 'en' : 'cs';
    this.setLanguage(newLang);
  }

  get(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.get(key);
      
      if (translation) {
        if (el.tagName === 'INPUT' && el.type === 'placeholder') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });
    
    // Update dynamic values
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = this.get(key);
    });
  }

  init() {
    this.updateDOM();
    
    // Setup language toggle buttons
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => this.toggleLanguage());
    });
    
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setLanguage(btn.getAttribute('data-lang'));
      });
    });
  }
}

// Export singleton
export const i18n = new TranslationManager();
```

### animations.js

```javascript
// Intersection Observer pro scroll reveal
class ScrollReveal {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };
    
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      this.options
    );
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Unobserve po aktivaci (one-time animation)
        if (!entry.target.hasAttribute('data-reveal-repeat')) {
          this.observer.unobserve(entry.target);
        }
      } else if (entry.target.hasAttribute('data-reveal-repeat')) {
        entry.target.classList.remove('active');
      }
    });
  }

  observe(selector = '.reveal, .reveal-left, .reveal-right') {
    document.querySelectorAll(selector).forEach(el => {
      this.observer.observe(el);
    });
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observe();
    } else {
      // Fallback - show all elements
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => el.classList.add('active'));
    }
  }
}

// Navbar scroll effect
class NavbarScroll {
  constructor(navbarSelector = '#navbar', scrollThreshold = 50) {
    this.navbar = document.querySelector(navbarSelector);
    this.threshold = scrollThreshold;
    this.isScrolled = false;
  }

  handleScroll = () => {
    const shouldBeScrolled = window.scrollY > this.threshold;
    
    if (shouldBeScrolled !== this.isScrolled) {
      this.isScrolled = shouldBeScrolled;
      this.navbar?.classList.toggle('scrolled', shouldBeScrolled);
    }
  }

  init() {
    if (this.navbar) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.handleScroll(); // Initial check
    }
  }
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

export { ScrollReveal, NavbarScroll, initSmoothScroll };
```

### utils.js

```javascript
// FAQ Accordion
export function initFAQ(containerSelector = '.faq-container') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close all others
      container.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
        }
      });
      
      // Toggle current
      item.classList.toggle('open', !isOpen);
    });
  });
}

// Mobile menu
export function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  
  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = (show) => {
    mobileMenu.classList.toggle('open', show);
    document.body.classList.toggle('overflow-hidden', show);
    menuBtn.setAttribute('aria-expanded', show);
  };

  menuBtn.addEventListener('click', () => toggleMenu(true));
  closeBtn?.addEventListener('click', () => toggleMenu(false));
  
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
  
  // Close on outside click
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) toggleMenu(false);
  });
  
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

// Slideshow (RAGus)
export function initSlideshow(containerSelector, options = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const slides = container.querySelectorAll('.slide');
  const dots = container.querySelectorAll('.dot');
  let currentIndex = 0;
  let interval;

  const { autoplay = true, duration = 5000 } = options;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  };

  const nextSlide = () => {
    showSlide((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  };

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  // Arrow navigation
  container.querySelector('.prev-btn')?.addEventListener('click', prevSlide);
  container.querySelector('.next-btn')?.addEventListener('click', nextSlide);

  // Autoplay
  if (autoplay) {
    interval = setInterval(nextSlide, duration);
    
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', () => {
      interval = setInterval(nextSlide, duration);
    });
  }

  showSlide(0);
}

// Debounce utility
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

