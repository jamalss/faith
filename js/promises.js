/* ==========================================================================
   PROMISES OF FAITH — data + rendering
   Content supplied by the site owner (KJV, bible.com references).
   Kept as a data array so future edits mean changing data, not markup.
   ========================================================================== */

(function () {
  "use strict";

  const PROMISES = [
    {
      number: 1,
      title: "Nothing Is Impossible for You",
      verses: [
        {
          ref: "Matthew 17:20",
          text: "And Jesus said unto them, Because of your unbelief: for verily I say unto you, If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you.",
          link: "https://bible.com/bible/1/mat.17.20.KJV",
        },
      ],
    },
    {
      number: 2,
      title: "All Things Are Possible",
      verses: [
        {
          ref: "Matthew 21:21",
          text: "Jesus answered and said unto them, Verily I say unto you, If ye have faith, and doubt not, ye shall not only do this which is done to the fig tree, but also if ye shall say unto this mountain, Be thou removed, and be thou cast into the sea; it shall be done.",
          link: "https://bible.com/bible/1/mat.21.21.KJV",
        },
      ],
    },
    {
      number: 3,
      title: "Whatever You Say and Desire",
      verses: [
        {
          ref: "Mark 11:22-24",
          text: "And Jesus answering saith unto them, Have faith in God. For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith. Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
          link: "https://bible.com/bible/1/mrk.11.22-24.KJV",
        },
      ],
    },
    {
      number: 4,
      title: "Salvation",
      verses: [
        {
          ref: "1 Peter 1:5",
          text: "Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.",
          link: "https://bible.com/bible/1/1pe.1.5-13.KJV",
        },
        {
          ref: "Acts 4:12",
          text: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
          link: "https://bible.com/bible/1/act.4.12.KJV",
        },
      ],
    },
    {
      number: 5,
      title: "Daily Necessities",
      verses: [
        {
          ref: "Matthew 6:1-34",
          text: "…But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you…",
          link: "https://bible.com/bible/1/mat.6.1-34.KJV",
          excerpt: true,
        },
        {
          ref: "Luke 12:28",
          text: "If then God so clothe the grass, which is to day in the field, and to morrow is cast into the oven; how much more will he clothe you, O ye of little faith?",
          link: "https://bible.com/bible/1/luk.12.28.KJV",
        },
      ],
    },
    {
      number: 6,
      title: "Victorious Christian Living",
      verses: [
        {
          ref: "Romans 1:17",
          text: "For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.",
          link: "https://bible.com/bible/1/rom.1.17.KJV",
        },
        {
          ref: "1 John 4:4",
          text: "Ye are of God, little children, and have overcome them: because greater is he that is in you, than he that is in the world.",
          link: "https://bible.com/bible/1/1jn.4.4.KJV",
        },
      ],
    },
    {
      number: 7,
      title: "Access to God",
      verses: [
        {
          ref: "Romans 5:1-2",
          text: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ: by whom also we have access by faith into this grace wherein we stand, and rejoice in hope of the glory of God.",
          link: "https://bible.com/bible/1/rom.5.1-2.KJV",
        },
      ],
    },
    {
      number: 8,
      title: "The Promise of the Holy Spirit",
      verses: [
        {
          ref: "Galatians 3:13-14",
          text: "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree: that the blessing of Abraham might come on the Gentiles through Jesus Christ; that we might receive the promise of the Spirit through faith.",
          link: "https://bible.com/bible/1/gal.3.13-14.KJV",
        },
      ],
    },
    {
      number: 9,
      title: "Promises Fulfilled and Inherited",
      verses: [
        {
          ref: "Hebrews 6:11-12",
          text: "And we desire that every one of you do shew the same diligence to the full assurance of hope unto the end: that ye be not slothful, but followers of them who through faith and patience inherit the promises.",
          link: "https://bible.com/bible/1/heb.6.11-12.KJV",
        },
      ],
    },
    {
      number: 10,
      title: "Bodily Healing",
      verses: [
        {
          ref: "James 5:14-16",
          text: "Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: and the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him. Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.",
          link: "https://bible.com/bible/1/jas.5.14-16.KJV",
        },
      ],
    },
  ];

  const grid = document.getElementById("promiseGrid");
  if (!grid) return;

  /* ---------------- RENDER ---------------- */

  function renderVerseBlock(verse) {
    const wrap = document.createElement("div");
    const p = document.createElement("p");
    p.className = "promise-verse";
    p.textContent = `"${verse.text}"`;
    const cite = document.createElement("p");
    cite.className = "promise-ref";
    cite.innerHTML = `<span>${verse.ref}</span>`;
    if (verse.link) {
      const a = document.createElement("a");
      a.href = verse.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = "Read on Bible.com";
      a.setAttribute("aria-label", `Read ${verse.ref} on Bible.com (opens in a new tab)`);
      cite.appendChild(a);
    }
    wrap.appendChild(p);
    wrap.appendChild(cite);
    return wrap;
  }

  PROMISES.forEach((promise) => {
    const card = document.createElement("article");
    card.className = "promise-card fade-in-up";
    card.dataset.searchText = (
      promise.title + " " + promise.verses.map((v) => v.ref + " " + v.text).join(" ")
    ).toLowerCase();

    const head = document.createElement("div");
    head.className = "promise-card-head";
    head.innerHTML = `
      <span class="promise-number" aria-hidden="true">${promise.number}</span>
      <h3 class="promise-title">${promise.title}</h3>
    `;
    card.appendChild(head);

    const [primary, ...rest] = promise.verses;
    card.appendChild(renderVerseBlock(primary));

    if (rest.length) {
      const toggleId = `extra-${promise.number}`;
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "promise-more-toggle";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", toggleId);
      toggle.innerHTML = `<span>+${rest.length} more reference${rest.length > 1 ? "s" : ""}</span> <i class="bi bi-chevron-down" aria-hidden="true"></i>`;

      const extra = document.createElement("div");
      extra.className = "promise-extra-verses";
      extra.id = toggleId;
      extra.hidden = true;
      rest.forEach((v) => extra.appendChild(renderVerseBlock(v)));

      toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        extra.hidden = isOpen;
        const label = toggle.querySelector("span");
        if (label) {
          label.textContent = isOpen
            ? `+${rest.length} more reference${rest.length > 1 ? "s" : ""}`
            : "Show less";
        }
      });

      card.appendChild(toggle);
      card.appendChild(extra);
    }

    grid.appendChild(card);
  });

  /* Re-run scroll-reveal observer for cards added after app.js already ran */
  if ("IntersectionObserver" in window) {
    const cards = grid.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    cards.forEach((el) => observer.observe(el));
  } else {
    grid.querySelectorAll(".fade-in-up").forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- SEARCH ---------------- */

  const searchInput = document.getElementById("promiseSearch");
  const searchStatus = document.getElementById("searchStatus");

  function applyFilter(query) {
    const trimmed = query.trim().toLowerCase();
    const cards = grid.querySelectorAll(".promise-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = !trimmed || card.dataset.searchText.includes(trimmed);
      card.classList.toggle("is-filtered-out", !matches);
      if (matches) visibleCount += 1;
    });

    if (!searchStatus) return;
    if (!trimmed) {
      searchStatus.textContent = "";
    } else if (visibleCount === 0) {
      searchStatus.textContent = `No promises match "${query}". Try a shorter word.`;
    } else {
      searchStatus.textContent = `${visibleCount} of ${cards.length} promises match "${query}".`;
    }
  }

  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => applyFilter(e.target.value), 120);
    });
  }
})();
