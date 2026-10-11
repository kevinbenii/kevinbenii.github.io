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

/* JavaScript lightbox feature - I used the (w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox) resource to help implement this feature */
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

/* JSON file parsing - It can be found in the aidirectory.html, index.html and the 4 category pages */
/* JSON URL */
var jsonUrl = 'https://kevinbenii.github.io/csce242/projects/part7/tools.json';
var imageFolder = 'https://kevinbenii.github.io/csce242/projects/part7/';

async function showTools() {
  var lists = document.querySelectorAll('.tools-list');
  if (!lists.length) return;

  try {
    var response = await fetch(jsonUrl);
    var tools = await response.json();

    for (var j = 0; j < lists.length; j++) {
      var list = lists[j];
      /* data-category shows only one category, data-limit shows only the first few tools */
      var category = list.getAttribute('data-category');
      var limit = Number(list.getAttribute('data-limit')) || tools.length;
      var shown = 0;

      list.innerHTML = '';
      for (var i = 0; i < tools.length && shown < limit; i++) {
        var tool = tools[i];
        if (category && tool.category !== category) continue;
        shown++;
        list.innerHTML +=
          '<a href="' + tool.link + '" class="card tool-card tool-card--featured">' +
          '<img class="tool-card-img" src="' + imageFolder + tool.img_name + '" alt="' + tool.name + '">' +
          '<span class="tool-tag">' + tool.category + '</span>' +
          '<h3 class="card-title">' + tool.name + '</h3>' +
          '<p class="card-desc">' + tool.description + '</p>' +
          '<p class="tool-meta">' + tool.price + ' &middot; ' + tool.platform + '</p>' +
          '</a>';
      }
    }
  } catch (error) {
    for (var k = 0; k < lists.length; k++) {
      lists[k].innerHTML = '<p class="card-desc">Sorry, the tools could not be loaded.</p>';
    }
  }
}

document.addEventListener('DOMContentLoaded', showTools);

/* Contact form - It can be found on the help.html page */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var result = document.getElementById('form-result');
  if (!form || !result) return;
  var hideTimer;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearTimeout(hideTimer);
    result.className = 'form-result';
    result.textContent = 'Sending...';

    var success = false;
    try {
      var response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      var data = await response.json();
      success = data.success;
    } catch (error) {
      success = false;
    }

    if (success) {
      result.className = 'form-result is-success';
      result.textContent = 'Thanks! Your message was sent.';
      form.reset();
    } else {
      result.className = 'form-result is-error';
      result.textContent = 'Sorry, your message could not be sent. Please try again.';
    }

    /* Feedback delay */
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      result.className = 'form-result';
      result.textContent = '';
    }, 1000);
  });
});