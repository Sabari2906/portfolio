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

// Email.js initialization flag
let emailjsReady = false;

// Listen for Email.js ready event from HTML
document.addEventListener('emailjsready', function() {
  emailjsReady = true;
  console.log('✓ Script.js detected Email.js is ready');
});

// Fallback check after 2 seconds (in case event doesn't fire)
setTimeout(() => {
  if (typeof emailjs !== 'undefined' && !emailjsReady) {
    emailjsReady = true;
    console.log('✓ Script.js detected emailjs is available (fallback check)');
  } else if (typeof emailjs === 'undefined') {
    console.warn('⚠ Email.js still not available after 2 seconds');
  }
}, 2000);

console.log('✓ Script.js loaded');

// Rate limiting - prevent spam
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 3000; // 3 seconds between submissions

// Input validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  // Remove dangerous characters
  return input.trim().replace(/[<>]/g, '');
}

// Form submit with Email.js
function handleForm(e) {
  e.preventDefault();
  
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('btn-text');
  
  // Rate limiting check
  const now = Date.now();
  if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
    btn.textContent = '⏳ Please wait...';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 2000);
    return;
  }
  lastSubmitTime = now;
  
  // Get and sanitize form values
  const userName = sanitizeInput(document.getElementById('user_name').value);
  const userEmail = sanitizeInput(document.getElementById('user_email').value);
  const projectName = sanitizeInput(document.getElementById('project_name').value);
  const message = sanitizeInput(document.getElementById('message').value);
  
  // Validate inputs
  if (!userName || userName.length > 100) {
    btn.textContent = '✗ Invalid name';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 2000);
    return;
  }
  
  if (!validateEmail(userEmail)) {
    btn.textContent = '✗ Invalid email';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 2000);
    return;
  }
  
  if (!message || message.length < 5 || message.length > 1000) {
    btn.textContent = '✗ Message must be 5-1000 characters';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 2000);
    return;
  }
  
  btn.textContent = 'Sending...';
  
  // Check if Email.js is ready (with detailed logging)
  if (typeof emailjs === 'undefined') {
    console.error('✗ emailjs is undefined');
    btn.textContent = '✗ Email.js not loaded';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 3000);
    return;
  }
  
  if (!emailjsReady) {
    console.error('✗ emailjsReady flag is false. emailjs type:', typeof emailjs);
    btn.textContent = '✗ Service initializing...';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 3000);
    return;
  }
  
  console.log('✓ Email.js is ready. Sending email...');
  
  // Prepare email parameters
  const templateParams = {
    to_email: '210701218@rajalakshmi.edu.in',
    from_name: userName,
    from_email: userEmail,
    project_name: projectName || 'Not specified',
    message: message,
    reply_to: userEmail
  };
  
  console.log('📧 Email parameters:', templateParams);
  
  try {
    emailjs.send('service_d2g9qhs', 'template_okvmmbs', templateParams)
      .then((response) => {
        console.log('✓ SUCCESS! Response:', response);
        btn.textContent = '✓ Message Sent!';
        form.reset();
        setTimeout(() => { btn.textContent = 'Send Message →'; }, 3000);
      })
      .catch((error) => {
        console.error('✗ FAILED! Error:', error);
        btn.textContent = '✗ Failed. Try again';
        setTimeout(() => { btn.textContent = 'Send Message →'; }, 3000);
      });
  } catch (err) {
    console.error('✗ Exception:', err);
    btn.textContent = '✗ Error - Check console';
    setTimeout(() => { btn.textContent = 'Send Message →'; }, 3000);
  }
}

// Attach form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', handleForm);
  console.log('✓ Contact form listener attached');
}

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