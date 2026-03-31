/* =============================================
   KEY PRODUCE | main.js
   共通JS（ヘッダー・フッター・CTA インクルード）
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ─── パスのベースを取得（サブディレクトリ対応） ───
  function getBase() {
    const subdirs = ["service", "profile", "contact", "works"];
    const segments = window.location.pathname.replace(/\/index\.html$/, "/").split("/").filter(Boolean);
    const lastSeg = segments[segments.length - 1];
    return subdirs.includes(lastSeg) ? "../" : "./";
  }

  const base = getBase();

  // ─── アクティブなナビ項目を判定 ───────────
  function isActive(href) {
    const path = window.location.pathname;
    const subdirs = ["service", "profile", "contact", "works"];
    const matchedSubdir = subdirs.find(d => href.includes("/" + d + "/"));
    if (matchedSubdir) {
      return path.includes("/" + matchedSubdir + "/");
    }
    // TOP：どのサブディレクトリにもいなければアクティブ
    return !subdirs.some(d => path.includes("/" + d + "/"));
  }

  const navItems = [
    { href: base + "index.html",                 label: "TOP" },
    { href: base + "service/index.html",         label: "サービス・料金" },
    { href: base + "profile/index.html",         label: "プロフィール" },
    { href: base + "contact/index.html",         label: "お問い合わせ" },
  ];

  function buildNavList(items, extraClass = "") {
    return items.map(item => {
      const active = isActive(item.href);
      return `<li><a href="${item.href}"${active ? ' class="is-active"' : ""}>${item.label}</a></li>`;
    }).join("");
  }

  // ─── ヘッダー ─────────────────────────────
  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <!-- 屋号：確定後に差し替え -->
          <a class="site-logo" href="${base}index.html" aria-label="KEY PRODUCE トップへ">
            <span class="logo-en">【KEY PRODUCE】</span>
            <span class="logo-ja">紀州のイベントをつくる</span>
          </a>

          <nav class="site-nav" aria-label="グローバルナビ">
            <ul class="nav-list">
              ${buildNavList(navItems)}
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
              ${buildNavList(navItems)}
              <li><a class="nav-cta-link" href="${base}contact/index.html">お問い合わせはこちら</a></li>
            </ul>
          </div>
        </div>
      </header>
    `;
  }

  // ─── CTAセクション ───────────────────────
  const ctaEl = document.getElementById("site-cta");
  if (ctaEl) {
    ctaEl.innerHTML = `
      <section class="cta-section" aria-labelledby="cta-heading">
        <div class="container">
          <p class="cta-heading" id="cta-heading">まずはお気軽にご相談ください</p>
          <p class="cta-sub">イベントの規模・内容に合わせて柔軟に対応します。<br>見積もりは無料です。</p>
          <div class="cta-actions">
            <a class="btn btn-fill btn-lg" href="${base}contact/index.html">お問い合わせはこちら</a>
          </div>
        </div>
      </section>
    `;
  }

  // ─── フッター ─────────────────────────────
  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <p class="footer-logo">【KEY PRODUCE】<!-- 屋号：確定後に差し替え --></p>
          <ul class="footer-links">
            <!-- Instagram リンク（アカウント確定後に解除）
            <li><a href="https://instagram.com/【アカウント名】" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a></li>
            -->
            <li><a href="${base}contact/index.html">お問い合わせ</a></li>
          </ul>
        </div>
        <div class="container" style="margin-top: 12px;">
          <p class="footer-copy">© 2025 【KEY PRODUCE】<!-- 屋号：確定後に差し替え --></p>
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
    // リンク押下でメニューを閉じる
    if (e.target.closest(".mobile-nav a")) {
      const toggle2 = document.querySelector(".nav-toggle");
      const nav2 = document.getElementById("mobileNav");
      if (toggle2 && nav2) {
        toggle2.setAttribute("aria-expanded", "false");
        nav2.hidden = true;
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
      // 他を閉じる
      document.querySelectorAll(".faq-item.is-open").forEach(openItem => {
        openItem.classList.remove("is-open");
        openItem.querySelector(".faq-btn").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ─── お問い合わせフォーム（送信後メッセージ） ──
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector(".form-submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "送信中...";

      try {
        const res = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          contactForm.style.display = "none";
          const thanks = document.getElementById("form-thanks");
          if (thanks) thanks.classList.add("is-visible");
        } else {
          submitBtn.disabled = false;
          submitBtn.textContent = "送信する";
          alert("送信に失敗しました。時間をおいて再度お試しください。");
        }
      } catch {
        submitBtn.disabled = false;
        submitBtn.textContent = "送信する";
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      }
    });
  }

});
