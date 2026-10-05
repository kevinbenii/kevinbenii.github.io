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

/* Javascript lightbox function */
document.addEventListener('DOMContentLoaded', function () {
  var thumbs = document.querySelectorAll('.profile-thumb');
  if (!thumbs.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close enlarged photo">&times;</button>' +
    '<img class="lightbox-img" alt="">';
  document.body.appendChild(overlay);

  var lightboxImg = overlay.querySelector('.lightbox-img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', alt);
    overlay.classList.add('is-open');
    document.body.classList.add('lightbox-locked');
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-locked');
  }

  thumbs.forEach(function (thumb) {
    var img = thumb.querySelector('img');
    if (!img) return;
    thumb.setAttribute('aria-label', 'Enlarge photo');
    thumb.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});