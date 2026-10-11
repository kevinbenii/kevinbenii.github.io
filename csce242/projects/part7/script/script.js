/* Navigation */
/* addEventListener: w3schools.com/jsref/met_document_addeventlistener.asp */
/* classList.toggle: w3schools.com/jsref/prop_element_classlist.asp */
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

/* JavaScript lightbox feature */
/* Based on: w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox */
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

/* PART 7 - JSON FILE PARSING (shown on aidirectory.html; data is in json/tools.json) */
/* fetch + async/await: from the CSCE 242 class videos and w3schools.com/js/js_api_fetch.asp */
/* Hosted on GitHub Pages (a local file would give a CORS error) */
var jsonUrl = 'https://kevinbenii.github.io/json/tools.json';
var imageFolder = 'https://kevinbenii.github.io/json/';

async function showTools() {
  var list = document.getElementById('tools-list');
  if (!list) return;

  try {
    var response = await fetch(jsonUrl);
    var tools = await response.json();

    list.innerHTML = '';
    for (var i = 0; i < tools.length; i++) {
      var tool = tools[i];
      list.innerHTML +=
        '<a href="' + tool.link + '" class="card tool-card tool-card--featured">' +
        '<img class="tool-card-img" src="' + imageFolder + tool.img_name + '" alt="' + tool.name + '">' +
        '<span class="tool-tag">' + tool.category + '</span>' +
        '<h3 class="card-title">' + tool.name + '</h3>' +
        '<p class="card-desc">' + tool.description + '</p>' +
        '<p class="tool-meta">' + tool.price + ' &middot; ' + tool.platform + '</p>' +
        '</a>';
    }
  } catch (error) {
    list.innerHTML = '<p class="card-desc">Sorry, the tools could not be loaded.</p>';
  }
}

document.addEventListener('DOMContentLoaded', showTools);

/* PART 7 - CONTACT FORM (form is on help.html) */
/* Sends with fetch to Web3Forms (docs.web3forms.com) so the page does not redirect.
   HTML validation (required, type="email") is in help.html (the-art-of-web.com/html/html5-form-validation/). */
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var result = document.getElementById('form-result');
  if (!form || !result) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
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

    /* wait about 1 second so the feedback does not just flicker */
    setTimeout(function () {
      if (success) {
        result.className = 'form-result is-success';
        result.textContent = 'Thanks! Your message was sent.';
        form.reset();
      } else {
        result.className = 'form-result is-error';
        result.textContent = 'Sorry, your message could not be sent. Please try again.';
      }
    }, 1000);
  });
});