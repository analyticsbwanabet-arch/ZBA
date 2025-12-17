(function () {
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  const iconMenu = document.getElementById('menuIcon');
  const iconClose = document.getElementById('closeIcon');

  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('hidden', !open);
    if (iconMenu) iconMenu.classList.toggle('hidden', open);
    if (iconClose) iconClose.classList.toggle('hidden', !open);
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(open));
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = !menu.classList.contains('hidden');
      setMenu(!isOpen);
    });

    // Close menu after clicking any in-page link
    menu.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', () => setMenu(false));
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Initialize lucide icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
})();
