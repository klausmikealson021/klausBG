
/* ==========================================================================
   KBG — main.js
   Foundation-stage script. Only responsibility right now:
     1. Bilingual text swap (EN <-> FA) via data-i18n attributes
     2. Toggling <html lang> / dir
     3. Remembering the visitor's language choice
   No card logic, no audio system, no scroll effects live here yet.
   ========================================================================== */

(function () {
  'use strict';

  /* ---- Translation dictionary --------------------------------------------
     Keep content minimal at this stage — just enough to prove the system
     works end to end. Real copy comes when each section is actually built. */
  var translations = {
    en: {
      'opening.eyebrow': 'The Brand Guide',
      'opening.mark': 'KLAUS',
      'hero.eyebrow': 'Est. Identity',
      'hero.title': 'The KLAUS Brand Guide',
      'hero.subtitle': 'A cinematic system of identity, craft and sound.',
      'philosophy.title': 'Brand Philosophy',
      'identity.title': 'Identity System',
      'assetLibrary.title': 'Asset Library',
      'aiSystem.title': 'AI System',
      'music.title': 'Music Experience',
      'closing.title': 'KLAUS',
      'closing.subtitle': 'A brand guide, in motion.',
      'nav.langTarget': 'فارسی'
    },
    fa: {
      'opening.eyebrow': 'راهنمای برند',
      'opening.mark': 'کلاوس',
      'hero.eyebrow': 'هویت اصیل',
      'hero.title': 'راهنمای برند کلاوس',
      'hero.subtitle': 'سیستمی سینمایی از هویت، صنعتگری و صدا.',
      'philosophy.title': 'فلسفه‌ی برند',
      'identity.title': 'سیستم هویت بصری',
      'assetLibrary.title': 'کتابخانه‌ی دارایی‌ها',
      'aiSystem.title': 'سیستم هوش مصنوعی',
      'music.title': 'تجربه‌ی موسیقایی',
      'closing.title': 'کلاوس',
      'closing.subtitle': 'راهنمای برند، در حرکت.',
      'nav.langTarget': 'English'
    }
  };

  var STORAGE_KEY = 'kbg-lang';
  var htmlEl = document.documentElement;
  var langToggleBtn = document.getElementById('langToggle');
  var langToggleTarget = langToggleBtn
    ? langToggleBtn.querySelector('.kbg-lang-toggle__target')
    : null;

  function getInitialLang() {
    var stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fa') return stored;
    return 'en'; // default language
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (langToggleTarget) {
      langToggleTarget.textContent = dict['nav.langTarget'];
    }
  }

  function setLanguage(lang) {
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    applyTranslations(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }

  function toggleLanguage() {
    var current = htmlEl.getAttribute('lang') === 'fa' ? 'fa' : 'en';
    var next = current === 'fa' ? 'en' : 'fa';

    // brief cross-fade so the script swap doesn't feel abrupt
    document.body.classList.add('is-switching');
    window.setTimeout(function () {
      setLanguage(next);
      document.body.classList.remove('is-switching');
    }, 120);
  }

  function init() {
    setLanguage(getInitialLang());

    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
