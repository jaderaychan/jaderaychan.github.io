/* ==========================================================================
   个人主页交互（原生 JS，无依赖）
   ① 深/浅主题  ② 中英语言切换  ③ 窄屏菜单  ④ 当前栏目下划线  ⑤ 内容淡入
   文案存在 i18n.js；首次套用由 index.html 顶部内联脚本完成（避免闪烁）
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- ① 主题：记住选择，首次跟随系统 ---------- */
  var THEME_KEY = 'site-theme';
  var btn = document.getElementById('themeBtn');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) btn.textContent = theme === 'dark' ? '◑' : '◐';
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* 隐私模式下会报错，忽略 */ }
  var preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  // 顶部内联脚本可能已经设过 data-theme，优先尊重它的结果，避免来回跳
  applyTheme(root.getAttribute('data-theme') || savedTheme || (preferDark ? 'dark' : 'light'));

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* 忽略 */ }
    });
  }

  /* ---------- ② 中英语言切换 ---------- */
  var LANG_KEY = 'site-lang';

  function setLang(lang, remember) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
    if (typeof window.__applyI18n === 'function') window.__applyI18n();
    if (remember) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* 忽略 */ }
    }
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang-btn]'), function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang-btn');
      if (lang !== root.getAttribute('data-lang')) setLang(lang, true);
    });
  });

  /* ---------- ③ 窄屏菜单 ---------- */
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('siteNav');

  function closeMenu() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 点空白处、按 Esc、点导航项，都收起菜单
  document.addEventListener('click', function (e) {
    if (nav && nav.classList.contains('is-open') &&
        !nav.contains(e.target) && e.target !== toggle) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
  if (nav) nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });

  /* ---------- ③ 当前栏目的下划线 ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  function onScroll() {
    var pos = window.scrollY + 100;
    var current = null;
    targets.forEach(function (sec) { if (sec.offsetTop <= pos) current = sec.id; });
    links.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }

  // 用 requestAnimationFrame 节流，滚动时不重复计算
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () { ticking = false; onScroll(); });
    }
  }, { passive: true });
  onScroll();

  /* ---------- ④ 内容淡入 ---------- */
  var items = document.querySelectorAll('.reveal');
  var noMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || noMotion) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);   // 出现一次就够了
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  /* 页脚日期和「最近更新」都写在 i18n.js 的词条里，需要手动更新 */
})();
