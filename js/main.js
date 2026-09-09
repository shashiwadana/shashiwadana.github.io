const body = document.body;
const menuButton = document.querySelector('.menu-toggle');
const backdrop = document.querySelector('.menu-backdrop');
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

function closeMenu() {
  body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

menuButton.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

backdrop.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

const filters = [...document.querySelectorAll('.filter')];
const publications = [...document.querySelectorAll('.publication')];

filters.forEach(button => {
  button.addEventListener('click', () => {
    const year = button.dataset.year;
    filters.forEach(item => item.classList.toggle('active', item === button));
    publications.forEach(publication => {
      publication.hidden = year !== 'all' && publication.dataset.year !== year;
    });
  });
});
