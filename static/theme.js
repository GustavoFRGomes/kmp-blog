(function() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = systemPrefersDark ? 'dark' : 'light';

  root.setAttribute('data-theme', currentTheme);

  if (toggle) {
    toggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    toggle.addEventListener('click', function() {
      const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', newTheme);
      toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }
})();
