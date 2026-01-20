document.addEventListener("DOMContentLoaded", () => {
    // Mobile nav
    const toggle = document.querySelector(".nav-toggle");
    const mobileNav = document.getElementById("mobileNav");
  
    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        mobileNav.hidden = isOpen;
      });
  
      // Close when tapping a link
      mobileNav.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    }
  
    // Reveal on scroll
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll("[data-reveal]");
  
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(el => el.classList.add("is-visible"));
      return;
    }
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
  
    targets.forEach(el => io.observe(el));
  });
  