/* ==========================================================================
   WORKS OF FAITH — data + rendering
   Ordered to follow Hebrews 11:33-38 itself, not re-grouped by theme —
   the sequence is already the narrative arc the chapter builds.
   Long narrative passages are trimmed to their clearest verse(s) per
   card; full ranges are always still linked out to Bible.com.
   ========================================================================== */

(function () {
  "use strict";

  const WORKS = [
    {
      number: 1,
      title: "Subdued Kingdoms",
      verses: [
        {
          ref: "2 Samuel 8:1-2",
          text: "And after this it came to pass, that David smote the Philistines, and subdued them: and David took Metheg-ammah out of the hand of the Philistines. And he smote Moab, and measured them with a line, casting them down to the ground; even with two lines measured he to put to death, and with one full line to keep alive. And so the Moabites became David's servants, and brought gifts.",
          link: "https://bible.com/bible/1/2sa.8.1-2.KJV",
        },
        {
          ref: "Joshua 12:1",
          text: "Now these are the kings of the land, which the children of Israel smote, and possessed their land on the other side Jordan toward the rising of the sun, from the river Arnon unto mount Hermon, and all the plain on the east…",
          link: "https://bible.com/bible/1/jos.12.1.KJV",
          note: "Joshua 12 lists every king Israel defeated — read the full chapter for the complete roll call.",
        },
      ],
    },
    {
      number: 2,
      title: "Made Righteous",
      verses: [
        {
          ref: "Genesis 15:5-6",
          text: "And he brought him forth abroad, and said, Look now toward heaven, and tell the stars, if thou be able to number them: and he said unto him, So shall thy seed be. And he believed in the LORD; and he counted it to him for righteousness.",
          link: "https://bible.com/bible/1/gen.15.5-6.KJV",
        },
      ],
    },
    {
      number: 3,
      title: "Obtained Promises",
      verses: [
        {
          ref: "Hebrews 6:13-15",
          text: "For when God made promise to Abraham, because he could swear by no greater, he sware by himself, saying, Surely blessing I will bless thee, and multiplying I will multiply thee. And so, after he had patiently endured, he obtained the promise.",
          link: "https://bible.com/bible/1/heb.6.13-15.KJV",
        },
        {
          ref: "Genesis 21:1-2",
          text: "And the LORD visited Sarah as he had said, and the LORD did unto Sarah as he had spoken. For Sarah conceived, and bare Abraham a son in his old age, at the set time of which God had spoken to him.",
          link: "https://bible.com/bible/1/gen.21.1-2.KJV",
        },
        {
          ref: "Romans 4:20-21",
          text: "He staggered not at the promise of God through unbelief; but was strong in faith, giving glory to God; and being fully persuaded that, what he had promised, he was able also to perform.",
          link: "https://bible.com/bible/1/rom.4.20-21.KJV",
        },
      ],
    },
    {
      number: 4,
      title: "Stopped Mouths of Lions",
      verses: [
        {
          ref: "Daniel 6:21-23",
          text: "Then said Daniel unto the king, O king, live for ever. My God hath sent his angel, and hath shut the lions' mouths, that they have not hurt me: forasmuch as before him innocency was found in me; and also before thee, O king, have I done no hurt. Then was the king exceeding glad for him, and commanded that they should take Daniel up out of the den. So Daniel was taken up out of the den, and no manner of hurt was found upon him, because he believed in his God.",
          link: "https://bible.com/bible/1/dan.6.21-23.KJV",
        },
      ],
    },
    {
      number: 5,
      title: "Quenched the Violence of Fire",
      verses: [
        {
          ref: "Daniel 3:23-28",
          text: "He answered and said, Lo, I see four men loose, walking in the midst of the fire, and they have no hurt; and the form of the fourth is like the Son of God… upon whose bodies the fire had no power, nor was an hair of their head singed, neither were their coats changed, nor the smell of fire had passed on them.",
          link: "https://bible.com/bible/1/dan.3.23-28.KJV",
          note: "Trimmed from the full six-verse account of Shadrach, Meshach, and Abed-nego in the furnace — read the full passage for Nebuchadnezzar's response.",
        },
      ],
    },
    {
      number: 6,
      title: "Escaped the Edge of the Sword",
      verses: [
        {
          ref: "1 Samuel 17:51",
          text: "Therefore David ran, and stood upon the Philistine, and took his sword, and drew it out of the sheath thereof, and slew him, and cut off his head therewith. And when the Philistines saw their champion was dead, they fled.",
          link: "https://bible.com/bible/1/1sa.17.51.KJV",
        },
        {
          ref: "Exodus 18:4",
          text: "And the name of the other was Eliezer; for the God of my father, said he, was mine help, and delivered me from the sword of Pharaoh:",
          link: "https://bible.com/bible/1/exo.18.4.KJV",
        },
      ],
    },
    {
      number: 7,
      title: "Out of Weakness Were Made Strong",
      verses: [
        {
          ref: "Hebrews 11:11",
          text: "Through faith also Sara herself received strength to conceive seed, and was delivered of a child when she was past age, because she judged him faithful who had promised.",
          link: "https://bible.com/bible/1/heb.11.11.KJV",
        },
        {
          ref: "Romans 4:19-20",
          text: "And being not weak in faith, he considered not his own body now dead, when he was about an hundred years old, neither yet the deadness of Sarah's womb: he staggered not at the promise of God through unbelief; but was strong in faith, giving glory to God.",
          link: "https://bible.com/bible/1/rom.4.18-22.KJV",
          note: "Trimmed from the fuller Romans 4:18-22 account of Abraham's faith.",
        },
      ],
    },
    {
      number: 8,
      title: "Waxed Valiant in Fight",
      verses: [
        {
          ref: "2 Samuel 23:20-21",
          text: "And Benaiah the son of Jehoiada, the son of a valiant man, of Kabzeel, who had done many acts, he slew two lionlike men of Moab: he went down also and slew a lion in the midst of a pit in time of snow: and he slew an Egyptian, a goodly man: and the Egyptian had a spear in his hand; but he went down to him with a staff, and plucked the spear out of the Egyptian's hand, and slew him with his own spear.",
          link: "https://bible.com/bible/1/2sa.23.8-21.KJV",
          note: "One account among David's \"mighty men\" in 2 Samuel 23:8-21 — read the full chapter for the rest of the roll call.",
        },
        {
          ref: "1 Samuel 14:13-14",
          text: "And Jonathan climbed up upon his hands and upon his feet, and his armourbearer after him: and they fell before Jonathan; and his armourbearer slew after him. And that first slaughter, which Jonathan and his armourbearer made, was about twenty men, within as it were an half acre of land, which a yoke of oxen might plow.",
          link: "https://bible.com/bible/1/1sa.14.13-16.KJV",
        },
        {
          ref: "Judges 7:20-21",
          text: "And the three companies blew the trumpets, and brake the pitchers, and held the lamps in their left hands, and the trumpets in their right hands to blow withal: and they cried, The sword of the LORD, and of Gideon. And they stood every man in his place round about the camp: and all the host ran, and cried, and fled.",
          link: "https://bible.com/bible/1/jdg.7.20-21.KJV",
        },
      ],
    },
    {
      number: 9,
      title: "Turned to Flight the Armies of the Aliens",
      verses: [
        {
          ref: "1 Samuel 17:51",
          text: "Therefore David ran, and stood upon the Philistine, and took his sword, and drew it out of the sheath thereof, and slew him, and cut off his head therewith. And when the Philistines saw their champion was dead, they fled.",
          link: "https://bible.com/bible/1/1sa.17.51.KJV",
          note: "The same event as \"Escaped the Edge of the Sword\" above — David's single act of faith both escaped Goliath's blade and routed the entire Philistine army.",
        },
      ],
    },
    {
      number: 10,
      title: "Women Had Their Dead Raised to Life",
      verses: [
        {
          ref: "Hebrews 11:35",
          text: "Women received their dead raised to life again: and others were tortured, not accepting deliverance; that they might obtain a better resurrection:",
          link: "https://bible.com/bible/1/heb.11.35.KJV",
        },
        {
          ref: "1 Kings 17:21-23",
          text: "And he stretched himself upon the child three times, and cried unto the LORD, and said, O LORD my God, I pray thee, let this child's soul come into him again. And the LORD heard the voice of Elijah; and the soul of the child came into him again, and he revived. And Elijah took the child, and brought him down out of the chamber into the house, and delivered him unto his mother: and Elijah said, See, thy son liveth.",
          link: "https://bible.com/bible/1/1ki.17.21-23.KJV",
        },
        {
          ref: "2 Kings 4:34-37",
          text: "And he went up, and lay upon the child, and put his mouth upon his mouth, and his eyes upon his eyes, and his hands upon his hands: and he stretched himself upon the child; and the flesh of the child waxed warm. Then he returned, and walked in the house to and fro; and went up, and stretched himself upon him: and the child sneezed seven times, and the child opened his eyes… Then she went in, and fell at his feet, and bowed herself to the ground, and took up her son, and went out.",
          link: "https://bible.com/bible/1/2ki.4.32-37.KJV",
        },
        {
          ref: "Luke 7:13-15",
          text: "And when the Lord saw her, he had compassion on her, and said unto her, Weep not. And he came and touched the bier: and they that bare him stood still. And he said, Young man, I say unto thee, Arise. And he that was dead sat up, and began to speak. And he delivered him to his mother.",
          link: "https://bible.com/bible/1/luk.7.13-16.KJV",
        },
        {
          ref: "Mark 5:41-42",
          text: "And he took the damsel by the hand, and said unto her, Talitha cumi; which is, being interpreted, Damsel, I say unto thee, arise. And straightway the damsel arose, and walked; for she was of the age of twelve years. And they were astonished with a great astonishment.",
          link: "https://bible.com/bible/1/mrk.5.35-43.KJV",
        },
      ],
    },
    {
      number: 11,
      title: "Endured Torture",
      verses: [
        {
          ref: "Genesis 39:20",
          text: "And Joseph's master took him, and put him into the prison, a place where the king's prisoners were bound: and he was there in the prison.",
          link: "https://bible.com/bible/1/gen.39.20.KJV",
        },
        {
          ref: "Judges 16:21-22",
          text: "But the Philistines took him, and put out his eyes, and brought him down to Gaza, and bound him with fetters of brass; and he did grind in the prison house. Howbeit the hair of his head began to grow again after he was shaven.",
          link: "https://bible.com/bible/1/jdg.16.21-22.KJV",
        },
      ],
    },
    {
      number: 12,
      title: "Endured Mockings, Scourgings, Bonds, and Imprisonments",
      note: "Joseph's imprisonment (Genesis 39:20, above under \"Endured Torture\") also illustrates this facet — not repeated here.",
      verses: [
        {
          ref: "Hebrews 11:36",
          text: "And others had trial of cruel mockings and scourgings, yea, moreover of bonds and imprisonment:",
          link: "https://bible.com/bible/1/heb.11.36.KJV",
        },
        {
          ref: "Jeremiah 37:16",
          text: "When Jeremiah was entered into the dungeon, and into the cabins, and Jeremiah had remained there many days;",
          link: "https://bible.com/bible/1/jer.37.16.KJV",
        },
        {
          ref: "Jeremiah 38:6",
          text: "Then took they Jeremiah, and cast him into the dungeon of Malchiah the son of Hammelech, that was in the court of the prison: and they let down Jeremiah with cords. And in the dungeon there was no water, but mire: so Jeremiah sunk in the mire.",
          link: "https://bible.com/bible/1/jer.38.6.KJV",
        },
        {
          ref: "1 Kings 22:27",
          text: "And say, Thus saith the king, Put this fellow in the prison, and feed him with bread of affliction and with water of affliction, until I come in peace.",
          link: "https://bible.com/bible/1/1ki.22.27.KJV",
        },
      ],
    },
    {
      number: 13,
      title: "Suffered Stonings",
      verses: [
        {
          ref: "2 Chronicles 24:21",
          text: "And they conspired against him, and stoned him with stones at the commandment of the king in the court of the house of the LORD.",
          link: "https://bible.com/bible/1/2ch.24.21.KJV",
        },
        {
          ref: "Acts 14:19-20",
          text: "And there came thither certain Jews from Antioch and Iconium, who persuaded the people, and, having stoned Paul, drew him out of the city, supposing he had been dead. Howbeit, as the disciples stood round about him, he rose up, and came into the city: and the next day he departed with Barnabas to Derbe.",
          link: "https://bible.com/bible/1/act.14.19-20.KJV",
        },
      ],
    },
    {
      number: 14,
      title: "Endured Death by Sawing",
      verses: [
        {
          ref: "Hebrews 11:37",
          text: "They were stoned, they were sawn asunder, were tempted, were slain with the sword: they wandered about in sheepskins and goatskins; being destitute, afflicted, tormented;",
          link: "https://bible.com/bible/1/heb.11.37-39.KJV",
        },
      ],
    },
    {
      number: 15,
      title: "Suffered Temptations",
      verses: [
        {
          ref: "Genesis 39:7-9",
          text: "And it came to pass after these things, that his master's wife cast her eyes upon Joseph; and she said, Lie with me. But he refused, and said unto his master's wife, Behold, my master wotteth not what is with me in the house, and he hath committed all that he hath to my hand; there is none greater in this house than I; neither hath he kept back any thing from me but thee, because thou art his wife: how then can I do this great wickedness, and sin against God?",
          link: "https://bible.com/bible/1/gen.39.7-17.KJV",
        },
        {
          ref: "Genesis 39:10-12",
          text: "And it came to pass, as she spake to Joseph day by day, that he hearkened not unto her, to lie by her, or to be with her… and she caught him by his garment, saying, Lie with me: and he left his garment in her hand, and fled, and got him out.",
          link: "https://bible.com/bible/1/gen.39.7-17.KJV",
        },
      ],
    },
    {
      number: 16,
      title: "Suffered Martyrdom by the Sword",
      verses: [
        {
          ref: "1 Samuel 22:17-18",
          text: "And the king said unto the footmen that stood about him, Turn, and slay the priests of the LORD; because their hand also is with David, and because they knew when he fled, and did not shew it to me. But the servants of the king would not put forth their hand to fall upon the priests of the LORD. And the king said to Doeg, Turn thou, and fall upon the priests. And Doeg the Edomite turned, and he fell upon the priests, and slew on that day fourscore and five persons that did wear a linen ephod.",
          link: "https://bible.com/bible/1/1sa.22.17-18.KJV",
        },
        {
          ref: "1 Kings 19:10",
          text: "And he said, I have been very jealous for the LORD God of hosts: for the children of Israel have forsaken thy covenant, thrown down thine altars, and slain thy prophets with the sword; and I, even I only, am left; and they seek my life, to take it away.",
          link: "https://bible.com/bible/1/1ki.19.10.KJV",
        },
      ],
    },
    {
      number: 17,
      title: "Suffered Wanderings and Afflictions",
      note: "Also echoed in Elijah and Elisha's wilderness journeys (2 Kings 2:8, 13).",
      verses: [
        {
          ref: "Hebrews 11:38",
          text: "(Of whom the world was not worthy:) they wandered in deserts, and in mountains, and in dens and caves of the earth.",
          link: "https://bible.com/bible/1/heb.11.37-39.KJV",
        },
      ],
    },
  ];

  const grid = document.getElementById("workGrid");
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
    if (verse.note) {
      const note = document.createElement("p");
      note.className = "feature-desc";
      note.style.marginTop = "0.35rem";
      note.style.fontSize = "0.85rem";
      note.textContent = verse.note;
      wrap.appendChild(note);
    }
    return wrap;
  }

  WORKS.forEach((work) => {
    const card = document.createElement("article");
    card.className = "promise-card fade-in-up";
    card.dataset.searchText = (
      work.title + " " + work.verses.map((v) => v.ref + " " + v.text).join(" ")
    ).toLowerCase();

    const head = document.createElement("div");
    head.className = "promise-card-head";
    head.innerHTML = `
      <span class="promise-number" aria-hidden="true">${work.number}</span>
      <h3 class="promise-title">${work.title}</h3>
    `;
    card.appendChild(head);

    if (work.note) {
      const cardNote = document.createElement("p");
      cardNote.className = "feature-desc";
      cardNote.textContent = work.note;
      card.appendChild(cardNote);
    }

    const [primary, ...rest] = work.verses;
    card.appendChild(renderVerseBlock(primary));

    if (rest.length) {
      const toggleId = `extra-work-${work.number}`;
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

  const searchInput = document.getElementById("workSearch");
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
      searchStatus.textContent = `No works match "${query}". Try a shorter word.`;
    } else {
      searchStatus.textContent = `${visibleCount} of ${cards.length} works match "${query}".`;
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
