const lang = localStorage.getItem('language') || 'en';
document.documentElement.classList.add('lang-' + lang);

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('english').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('language', 'en');
    document.documentElement.className = 'lang-en';
  });

  document.getElementById('espanol').addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('language', 'es');
    document.documentElement.className = 'lang-es';
  });
});
