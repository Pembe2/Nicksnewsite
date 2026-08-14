document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-btn');
const primaryNav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = primaryNav?.classList.contains('open');
  menuButton.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

const revealTargets = document.querySelectorAll('.intro, .section-heading, .practice-card, .secondary-grid, .attorney-grid > *, .process-grid article, .insight-grid article, .consultation-grid > *');
revealTargets.forEach(el => el.classList.add('reveal-item'));

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -25px' });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('revealed'));
}

const sectionLinks = [...document.querySelectorAll('.nav a[href^="#"]:not(.btn)')];
const trackedSections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  trackedSections.forEach(section => sectionObserver.observe(section));
}

const mobileCta = document.createElement('a');
mobileCta.className = 'mobile-cta';
mobileCta.href = '#consultation';
mobileCta.innerHTML = 'Request Consultation <span>↗</span>';
document.body.appendChild(mobileCta);

const consultation = document.querySelector('#consultation');
if (consultation && 'IntersectionObserver' in window) {
  const ctaObserver = new IntersectionObserver(([entry]) => {
    mobileCta.classList.toggle('hidden', entry.isIntersecting);
  }, { threshold: 0.15 });
  ctaObserver.observe(consultation);
}
