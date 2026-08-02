/* ==========================================================================
   FAITH & LIGHT — app.js
   Vanilla JS only. No frameworks, no build step.
   Organized by feature so future pages can reuse individual functions.
   ========================================================================== */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     1. STICKY NAV — shrink + glassmorphism on scroll
  ------------------------------------------------------------------ */
  const nav = document.getElementById("siteNav");
  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  handleNavScroll();
  window.addEventListener("scroll", handleNavScroll, { passive: true });

  /* ------------------------------------------------------------------
     2. MOBILE MENU
  ------------------------------------------------------------------ */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ------------------------------------------------------------------
     3. DARK MODE TOGGLE (persisted)
  ------------------------------------------------------------------ */
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const STORAGE_THEME = "faithlight-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      const icon = themeToggle.querySelector("i");
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
      if (icon) icon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    }
  }

  const savedTheme = localStorage.getItem(STORAGE_THEME);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(STORAGE_THEME, next);
    });
  }

  /* ------------------------------------------------------------------
     4. READING PROGRESS BAR
  ------------------------------------------------------------------ */
  const progressBar = document.getElementById("readingProgress");
  function updateProgress() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });

  /* ------------------------------------------------------------------
     5. BACK TO TOP
  ------------------------------------------------------------------ */
  const backToTop = document.getElementById("backToTop");
  function handleBackToTop() {
    if (!backToTop) return;
    backToTop.classList.toggle("visible", window.scrollY > 600);
  }
  handleBackToTop();
  window.addEventListener("scroll", handleBackToTop, { passive: true });
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ------------------------------------------------------------------
     6. SCROLL REVEAL — IntersectionObserver fade-in
  ------------------------------------------------------------------ */
  const revealTargets = document.querySelectorAll(".fade-in-up");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------------------------------------------------------------
     7. ANIMATED COUNTERS (feature card counts)
  ------------------------------------------------------------------ */
  const counters = document.querySelectorAll(".feature-count[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          const label = el.textContent.replace(/^\d+\s*/, "");
          if (prefersReducedMotion || !target) {
            el.textContent = target + " " + label;
            counterObserver.unobserve(el);
            return;
          }
          let current = 0;
          const step = Math.max(1, Math.round(target / 30));
          const tick = () => {
            current = Math.min(current + step, target);
            el.textContent = current + " " + label;
            if (current < target) requestAnimationFrame(tick);
          };
          tick();
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* ------------------------------------------------------------------
     8. HERO PARTICLE CANVAS — subtle floating light
  ------------------------------------------------------------------ */
  const canvas = document.getElementById("particleCanvas");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let width, height, rafId;

    function resize() {
      const hero = canvas.closest(".hero");
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
    }

    function createParticles() {
      const count = Math.min(46, Math.round((width * height) / 24000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        speedY: Math.random() * 0.25 + 0.05,
        drift: Math.random() * 0.4 - 0.2,
        alpha: Math.random() * 0.5 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 212, 150, ${p.alpha})`;
        ctx.fill();
        p.y -= p.speedY;
        p.x += p.drift * 0.05;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
      });
      rafId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(rafId);
        resize();
        createParticles();
        draw();
      }, 200);
    });
  }

  /* ------------------------------------------------------------------
     9. FEATURED SCRIPTURE — reflect / share / copy / bookmark
  ------------------------------------------------------------------ */
  const scriptureText = document.getElementById("scriptureText");
  const scriptureRef = document.getElementById("scriptureRef");
  const btnReflect = document.getElementById("btnReflect");
  const reflectPanel = document.getElementById("reflectPanel");
  const btnShare = document.getElementById("btnShare");
  const btnCopy = document.getElementById("btnCopy");
  const btnBookmark = document.getElementById("btnBookmark");

  if (btnReflect && reflectPanel) {
    btnReflect.addEventListener("click", () => {
      const isHidden = reflectPanel.hasAttribute("hidden");
      if (isHidden) reflectPanel.removeAttribute("hidden");
      else reflectPanel.setAttribute("hidden", "");
    });
  }

  function currentVerseString() {
    const text = scriptureText ? scriptureText.textContent.trim() : "";
    const ref = scriptureRef ? scriptureRef.textContent.trim() : "";
    return `${text} — ${ref}`;
  }

  if (btnCopy) {
    btnCopy.addEventListener("click", async () => {
      const original = btnCopy.innerHTML;
      try {
        await navigator.clipboard.writeText(currentVerseString());
        btnCopy.innerHTML = '<i class="bi bi-check2"></i> Copied';
      } catch (err) {
        btnCopy.innerHTML = '<i class="bi bi-x-circle"></i> Try again';
      }
      setTimeout(() => (btnCopy.innerHTML = original), 2000);
    });
  }

  if (btnShare) {
    btnShare.addEventListener("click", async () => {
      const shareData = {
        title: "Faith & Light — Today's Verse",
        text: currentVerseString(),
        url: window.location.href,
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          /* user cancelled — no action needed */
        }
      } else {
        try {
          await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
          const original = btnShare.innerHTML;
          btnShare.innerHTML = '<i class="bi bi-check2"></i> Link copied';
          setTimeout(() => (btnShare.innerHTML = original), 2000);
        } catch (err) {
          /* clipboard unavailable — silently ignore */
        }
      }
    });
  }

  const STORAGE_BOOKMARK = "faithlight-bookmarked-verse";
  if (btnBookmark) {
    function setBookmarkUI(active) {
      btnBookmark.classList.toggle("is-bookmarked", active);
      btnBookmark.setAttribute("aria-pressed", String(active));
      const label = btnBookmark.querySelector("span");
      if (label) label.textContent = active ? "Bookmarked" : "Bookmark";
    }
    const savedBookmark = localStorage.getItem(STORAGE_BOOKMARK);
    setBookmarkUI(savedBookmark === currentVerseString());

    btnBookmark.addEventListener("click", () => {
      const isActive = btnBookmark.classList.contains("is-bookmarked");
      if (isActive) {
        localStorage.removeItem(STORAGE_BOOKMARK);
        setBookmarkUI(false);
      } else {
        localStorage.setItem(STORAGE_BOOKMARK, currentVerseString());
        setBookmarkUI(true);
      }
    });
  }

  /* ------------------------------------------------------------------
     10. DAILY ENCOURAGEMENT — random verse
  ------------------------------------------------------------------ */
  const ENCOURAGEMENTS = [
    { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
    { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
    { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
    { text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; he will rejoice over you with singing.", ref: "Zephaniah 3:17" },
    { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
    { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", ref: "Psalm 23:4" },
    { text: "And we know that in all things God works for the good of those who love him.", ref: "Romans 8:28" },
  ];

  const btnEncourage = document.getElementById("btnEncourage");
  const encouragementResult = document.getElementById("encouragementResult");
  let lastIndex = -1;

  if (btnEncourage && encouragementResult) {
    btnEncourage.addEventListener("click", () => {
      let index = Math.floor(Math.random() * ENCOURAGEMENTS.length);
      if (ENCOURAGEMENTS.length > 1 && index === lastIndex) {
        index = (index + 1) % ENCOURAGEMENTS.length;
      }
      lastIndex = index;
      const verse = ENCOURAGEMENTS[index];
      encouragementResult.innerHTML = "";
      const blockquote = document.createElement("blockquote");
      blockquote.textContent = `"${verse.text}"`;
      const cite = document.createElement("cite");
      cite.textContent = verse.ref;
      blockquote.appendChild(cite);
      encouragementResult.appendChild(blockquote);
    });
  }

  /* ------------------------------------------------------------------
     11. SEARCH PREVIEW — live client-side filter (sample data)
  ------------------------------------------------------------------ */
  const SAMPLE_VERSES = [
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1", tags: ["peace", "provision", "trust"] },
    { text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.", ref: "Philippians 4:6", tags: ["fear", "anxiety", "prayer", "peace"] },
    { text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.", ref: "2 Timothy 1:7", tags: ["fear", "strength", "courage"] },
    { text: "I can do all things through him who strengthens me.", ref: "Philippians 4:13", tags: ["strength", "perseverance"] },
    { text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.", ref: "John 14:27", tags: ["peace", "comfort"] },
    { text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", ref: "Psalm 28:7", tags: ["strength", "trust"] },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5", tags: ["trust", "wisdom"] },
    { text: "Perfect love drives out fear.", ref: "1 John 4:18", tags: ["fear", "love"] },
  ];

  const previewSearch = document.getElementById("previewSearch");
  const searchResults = document.getElementById("searchResults");

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`(${escaped})`, "ig"), "<mark>$1</mark>");
  }

  function renderResults(query) {
    if (!searchResults) return;
    searchResults.innerHTML = "";
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    const matches = SAMPLE_VERSES.filter(
      (v) => v.text.toLowerCase().includes(trimmed) || v.tags.some((t) => t.includes(trimmed))
    );

    if (!matches.length) {
      const li = document.createElement("li");
      li.className = "no-results";
      li.textContent = `No verses found for "${query}" — try "peace," "fear," or "strength."`;
      searchResults.appendChild(li);
      return;
    }

    matches.slice(0, 5).forEach((v) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.className = "result-verse";
      p.innerHTML = `"${highlight(v.text, trimmed)}"`;
      const cite = document.createElement("cite");
      cite.className = "result-ref";
      cite.textContent = v.ref;
      li.appendChild(p);
      li.appendChild(cite);
      searchResults.appendChild(li);
    });
  }

  if (previewSearch) {
    let debounceTimer;
    previewSearch.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => renderResults(e.target.value), 120);
    });
  }

  /* ------------------------------------------------------------------
     12. RIPPLE EFFECT ON BUTTONS
  ------------------------------------------------------------------ */
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (prefersReducedMotion) return;
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ------------------------------------------------------------------
     13. FOOTER YEAR
  ------------------------------------------------------------------ */
  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
})();
