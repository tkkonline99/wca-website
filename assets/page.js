const pageRoot = document.querySelector("[data-page-root]");
const rawRequestedView = new URLSearchParams(window.location.search).get("view") || "who-we-are";
const requestedView = rawRequestedView === "partners" ? "team-coordinators" : rawRequestedView;

const programPages = {
  "education-school-kits": {
    title: "Education and school kits",
    titleKey: "programEducationTitle",
    bodyKey: "programEducationDetailBody",
    image: "education",
    alt: "Children showing school kits distributed by WCA",
    galleryImages: [
      ["education", "Children showing school kits distributed by WCA"],
      ["event-september-06-2025-1", "Children raising school kits during the Kinama distribution"],
      ["event-september-06-2025-2", "Students gathered with school kits in Kinama"],
      ["event-september-06-2025-3", "WCA team supporting pupils at the Kinama activity"],
      ["event-september-13-2025-1", "School kits arranged for pupils in Gatumba"],
      ["event-september-13-2025-2", "Children and supporters during the Gatumba school kit distribution"],
      ["event-september-13-2025-3", "WCA team presenting complete school kits in Gatumba"],
      ["event-september-15-2025-1", "Children and families gathered for school supplies"],
      ["event-september-17-2025-1", "Children and WCA team after a school kit distribution"],
      ["hero-3", "Children holding notebooks during a WCA education action"]
    ],
    body:
      "WCA supports vulnerable pupils with complete school kits, learning materials, and practical encouragement so children can return to class with dignity.",
    points: [
      ["programEducationPoint1", "School supplies and essential learning materials."],
      ["programEducationPoint2", "Support for pupils who are at risk of exclusion from school."],
      ["programEducationPoint3", "Follow-up with families, community leaders, and field supporters."]
    ]
  },
  "humanitarian-relief": {
    title: "Humanitarian relief",
    titleKey: "programReliefTitle",
    bodyKey: "programReliefDetailBody",
    image: "relief",
    alt: "Food packages prepared for families",
    galleryImages: [
      ["relief", "Food packages prepared for families"],
      ["event-may-2025-1", "Prepared food and non-food packages for Gatumba families"],
      ["event-may-2025-2", "WCA team members with distributed support packages in Gatumba"],
      ["event-may-2025-3", "Community members gathered during the Gatumba distribution"],
      ["event-june-2025-1", "Clothing and household items prepared in Rugazi"],
      ["event-june-2025-2", "WCA team arranging items for the Rugazi distribution"],
      ["event-june-2025-3", "Community members receiving support in Rugazi"],
      ["event-december-2025-1", "Kyaka II community members after receiving food support"],
      ["event-december-2025-2", "Food items prepared for families in Kyaka II"],
      ["event-december-2025-3", "Children and families gathered during the Kyaka II action"]
    ],
    body:
      "WCA organizes food and non-food assistance for families affected by poverty, displacement, conflict, and urgent community need.",
    points: [
      ["programReliefPoint1", "Food support, hygiene soap, clothing, mosquito nets, and household essentials."],
      ["programReliefPoint2", "Field distributions based on documented community needs."],
      ["programReliefPoint3", "Photos and reports that help supporters understand how donations are used."]
    ]
  },
  "community-resilience": {
    title: "Community resilience",
    titleKey: "programCommunityTitle",
    bodyKey: "programCommunityDetailBody",
    image: "community",
    alt: "Community members gathered during a WCA field action",
    galleryImages: [
      ["community", "Community members gathered during a WCA field action"],
      ["about", "WCA supporters standing beside prepared food packages"],
      ["hero-1", "Families and children after a community support distribution"],
      ["hero-2", "Community members receiving support from WCA"],
      ["hero-4", "Children and field team during community support"],
      ["hero-5", "Community gathering during a WCA activity"],
      ["event-april-2026-1", "Families gathered for the April 2026 Gatumba support action"],
      ["event-april-2026-2", "Food and hygiene support distributed in Gatumba"],
      ["event-april-2026-3", "WCA field team during the April 2026 Gatumba action"],
      ["february-2026", "Children holding support items after a community activity"]
    ],
    body:
      "WCA works with local communities to strengthen resilience through awareness, psychosocial support, vocational skills, and advocacy.",
    points: [
      ["programCommunityPoint1", "Awareness and psychosocial support for vulnerable families."],
      ["programCommunityPoint2", "Skills development and community-centered support projects."],
      ["programCommunityPoint3", "Advocacy that connects field needs with donors and institutional partners."]
    ]
  }
};

const achievementEvents = [
  {
    country: "Burundi",
    date: "17 May 2025",
    datetime: "2025-05-17",
    title: "Gatumba, Burundi",
    description: "Food and non-food items distributed to more than 100 families.",
    images: [
      ["event-may-2025-1", "Prepared food and non-food packages for Gatumba families", 1000, 666],
      ["event-may-2025-2", "WCA team members with distributed support packages in Gatumba", 1000, 666],
      ["event-may-2025-3", "Community members gathered during the Gatumba distribution", 1000, 666]
    ]
  },
  {
    country: "Burundi",
    date: "14 June 2025",
    datetime: "2025-06-14",
    title: "Rugazi, Burundi",
    description:
      "Clothing, shoes, mosquito nets, hygiene soap, and food support for vulnerable people and families.",
    images: [
      ["event-june-2025-1", "Clothing and household items prepared in Rugazi", 1000, 750],
      ["event-june-2025-2", "WCA team arranging items for the Rugazi distribution", 1000, 750],
      ["event-june-2025-3", "Community members receiving support in Rugazi", 1000, 750]
    ]
  },
  {
    country: "Burundi",
    date: "6 September 2025",
    datetime: "2025-09-06",
    title: "Kinama, Burundi",
    description: "Complete school kits distributed to more than 80 pupils.",
    images: [
      ["event-september-06-2025-1", "Children raising school kits during the Kinama distribution", 1000, 750],
      ["event-september-06-2025-2", "Students gathered with school kits in Kinama", 1000, 750],
      ["event-september-06-2025-3", "WCA team supporting pupils at the Kinama activity", 1000, 750]
    ]
  },
  {
    country: "Burundi",
    date: "13 September 2025",
    datetime: "2025-09-13",
    title: "Gatumba, Burundi",
    description: "Complete school kits distributed to more than 250 pupils.",
    images: [
      ["event-september-13-2025-1", "School kits arranged for pupils in Gatumba", 1000, 750],
      ["event-september-13-2025-2", "Children and supporters during the Gatumba school kit distribution", 1000, 750],
      ["event-september-13-2025-3", "WCA team presenting complete school kits in Gatumba", 1000, 750]
    ]
  },
  {
    country: "Burundi",
    date: "15 September 2025",
    datetime: "2025-09-15",
    title: "Muzinda, Burundi",
    description: "Complete school supplies distributed to more than 150 pupils.",
    images: [
      ["event-september-15-2025-1", "Children and families gathered for the Muzinda school supplies action", 1000, 750],
      ["event-september-15-2025-2", "Pupils receiving school supplies in Muzinda", 1000, 750],
      ["event-september-15-2025-3", "WCA field action with children in Muzinda", 1000, 750]
    ]
  },
  {
    country: "Burundi",
    date: "17 September 2025",
    datetime: "2025-09-17",
    title: "Gihanga, Burundi",
    description: "School kits distributed to more than 180 pupils.",
    images: [
      ["event-september-17-2025-1", "Children and WCA team after the Gihanga school kit distribution", 1000, 1000],
      ["event-september-17-2025-2", "Gihanga pupils holding school kits", 1000, 750],
      ["event-september-17-2025-3", "Community group gathered at the Gihanga activity", 1000, 750]
    ]
  },
  {
    country: "Uganda",
    date: "24 December 2025",
    datetime: "2025-12-24",
    title: "Kyaka II, Uganda",
    description:
      "Food items distributed to more than 100 families, including flour, beans, rice, soap, salt, oil, and sugar.",
    images: [
      ["event-december-2025-1", "Kyaka II community members after receiving food support", 1000, 666],
      ["event-december-2025-2", "Food items prepared for families in Kyaka II", 1000, 666],
      ["event-december-2025-3", "Children and families gathered during the Kyaka II action", 1000, 666]
    ]
  },
  {
    country: "Burundi",
    date: "3 February 2026",
    datetime: "2026-02-03",
    title: "Gatumba, Burundi",
    description: "Clothing and non-food support benefiting more than 100 vulnerable children.",
    images: [
      ["event-february-2026-1", "Children supported during the February 2026 Gatumba activity", 1000, 750],
      ["event-february-2026-2", "WCA team with children in Gatumba in February 2026", 1000, 750],
      ["event-february-2026-3", "Clothing and non-food support being shared in Gatumba", 1000, 750]
    ]
  },
  {
    country: "Burundi",
    date: "25 April 2026",
    datetime: "2026-04-25",
    title: "Gatumba, Burundi",
    description:
      "Maize flour, beans, salt, oil, hygiene soap, and tents distributed to vulnerable families.",
    images: [
      ["event-april-2026-1", "Families gathered for the April 2026 Gatumba support action", 1000, 819],
      ["event-april-2026-2", "Food and hygiene support distributed in Gatumba in April 2026", 1000, 819],
      ["event-april-2026-3", "WCA field team during the April 2026 Gatumba action", 1000, 819]
    ]
  }
];

const galleryImageDimensions = {
  about: [1080, 720],
  community: [1200, 900],
  education: [1200, 900],
  relief: [1200, 900],
  "may-2025": [1000, 666],
  "june-2025": [1000, 750],
  "september-06-2025": [1000, 750],
  "september-13-2025": [1000, 750],
  "september-15-2025": [1000, 750],
  "september-17-2025": [1000, 1000],
  "december-2025": [1000, 666],
  "february-2026": [1200, 904],
  "february-2026-event": [1000, 750],
  "hero-1": [1800, 1200],
  "hero-2": [1800, 1350],
  "hero-3": [1600, 1066],
  "hero-4": [1600, 1205],
  "hero-5": [1600, 1310]
};

const achievementGalleryPrimaryImages = {
  "2025-05-17": ["may-2025", "Gatumba distribution overview"],
  "2025-06-14": ["june-2025", "Rugazi field action overview"],
  "2025-09-06": ["september-06-2025", "Kinama school kit activity overview"],
  "2025-09-13": ["september-13-2025", "Gatumba school kit activity overview"],
  "2025-09-15": ["september-15-2025", "Muzinda school supplies activity overview"],
  "2025-09-17": ["september-17-2025", "Gihanga school kit activity overview"],
  "2025-12-24": ["december-2025", "Kyaka II food support activity overview"],
  "2026-02-03": ["february-2026-event", "February 2026 Gatumba support overview"],
  "2026-04-25": ["hero-2", "April 2026 community support overview"]
};

const supplementalAchievementGalleryImages = [
  ["about", "WCA team and support packages"],
  ["community", "Community members gathered during field support"],
  ["education", "Children showing school kits"],
  ["relief", "Food packages prepared for families"],
  ["hero-1", "Families and children after support distribution"],
  ["hero-2", "Community members receiving support"],
  ["hero-3", "WCA field activity with children and families"],
  ["hero-4", "Children and field team during school support"],
  ["hero-5", "Community gathering during a WCA activity"],
  ["february-2026", "Children holding support items"],
  ["december-2025", "Food support activity with families"],
  ["june-2025", "Relief items arranged for distribution"],
  ["september-06-2025", "School kits distributed to pupils"],
  ["september-13-2025", "Complete school kits prepared for pupils"],
  ["september-15-2025", "School supplies distributed in the community"],
  ["september-17-2025", "Children and WCA team after school kit support"]
];

function galleryImage(name, alt) {
  const [width, height] = galleryImageDimensions[name] || [1000, 750];
  return [name, alt, width, height];
}

function expandAchievementGalleries() {
  achievementEvents.forEach((event) => {
    const seen = new Set(event.images.map(([name]) => name));
    const primary = achievementGalleryPrimaryImages[event.datetime];
    const candidates = [...(primary ? [primary] : []), ...supplementalAchievementGalleryImages];

    candidates.forEach(([name, alt]) => {
      if (event.images.length >= 10 || seen.has(name)) return;
      event.images.push(galleryImage(name, `${alt} for ${event.title}`));
      seen.add(name);
    });
  });
}

expandAchievementGalleries();

const countryViews = {
  "achievements-burundi": "Burundi",
  "achievements-rwanda": "Rwanda",
  "achievements-uganda": "Uganda",
  "achievements-dr-congo": "DR Congo"
};

const socialIcons = {
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 8.1h2.1V4.5c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.9H5v4h3.4v7.3h4.1v-7.3h3.3l.5-4h-3.8V9.9c0-1.2.3-1.8 1.8-1.8Z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.4 10.5 21.8 2h-1.9l-6.4 7.4L8.4 2H2.5l7.8 11.3L2.5 22h1.9l6.8-7.8 5.4 7.8h5.9l-8.1-11.5Zm-2.4 2.7-.8-1.1L5 3.4h2.5l5 7.1.8 1.1 6.5 9.2h-2.5L12 13.2Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5.1-2.8a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.1a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.9A3 3 0 0 0 4.5 19c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 2c.3 2.4 1.7 4 4 4.3v3.5a7.6 7.6 0 0 1-4-1.2v6.7c0 4-2.8 6.7-6.7 6.7A6.3 6.3 0 0 1 3.5 15.7c0-3.8 3-6.5 6.9-6.5.4 0 .8 0 1.2.1v3.6a4 4 0 0 0-1.3-.2 2.9 2.9 0 1 0 2.9 2.9V2h3.5Z"/></svg>'
};

const contactIcons = {
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>'
};

function picture(name, alt, width = 1200, height = 900, className = "") {
  return `
    <picture>
      <source srcset="assets/images/${name}.webp" type="image/webp" />
      <img class="${className}" src="assets/images/${name}.jpg" alt="${alt}" width="${width}" height="${height}" loading="lazy" />
    </picture>
  `;
}

function renderImageGallery(images, label, className = "program-gallery") {
  return `
    <div class="event-gallery ${className}" aria-label="${label}">
      ${images
        .slice(0, 10)
        .map(([name, alt], index) => {
          const [width, height] = galleryImageDimensions[name] || [1200, 900];
          return `
            <picture class="${index === 0 ? "event-main" : ""}">
              <source srcset="assets/images/${name}.webp" type="image/webp" />
              <img src="assets/images/${name}.jpg" alt="${alt}" width="${width}" height="${height}" loading="lazy" />
            </picture>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderEventCard(event) {
  const eventKey = event.datetime.replaceAll("-", "");
  const gallery = event.images
    .map(([name, alt, width, height], index) => `
      <picture class="${index === 0 ? "event-main" : ""}">
        <source srcset="assets/images/${name}.webp" type="image/webp" />
        <img src="assets/images/${name}.jpg" alt="${alt}" width="${width}" height="${height}" loading="lazy" />
      </picture>
    `)
    .join("");

  return `
    <article class="timeline-card" data-year="${event.datetime.slice(0, 4)}" data-country="${event.country}" data-reveal>
      <div class="event-gallery" aria-label="Photos from the ${event.date} ${event.title} field action">
        ${gallery}
      </div>
      <div class="timeline-content">
        <time datetime="${event.datetime}" data-i18n="eventDate${eventKey}">${event.date}</time>
        <h3>${event.title}</h3>
        <p data-i18n="eventDesc${eventKey}">${event.description}</p>
      </div>
    </article>
  `;
}

function renderCountryLinks(activeCountry) {
  return `
    <div class="country-tabs" aria-label="Achievement countries">
      ${Object.entries(countryViews)
        .map(([view, country]) => `
          <a href="page.html?view=${view}" ${country === activeCountry ? 'aria-current="page"' : ""}>
            ${country === "DR Congo" ? "DR. Congo" : country}
          </a>
        `)
        .join("")}
    </div>
  `;
}

function renderAchievements(country) {
  const events = achievementEvents.filter((event) => event.country === country);
  const cards = events.map(renderEventCard).join("");
  const titleKey = {
    Burundi: "achievementsBurundiTitle",
    Rwanda: "achievementsRwandaTitle",
    Uganda: "achievementsUgandaTitle",
    "DR Congo": "achievementsDrCongoTitle"
  }[country];
  const empty = `
    <p class="empty-state" data-i18n="noAchievementsCountry">
      No documented field actions are available for this country yet.
    </p>
  `;

  return `
    <section class="section alt page-section" id="page-achievements">
      <div class="container">
        <div class="section-head" data-reveal>
          <p class="section-kicker" data-i18n="achievementsKicker">Achievements</p>
          <h1 data-i18n="${titleKey}">${country === "DR Congo" ? "DR. Congo" : country} field actions</h1>
          <p class="section-lead" data-i18n="achievementsPageLead">
            Documented field actions from WCA records, notes, and original photos.
          </p>
        </div>
        ${renderCountryLinks(country)}
        <div class="timeline">
          ${cards}
        </div>
        ${events.length ? "" : empty}
      </div>
    </section>
  `;
}

function renderProgramPage(program) {
  return `
    <section class="section page-section" id="program-detail">
      <div class="container">
        <div class="section-head narrow" data-reveal>
          <p class="section-kicker" data-i18n="programsKicker">Programs</p>
          <h1 data-i18n="${program.titleKey}">${program.title}</h1>
          <p class="section-lead" data-i18n="${program.bodyKey}">${program.body}</p>
        </div>
        <div class="program-detail" data-reveal>
          ${renderImageGallery(program.galleryImages || [[program.image, program.alt]], `${program.title} photos`)}
          <article class="card">
            <h2 data-i18n="${program.titleKey}">${program.title}</h2>
            <p data-i18n="${program.bodyKey}">${program.body}</p>
            <ul class="commitment-list">
              ${program.points.map(([key, point]) => `<li data-i18n="${key}">${point}</li>`).join("")}
            </ul>
          </article>
        </div>
      </div>
    </section>
  `;
}

const pages = {
  "who-we-are": {
    title: "Who we are",
    titleKey: "pageTitleWhoWeAre",
    html: `
      <section class="section page-section" id="page-about">
        <div class="container split">
          <div data-reveal>
            <p class="section-kicker" data-i18n="aboutKicker">Who we are</p>
            <h1 data-i18n="aboutTitle">A community of action for children, dignity, and resilience.</h1>
            <p class="section-lead" data-i18n="aboutLead">
              Wisdom Children Association is a not-for-profit humanitarian association founded by
              Ndayishimiye Ismail, Charlene Bishagari, and Grace Batende after a simple and painful
              observation: too many people are left behind.
            </p>
            <p class="about-founded" data-i18n="foundedAbout">Founded 1 April 2025 in East Africa.</p>
            <p data-i18n="aboutBody">
              Driven by empathy, solidarity, and social justice, the association turns compassion
              into concrete field action across education, healthcare, psychosocial support,
              economic empowerment, and community development.
            </p>
            <ul class="values" aria-label="Association values">
              <li data-i18n="valueEmpathy">Empathy</li>
              <li data-i18n="valueSolidarity">Solidarity</li>
              <li data-i18n="valueSocialJustice">Social justice</li>
              <li data-i18n="valueTransparency">Transparency</li>
              <li data-i18n="valueResilience">Resilience</li>
            </ul>
          </div>
          <div class="media-stack" data-reveal>
            ${picture("about", "WCA supporters standing beside prepared food packages", 1080, 720, "wide")}
            <div class="card">
              <h2 data-i18n="governanceTitle">Governance and accountability</h2>
              <p data-i18n="governanceBody">
                WCA is led by a committed leadership team guided by transparency, accountability,
                and integrity. Donations are directed to traceable field action and community needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    `
  },
  mission: {
    title: "Our Mission",
    titleKey: "pageTitleMission",
    html: `
      <section class="section alt page-section" id="page-mission">
        <div class="container">
          <div class="section-head" data-reveal>
            <p class="section-kicker" data-i18n="missionKicker">Mission, vision, objectives</p>
            <h1 data-i18n="missionTitle">We refuse to look away from vulnerability.</h1>
            <p class="section-lead" data-i18n="missionLead">
              Vulnerability can affect any of us through health crises, economic shocks, climate
              disasters, conflict, or psychological trauma. WCA works so people can rediscover hope,
              dignity, and a sense of belonging.
            </p>
          </div>
          <div class="grid two">
            <article class="card" data-reveal>
              <h2 data-i18n="visionTitle">Vision</h2>
              <p data-i18n="visionBody">
                To be a reference organization in the promotion of well-being for vulnerable people,
                especially children, through awareness, training, psychosocial support, and advocacy.
              </p>
            </article>
            <article class="card" data-reveal>
              <h2 data-i18n="missionCardTitle">Mission</h2>
              <p data-i18n="missionCardBody">
                To contribute actively to the flourishing of vulnerable people through awareness
                campaigns, training workshops, psychosocial support, economic assistance, and
                advocacy for fundamental rights.
              </p>
            </article>
          </div>
          <div class="grid three page-card-grid">
            <article class="card" data-reveal><h2 data-i18n="educationTitle">Education</h2><p data-i18n="educationBody">Create inclusive learning opportunities and reinforce essential learning skills for vulnerable children.</p></article>
            <article class="card" data-reveal><h2 data-i18n="healthTitle">Health and well-being</h2><p data-i18n="healthBody">Improve access to care through prevention, awareness, and tailored psychosocial support.</p></article>
            <article class="card" data-reveal><h2 data-i18n="trainingTitle">Professional training</h2><p data-i18n="trainingBody">Build vocational, technical, and social skills for autonomy and socio-economic integration.</p></article>
            <article class="card" data-reveal><h2 data-i18n="womenTitle">Women and children</h2><p data-i18n="womenBody">Support protection, empowerment, education, and community development initiatives.</p></article>
            <article class="card" data-reveal><h2 data-i18n="environmentTitle">Environment</h2><p data-i18n="environmentBody">Promote eco-responsible practices, environmental education, and local climate initiatives.</p></article>
            <article class="card" data-reveal><h2 data-i18n="equalityTitle">Gender equality</h2><p data-i18n="equalityBody">Reduce gender gaps through awareness, training, advocacy, and empowerment.</p></article>
          </div>
        </div>
      </section>
    `
  },
  "team-founders": {
    title: "The founders",
    titleKey: "pageTitleFounders",
    html: `
      <section class="section page-section" id="page-team-founders">
        <div class="container">
          <div class="section-head" data-reveal>
            <p class="section-kicker" data-i18n="teamKicker">Our Team</p>
            <h1 data-i18n="foundersPageTitle">The founders guiding WCA's mission.</h1>
            <p class="section-lead" data-i18n="foundersPageLead">
              Wisdom Children Association was founded by a small group of committed leaders who
              turned a shared concern for vulnerable children and families into organized field action.
            </p>
          </div>
          <div class="grid three team-founder-grid">
            <article class="card team-founder-card" data-reveal>
              <span class="team-role" data-i18n="founderRole">Founder</span>
              <h2>Ndayishimiye Ismail</h2>
              <p data-i18n="founderBody1">Supports the association's vision, field direction, and community-centered action.</p>
            </article>
            <article class="card team-founder-card" data-reveal>
              <span class="team-role" data-i18n="founderRole">Founder</span>
              <h2>Charlene Bishagari</h2>
              <p data-i18n="founderBody2">Helps guide WCA's humanitarian commitment, outreach, and care for vulnerable families.</p>
            </article>
            <article class="card team-founder-card" data-reveal>
              <span class="team-role" data-i18n="founderRole">Founder</span>
              <h2>Grace Batende</h2>
              <p data-i18n="founderBody3">Contributes to WCA's values of empathy, transparency, dignity, and practical service.</p>
            </article>
          </div>
        </div>
      </section>
    `
  },
  "team-coordinators": {
    title: "Coordinators",
    titleKey: "pageTitleCoordinators",
    html: `
      <section class="section page-section" id="page-team-coordinators">
        <div class="container">
          <div class="partners-hero" data-reveal>
            <div>
              <p class="section-kicker" data-i18n="teamKicker">Our Team</p>
              <h1 data-i18n="coordinatorsPageTitle">Coordinators and field supporters moving the mission forward.</h1>
              <p class="section-lead" data-i18n="coordinatorsPageLead">
                WCA's partner network connects trusted field supporters in East Africa with diaspora
                members and allies abroad. Together, they help identify needs, coordinate activities,
                mobilize donations, and keep the association close to the communities it serves.
              </p>
            </div>
            <dl class="partner-summary">
              <div><dt>19</dt><dd data-i18n="summaryPartners">listed coordinators</dd></div>
              <div><dt>4</dt><dd data-i18n="summaryLocations">support locations</dd></div>
              <div><dt>3</dt><dd data-i18n="summaryRegions">regions connected</dd></div>
            </dl>
          </div>
          <div class="partners-grid">
            <article class="partner-card modern-partner-card" data-reveal><div class="partner-card-head"><span class="partner-pin">US</span><div><p class="partner-location">Virginia, United States</p><h2 data-i18n="partnersCount8">8</h2></div></div><ul class="partner-list"><li>Aimerance FATUMA Fariala</li><li>BABONYE Prince</li><li>Elisabeth SAKINA</li><li>Grace BATENDE</li><li>NABUHAMBA Busare</li><li>NTAKIRUTIMANA Isaac</li><li>Salima KABWE</li><li>Sandra BISHAGARI</li></ul></article>
            <article class="partner-card modern-partner-card" data-reveal><div class="partner-card-head"><span class="partner-pin">BI</span><div><p class="partner-location">Bujumbura, Burundi</p><h2 data-i18n="partnersCount6">8</h2></div></div><ul class="partner-list"><li>BIZIMANA Grace</li><li>ITANGAMAHORO Emelyne</li><li>KIZAMBA Maurice</li><li>IRAKOZE Lucie</li><li>Mathilde KOMBO</li><li>UWIMANA Prospere</li><li>Kerene Salma</li><li>Wivine Grazia</li></ul></article>
            <article class="partner-card modern-partner-card" data-reveal><div class="partner-card-head"><span class="partner-pin">AE</span><div><p class="partner-location">Dubai, United Arab Emirates</p><h2 data-i18n="partnersCount2">2</h2></div></div><ul class="partner-list"><li>Arnold SAKUBU</li><li>SIBOMANA Puis</li></ul></article>
            <article class="partner-card modern-partner-card" data-reveal><div class="partner-card-head"><span class="partner-pin">CD</span><div><p class="partner-location">Uvira, DR Congo</p><h2 data-i18n="partnersCount1">1</h2></div></div><ul class="partner-list"><li>LUBANDA Junior Emmanuel</li></ul></article>
          </div>
        </div>
      </section>
    `
  },
  impact: {
    title: "Impact",
    titleKey: "pageTitleImpact",
    html: `
      <section class="section page-section" id="page-impact">
        <div class="container impact-page-layout">
          <div class="section-head narrow" data-reveal>
            <p class="section-kicker" data-i18n="impactKicker">Impact</p>
            <h1 data-i18n="impactPageTitle">Turning field action into measurable change.</h1>
            <p class="section-lead" data-i18n="impactPageLead">
              WCA measures impact by looking at what changes for children and families after each
              activity: whether pupils return to school with the right supplies, whether families
              receive timely food and hygiene support, whether vulnerable people feel accompanied,
              and whether local partners can respond faster the next time a community need appears.
              Each public update should connect photos, dates, locations, beneficiary counts, and
              follow-up notes so supporters can see both the human story and the evidence behind it.
            </p>
          </div>
          <div class="impact-gallery-wrap" data-reveal>
            <div class="event-gallery impact-gallery" aria-label="Impact photos">
              <picture class="event-main"><source srcset="assets/images/february-2026.webp" type="image/webp" /><img src="assets/images/february-2026.jpg" alt="WCA field team with children after a support activity" width="1200" height="904" loading="lazy" /></picture>
              <picture><source srcset="assets/images/event-september-06-2025-1.webp" type="image/webp" /><img src="assets/images/event-september-06-2025-1.jpg" alt="Children raising school kits after a WCA distribution" width="1000" height="750" loading="lazy" /></picture>
              <picture><source srcset="assets/images/event-december-2025-1.webp" type="image/webp" /><img src="assets/images/event-december-2025-1.jpg" alt="Families gathered after food support in Kyaka II" width="1000" height="666" loading="lazy" /></picture>
              <picture><source srcset="assets/images/event-april-2026-2.webp" type="image/webp" /><img src="assets/images/event-april-2026-2.jpg" alt="Food and hygiene support prepared for families" width="1000" height="819" loading="lazy" /></picture>
              <picture><source srcset="assets/images/event-september-17-2025-1.webp" type="image/webp" /><img src="assets/images/event-september-17-2025-1.jpg" alt="Children and WCA team after a school kit distribution" width="1000" height="1000" loading="lazy" /></picture>
            </div>
          </div>
        </div>
      </section>
    `
  },
  contact: {
    title: "Contact",
    titleKey: "pageTitleContact",
    html: `
      <section class="contact-page" id="contact-page">
        <div class="contact-hero-panel">
          <div class="container"></div>
        </div>
        <div class="container contact-layout">
          <form class="contact-message-card" data-contact-form data-reveal>
            <h2 data-i18n="contactFormTitle">Send Us A Message</h2>
            <div class="field">
              <label for="contactName" data-i18n="contactName">Your name</label>
              <input id="contactName" name="name" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="contactEmail" data-i18n="contactEmail">Your email</label>
              <input id="contactEmail" name="email" type="email" autocomplete="email" required />
            </div>
            <div class="field">
              <label for="contactSubject" data-i18n="contactSubject">Subject</label>
              <input id="contactSubject" name="subject" required />
            </div>
            <div class="field">
              <label for="contactMessage" data-i18n="contactMessage">Your message</label>
              <textarea id="contactMessage" name="message" required></textarea>
            </div>
            <button class="button gold" type="submit" data-i18n="contactSubmit">Submit</button>
            <p class="form-status" data-contact-status aria-live="polite"></p>
          </form>
          <aside class="contact-info-panel" data-reveal>
            <h2 data-i18n="socialHeading">Follow us on social media!</h2>
            <div class="social-links" aria-label="WCA social media">
              <a class="social-button facebook" href="https://www.facebook.com/share/1DPWRUYkVp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${socialIcons.facebook}</a>
              <a class="social-button x" href="https://x.com/wisdomchildrenf?s=11" target="_blank" rel="noopener noreferrer" aria-label="X">${socialIcons.x}</a>
              <a class="social-button instagram" href="https://www.instagram.com/wcf_wisdomchildrenfoundation?igsh=MXExdnRiYnFnbDNoeg%3D%3D&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${socialIcons.instagram}</a>
              <a class="social-button youtube" href="https://youtube.com/@wisdomchildrensfoundation?si=_NR7_JYFUSMd8MgG" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${socialIcons.youtube}</a>
              <a class="social-button tiktok" href="https://www.tiktok.com/@wisdomcf1?_r=1&amp;_t=ZT-96gjAV61JcL" target="_blank" rel="noopener noreferrer" aria-label="TikTok">${socialIcons.tiktok}</a>
            </div>
            <div class="contact-detail">
              <h3 data-i18n="visitUs">Visit Us</h3>
              <p>Bujumbura, Burundi</p>
              <iframe
                class="contact-map"
                title="Google map showing Bujumbura, Burundi"
                src="https://www.google.com/maps?q=Bujumbura%2C%20Burundi&amp;output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="contact-detail">
              <h3 data-i18n="emailUs">Email Us</h3>
              <p class="contact-line"><span class="footer-contact-icon" aria-hidden="true">${contactIcons.mail}</span><a href="mailto:wisdomchildrenf@gmail.com">wisdomchildrenf@gmail.com</a></p>
            </div>
            <div class="contact-detail">
              <h3 data-i18n="callUs">Give Us a Call</h3>
              <p class="contact-lines">
                <span class="contact-line"><span class="footer-contact-icon" aria-hidden="true">${contactIcons.phone}</span><a href="tel:+25762869829">+(257) 6286 9829</a></span>
                <span class="contact-line"><span class="footer-contact-icon" aria-hidden="true">${contactIcons.phone}</span><a href="tel:+18043162849">+1 (804) 316-2849</a></span>
              </p>
            </div>
          </aside>
        </div>
        <div class="container contact-faq" data-reveal>
          <h2 data-i18n="faqTitle">Frequently Asked Questions</h2>
          <div class="faq-list">
            <details>
              <summary><span aria-hidden="true">+</span><strong data-i18n="faqQuestion1">How can I contact Wisdom Children Association?</strong></summary>
              <p data-i18n="faqAnswer1">You can email WCA directly at wisdomchildrenf@gmail.com or call either listed phone number.</p>
            </details>
            <details>
              <summary><span aria-hidden="true">+</span><strong data-i18n="faqQuestion2">How can I become a member?</strong></summary>
              <p data-i18n="faqAnswer2">Use the Circle of Friends membership form on the homepage. It prepares an email you can review and send to WCA.</p>
            </details>
            <details>
              <summary><span aria-hidden="true">+</span><strong data-i18n="faqQuestion3">How can I donate?</strong></summary>
              <p data-i18n="faqAnswer3">Use the Donate button to support WCA through the official GoFundMe or PayPal donation links.</p>
            </details>
            <details>
              <summary><span aria-hidden="true">+</span><strong data-i18n="faqQuestion4">Where does WCA work?</strong></summary>
              <p data-i18n="faqAnswer4">WCA documents field actions and planned work across Burundi, Rwanda, Uganda, and DR Congo.</p>
            </details>
            <details>
              <summary><span aria-hidden="true">+</span><strong data-i18n="faqQuestion5">How can I stay informed?</strong></summary>
              <p data-i18n="faqAnswer5">Subscribe for updates in the footer or follow WCA through the social media links on this page.</p>
            </details>
          </div>
        </div>
      </section>
    `
  }
};

Object.entries(programPages).forEach(([key, program]) => {
  pages[key] = {
    title: program.title,
    titleKey: program.titleKey,
    html: renderProgramPage(program)
  };
});

Object.entries(countryViews).forEach(([key, country]) => {
  pages[key] = {
    title: `${country === "DR Congo" ? "DR. Congo" : country} achievements`,
    titleKey: {
      Burundi: "achievementsBurundiTitle",
      Rwanda: "achievementsRwandaTitle",
      Uganda: "achievementsUgandaTitle",
      "DR Congo": "achievementsDrCongoTitle"
    }[country],
    html: renderAchievements(country)
  };
});

const activePage = pages[requestedView] ? requestedView : "who-we-are";
const page = pages[activePage];

if (pageRoot) {
  document.body.dataset.pageTitle = page.title;
  if (page.titleKey) {
    document.body.dataset.pageTitleKey = page.titleKey;
  }
  document.title = `${page.title} | Wisdom Children Association`;
  pageRoot.innerHTML = page.html;
}

document.querySelectorAll(`[data-page-link="${activePage}"]`).forEach((link) => {
  link.setAttribute("aria-current", "page");
});

const currentGroup = {
  "who-we-are": "navAbout",
  mission: "navAbout",
  "education-school-kits": "navPrograms",
  "humanitarian-relief": "navPrograms",
  "community-resilience": "navPrograms",
  "team-founders": "navTeam",
  "team-coordinators": "navTeam",
  "achievements-burundi": "navAchievements",
  "achievements-rwanda": "navAchievements",
  "achievements-uganda": "navAchievements",
  "achievements-dr-congo": "navAchievements"
}[activePage];

if (currentGroup) {
  document.querySelector(`[data-nav-key="${currentGroup}"]`)?.setAttribute("aria-current", "page");
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Website contact").trim();
    const message = String(formData.get("message") || "").trim();
    const status = contactForm.querySelector("[data-contact-status]");

    const body = [
      "Dear Wisdom Children Association team,",
      "",
      message,
      "",
      "Sender details:",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Sent from the Wisdom Children Association website."
    ].join("\n");

    const mailto = new URL("mailto:wisdomchildrenf@gmail.com");
    mailto.searchParams.set("subject", `Website message: ${subject}`);
    mailto.searchParams.set("body", body);

    if (status) {
      status.textContent =
        window.wcaGetLanguageText?.("openingContactEmail") ||
        "Opening a prepared email message for your review.";
    }
    window.location.href = mailto.toString();
  });
}
