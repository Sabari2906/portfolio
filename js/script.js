// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .skill-card, .project-card, .template-card, .testimonial-card, .impact-item, .tech-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.width = '60px';
    ring.style.height = '60px';
    ring.style.borderColor = 'rgba(0,212,255,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(0,212,255,0.5)';
  });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMobile.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMobile.classList.remove('active');
  });
});

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  themeToggle.textContent = '🌙';
} else {
  document.body.classList.remove('light-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
});

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

console.log('✓ Script.js loaded');

// Nav active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// TECH STACK MODAL
const techStackModal = document.getElementById('techStackModal');
const techStackBtn = document.getElementById('techStackBtn');
const techStackModalClose = document.getElementById('techStackModalClose');

function openTechStackModal() {
  if (!techStackModal) return;
  techStackModal.classList.add('active');
  techStackModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeTechStackModal() {
  if (!techStackModal) return;
  techStackModal.classList.remove('active');
  techStackModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto'; // Allow scrolling
}

if (techStackBtn) {
  techStackBtn.addEventListener('click', openTechStackModal);
}

if (techStackModalClose) {
  techStackModalClose.addEventListener('click', closeTechStackModal);
}

if (techStackModal) {
  techStackModal.addEventListener('click', (e) => {
    if (e.target === techStackModal) {
      closeTechStackModal();
    }
  });
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && techStackModal && techStackModal.classList.contains('active')) {
    closeTechStackModal();
  }
});

// Coming Soon Modal - Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const comingSoonModal = document.getElementById('comingSoonModal');
  const closeComingSoonBtn = document.getElementById('closeComingSoon');
  const comingSoonButtons = document.querySelectorAll('.coming-soon-btn');

  console.log('Modal initialized:', comingSoonModal);

  // Open coming soon modal
  function openComingSoon(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!comingSoonModal) return;
    console.log('Opening modal...');
    comingSoonModal.classList.add('active');
    comingSoonModal.setAttribute('aria-hidden', 'false');
  }

  // Close coming soon modal
  function closeComingSoon() {
    if (!comingSoonModal) return;
    comingSoonModal.classList.remove('active');
    comingSoonModal.setAttribute('aria-hidden', 'true');
  }

  // Use event delegation for project overlay links
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-overlay-link')) {
      e.preventDefault();
      e.stopPropagation();
      console.log('View Case Study clicked!');
      openComingSoon(e);
    }
  });

  // Close button
  if (closeComingSoonBtn) {
    closeComingSoonBtn.addEventListener('click', closeComingSoon);
  }

  // Close when clicking outside modal
  if (comingSoonModal) {
    comingSoonModal.addEventListener('click', (e) => {
      if (e.target === comingSoonModal) {
        closeComingSoon();
      }
    });
  }

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && comingSoonModal && comingSoonModal.classList.contains('active')) {
      closeComingSoon();
    }
  });

  // Handle coming soon button clicks (scroll to section and close modal)
  comingSoonButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeComingSoon();
    });
  });
});