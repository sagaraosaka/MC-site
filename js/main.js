/* =============================================
   KEY PRODUCE | main.js
   共通JS（ヘッダー・CTA・フッター インクルード）
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ─── ベースパスの取得（サブディレクトリ対応） ──
  function getBase() {
    const subdirs = ["service", "profile", "contact", "works"];
    const segments = window.location.pathname.split("/").filter(Boolean);
    const last = segments[segments.length - 1];
    // index.html を除いた末尾セグメントがサブディレクトリ名か確認
    const dir = last === "index.html" ? segments[segments.length - 2] : last;
    return subdirs.includes(dir) ? "../" : "./";
  }

  const base = getBase();

  // ─── アクティブナビの判定 ─────────────────
  function isActive(href) {
    const path = window.location.pathname;
    const subdirs = ["service", "profile", "contact", "works"];
    const matched = subdirs.find(d => href.includes("/" + d + "/"));
    if (matched) return path.includes("/" + matched + "/");
    return !subdirs.some(d => path.includes("/" + d + "/"));
  }

  const navItems = [
    { href: base + "index.html",           label: "TOP" },
    { href: base + "service/index.html",   label: "サービス・料金" },
    { href: base + "profile/index.html",   label: "プロフィール" },
    { href: base + "contact/index.html",   label: "お問い合わせ" },
  ];

  function buildNavList() {
    return navItems.map(item => {
      const active = isActive(item.href);
      return `<li><a href="${item.href}"${active ? ' class="is-active"' : ""}>${item.label}</a></li>`;
    }).join("");
  }

  // ─── ヘッダー注入 ─────────────────────────
  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">

          <!-- 屋号：確定後に差し替え -->
          <a class="site-logo" href="${base}index.html">
            【KEY PRODUCE】
            <span class="logo-sub">紀州のイベントをつくる</span>
          </a>

          <nav class="site-nav" aria-label="グローバルナビ">
            <ul class="nav-list">
              ${buildNavList()}
            </ul>
          </nav>

          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobileNav">
            <span class="sr-only">メニュー</span>
            <span class="nav-toggle-bar" aria-hidden="true"></span>
            <span class="nav-toggle-bar" aria-hidden="true"></span>
            <span class="nav-toggle-bar" aria-hidden="true"></span>
          </button>
        </div>

        <div class="mobile-nav" id="mobileNav" hidden>
          <div class="container">
            <ul class="mobile-nav-list">
              ${buildNavList()}
            </ul>
          </div>
        </div>
      </header>
    `;
  }

  // ─── CTA注入 ──────────────────────────────
  const ctaEl = document.getElementById("site-cta");
  if (ctaEl) {
    ctaEl.innerHTML = `
      <section class="cta-section" aria-labelledby="cta-heading">
        <div class="container">
          <h2 class="cta-heading" id="cta-heading">まずはお気軽にご相談ください</h2>
          <p class="cta-sub">イベントの規模・内容に合わせて柔軟に対応します。<br>初めての方もお気軽にどうぞ。</p>
          <a class="cta-btn" href="${base}contact/index.html">お問い合わせはこちら</a>
        </div>
      </section>
    `;
  }

  // ─── フッター注入 ─────────────────────────
  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <!-- 屋号：確定後に差し替え -->
          <p class="footer-logo">【KEY PRODUCE】</p>
          <p class="footer-sub">紀州のイベントをつくる</p>
          <ul class="footer-links">
            <!-- Instagram リンク（アカウント確定後に解除）
            <li><a href="【INSTAGRAM_URL】" target="_blank" rel="noopener">Instagram</a></li>
            -->
            <li><a href="${base}contact/index.html">お問い合わせ</a></li>
          </ul>
          <!-- 屋号：確定後に差し替え -->
          <p class="footer-copy">© 2025 【KEY PRODUCE】</p>
        </div>
      </footer>
    `;
  }

  // ─── モバイルナビ 開閉 ────────────────────
  document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".nav-toggle");
    const mobileNav = document.getElementById("mobileNav");
    if (toggle && mobileNav) {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
      return;
    }
    if (e.target.closest(".mobile-nav a")) {
      const t = document.querySelector(".nav-toggle");
      const n = document.getElementById("mobileNav");
      if (t && n) {
        t.setAttribute("aria-expanded", "false");
        n.hidden = true;
      }
    }
  });

  // ─── スクロールアニメーション ─────────────
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll("[data-reveal]");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(el => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealTargets.forEach(el => io.observe(el));
  }

  // ─── FAQアコーディオン ────────────────────
  document.querySelectorAll(".faq-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach(open => {
        open.classList.remove("is-open");
        open.querySelector(".faq-btn").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

});
