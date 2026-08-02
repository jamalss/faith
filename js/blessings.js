/* ==========================================================================
   BLESSINGS OF FAITH — data + rendering
   Content supplied by the site owner (KJV, verified against public-domain
   KJV text). Grouped into four themes to keep 28 entries scannable.
   ========================================================================== */

(function () {
  "use strict";

  const BLESSING_GROUPS = [
    {
      name: "Salvation & New Life in Christ",
      items: [
        {
          number: 4,
          title: "Forgiveness",
          verses: [
            { ref: "Luke 7:50", text: "And he said to the woman, Thy faith hath saved thee; go in peace.", link: "https://bible.com/bible/1/luk.7.50.KJV" },
            { ref: "Romans 3:25", text: "Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God;", link: "https://bible.com/bible/1/rom.3.25.KJV" },
          ],
        },
        {
          number: 8,
          title: "Righteousness",
          verses: [
            { ref: "Romans 3:22", text: "Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference:", link: "https://bible.com/bible/1/rom.3.22.KJV" },
            { ref: "Romans 9:30", text: "What shall we say then? That the Gentiles, which followed not after righteousness, have attained to righteousness, even the righteousness which is of faith.", link: "https://bible.com/bible/1/rom.9.30.KJV" },
          ],
        },
        {
          number: 9,
          title: "Justification",
          note: "This blessing spans a wide passage (Romans 3:28–4:25; 5:1; Galatians 2:16; 3:8, 24) — the verse below is its clearest single statement, with the surrounding argument in the extra references.",
          verses: [
            { ref: "Romans 4:3", text: "For what saith the scripture? Abraham believed God, and it was counted unto him for righteousness.", link: "https://bible.com/bible/1/rom.4.3.KJV" },
            { ref: "Romans 5:1", text: "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ:", link: "https://bible.com/bible/1/rom.5.1-2.KJV" },
            { ref: "Galatians 2:16", text: "Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ, even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law: for by the works of the law shall no flesh be justified.", link: "https://bible.com/bible/1/gal.2.16.KJV" },
            { ref: "Galatians 3:24", text: "Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.", link: "https://bible.com/bible/1/gal.3.24.KJV" },
          ],
        },
        {
          number: 15,
          title: "Salvation",
          verses: [
            { ref: "Acts 4:12", text: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.", link: "https://bible.com/bible/1/act.4.12.KJV" },
            { ref: "Ephesians 2:8-9", text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.", link: "https://bible.com/bible/1/eph.2.8-9.KJV" },
          ],
        },
        {
          number: 14,
          title: "Sonship",
          verses: [
            { ref: "Galatians 3:26", text: "For ye are all the children of God by faith in Christ Jesus.", link: "https://bible.com/bible/1/gal.3.26.KJV" },
          ],
        },
        {
          number: 7,
          title: "Sanctification",
          verses: [
            { ref: "Acts 26:18", text: "To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me.", link: "https://bible.com/bible/1/act.26.18.KJV" },
          ],
        },
        {
          number: 17,
          title: "Baptism into Christ",
          verses: [
            { ref: "Colossians 2:12", text: "Buried with him in baptism, wherein also ye are risen with him through the faith of the operation of God, who hath raised him from the dead.", link: "https://bible.com/bible/1/col.2.12.KJV" },
          ],
        },
        {
          number: 16,
          title: "Christ Indwelling",
          verses: [
            { ref: "Ephesians 3:17", text: "That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love,", link: "https://bible.com/bible/1/eph.3.17.KJV" },
          ],
        },
        {
          number: 13,
          title: "Holy Spirit",
          verses: [
            { ref: "Galatians 3:2", text: "This only would I learn of you, Received ye the Spirit by the works of the law, or by the hearing of faith?", link: "https://bible.com/bible/1/gal.3.2.KJV" },
            { ref: "Galatians 3:14", text: "That the blessing of Abraham might come on the Gentiles through Jesus Christ; that we might receive the promise of the Spirit through faith.", link: "https://bible.com/bible/1/gal.3.13-14.KJV" },
          ],
        },
      ],
    },
    {
      name: "Provision & Protection",
      items: [
        {
          number: 1,
          title: "Bodily Healing",
          verses: [
            { ref: "Matthew 8:10", text: "When Jesus heard it, he marvelled, and said to them that followed, Verily I say unto you, I have not found so great faith, no, not in Israel.", link: "https://bible.com/bible/1/mat.8.10.KJV" },
            { ref: "Acts 3:16", text: "And his name through faith in his name hath made this man strong, whom ye see and know: yea, the faith which is by him hath given him this perfect soundness in the presence of you all.", link: "https://bible.com/bible/1/act.3.16.KJV" },
          ],
        },
        {
          number: 2,
          title: "Protection",
          verses: [
            { ref: "Matthew 8:26", text: "And he saith unto them, Why are ye fearful, O ye of little faith? Then he arose, and rebuked the winds and the sea; and there was a great calm.", link: "https://bible.com/bible/1/mat.8.26.KJV" },
            { ref: "Matthew 14:31", text: "And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt?", link: "https://bible.com/bible/1/mat.14.31.KJV" },
          ],
        },
        {
          number: 3,
          title: "Daily Food",
          verses: [
            { ref: "Matthew 16:8-10", text: "Which when Jesus perceived, he said unto them, O ye of little faith, why reason ye among yourselves, because ye have brought no bread? Do ye not yet understand, neither remember the five loaves of the five thousand, and how many baskets ye took up? Neither the seven loaves of the four thousand, and how many baskets ye took up?", link: "https://bible.com/bible/1/mat.16.8-10.KJV" },
          ],
        },
        {
          number: 10,
          title: "Renewal of Youth",
          verses: [
            { ref: "Romans 4:19", text: "And being not weak in faith, he considered not his own body now dead, when he was about an hundred years old, neither yet the deadness of Sara's womb:", link: "https://bible.com/bible/1/rom.4.19.KJV" },
            { ref: "Romans 4:20", text: "He staggered not at the promise of God through unbelief; but was strong in faith, giving glory to God;", link: "https://bible.com/bible/1/rom.4.20.KJV" },
          ],
        },
        {
          number: 25,
          title: "Power to Resist Satan",
          verses: [
            { ref: "1 Peter 5:9", text: "Whom resist stedfast in the faith, knowing that the same afflictions are accomplished in your brethren that are in the world.", link: "https://bible.com/bible/1/1pe.5.9.KJV" },
          ],
        },
        {
          number: 26,
          title: "Victory Over the World",
          verses: [
            { ref: "1 John 5:4", text: "For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.", link: "https://bible.com/bible/1/1jn.5.4.KJV" },
          ],
        },
      ],
    },
    {
      name: "Character & Growth",
      items: [
        {
          number: 6,
          title: "Heart Purity",
          verses: [
            { ref: "Acts 15:9", text: "And put no difference between us and them, purifying their hearts by faith.", link: "https://bible.com/bible/1/act.15.9.KJV" },
          ],
        },
        {
          number: 11,
          title: "Stability",
          verses: [
            { ref: "1 Corinthians 16:13", text: "Watch ye, stand fast in the faith, quit you like men, be strong.", link: "https://bible.com/bible/1/1co.16.13.KJV" },
            { ref: "2 Corinthians 1:24", text: "Not for that we have dominion over your faith, but are helpers of your joy: for by faith ye stand.", link: "https://bible.com/bible/1/2co.1.24.KJV" },
          ],
        },
        {
          number: 12,
          title: "Christian Living",
          note: "The second reference points to Hebrews 10 broadly — the verse below is its clearest summary statement.",
          verses: [
            { ref: "2 Corinthians 5:7", text: "(For we walk by faith, not by sight:)", link: "https://bible.com/bible/1/2co.5.7.KJV" },
            { ref: "Hebrews 10:38", text: "Now the just shall live by faith: but if any man draw back, my soul shall have no pleasure in him.", link: "https://bible.com/bible/1/heb.10.38.KJV" },
          ],
        },
        {
          number: 23,
          title: "Patience",
          verses: [
            { ref: "James 1:3", text: "Knowing this, that the trying of your faith worketh patience.", link: "https://bible.com/bible/1/jas.1.3.KJV" },
            { ref: "1 Peter 1:7", text: "That the trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire, might be found unto praise and honour and glory at the appearing of Jesus Christ:", link: "https://bible.com/bible/1/1pe.1.7.KJV" },
          ],
        },
        {
          number: 21,
          title: "Assurance",
          verses: [
            { ref: "Hebrews 10:22", text: "Let us draw near with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience, and our bodies washed with pure water.", link: "https://bible.com/bible/1/heb.10.22.KJV" },
          ],
        },
        {
          number: 22,
          title: "Good Profession",
          verses: [
            { ref: "Hebrews 10:23", text: "Let us hold fast the profession of our faith without wavering; (for he is faithful that promised;)", link: "https://bible.com/bible/1/heb.10.23.KJV" },
          ],
        },
        {
          number: 20,
          title: "Boldness",
          verses: [
            { ref: "1 Timothy 3:13", text: "For they that have used the office of a deacon well purchase to themselves a good degree, and great boldness in the faith which is in Christ Jesus.", link: "https://bible.com/bible/1/1ti.3.13.KJV" },
          ],
        },
        {
          number: 19,
          title: "Godly Edifying",
          verses: [
            { ref: "1 Timothy 1:4", text: "Neither give heed to fables and endless genealogies, which minister questions, rather than godly edifying which is in faith: so do.", link: "https://bible.com/bible/1/1ti.1.4.KJV" },
          ],
        },
        {
          number: 27,
          title: "Edification",
          verses: [
            { ref: "Jude 1:20", text: "But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost,", link: "https://bible.com/bible/1/jud.1.20.KJV" },
          ],
        },
      ],
    },
    {
      name: "Power & Reward",
      items: [
        {
          number: 5,
          title: "Miracles",
          verses: [
            { ref: "Acts 6:8", text: "And Stephen, full of faith and power, did great wonders and miracles among the people.", link: "https://bible.com/bible/1/act.6.8.KJV" },
            { ref: "Galatians 3:5", text: "He therefore that ministereth to you the Spirit, and worketh miracles among you, doeth he it by the works of the law, or by the hearing of faith?", link: "https://bible.com/bible/1/gal.3.5.KJV" },
          ],
        },
        {
          number: 18,
          title: "Works of Power",
          verses: [
            { ref: "1 Thessalonians 1:3", text: "Remembering without ceasing your work of faith, and labour of love, and patience of hope in our Lord Jesus Christ, in the sight of God and our Father;", link: "https://bible.com/bible/1/1th.1.3.KJV" },
            { ref: "2 Thessalonians 1:11", text: "Wherefore also we pray always for you, that our God would count you worthy of this calling, and fulfil all the good pleasure of his goodness, and the work of faith with power:", link: "https://bible.com/bible/1/2th.1.11.KJV" },
          ],
        },
        {
          number: 24,
          title: "Inheritance",
          verses: [
            { ref: "James 2:5", text: "Hearken, my beloved brethren, Hath not God chosen the poor of this world rich in faith, and heirs of the kingdom which he hath promised to them that love him?", link: "https://bible.com/bible/1/jas.2.5.KJV" },
          ],
        },
        {
          number: 28,
          title: "Many Faith Exploits",
          note: "The reference points to Hebrews 11 as a whole — the verses below name the exploits most directly.",
          verses: [
            { ref: "Hebrews 11:33-34", text: "Who through faith subdued kingdoms, wrought righteousness, obtained promises, stopped the mouths of lions, Quenched the violence of fire, escaped the edge of the sword, out of weakness were made strong, waxed valiant in fight, turned to flight the armies of the aliens.", link: "https://bible.com/bible/1/heb.11.33-34.KJV" },
          ],
        },
      ],
    },
  ];

  const container = document.getElementById("blessingGroups");
  if (!container) return;

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

  function renderCard(item) {
    const card = document.createElement("article");
    card.className = "promise-card fade-in-up";
    card.dataset.searchText = (
      item.title + " " + item.verses.map((v) => v.ref + " " + v.text).join(" ")
    ).toLowerCase();

    const head = document.createElement("div");
    head.className = "promise-card-head";
    head.innerHTML = `
      <span class="promise-number" aria-hidden="true">${item.number}</span>
      <h3 class="promise-title">${item.title}</h3>
    `;
    card.appendChild(head);

    const [primary, ...rest] = item.verses;
    card.appendChild(renderVerseBlock(primary));

    if (item.note) {
      const note = document.createElement("p");
      note.className = "feature-desc";
      note.style.marginTop = "0.5rem";
      note.textContent = item.note;
      card.appendChild(note);
    }

    if (rest.length) {
      const toggleId = `extra-blessing-${item.number}`;
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

    return card;
  }

  BLESSING_GROUPS.forEach((group, groupIndex) => {
    const section = document.createElement("div");
    section.className = "content-group";
    section.dataset.groupIndex = String(groupIndex);

    const head = document.createElement("div");
    head.className = "content-group-head";
    head.innerHTML = `
      <h2 class="content-group-title">${group.name}</h2>
      <span class="content-group-count">${group.items.length} blessings</span>
    `;
    section.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "promise-grid";
    group.items.forEach((item) => grid.appendChild(renderCard(item)));
    section.appendChild(grid);

    container.appendChild(section);
  });

  /* Scroll-reveal for cards added after app.js already ran */
  if ("IntersectionObserver" in window) {
    const cards = container.querySelectorAll(".fade-in-up");
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
    container.querySelectorAll(".fade-in-up").forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------- SEARCH (group-aware) ---------------- */

  const searchInput = document.getElementById("blessingSearch");
  const searchStatus = document.getElementById("searchStatus");

  function applyFilter(query) {
    const trimmed = query.trim().toLowerCase();
    const groups = container.querySelectorAll(".content-group");
    let visibleCount = 0;
    let totalCount = 0;

    groups.forEach((group) => {
      const cards = group.querySelectorAll(".promise-card");
      let groupVisible = 0;
      cards.forEach((card) => {
        totalCount += 1;
        const matches = !trimmed || card.dataset.searchText.includes(trimmed);
        card.classList.toggle("is-filtered-out", !matches);
        if (matches) {
          groupVisible += 1;
          visibleCount += 1;
        }
      });
      group.classList.toggle("is-empty", groupVisible === 0);
    });

    if (!searchStatus) return;
    if (!trimmed) {
      searchStatus.textContent = "";
    } else if (visibleCount === 0) {
      searchStatus.textContent = `No blessings match "${query}". Try a shorter word.`;
    } else {
      searchStatus.textContent = `${visibleCount} of ${totalCount} blessings match "${query}".`;
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
