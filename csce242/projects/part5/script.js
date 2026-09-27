/* Navigation */
document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.querySelector('.nav-toggle-btn');
  var nav = document.getElementById('site-nav');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});