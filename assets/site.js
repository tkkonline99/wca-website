const navMenu = document.querySelector("[data-nav-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navDropdowns = [...document.querySelectorAll("[data-nav-dropdown]")];

function closeNavDropdowns(exceptDropdown) {
  navDropdowns.forEach((dropdown) => {
    if (dropdown === exceptDropdown) return;
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-nav-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
  });
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      closeNavDropdowns();
    }
  });
}

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector("[data-nav-dropdown-toggle]");
  if (!(toggle instanceof HTMLButtonElement)) return;

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = !dropdown.classList.contains("is-open");
    closeNavDropdowns(dropdown);
    dropdown.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
});

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element) || !event.target.closest("[data-nav-dropdown]")) {
    closeNavDropdowns();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavDropdowns();
  }
});

const languageSelect = document.querySelector("[data-language-select]");

const languageText = {
  en: {
    title: "Wisdom Children Association | Acting for Well-being. Building the Future.",
    description:
      "Wisdom Children Association supports vulnerable children, women, families, and communities across East Africa through education, health, psychosocial support, advocacy, and humanitarian assistance.",
    skip: "Skip to content",
    tagline: "Acting for well-being",
    menuOpen: "Open menu",
    chooseLanguage: "Choose language",
    navAbout: "About",
    navMission: "Mission",
    navPrograms: "Programs",
    navAchievements: "Achievements",
    navPartners: "Partners",
    navImpact: "Impact",
    navDonate: "Donate",
    navContact: "Contact",
    donate: "Donate",
    heroLead:
      "Supporting vulnerable children and families across East Africa through education, health, relief, and community resilience.",
    donateGofundme: "Donate on GoFundMe",
    donatePaypal: "Donate by PayPal or Card",
    donatePaypalLong: "Donate by PayPal, Debit, or Credit Card",
    joinCircle: "Join the Circle of Friends",
    statCountries: "countries of intervention",
    statActions: "documented field actions",
    statPupils: "pupils supported with school kits",
    statCalendar: "program calendar ready",
    aboutKicker: "Who we are",
    aboutMissionMenu: "Our Mission",
    aboutTitle: "A community of action for children, dignity, and resilience.",
    aboutLead:
      "Wisdom Children Association is a not-for-profit humanitarian association founded by Ndayishimiye Ismail, Charlene Bishagari, and Grace Batende after a simple and painful observation: too many people are left behind.",
    foundedAbout: "Founded 1 April 2025 in East Africa.",
    aboutBody:
      "Driven by empathy, solidarity, and social justice, the association turns compassion into concrete field action across education, healthcare, psychosocial support, economic empowerment, and community development.",
    governanceTitle: "Governance and accountability",
    governanceBody:
      "WCA is led by a committed leadership team guided by transparency, accountability, and integrity. Donations are directed to traceable field action and community needs.",
    missionKicker: "Mission, vision, objectives",
    missionTitle: "We refuse to look away from vulnerability.",
    missionLead:
      "Vulnerability can affect any of us through health crises, economic shocks, climate disasters, conflict, or psychological trauma. WCA works so people can rediscover hope, dignity, and a sense of belonging.",
    visionTitle: "Vision",
    visionBody:
      "To be a reference organization in the promotion of well-being for vulnerable people, especially children, through awareness, training, psychosocial support, and advocacy.",
    missionCardTitle: "Mission",
    missionCardBody:
      "To contribute actively to the flourishing of vulnerable people through awareness campaigns, training workshops, psychosocial support, economic assistance, and advocacy for fundamental rights.",
    educationTitle: "Education",
    educationBody:
      "Create inclusive learning opportunities and reinforce essential learning skills for vulnerable children.",
    healthTitle: "Health and well-being",
    healthBody: "Improve access to care through prevention, awareness, and tailored psychosocial support.",
    trainingTitle: "Professional training",
    trainingBody:
      "Build vocational, technical, and social skills for autonomy and socio-economic integration.",
    womenTitle: "Women and children",
    womenBody: "Support protection, empowerment, education, and community development initiatives.",
    environmentTitle: "Environment",
    environmentBody: "Promote eco-responsible practices, environmental education, and local climate initiatives.",
    equalityTitle: "Gender equality",
    equalityBody: "Reduce gender gaps through awareness, training, advocacy, and empowerment.",
    programsKicker: "Programs",
    programsTitle: "Upcoming field actions and long-term projects.",
    programsLead:
      "The 2026 program calendar focuses on agriculture, vocational training, language learning, food assistance, climate awareness, and year-end support for vulnerable children.",
    programEducationTitle: "Education and school kits",
    programEducationBody:
      "School supplies, learning support, and inclusive opportunities for vulnerable pupils.",
    programReliefTitle: "Humanitarian relief",
    programReliefBody:
      "Food and non-food assistance for families affected by poverty, conflict, and displacement.",
    programCommunityTitle: "Community resilience",
    programCommunityBody: "Awareness, psychosocial support, skills development, and advocacy for lasting change.",
    plannedActions: "2026 planned actions",
    date: "Date",
    location: "Location",
    action: "Action",
    areasKicker: "Areas of intervention",
    areasTitle: "Active across East Africa.",
    areasLead:
      "WCA operates across Burundi, Democratic Republic of Congo, Rwanda, and Uganda, with future projects including Wisdom School International in 2028 and an orphanage in 2030.",
    achievementsKicker: "Achievements",
    achievementsTitle: "Documented field actions from 2025 to 2026.",
    achievementsLead:
      "These actions were assembled from WCA documents, notes, and original field photos in the project folder.",
    filterAll: "All actions",
    partnersKicker: "Partners",
    partnersTitle: "Partners and field supporters by location.",
    partnersLead:
      "WCA's partner network connects local field action in East Africa with supporters in Burundi, DR Congo, the United States, and the United Arab Emirates.",
    impactKicker: "Impact",
    impactTitle: "Impact indicators under active verification.",
    impactLead:
      "WCA tracks field indicators to understand where programmes are improving access, participation, and resilience. Public reports should include location, dates, sample size, and measurement method before figures are presented as verified impact.",
    impactCardTitle: "Planning indicators to verify",
    accountabilityKicker: "Trust and accountability",
    accountabilityTitle: "Clear governance, reporting, and donor follow-up.",
    accountabilityLead:
      "Donors should be able to understand who leads WCA, how decisions are made, how funds are tracked, and when public reports will be available.",
    donateKicker: "Donate",
    donateTitle: "Support our action today.",
    donateBody:
      "Your donation helps fund school kits, healthcare, vocational training, food distribution, and protection for vulnerable children, women, and families.",
    becomeMember: "Become a member",
    fundsTitle: "How funds are used",
    fundsBody:
      "Education supplies, food relief, healthcare access, psychosocial support, and vocational training.",
    paymentTitle: "Payment safety",
    paymentBody: "Payments are handled by GoFundMe or PayPal. This website does not collect card details.",
    transparencyTitle: "Transparency",
    transparencyBody:
      "Donation links are official WCA links and public reports should be updated as projects are completed.",
    circleKicker: "Circle of Friends",
    circleTitle: "An engagement that transforms lives.",
    circleLead:
      "The Circle of Friends brings together people who personally commit to humanitarian action. Members support field teams responding to poverty, conflict, and natural disasters.",
    circleBody:
      "To join, make a donation of at least 5,000 francs per year to Wisdom Children Association and send a membership application to the team.",
    applyMembership: "Apply for membership",
    membershipKicker: "Membership application",
    membershipTitle: "Join the Circle of Friends.",
    membershipLead:
      "This static website prepares an email to WCA so no personal data is stored by the website itself. A secure form endpoint can be connected later if WCA chooses a host with form handling.",
    fullName: "Full name",
    fullNamePlaceholder: "Your full legal name",
    emailAddress: "Email address",
    emailPlaceholder: "your@email.com",
    countryResidence: "Country of residence",
    selectCountry: "Select your country",
    phoneWhatsapp: "Phone / WhatsApp",
    phoneDefault: "Select a country to see the required phone format.",
    participate: "How would you like to participate?",
    annualMember: "Annual member",
    volunteer: "Volunteer",
    partner: "Partner",
    donor: "Donor",
    other: "Other",
    message: "Message",
    messagePlaceholder: "Tell us why you want to join",
    prepareMembership: "Prepare membership email",
    policiesKicker: "Trust and policies",
    policiesTitle: "Clear public information before launch.",
    policiesLead:
      "These policies make the website safer to publish while WCA prepares formal legal pages, annual reports, and a secure backend if needed.",
    privacy: "Privacy policy",
    donationPolicy: "Donation policy",
    terms: "Terms of use",
    footerBody:
      "A humanitarian community created to promote the well-being of vulnerable people, especially children, through awareness, training, psychosocial support, and advocacy.",
    receiveUpdates: "Receive updates",
    newsletterPlaceholder: "Your email address",
    subscribe: "Subscribe",
    followShare: "Follow and share",
    copyright: "© 2026 Wisdom Children Association. All rights reserved.",
    openingMembershipEmail: "Opening a prepared membership email for your review.",
    openingNewsletterEmail: "Opening a prepared subscription email for your review."
  },
  fr: {
    title: "Wisdom Children Association | Agir pour le bien-être. Construire l'avenir.",
    description:
      "Wisdom Children Association soutient les enfants, femmes, familles et communautés vulnérables en Afrique de l'Est par l'éducation, la santé, le soutien psychosocial, le plaidoyer et l'aide humanitaire.",
    skip: "Aller au contenu",
    tagline: "Agir pour le bien-être",
    menuOpen: "Ouvrir le menu",
    chooseLanguage: "Choisir la langue",
    navAbout: "À propos",
    navMission: "Mission",
    navPrograms: "Programmes",
    navAchievements: "Réalisations",
    navPartners: "Partenaires",
    navImpact: "Impact",
    navDonate: "Donner",
    navContact: "Contact",
    donate: "Donner",
    heroLead:
      "Soutenir les enfants et les familles vulnérables en Afrique de l'Est par l'éducation, la santé, l'aide humanitaire et la résilience communautaire.",
    donateGofundme: "Donner sur GoFundMe",
    donatePaypal: "Donner par PayPal ou carte",
    donatePaypalLong: "Donner par PayPal, débit ou crédit",
    joinCircle: "Rejoindre le Cercle des Amis",
    statCountries: "pays d'intervention",
    statActions: "actions de terrain documentées",
    statPupils: "élèves soutenus avec des kits scolaires",
    statCalendar: "calendrier du programme prêt",
    aboutKicker: "Qui nous sommes",
    aboutMissionMenu: "Notre mission",
    aboutTitle: "Une communauté d'action pour les enfants, la dignité et la résilience.",
    aboutLead:
      "Wisdom Children Association est une association humanitaire sans but lucratif fondée par Ndayishimiye Ismail, Charlene Bishagari et Grace Batende après un constat simple et douloureux : trop de personnes sont laissées de côté.",
    foundedAbout: "Fondée le 1 avril 2025 en Afrique de l'Est.",
    aboutBody:
      "Guidée par l'empathie, la solidarité et la justice sociale, l'association transforme la compassion en actions concrètes dans l'éducation, la santé, le soutien psychosocial, l'autonomisation économique et le développement communautaire.",
    governanceTitle: "Gouvernance et redevabilité",
    governanceBody:
      "WCA est dirigée par une équipe engagée guidée par la transparence, la redevabilité et l'intégrité. Les dons sont orientés vers des actions traçables et les besoins communautaires.",
    missionKicker: "Mission, vision, objectifs",
    missionTitle: "Nous refusons de détourner le regard de la vulnérabilité.",
    missionLead:
      "La vulnérabilité peut toucher chacun de nous à travers les crises sanitaires, économiques, climatiques, les conflits ou les traumatismes psychologiques. WCA aide les personnes à retrouver espoir, dignité et appartenance.",
    visionTitle: "Vision",
    visionBody:
      "Devenir une organisation de référence pour la promotion du bien-être des personnes vulnérables, en particulier les enfants, grâce à la sensibilisation, la formation, le soutien psychosocial et le plaidoyer.",
    missionCardTitle: "Mission",
    missionCardBody:
      "Contribuer activement à l'épanouissement des personnes vulnérables par des campagnes de sensibilisation, des formations, un soutien psychosocial, une aide économique et la défense des droits fondamentaux.",
    educationTitle: "Éducation",
    educationBody:
      "Créer des opportunités d'apprentissage inclusives et renforcer les compétences essentielles des enfants vulnérables.",
    healthTitle: "Santé et bien-être",
    healthBody: "Améliorer l'accès aux soins par la prévention, la sensibilisation et un soutien psychosocial adapté.",
    trainingTitle: "Formation professionnelle",
    trainingBody:
      "Développer les compétences professionnelles, techniques et sociales pour l'autonomie et l'intégration socio-économique.",
    womenTitle: "Femmes et enfants",
    womenBody: "Soutenir la protection, l'autonomisation, l'éducation et le développement communautaire.",
    environmentTitle: "Environnement",
    environmentBody: "Promouvoir les pratiques écoresponsables, l'éducation environnementale et les initiatives climatiques locales.",
    equalityTitle: "Égalité de genre",
    equalityBody: "Réduire les écarts de genre par la sensibilisation, la formation, le plaidoyer et l'autonomisation.",
    programsKicker: "Programmes",
    programsTitle: "Actions de terrain à venir et projets à long terme.",
    programsLead:
      "Le calendrier 2026 met l'accent sur l'agriculture, la formation professionnelle, l'apprentissage des langues, l'aide alimentaire, la sensibilisation climatique et le soutien de fin d'année aux enfants vulnérables.",
    programEducationTitle: "Éducation et kits scolaires",
    programEducationBody: "Fournitures scolaires, soutien à l'apprentissage et possibilités inclusives pour les élèves vulnérables.",
    programReliefTitle: "Aide humanitaire",
    programReliefBody: "Aide alimentaire et non alimentaire pour les familles touchées par la pauvreté, les conflits et le déplacement.",
    programCommunityTitle: "Résilience communautaire",
    programCommunityBody: "Sensibilisation, soutien psychosocial, développement des compétences et plaidoyer pour un changement durable.",
    plannedActions: "Actions prévues en 2026",
    date: "Date",
    location: "Lieu",
    action: "Action",
    areasKicker: "Zones d'intervention",
    areasTitle: "Active en Afrique de l'Est.",
    areasLead:
      "WCA intervient au Burundi, en République démocratique du Congo, au Rwanda et en Ouganda, avec de futurs projets comme Wisdom School International en 2028 et un orphelinat en 2030.",
    achievementsKicker: "Réalisations",
    achievementsTitle: "Actions de terrain documentées de 2025 à 2026.",
    achievementsLead:
      "Ces actions ont été assemblées à partir des documents, notes et photos originales du dossier du projet.",
    filterAll: "Toutes les actions",
    partnersKicker: "Partenaires",
    partnersTitle: "Partenaires et soutiens de terrain par lieu.",
    partnersLead:
      "Le réseau de WCA relie l'action locale en Afrique de l'Est aux soutiens du Burundi, de la RDC, des États-Unis et des Émirats arabes unis.",
    impactKicker: "Impact",
    impactTitle: "Indicateurs d'impact en cours de vérification.",
    impactLead:
      "WCA suit des indicateurs de terrain pour comprendre comment les programmes améliorent l'accès, la participation et la résilience. Les rapports publics doivent préciser le lieu, les dates, l'échantillon et la méthode de mesure.",
    impactCardTitle: "Indicateurs à vérifier",
    accountabilityKicker: "Confiance et redevabilité",
    accountabilityTitle: "Gouvernance claire, rapports et suivi des donateurs.",
    accountabilityLead:
      "Les donateurs doivent comprendre qui dirige WCA, comment les décisions sont prises, comment les fonds sont suivis et quand les rapports publics seront disponibles.",
    donateKicker: "Donner",
    donateTitle: "Soutenez notre action aujourd'hui.",
    donateBody:
      "Votre don finance les kits scolaires, les soins de santé, la formation professionnelle, l'aide alimentaire et la protection des enfants, femmes et familles vulnérables.",
    becomeMember: "Devenir membre",
    fundsTitle: "Utilisation des fonds",
    fundsBody: "Fournitures scolaires, aide alimentaire, accès aux soins, soutien psychosocial et formation professionnelle.",
    paymentTitle: "Sécurité des paiements",
    paymentBody: "Les paiements sont traités par GoFundMe ou PayPal. Ce site ne collecte aucune donnée bancaire.",
    transparencyTitle: "Transparence",
    transparencyBody: "Les liens de don sont officiels et les rapports publics doivent être mis à jour après les projets.",
    circleKicker: "Cercle des Amis",
    circleTitle: "Un engagement qui transforme des vies.",
    circleLead:
      "Le Cercle des Amis réunit des personnes qui s'engagent personnellement dans l'action humanitaire.",
    circleBody:
      "Pour rejoindre, faites un don d'au moins 5 000 francs par an à Wisdom Children Association et envoyez une demande d'adhésion.",
    applyMembership: "Demander l'adhésion",
    membershipKicker: "Demande d'adhésion",
    membershipTitle: "Rejoindre le Cercle des Amis.",
    membershipLead:
      "Ce site statique prépare un email à WCA afin qu'aucune donnée personnelle ne soit stockée par le site.",
    fullName: "Nom complet",
    fullNamePlaceholder: "Votre nom légal complet",
    emailAddress: "Adresse email",
    emailPlaceholder: "votre@email.com",
    countryResidence: "Pays de résidence",
    selectCountry: "Sélectionnez votre pays",
    phoneWhatsapp: "Téléphone / WhatsApp",
    phoneDefault: "Sélectionnez un pays pour voir le format requis.",
    participate: "Comment souhaitez-vous participer ?",
    annualMember: "Membre annuel",
    volunteer: "Bénévole",
    partner: "Partenaire",
    donor: "Donateur",
    other: "Autre",
    message: "Message",
    messagePlaceholder: "Dites-nous pourquoi vous voulez rejoindre",
    prepareMembership: "Préparer l'email d'adhésion",
    policiesKicker: "Confiance et politiques",
    policiesTitle: "Informations publiques claires avant publication.",
    policiesLead: "Ces politiques rendent le site plus sûr pendant que WCA prépare les pages juridiques et les rapports.",
    privacy: "Politique de confidentialité",
    donationPolicy: "Politique de dons",
    terms: "Conditions d'utilisation",
    footerBody:
      "Une communauté humanitaire créée pour promouvoir le bien-être des personnes vulnérables, surtout les enfants.",
    receiveUpdates: "Recevoir les nouvelles",
    newsletterPlaceholder: "Votre adresse email",
    subscribe: "S'abonner",
    followShare: "Suivre et partager",
    copyright: "© 2026 Wisdom Children Association. Tous droits réservés.",
    openingMembershipEmail: "Ouverture d'un email d'adhésion préparé pour vérification.",
    openingNewsletterEmail: "Ouverture d'un email d'abonnement préparé pour vérification."
  },
  sw: {
    title: "Wisdom Children Association | Kutenda kwa ustawi. Kujenga siku zijazo.",
    description:
      "Wisdom Children Association inasaidia watoto, wanawake, familia na jamii zilizo katika mazingira magumu Afrika Mashariki kupitia elimu, afya, msaada wa kisaikolojia, utetezi na misaada ya kibinadamu.",
    skip: "Ruka hadi kwenye maudhui",
    tagline: "Kutenda kwa ustawi",
    menuOpen: "Fungua menyu",
    chooseLanguage: "Chagua lugha",
    navAbout: "Kuhusu",
    navMission: "Dhamira",
    navPrograms: "Programu",
    navAchievements: "Mafanikio",
    navPartners: "Washirika",
    navImpact: "Athari",
    navDonate: "Changia",
    navContact: "Mawasiliano",
    donate: "Changia",
    heroLead:
      "Kusaidia watoto na familia zilizo katika mazingira magumu Afrika Mashariki kupitia elimu, afya, misaada na uimara wa jamii.",
    donateGofundme: "Changia kupitia GoFundMe",
    donatePaypal: "Changia kwa PayPal au kadi",
    donatePaypalLong: "Changia kwa PayPal, kadi ya benki au mkopo",
    joinCircle: "Jiunge na Circle of Friends",
    statCountries: "nchi za utekelezaji",
    statActions: "shughuli za uwanjani zilizorekodiwa",
    statPupils: "wanafunzi waliopata vifaa vya shule",
    statCalendar: "kalenda ya programu iko tayari",
    aboutKicker: "Sisi ni nani",
    aboutMissionMenu: "Dhamira yetu",
    aboutTitle: "Jamii ya hatua kwa watoto, utu na uimara.",
    aboutLead:
      "Wisdom Children Association ni chama cha kibinadamu kisicho cha faida kilichoanzishwa na Ndayishimiye Ismail, Charlene Bishagari na Grace Batende baada ya kuona kuwa watu wengi wanaachwa nyuma.",
    foundedAbout: "Ilianzishwa 1 Aprili 2025 Afrika Mashariki.",
    aboutBody:
      "Kwa huruma, mshikamano na haki ya kijamii, chama hubadilisha upendo kuwa hatua za moja kwa moja katika elimu, afya, msaada wa kisaikolojia, uwezeshaji wa kiuchumi na maendeleo ya jamii.",
    governanceTitle: "Uongozi na uwajibikaji",
    governanceBody:
      "WCA inaongozwa na timu yenye kujitolea, kwa misingi ya uwazi, uwajibikaji na uadilifu. Michango hupelekwa kwenye mahitaji halisi ya jamii.",
    missionKicker: "Dhamira, maono, malengo",
    missionTitle: "Hatukubali kugeuka mbali na mazingira magumu.",
    missionLead:
      "Mazingira magumu yanaweza kumpata yeyote kupitia migogoro ya afya, uchumi, tabianchi, vita au majeraha ya kisaikolojia. WCA husaidia watu kurejesha matumaini, utu na kujisikia sehemu ya jamii.",
    visionTitle: "Maono",
    visionBody:
      "Kuwa shirika la mfano katika kukuza ustawi wa watu walio katika mazingira magumu, hasa watoto, kupitia uhamasishaji, mafunzo, msaada wa kisaikolojia na utetezi.",
    missionCardTitle: "Dhamira",
    missionCardBody:
      "Kuchangia kikamilifu maendeleo ya watu walio katika mazingira magumu kupitia kampeni za uhamasishaji, warsha za mafunzo, msaada wa kisaikolojia, msaada wa kiuchumi na utetezi wa haki za msingi.",
    educationTitle: "Elimu",
    educationBody: "Kuunda fursa jumuishi za kujifunza na kuimarisha ujuzi muhimu kwa watoto walio katika mazingira magumu.",
    healthTitle: "Afya na ustawi",
    healthBody: "Kuboresha upatikanaji wa huduma kupitia kinga, uhamasishaji na msaada wa kisaikolojia unaofaa.",
    trainingTitle: "Mafunzo ya kitaaluma",
    trainingBody: "Kujenga ujuzi wa ufundi, kiufundi na kijamii kwa ajili ya kujitegemea na kujiunga na uchumi.",
    womenTitle: "Wanawake na watoto",
    womenBody: "Kusaidia ulinzi, uwezeshaji, elimu na mipango ya maendeleo ya jamii.",
    environmentTitle: "Mazingira",
    environmentBody: "Kukuza tabia zinazolinda mazingira, elimu ya mazingira na mipango ya tabianchi ya eneo husika.",
    equalityTitle: "Usawa wa kijinsia",
    equalityBody: "Kupunguza tofauti za kijinsia kupitia uhamasishaji, mafunzo, utetezi na uwezeshaji.",
    programsKicker: "Programu",
    programsTitle: "Shughuli zijazo na miradi ya muda mrefu.",
    programsLead:
      "Kalenda ya 2026 inalenga kilimo, mafunzo ya ufundi, lugha, msaada wa chakula, uhamasishaji wa tabianchi na msaada kwa watoto walio katika mazingira magumu.",
    programEducationTitle: "Elimu na vifaa vya shule",
    programEducationBody: "Vifaa vya shule, msaada wa kujifunza na fursa jumuishi kwa wanafunzi walio katika mazingira magumu.",
    programReliefTitle: "Misaada ya kibinadamu",
    programReliefBody: "Msaada wa chakula na vifaa vingine kwa familia zilizoathiriwa na umaskini, migogoro na uhamisho.",
    programCommunityTitle: "Uimara wa jamii",
    programCommunityBody: "Uhamasishaji, msaada wa kisaikolojia, ukuzaji wa ujuzi na utetezi kwa mabadiliko ya kudumu.",
    plannedActions: "Shughuli zilizopangwa kwa 2026",
    date: "Tarehe",
    location: "Eneo",
    action: "Kitendo",
    areasKicker: "Maeneo ya utekelezaji",
    areasTitle: "Tunafanya kazi Afrika Mashariki.",
    areasLead:
      "WCA inafanya kazi Burundi, Jamhuri ya Kidemokrasia ya Congo, Rwanda na Uganda, huku miradi ya baadaye ikijumuisha Wisdom School International mwaka 2028 na kituo cha watoto yatima mwaka 2030.",
    achievementsKicker: "Mafanikio",
    achievementsTitle: "Shughuli za uwanjani zilizorekodiwa kutoka 2025 hadi 2026.",
    achievementsLead: "Shughuli hizi zilikusanywa kutoka nyaraka, maelezo na picha halisi za mradi.",
    filterAll: "Shughuli zote",
    partnersKicker: "Washirika",
    partnersTitle: "Washirika na wasaidizi wa uwanjani kulingana na eneo.",
    partnersLead:
      "Mtandao wa washirika wa WCA unaunganisha kazi za eneo la Afrika Mashariki na wafuasi walioko Burundi, DR Congo, Marekani na Umoja wa Falme za Kiarabu.",
    impactKicker: "Athari",
    impactTitle: "Viashiria vya athari vinavyothibitishwa.",
    impactLead:
      "WCA hufuatilia viashiria vya uwanjani ili kuelewa maeneo ambayo programu zinaboresha upatikanaji, ushiriki na uimara. Ripoti za umma zinapaswa kuonyesha eneo, tarehe, ukubwa wa sampuli na mbinu ya kupima kabla ya takwimu kutangazwa kama zilizothibitishwa.",
    impactCardTitle: "Viashiria vya mipango vinavyohitaji kuthibitishwa",
    accountabilityKicker: "Uaminifu na uwajibikaji",
    accountabilityTitle: "Uongozi ulio wazi, ripoti na ufuatiliaji wa wafadhili.",
    accountabilityLead:
      "Wafadhili wanapaswa kuelewa nani anaongoza WCA, jinsi maamuzi yanavyofanywa, jinsi fedha zinavyofuatiliwa na lini ripoti za umma zitapatikana.",
    donateKicker: "Changia",
    donateTitle: "Saidia kazi yetu leo.",
    donateBody:
      "Mchango wako husaidia kugharamia vifaa vya shule, huduma za afya, mafunzo, chakula na ulinzi kwa watoto, wanawake na familia zilizo katika mazingira magumu.",
    becomeMember: "Kuwa mwanachama",
    fundsTitle: "Jinsi fedha zinavyotumika",
    fundsBody: "Vifaa vya elimu, msaada wa chakula, upatikanaji wa huduma za afya, msaada wa kisaikolojia na mafunzo ya ufundi.",
    paymentTitle: "Usalama wa malipo",
    paymentBody: "Malipo hushughulikiwa na GoFundMe au PayPal. Tovuti hii haikusanyi taarifa za kadi.",
    transparencyTitle: "Uwazi",
    transparencyBody: "Viungo vya michango ni viungo rasmi vya WCA na ripoti za umma zinapaswa kusasishwa miradi inapokamilika.",
    circleKicker: "Circle of Friends",
    circleTitle: "Ahadi inayobadilisha maisha.",
    circleLead:
      "Circle of Friends huwakutanisha watu wanaojitolea binafsi katika kazi za kibinadamu. Wanachama husaidia timu za uwanjani kukabiliana na umaskini, migogoro na majanga ya asili.",
    circleBody:
      "Ili kujiunga, toa mchango wa angalau faranga 5,000 kwa mwaka kwa Wisdom Children Association na tuma ombi la uanachama kwa timu.",
    applyMembership: "Omba uanachama",
    membershipKicker: "Ombi la uanachama",
    membershipTitle: "Jiunge na Circle of Friends.",
    membershipLead:
      "Tovuti hii tuli huandaa barua pepe kwa WCA ili taarifa binafsi zisihifadhiwe na tovuti yenyewe. Mfumo salama wa fomu unaweza kuunganishwa baadaye ikiwa WCA itachagua mwenyeji wa tovuti mwenye huduma ya fomu.",
    fullName: "Jina kamili",
    fullNamePlaceholder: "Jina lako kamili la kisheria",
    emailAddress: "Barua pepe",
    emailPlaceholder: "barua@yako.com",
    countryResidence: "Nchi unayoishi",
    selectCountry: "Chagua nchi yako",
    phoneWhatsapp: "Simu / WhatsApp",
    phoneDefault: "Chagua nchi ili kuona muundo wa namba unaohitajika.",
    participate: "Ungependa kushiriki vipi?",
    annualMember: "Mwanachama wa mwaka",
    volunteer: "Mjitoleaji",
    partner: "Mshirika",
    donor: "Mfadhili",
    other: "Nyingine",
    message: "Ujumbe",
    messagePlaceholder: "Tuambie kwa nini unataka kujiunga",
    prepareMembership: "Andaa barua pepe ya uanachama",
    policiesKicker: "Uaminifu na sera",
    policiesTitle: "Taarifa wazi za umma kabla ya kuzindua.",
    policiesLead:
      "Sera hizi hufanya tovuti kuwa salama zaidi kuchapishwa wakati WCA inaandaa kurasa rasmi za kisheria, ripoti za mwaka na mfumo salama wa nyuma ikiwa utahitajika.",
    privacy: "Sera ya faragha",
    donationPolicy: "Sera ya michango",
    terms: "Masharti ya matumizi",
    footerBody:
      "Jamii ya kibinadamu iliyoundwa kukuza ustawi wa watu walio katika mazingira magumu, hasa watoto, kupitia uhamasishaji, mafunzo, msaada wa kisaikolojia na utetezi.",
    receiveUpdates: "Pokea taarifa",
    newsletterPlaceholder: "Barua pepe yako",
    subscribe: "Jisajili",
    followShare: "Fuata na shiriki",
    copyright: "© 2026 Wisdom Children Association. Haki zote zimehifadhiwa.",
    openingMembershipEmail: "Inafungua barua pepe ya uanachama iliyoandaliwa kwa ukaguzi wako.",
    openingNewsletterEmail: "Inafungua barua pepe ya kujisajili iliyoandaliwa kwa ukaguzi wako."
  },
  es: {
    title: "Wisdom Children Association | Actuar por el bienestar. Construir el futuro.",
    description:
      "Wisdom Children Association apoya a niños, mujeres, familias y comunidades vulnerables en África Oriental mediante educación, salud, apoyo psicosocial, incidencia y asistencia humanitaria.",
    skip: "Saltar al contenido",
    tagline: "Actuar por el bienestar",
    menuOpen: "Abrir menú",
    chooseLanguage: "Elegir idioma",
    navAbout: "Acerca de",
    navMission: "Misión",
    navPrograms: "Programas",
    navAchievements: "Logros",
    navPartners: "Socios",
    navImpact: "Impacto",
    navDonate: "Donar",
    navContact: "Contacto",
    donate: "Donar",
    heroLead:
      "Apoyamos a niños y familias vulnerables en África Oriental mediante educación, salud, ayuda humanitaria y resiliencia comunitaria.",
    donateGofundme: "Donar en GoFundMe",
    donatePaypal: "Donar por PayPal o tarjeta",
    donatePaypalLong: "Donar por PayPal, débito o crédito",
    joinCircle: "Unirse al Círculo de Amigos",
    statCountries: "países de intervención",
    statActions: "acciones de campo documentadas",
    statPupils: "alumnos apoyados con kits escolares",
    statCalendar: "calendario del programa listo",
    aboutKicker: "Quiénes somos",
    aboutMissionMenu: "Nuestra misión",
    aboutTitle: "Una comunidad de acción para la niñez, la dignidad y la resiliencia.",
    aboutLead:
      "Wisdom Children Association es una asociación humanitaria sin fines de lucro fundada por Ndayishimiye Ismail, Charlene Bishagari y Grace Batende tras observar que demasiadas personas quedan atrás.",
    foundedAbout: "Fundada el 1 de abril de 2025 en África Oriental.",
    aboutBody:
      "Impulsada por la empatía, la solidaridad y la justicia social, la asociación convierte la compasión en acciones concretas en educación, salud, apoyo psicosocial, autonomía económica y desarrollo comunitario.",
    governanceTitle: "Gobernanza y rendición de cuentas",
    governanceBody:
      "WCA está dirigida por un equipo comprometido guiado por la transparencia, la responsabilidad y la integridad. Las donaciones se destinan a acciones trazables y necesidades comunitarias.",
    missionKicker: "Misión, visión, objetivos",
    missionTitle: "Nos negamos a mirar hacia otro lado ante la vulnerabilidad.",
    missionLead:
      "La vulnerabilidad puede afectar a cualquiera por crisis sanitarias, económicas, climáticas, conflictos o traumas psicológicos. WCA ayuda a recuperar esperanza, dignidad y pertenencia.",
    visionTitle: "Visión",
    visionBody:
      "Ser una organización de referencia en la promoción del bienestar de las personas vulnerables, especialmente la niñez, mediante sensibilización, formación, apoyo psicosocial e incidencia.",
    missionCardTitle: "Misión",
    missionCardBody:
      "Contribuir activamente al desarrollo de las personas vulnerables mediante campañas de sensibilización, talleres de formación, apoyo psicosocial, asistencia económica e incidencia por los derechos fundamentales.",
    educationTitle: "Educación",
    educationBody: "Crear oportunidades de aprendizaje inclusivas y reforzar habilidades esenciales para niños vulnerables.",
    healthTitle: "Salud y bienestar",
    healthBody: "Mejorar el acceso a la atención mediante prevención, sensibilización y apoyo psicosocial adaptado.",
    trainingTitle: "Formación profesional",
    trainingBody: "Desarrollar habilidades vocacionales, técnicas y sociales para la autonomía y la integración socioeconómica.",
    womenTitle: "Mujeres y niños",
    womenBody: "Apoyar iniciativas de protección, empoderamiento, educación y desarrollo comunitario.",
    environmentTitle: "Medio ambiente",
    environmentBody: "Promover prácticas responsables, educación ambiental e iniciativas climáticas locales.",
    equalityTitle: "Igualdad de género",
    equalityBody: "Reducir brechas de género mediante sensibilización, formación, incidencia y empoderamiento.",
    programsKicker: "Programas",
    programsTitle: "Próximas acciones de campo y proyectos a largo plazo.",
    programsLead:
      "El calendario 2026 se centra en agricultura, formación profesional, aprendizaje de idiomas, ayuda alimentaria, sensibilización climática y apoyo de fin de año.",
    programEducationTitle: "Educación y kits escolares",
    programEducationBody: "Materiales escolares, apoyo al aprendizaje y oportunidades inclusivas para alumnos vulnerables.",
    programReliefTitle: "Ayuda humanitaria",
    programReliefBody: "Ayuda alimentaria y no alimentaria para familias afectadas por pobreza, conflicto y desplazamiento.",
    programCommunityTitle: "Resiliencia comunitaria",
    programCommunityBody: "Sensibilización, apoyo psicosocial, desarrollo de habilidades e incidencia para un cambio duradero.",
    plannedActions: "Acciones previstas para 2026",
    date: "Fecha",
    location: "Ubicación",
    action: "Acción",
    areasKicker: "Áreas de intervención",
    areasTitle: "Activa en África Oriental.",
    areasLead:
      "WCA trabaja en Burundi, República Democrática del Congo, Ruanda y Uganda, con futuros proyectos como Wisdom School International en 2028 y un orfanato en 2030.",
    achievementsKicker: "Logros",
    achievementsTitle: "Acciones de campo documentadas de 2025 a 2026.",
    achievementsLead: "Estas acciones fueron recopiladas de documentos, notas y fotos originales del proyecto.",
    filterAll: "Todas las acciones",
    partnersKicker: "Socios",
    partnersTitle: "Socios y apoyos de campo por ubicación.",
    partnersLead:
      "La red de socios de WCA conecta la acción local en África Oriental con apoyos en Burundi, RD Congo, Estados Unidos y Emiratos Árabes Unidos.",
    impactKicker: "Impacto",
    impactTitle: "Indicadores de impacto en verificación activa.",
    impactLead:
      "WCA realiza seguimiento de indicadores de campo para entender dónde los programas mejoran el acceso, la participación y la resiliencia. Los informes públicos deben incluir ubicación, fechas, tamaño de muestra y método de medición antes de presentar cifras como impacto verificado.",
    impactCardTitle: "Indicadores de planificación por verificar",
    accountabilityKicker: "Confianza y rendición de cuentas",
    accountabilityTitle: "Gobernanza clara, informes y seguimiento a donantes.",
    accountabilityLead:
      "Los donantes deben poder entender quién dirige WCA, cómo se toman las decisiones, cómo se controlan los fondos y cuándo estarán disponibles los informes públicos.",
    donateKicker: "Donar",
    donateTitle: "Apoya nuestra acción hoy.",
    donateBody:
      "Tu donación financia kits escolares, atención médica, formación profesional, distribución de alimentos y protección para niños, mujeres y familias vulnerables.",
    becomeMember: "Hazte miembro",
    fundsTitle: "Cómo se usan los fondos",
    fundsBody: "Materiales educativos, ayuda alimentaria, acceso a salud, apoyo psicosocial y formación profesional.",
    paymentTitle: "Seguridad de pago",
    paymentBody: "Los pagos son gestionados por GoFundMe o PayPal. Este sitio no recopila datos de tarjetas.",
    transparencyTitle: "Transparencia",
    transparencyBody: "Los enlaces de donación son oficiales de WCA y los informes públicos deben actualizarse al completar los proyectos.",
    circleKicker: "Círculo de Amigos",
    circleTitle: "Un compromiso que transforma vidas.",
    circleLead:
      "El Círculo de Amigos reúne a personas que se comprometen personalmente con la acción humanitaria. Sus miembros apoyan a equipos de campo que responden a pobreza, conflicto y desastres naturales.",
    circleBody:
      "Para unirte, haz una donación de al menos 5.000 francos al año a Wisdom Children Association y envía una solicitud de membresía al equipo.",
    applyMembership: "Solicitar membresía",
    membershipKicker: "Solicitud de membresía",
    membershipTitle: "Únete al Círculo de Amigos.",
    membershipLead:
      "Este sitio estático prepara un email para WCA, por lo que el sitio no almacena datos personales. Más adelante se puede conectar un formulario seguro si WCA elige un alojamiento con gestión de formularios.",
    fullName: "Nombre completo",
    fullNamePlaceholder: "Tu nombre legal completo",
    emailAddress: "Correo electrónico",
    emailPlaceholder: "tu@email.com",
    countryResidence: "País de residencia",
    selectCountry: "Selecciona tu país",
    phoneWhatsapp: "Teléfono / WhatsApp",
    phoneDefault: "Selecciona un país para ver el formato requerido.",
    participate: "¿Cómo te gustaría participar?",
    annualMember: "Miembro anual",
    volunteer: "Voluntario",
    partner: "Socio",
    donor: "Donante",
    other: "Otro",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos por qué quieres unirte",
    prepareMembership: "Preparar email de membresía",
    policiesKicker: "Confianza y políticas",
    policiesTitle: "Información pública clara antes del lanzamiento.",
    policiesLead:
      "Estas políticas hacen que el sitio sea más seguro para publicar mientras WCA prepara páginas legales formales, informes anuales y un backend seguro si fuera necesario.",
    privacy: "Política de privacidad",
    donationPolicy: "Política de donaciones",
    terms: "Términos de uso",
    footerBody:
      "Una comunidad humanitaria creada para promover el bienestar de las personas vulnerables, especialmente la niñez, mediante sensibilización, formación, apoyo psicosocial e incidencia.",
    receiveUpdates: "Recibir novedades",
    newsletterPlaceholder: "Tu correo electrónico",
    subscribe: "Suscribirse",
    followShare: "Seguir y compartir",
    copyright: "© 2026 Wisdom Children Association. Todos los derechos reservados.",
    openingMembershipEmail: "Abriendo un email de membresía preparado para que lo revises.",
    openingNewsletterEmail: "Abriendo un email de suscripción preparado para que lo revises."
  },
  zh: {
    title: "Wisdom Children Association | 为福祉行动，共建未来。",
    description:
      "Wisdom Children Association 通过教育、健康、心理社会支持、倡导和人道援助，支持东非弱势儿童、妇女、家庭和社区。",
    skip: "跳到内容",
    tagline: "为福祉而行动",
    menuOpen: "打开菜单",
    chooseLanguage: "选择语言",
    navAbout: "关于我们",
    navMission: "使命",
    navPrograms: "项目",
    navAchievements: "成果",
    navPartners: "伙伴",
    navImpact: "影响",
    navDonate: "捐助",
    navContact: "联系",
    donate: "捐助",
    heroLead: "通过教育、健康、救援和社区韧性项目，支持东非弱势儿童和家庭。",
    donateGofundme: "通过 GoFundMe 捐助",
    donatePaypal: "通过 PayPal 或银行卡捐助",
    donatePaypalLong: "通过 PayPal、借记卡或信用卡捐助",
    joinCircle: "加入朋友圈",
    statCountries: "服务国家",
    statActions: "已记录的实地行动",
    statPupils: "获得学习用品支持的学生",
    statCalendar: "项目日程已准备",
    aboutKicker: "我们是谁",
    aboutMissionMenu: "我们的使命",
    aboutTitle: "为儿童、尊严和韧性而行动的社区。",
    aboutLead: "Wisdom Children Association 是一个非营利人道主义协会，由 Ndayishimiye Ismail、Charlene Bishagari 和 Grace Batende 创立，因为他们看到太多人被落在后面。",
    foundedAbout: "2025年4月1日成立于东非。",
    aboutBody: "协会以同理心、团结和社会正义为动力，将关怀转化为教育、健康、心理社会支持、经济赋能和社区发展方面的实际行动。",
    governanceTitle: "治理与问责",
    governanceBody: "WCA 由一支致力于透明、问责和诚信的领导团队带领。捐款用于可追踪的实地行动和社区需求。",
    missionKicker: "使命、愿景、目标",
    missionTitle: "我们不会对脆弱处境视而不见。",
    missionLead: "健康、经济、气候、冲突或心理创伤都可能让任何人陷入脆弱。WCA 帮助人们重获希望、尊严和归属感。",
    visionTitle: "愿景",
    visionBody: "通过宣传、培训、心理社会支持和倡导，成为促进弱势群体，特别是儿童福祉的参考性组织。",
    missionCardTitle: "使命",
    missionCardBody: "通过宣传活动、培训工作坊、心理社会支持、经济援助和基本权利倡导，积极促进弱势群体的发展。",
    educationTitle: "教育",
    educationBody: "为弱势儿童创造包容性学习机会，并加强基本学习能力。",
    healthTitle: "健康与福祉",
    healthBody: "通过预防、宣传和有针对性的心理社会支持，改善获得照护的机会。",
    trainingTitle: "职业培训",
    trainingBody: "培养职业、技术和社会技能，支持自主生活和社会经济融入。",
    womenTitle: "妇女和儿童",
    womenBody: "支持保护、赋权、教育和社区发展行动。",
    environmentTitle: "环境",
    environmentBody: "推广负责任的环保实践、环境教育和本地气候行动。",
    equalityTitle: "性别平等",
    equalityBody: "通过宣传、培训、倡导和赋权减少性别差距。",
    programsKicker: "项目",
    programsTitle: "即将开展的实地行动和长期项目。",
    programsLead: "2026 年项目重点包括农业、职业培训、语言学习、食品援助、气候意识以及年末儿童支持。",
    programEducationTitle: "教育和学习用品",
    programEducationBody: "为弱势学生提供学习用品、学习支持和包容性机会。",
    programReliefTitle: "人道救援",
    programReliefBody: "为受贫困、冲突和流离失所影响的家庭提供食品和非食品援助。",
    programCommunityTitle: "社区韧性",
    programCommunityBody: "通过宣传、心理社会支持、技能发展和倡导推动持久改变。",
    plannedActions: "2026 年计划行动",
    date: "日期",
    location: "地点",
    action: "行动",
    areasKicker: "服务区域",
    areasTitle: "活跃于东非。",
    areasLead: "WCA 在布隆迪、刚果民主共和国、卢旺达和乌干达开展工作，并计划于 2028 年建设 Wisdom School International、2030 年建设孤儿院。",
    achievementsKicker: "成果",
    achievementsTitle: "2025 至 2026 年记录的实地行动。",
    achievementsLead: "这些行动来自项目文件、笔记和原始实地照片。",
    filterAll: "全部行动",
    partnersKicker: "伙伴",
    partnersTitle: "按地点列出的伙伴和实地支持者。",
    partnersLead: "WCA 的伙伴网络连接东非本地行动，以及布隆迪、刚果民主共和国、美国和阿拉伯联合酋长国的支持者。",
    impactKicker: "影响",
    impactTitle: "正在核实的影响指标。",
    impactLead:
      "WCA 跟踪实地指标，以了解项目在哪些方面改善了获得服务、参与和韧性。公开报告在将数字作为已验证影响呈现之前，应说明地点、日期、样本量和测量方法。",
    impactCardTitle: "需要核实的规划指标",
    accountabilityKicker: "信任与问责",
    accountabilityTitle: "清晰的治理、报告和捐助者跟进。",
    accountabilityLead: "捐助者应了解谁领导 WCA、如何作出决定、资金如何追踪，以及公开报告何时可用。",
    donateKicker: "捐助",
    donateTitle: "今天支持我们的行动。",
    donateBody: "您的捐助将支持学习用品、医疗服务、职业培训、食品分发以及对弱势儿童、妇女和家庭的保护。",
    becomeMember: "成为会员",
    fundsTitle: "资金用途",
    fundsBody: "教育用品、食品救援、医疗服务、心理社会支持和职业培训。",
    paymentTitle: "支付安全",
    paymentBody: "付款由 GoFundMe 或 PayPal 处理。本网站不收集银行卡信息。",
    transparencyTitle: "透明度",
    transparencyBody: "捐助链接为 WCA 官方链接，公开报告应在项目完成后更新。",
    circleKicker: "朋友圈",
    circleTitle: "改变生命的承诺。",
    circleLead: "朋友圈汇聚亲自承诺参与人道行动的人士。会员支持实地团队应对贫困、冲突和自然灾害。",
    circleBody: "如需加入，请每年至少向 Wisdom Children Association 捐助 5,000 法郎，并向团队发送会员申请。",
    applyMembership: "申请会员",
    membershipKicker: "会员申请",
    membershipTitle: "加入朋友圈。",
    membershipLead:
      "这个静态网站会为 WCA 准备一封电子邮件，因此网站本身不会存储个人资料。如果 WCA 选择支持表单处理的主机，之后可以接入安全表单。",
    fullName: "全名",
    fullNamePlaceholder: "您的法定全名",
    emailAddress: "电子邮箱",
    emailPlaceholder: "your@email.com",
    countryResidence: "居住国家",
    selectCountry: "请选择国家",
    phoneWhatsapp: "电话 / WhatsApp",
    phoneDefault: "请选择国家以查看所需号码格式。",
    participate: "您希望如何参与？",
    annualMember: "年度会员",
    volunteer: "志愿者",
    partner: "伙伴",
    donor: "捐助者",
    other: "其他",
    message: "留言",
    messagePlaceholder: "请告诉我们您为什么想加入",
    prepareMembership: "准备会员申请邮件",
    policiesKicker: "信任与政策",
    policiesTitle: "发布前提供清晰的公开信息。",
    policiesLead: "这些政策让网站在 WCA 准备正式法律页面、年度报告和必要的安全后台期间更适合发布。",
    privacy: "隐私政策",
    donationPolicy: "捐助政策",
    terms: "使用条款",
    footerBody: "一个人道主义社区，旨在通过宣传、培训、心理社会支持和倡导，促进弱势群体，特别是儿童的福祉。",
    receiveUpdates: "接收更新",
    newsletterPlaceholder: "您的电子邮箱",
    subscribe: "订阅",
    followShare: "关注并分享",
    copyright: "© 2026 Wisdom Children Association. 保留所有权利。",
    openingMembershipEmail: "正在打开已准备好的会员申请邮件，请您查看。",
    openingNewsletterEmail: "正在打开已准备好的订阅邮件，请您查看。"
  }
};

const supplementalLanguageText = {
  en: {
    copyright: "\u00a9 2026 Wisdom Children Association. All rights reserved.",
    valueEmpathy: "Empathy",
    valueSolidarity: "Solidarity",
    valueSocialJustice: "Social justice",
    valueTransparency: "Transparency",
    valueResilience: "Resilience",
    memberContributeTitle: "How members contribute",
    memberContribute1: "Annual support for field actions and urgent community needs.",
    memberContribute2: "Volunteer time, professional skills, or local coordination.",
    memberContribute3: "Advocacy that connects WCA with donors and institutional partners.",
    memberContribute4: "Transparent follow-up through reports, photos, and project updates.",
    privacyBody:
      "This static website does not store visitor form submissions. Membership and newsletter forms open the visitor's email app so the visitor can choose whether to send information directly to WCA. Donation payments are processed by GoFundMe or PayPal.",
    donationPolicyBody:
      "Donation links send visitors to official WCA fundraising pages. WCA should keep donation records, project receipts, and public updates so supporters can understand how funds were used.",
    termsBody:
      "Website content is provided for public information about WCA activities, programmes, and ways to support the organization. Photos and text should not be reused without permission from Wisdom Children Association.",
    otherCountryOption: "Other country / not listed",
    pageTitleWhoWeAre: "Who we are",
    pageTitleMission: "Our Mission",
    pageTitlePartners: "Partners",
    pageTitleImpact: "Impact",
    pageTitleContact: "Contact",
    achievementsPageLead: "Documented field actions from WCA records, notes, and original photos.",
    achievementsBurundiTitle: "Burundi field actions",
    achievementsRwandaTitle: "Rwanda field actions",
    achievementsUgandaTitle: "Uganda field actions",
    achievementsDrCongoTitle: "DR. Congo field actions",
    noAchievementsCountry: "No documented field actions are available for this country yet.",
    eventDate20250517: "17 May 2025",
    eventDate20250614: "14 June 2025",
    eventDate20250906: "6 September 2025",
    eventDate20250913: "13 September 2025",
    eventDate20250915: "15 September 2025",
    eventDate20250917: "17 September 2025",
    eventDate20251224: "24 December 2025",
    eventDate20260203: "3 February 2026",
    eventDate20260425: "25 April 2026",
    eventDesc20250517: "Food and non-food items distributed to more than 100 families.",
    eventDesc20250614:
      "Clothing, shoes, mosquito nets, hygiene soap, and food support for vulnerable people and families.",
    eventDesc20250906: "Complete school kits distributed to more than 80 pupils.",
    eventDesc20250913: "Complete school kits distributed to more than 250 pupils.",
    eventDesc20250915: "Complete school supplies distributed to more than 150 pupils.",
    eventDesc20250917: "School kits distributed to more than 180 pupils.",
    eventDesc20251224:
      "Food items distributed to more than 100 families, including flour, beans, rice, soap, salt, oil, and sugar.",
    eventDesc20260203: "Clothing and non-food support benefiting more than 100 vulnerable children.",
    eventDesc20260425:
      "Maize flour, beans, salt, oil, hygiene soap, and tents distributed to vulnerable families.",
    programEducationDetailBody:
      "WCA supports vulnerable pupils with complete school kits, learning materials, and practical encouragement so children can return to class with dignity.",
    programEducationPoint1: "School supplies and essential learning materials.",
    programEducationPoint2: "Support for pupils who are at risk of exclusion from school.",
    programEducationPoint3: "Follow-up with families, community leaders, and field supporters.",
    programReliefDetailBody:
      "WCA organizes food and non-food assistance for families affected by poverty, displacement, conflict, and urgent community need.",
    programReliefPoint1: "Food support, hygiene soap, clothing, mosquito nets, and household essentials.",
    programReliefPoint2: "Field distributions based on documented community needs.",
    programReliefPoint3: "Photos and reports that help supporters understand how donations are used.",
    programCommunityDetailBody:
      "WCA works with local communities to strengthen resilience through awareness, psychosocial support, vocational skills, and advocacy.",
    programCommunityPoint1: "Awareness and psychosocial support for vulnerable families.",
    programCommunityPoint2: "Skills development and community-centered support projects.",
    programCommunityPoint3: "Advocacy that connects field needs with donors and institutional partners.",
    partnersPageTitle: "Local coordinators and international supporters moving the mission forward.",
    partnersPageLead:
      "WCA's partner network connects trusted field supporters in East Africa with diaspora members and allies abroad. Together, they help identify needs, coordinate activities, mobilize donations, and keep the association close to the communities it serves.",
    summaryPartners: "listed coordinators",
    summaryLocations: "support locations",
    summaryRegions: "regions connected",
    partnersCount8: "8",
    partnersCount6: "8",
    partnersCount2: "2",
    partnersCount1: "1",
    impactPageTitle: "Turning field action into measurable change.",
    impactPageLead:
      "WCA measures impact by looking at what changes for children and families after each activity: whether pupils return to school with the right supplies, whether families receive timely food and hygiene support, whether vulnerable people feel accompanied, and whether local partners can respond faster the next time a community need appears. Each public update should connect photos, dates, locations, beneficiary counts, and follow-up notes so supporters can see both the human story and the evidence behind it.",
    contactHeading: "Contact",
    contactFormTitle: "Send Us A Message",
    contactName: "Your name",
    contactEmail: "Your email",
    contactSubject: "Subject",
    contactMessage: "Your message",
    contactSubmit: "Submit",
    socialHeading: "Follow us on social media!",
    visitUs: "Visit Us",
    emailUs: "Email Us",
    callUs: "Give Us a Call",
    openingContactEmail: "Opening a prepared contact email for your review.",
    navTeam: "Our Team",
    teamKicker: "Our Team",
    teamFounders: "The founders",
    teamCoordinators: "Coordinators",
    pageTitleFounders: "The founders",
    pageTitleCoordinators: "Coordinators",
    foundersPageTitle: "The founders guiding WCA's mission.",
    foundersPageLead:
      "Wisdom Children Association was founded by a small group of committed leaders who turned a shared concern for vulnerable children and families into organized field action.",
    founderRole: "Founder",
    founderBody1: "Supports the association's vision, field direction, and community-centered action.",
    founderBody2: "Helps guide WCA's humanitarian commitment, outreach, and care for vulnerable families.",
    founderBody3: "Contributes to WCA's values of empathy, transparency, dignity, and practical service.",
    coordinatorsPageTitle: "Coordinators and field supporters moving the mission forward.",
    coordinatorsPageLead:
      "WCA's coordination network connects trusted field supporters in East Africa with diaspora members and allies abroad. Together, they help identify needs, coordinate activities, mobilize donations, and keep the association close to the communities it serves.",
    faqTitle: "Frequently Asked Questions",
    faqQuestion1: "How can I contact Wisdom Children Association?",
    faqAnswer1: "You can email WCA directly at wisdomchildrenf@gmail.com or call either listed phone number.",
    faqQuestion2: "How can I become a member?",
    faqAnswer2: "Use the Circle of Friends membership form on the homepage. It prepares an email you can review and send to WCA.",
    faqQuestion3: "How can I donate?",
    faqAnswer3: "Use the Donate button to support WCA through the official GoFundMe or PayPal donation links.",
    faqQuestion4: "Where does WCA work?",
    faqAnswer4: "WCA documents field actions and planned work across Burundi, Rwanda, Uganda, and DR Congo.",
    faqQuestion5: "How can I stay informed?",
    faqAnswer5: "Subscribe for updates in the footer or follow WCA through the social media links on this page."
  },
  fr: {
    copyright: "\u00a9 2026 Wisdom Children Association. Tous droits r\u00e9serv\u00e9s.",
    valueEmpathy: "Empathie",
    valueSolidarity: "Solidarit\u00e9",
    valueSocialJustice: "Justice sociale",
    valueTransparency: "Transparence",
    valueResilience: "R\u00e9silience",
    memberContributeTitle: "Comment les membres contribuent",
    memberContribute1: "Soutien annuel aux actions de terrain et aux besoins urgents des communaut\u00e9s.",
    memberContribute2: "Temps de b\u00e9n\u00e9volat, comp\u00e9tences professionnelles ou coordination locale.",
    memberContribute3: "Plaidoyer qui relie WCA aux donateurs et aux partenaires institutionnels.",
    memberContribute4: "Suivi transparent par les rapports, les photos et les mises \u00e0 jour des projets.",
    privacyBody:
      "Ce site statique ne stocke pas les soumissions de formulaires. Les formulaires d'adh\u00e9sion et de bulletin ouvrent l'application email du visiteur afin qu'il choisisse d'envoyer ou non ses informations directement \u00e0 WCA. Les dons sont trait\u00e9s par GoFundMe ou PayPal.",
    donationPolicyBody:
      "Les liens de don dirigent les visiteurs vers les pages officielles de collecte de fonds de WCA. WCA doit conserver les dossiers de dons, les re\u00e7us des projets et les mises \u00e0 jour publiques pour que les soutiens comprennent l'utilisation des fonds.",
    termsBody:
      "Le contenu du site fournit des informations publiques sur les activit\u00e9s, programmes et moyens de soutenir WCA. Les photos et textes ne doivent pas \u00eatre r\u00e9utilis\u00e9s sans autorisation de Wisdom Children Association.",
    otherCountryOption: "Autre pays / non list\u00e9",
    pageTitleWhoWeAre: "Qui nous sommes",
    pageTitleMission: "Notre mission",
    pageTitlePartners: "Partenaires",
    pageTitleImpact: "Impact",
    pageTitleContact: "Contact",
    achievementsPageLead: "Actions de terrain document\u00e9es \u00e0 partir des dossiers, notes et photos originales de WCA.",
    achievementsBurundiTitle: "Actions de terrain au Burundi",
    achievementsRwandaTitle: "Actions de terrain au Rwanda",
    achievementsUgandaTitle: "Actions de terrain en Ouganda",
    achievementsDrCongoTitle: "Actions de terrain en RD Congo",
    noAchievementsCountry: "Aucune action de terrain document\u00e9e n'est encore disponible pour ce pays.",
    eventDate20250517: "17 mai 2025",
    eventDate20250614: "14 juin 2025",
    eventDate20250906: "6 septembre 2025",
    eventDate20250913: "13 septembre 2025",
    eventDate20250915: "15 septembre 2025",
    eventDate20250917: "17 septembre 2025",
    eventDate20251224: "24 d\u00e9cembre 2025",
    eventDate20260203: "3 f\u00e9vrier 2026",
    eventDate20260425: "25 avril 2026",
    eventDesc20250517: "Distribution de vivres et d'articles non alimentaires \u00e0 plus de 100 familles.",
    eventDesc20250614:
      "V\u00eatements, chaussures, moustiquaires, savon d'hygi\u00e8ne et aide alimentaire pour des personnes et familles vuln\u00e9rables.",
    eventDesc20250906: "Kits scolaires complets distribu\u00e9s \u00e0 plus de 80 \u00e9l\u00e8ves.",
    eventDesc20250913: "Kits scolaires complets distribu\u00e9s \u00e0 plus de 250 \u00e9l\u00e8ves.",
    eventDesc20250915: "Fournitures scolaires compl\u00e8tes distribu\u00e9es \u00e0 plus de 150 \u00e9l\u00e8ves.",
    eventDesc20250917: "Kits scolaires distribu\u00e9s \u00e0 plus de 180 \u00e9l\u00e8ves.",
    eventDesc20251224:
      "Denr\u00e9es alimentaires distribu\u00e9es \u00e0 plus de 100 familles, notamment farine, haricots, riz, savon, sel, huile et sucre.",
    eventDesc20260203: "V\u00eatements et articles non alimentaires au profit de plus de 100 enfants vuln\u00e9rables.",
    eventDesc20260425:
      "Farine de ma\u00efs, haricots, sel, huile, savon d'hygi\u00e8ne et tentes distribu\u00e9s \u00e0 des familles vuln\u00e9rables.",
    programEducationDetailBody:
      "WCA soutient les \u00e9l\u00e8ves vuln\u00e9rables avec des kits scolaires complets, du mat\u00e9riel d'apprentissage et un accompagnement concret afin qu'ils retournent en classe avec dignit\u00e9.",
    programEducationPoint1: "Fournitures scolaires et mat\u00e9riel d'apprentissage essentiel.",
    programEducationPoint2: "Soutien aux \u00e9l\u00e8ves expos\u00e9s au risque d'exclusion scolaire.",
    programEducationPoint3: "Suivi avec les familles, les responsables communautaires et les soutiens de terrain.",
    programReliefDetailBody:
      "WCA organise une aide alimentaire et non alimentaire pour les familles touch\u00e9es par la pauvret\u00e9, le d\u00e9placement, les conflits et les besoins urgents.",
    programReliefPoint1: "Aide alimentaire, savon d'hygi\u00e8ne, v\u00eatements, moustiquaires et articles essentiels.",
    programReliefPoint2: "Distributions de terrain bas\u00e9es sur des besoins communautaires document\u00e9s.",
    programReliefPoint3: "Photos et rapports pour aider les soutiens \u00e0 comprendre l'utilisation des dons.",
    programCommunityDetailBody:
      "WCA travaille avec les communaut\u00e9s locales pour renforcer la r\u00e9silience par la sensibilisation, le soutien psychosocial, les comp\u00e9tences professionnelles et le plaidoyer.",
    programCommunityPoint1: "Sensibilisation et soutien psychosocial pour les familles vuln\u00e9rables.",
    programCommunityPoint2: "D\u00e9veloppement des comp\u00e9tences et projets centr\u00e9s sur la communaut\u00e9.",
    programCommunityPoint3: "Plaidoyer reliant les besoins du terrain aux donateurs et partenaires institutionnels.",
    partnersPageTitle: "Coordinateurs locaux et soutiens internationaux au service de la mission.",
    partnersPageLead:
      "Le r\u00e9seau de partenaires de WCA relie des soutiens de terrain fiables en Afrique de l'Est \u00e0 des membres de la diaspora et des alli\u00e9s \u00e0 l'\u00e9tranger. Ensemble, ils identifient les besoins, coordonnent les activit\u00e9s, mobilisent les dons et gardent l'association proche des communaut\u00e9s servies.",
    summaryPartners: "coordinateurs list\u00e9s",
    summaryLocations: "lieux de soutien",
    summaryRegions: "r\u00e9gions connect\u00e9es",
    partnersCount8: "8",
    partnersCount6: "8",
    partnersCount2: "2",
    partnersCount1: "1",
    impactPageTitle: "Transformer l'action de terrain en changement mesurable.",
    impactPageLead:
      "WCA mesure l'impact en observant ce qui change pour les enfants et les familles apr\u00e8s chaque activit\u00e9 : retour \u00e0 l'\u00e9cole avec les fournitures n\u00e9cessaires, soutien alimentaire et hygi\u00e9nique re\u00e7u \u00e0 temps, sentiment d'accompagnement, et capacit\u00e9 des partenaires locaux \u00e0 r\u00e9pondre plus vite aux prochains besoins. Chaque mise \u00e0 jour publique doit relier photos, dates, lieux, nombre de b\u00e9n\u00e9ficiaires et notes de suivi.",
    contactHeading: "Contact",
    contactFormTitle: "Envoyez-nous un message",
    contactName: "Votre nom",
    contactEmail: "Votre email",
    contactSubject: "Sujet",
    contactMessage: "Votre message",
    contactSubmit: "Envoyer",
    socialHeading: "Suivez-nous sur les r\u00e9seaux sociaux !",
    visitUs: "Nous rendre visite",
    emailUs: "Nous \u00e9crire",
    callUs: "Nous appeler",
    openingContactEmail: "Ouverture d'un email de contact pr\u00e9par\u00e9 pour votre v\u00e9rification.",
    navTeam: "Notre \u00e9quipe",
    teamKicker: "Notre \u00e9quipe",
    teamFounders: "Les fondateurs",
    teamCoordinators: "Coordinateurs",
    pageTitleFounders: "Les fondateurs",
    pageTitleCoordinators: "Coordinateurs",
    foundersPageTitle: "Les fondateurs qui guident la mission de WCA.",
    foundersPageLead:
      "Wisdom Children Association a \u00e9t\u00e9 fond\u00e9e par un petit groupe de leaders engag\u00e9s qui ont transform\u00e9 une pr\u00e9occupation commune pour les enfants et familles vuln\u00e9rables en action de terrain organis\u00e9e.",
    founderRole: "Fondateur",
    founderBody1: "Soutient la vision de l'association, l'orientation du terrain et l'action centr\u00e9e sur la communaut\u00e9.",
    founderBody2: "Aide \u00e0 guider l'engagement humanitaire, la sensibilisation et l'attention aux familles vuln\u00e9rables.",
    founderBody3: "Contribue aux valeurs d'empathie, de transparence, de dignit\u00e9 et de service pratique.",
    coordinatorsPageTitle: "Coordinateurs et soutiens de terrain au service de la mission.",
    coordinatorsPageLead:
      "Le r\u00e9seau de coordination de WCA relie des soutiens de terrain fiables en Afrique de l'Est \u00e0 des membres de la diaspora et des alli\u00e9s \u00e0 l'\u00e9tranger. Ensemble, ils identifient les besoins, coordonnent les activit\u00e9s, mobilisent les dons et gardent l'association proche des communaut\u00e9s servies.",
    faqTitle: "Questions fr\u00e9quentes",
    faqQuestion1: "Comment contacter Wisdom Children Association ?",
    faqAnswer1: "Vous pouvez \u00e9crire directement \u00e0 wisdomchildrenf@gmail.com ou appeler l'un des num\u00e9ros indiqu\u00e9s.",
    faqQuestion2: "Comment devenir membre ?",
    faqAnswer2: "Utilisez le formulaire du Cercle des Amis sur la page d'accueil. Il pr\u00e9pare un email que vous pouvez relire et envoyer \u00e0 WCA.",
    faqQuestion3: "Comment faire un don ?",
    faqAnswer3: "Utilisez le bouton Donner pour soutenir WCA par les liens officiels GoFundMe ou PayPal.",
    faqQuestion4: "O\u00f9 WCA travaille-t-elle ?",
    faqAnswer4: "WCA documente des actions de terrain et des projets au Burundi, au Rwanda, en Ouganda et en RD Congo.",
    faqQuestion5: "Comment rester inform\u00e9 ?",
    faqAnswer5: "Abonnez-vous aux nouvelles dans le pied de page ou suivez WCA via les liens de r\u00e9seaux sociaux."
  },
  sw: {
    copyright: "\u00a9 2026 Wisdom Children Association. Haki zote zimehifadhiwa.",
    valueEmpathy: "Huruma",
    valueSolidarity: "Mshikamano",
    valueSocialJustice: "Haki ya kijamii",
    valueTransparency: "Uwazi",
    valueResilience: "Ustahimilivu",
    memberContributeTitle: "Jinsi wanachama wanavyochangia",
    memberContribute1: "Msaada wa kila mwaka kwa shughuli za uwanjani na mahitaji ya dharura ya jamii.",
    memberContribute2: "Muda wa kujitolea, ujuzi wa kitaalamu au uratibu wa ndani.",
    memberContribute3: "Utetezi unaounganisha WCA na wafadhili pamoja na washirika wa taasisi.",
    memberContribute4: "Ufuatiliaji wa wazi kupitia ripoti, picha na taarifa za miradi.",
    privacyBody:
      "Tovuti hii ya kawaida haihifadhi taarifa zinazotumwa kupitia fomu. Fomu za uanachama na taarifa hufungua programu ya barua pepe ili mgeni aamue kama atatuma taarifa moja kwa moja kwa WCA. Michango hushughulikiwa na GoFundMe au PayPal.",
    donationPolicyBody:
      "Viungo vya kuchangia humpeleka mgeni kwenye kurasa rasmi za uchangishaji za WCA. WCA inapaswa kutunza kumbukumbu za michango, risiti za miradi na taarifa za umma ili wafadhili waelewe matumizi ya fedha.",
    termsBody:
      "Maudhui ya tovuti yanatoa taarifa za umma kuhusu shughuli, programu na njia za kuunga mkono WCA. Picha na maandishi yasitumike tena bila ruhusa ya Wisdom Children Association.",
    otherCountryOption: "Nchi nyingine / haijaorodheshwa",
    pageTitleWhoWeAre: "Sisi ni nani",
    pageTitleMission: "Dhamira yetu",
    pageTitlePartners: "Washirika",
    pageTitleImpact: "Athari",
    pageTitleContact: "Mawasiliano",
    achievementsPageLead: "Shughuli za uwanjani zilizorekodiwa kutoka kwenye kumbukumbu, maelezo na picha halisi za WCA.",
    achievementsBurundiTitle: "Shughuli za uwanjani Burundi",
    achievementsRwandaTitle: "Shughuli za uwanjani Rwanda",
    achievementsUgandaTitle: "Shughuli za uwanjani Uganda",
    achievementsDrCongoTitle: "Shughuli za uwanjani DR Congo",
    noAchievementsCountry: "Hakuna shughuli za uwanjani zilizorekodiwa kwa nchi hii bado.",
    eventDate20250517: "17 Mei 2025",
    eventDate20250614: "14 Juni 2025",
    eventDate20250906: "6 Septemba 2025",
    eventDate20250913: "13 Septemba 2025",
    eventDate20250915: "15 Septemba 2025",
    eventDate20250917: "17 Septemba 2025",
    eventDate20251224: "24 Desemba 2025",
    eventDate20260203: "3 Februari 2026",
    eventDate20260425: "25 Aprili 2026",
    eventDesc20250517: "Vyakula na vifaa visivyo vya chakula viligawiwa kwa zaidi ya familia 100.",
    eventDesc20250614: "Nguo, viatu, vyandarua, sabuni ya usafi na msaada wa chakula kwa watu na familia zilizo hatarini.",
    eventDesc20250906: "Seti kamili za shule ziligawiwa kwa zaidi ya wanafunzi 80.",
    eventDesc20250913: "Seti kamili za shule ziligawiwa kwa zaidi ya wanafunzi 250.",
    eventDesc20250915: "Vifaa kamili vya shule viligawiwa kwa zaidi ya wanafunzi 150.",
    eventDesc20250917: "Seti za shule ziligawiwa kwa zaidi ya wanafunzi 180.",
    eventDesc20251224: "Vyakula viligawiwa kwa zaidi ya familia 100, ikiwemo unga, maharage, mchele, sabuni, chumvi, mafuta na sukari.",
    eventDesc20260203: "Nguo na vifaa visivyo vya chakula vilisaidia zaidi ya watoto 100 walio hatarini.",
    eventDesc20260425: "Unga wa mahindi, maharage, chumvi, mafuta, sabuni ya usafi na mahema viligawiwa kwa familia zilizo hatarini.",
    programEducationDetailBody:
      "WCA huwasaidia wanafunzi walio hatarini kwa seti kamili za shule, vifaa vya kujifunzia na moyo wa vitendo ili warudi darasani kwa heshima.",
    programEducationPoint1: "Vifaa vya shule na vifaa muhimu vya kujifunzia.",
    programEducationPoint2: "Msaada kwa wanafunzi walio katika hatari ya kuachwa nje ya shule.",
    programEducationPoint3: "Ufuatiliaji na familia, viongozi wa jamii na wasaidizi wa uwanjani.",
    programReliefDetailBody:
      "WCA hupanga msaada wa chakula na vifaa visivyo vya chakula kwa familia zilizoathiriwa na umaskini, kuhama makazi, migogoro na mahitaji ya dharura.",
    programReliefPoint1: "Msaada wa chakula, sabuni ya usafi, nguo, vyandarua na mahitaji ya nyumbani.",
    programReliefPoint2: "Ugawaji wa uwanjani unaotegemea mahitaji ya jamii yaliyorekodiwa.",
    programReliefPoint3: "Picha na ripoti zinazosaidia wafadhili kuelewa matumizi ya michango.",
    programCommunityDetailBody:
      "WCA hufanya kazi na jamii za ndani kuimarisha ustahimilivu kupitia uhamasishaji, msaada wa kisaikolojia na kijamii, ujuzi wa kazi na utetezi.",
    programCommunityPoint1: "Uhamasishaji na msaada wa kisaikolojia kwa familia zilizo hatarini.",
    programCommunityPoint2: "Uendelezaji wa ujuzi na miradi inayolenga jamii.",
    programCommunityPoint3: "Utetezi unaounganisha mahitaji ya uwanjani na wafadhili pamoja na washirika.",
    partnersPageTitle: "Waratibu wa ndani na wasaidizi wa kimataifa wanaosukuma dhamira mbele.",
    partnersPageLead:
      "Mtandao wa washirika wa WCA huunganisha wasaidizi wa kuaminika wa uwanjani Afrika Mashariki na wanadiaspora pamoja na marafiki nje ya nchi. Kwa pamoja hutambua mahitaji, kuratibu shughuli, kuhamasisha michango na kuweka chama karibu na jamii kinazohudumia.",
    summaryPartners: "waratibu waliotajwa",
    summaryLocations: "maeneo ya msaada",
    summaryRegions: "kanda zilizounganishwa",
    partnersCount8: "8",
    partnersCount6: "8",
    partnersCount2: "2",
    partnersCount1: "1",
    impactPageTitle: "Kubadilisha shughuli za uwanjani kuwa mabadiliko yanayopimika.",
    impactPageLead:
      "WCA hupima athari kwa kuangalia kinachobadilika kwa watoto na familia baada ya kila shughuli: kama wanafunzi wanarudi shuleni wakiwa na vifaa sahihi, kama familia zinapata chakula na vifaa vya usafi kwa wakati, kama watu walio hatarini wanahisi kuandamana nao, na kama washirika wa ndani wanaweza kujibu haraka zaidi mahitaji yajayo. Kila taarifa ya umma iunganishe picha, tarehe, maeneo, idadi ya wanufaika na maelezo ya ufuatiliaji.",
    contactHeading: "Mawasiliano",
    contactFormTitle: "Tutumie ujumbe",
    contactName: "Jina lako",
    contactEmail: "Barua pepe yako",
    contactSubject: "Kichwa cha ujumbe",
    contactMessage: "Ujumbe wako",
    contactSubmit: "Tuma",
    socialHeading: "Tufuatilie kwenye mitandao ya kijamii!",
    visitUs: "Tutembelee",
    emailUs: "Tutumie email",
    callUs: "Tupigie simu",
    openingContactEmail: "Inafungua barua pepe ya mawasiliano iliyoandaliwa kwa ukaguzi wako.",
    navTeam: "Timu yetu",
    teamKicker: "Timu yetu",
    teamFounders: "Waanzilishi",
    teamCoordinators: "Waratibu",
    pageTitleFounders: "Waanzilishi",
    pageTitleCoordinators: "Waratibu",
    foundersPageTitle: "Waanzilishi wanaoongoza dhamira ya WCA.",
    foundersPageLead:
      "Wisdom Children Association ilianzishwa na kundi dogo la viongozi waliojitolea waliogeuza wasiwasi wa pamoja kwa watoto na familia zilizo hatarini kuwa shughuli za uwanjani zilizopangwa.",
    founderRole: "Mwanzilishi",
    founderBody1: "Husaidia maono ya chama, mwelekeo wa uwanjani na kazi inayolenga jamii.",
    founderBody2: "Husaidia kuongoza ahadi ya kibinadamu, uhamasishaji na huduma kwa familia zilizo hatarini.",
    founderBody3: "Huchangia maadili ya huruma, uwazi, heshima na huduma ya vitendo.",
    coordinatorsPageTitle: "Waratibu na wasaidizi wa uwanjani wanaosukuma dhamira mbele.",
    coordinatorsPageLead:
      "Mtandao wa uratibu wa WCA huunganisha wasaidizi wa kuaminika wa uwanjani Afrika Mashariki na wanadiaspora pamoja na marafiki nje ya nchi. Kwa pamoja hutambua mahitaji, kuratibu shughuli, kuhamasisha michango na kuweka chama karibu na jamii kinazohudumia.",
    faqTitle: "Maswali yanayoulizwa mara kwa mara",
    faqQuestion1: "Ninawezaje kuwasiliana na Wisdom Children Association?",
    faqAnswer1: "Unaweza kutuma email moja kwa moja kwa wisdomchildrenf@gmail.com au kupiga moja ya namba zilizoonyeshwa.",
    faqQuestion2: "Ninawezaje kuwa mwanachama?",
    faqAnswer2: "Tumia fomu ya Circle of Friends kwenye ukurasa wa nyumbani. Itaandaa email utakayoweza kukagua na kuituma kwa WCA.",
    faqQuestion3: "Ninawezaje kuchangia?",
    faqAnswer3: "Tumia kitufe cha Changia kuunga mkono WCA kupitia viungo rasmi vya GoFundMe au PayPal.",
    faqQuestion4: "WCA inafanya kazi wapi?",
    faqAnswer4: "WCA hurekodi shughuli za uwanjani na mipango Burundi, Rwanda, Uganda na DR Congo.",
    faqQuestion5: "Ninawezaje kupata taarifa?",
    faqAnswer5: "Jiandikishe kupata taarifa chini ya ukurasa au fuatilia WCA kupitia viungo vya mitandao ya kijamii."
  },
  es: {
    copyright: "\u00a9 2026 Wisdom Children Association. Todos los derechos reservados.",
    valueEmpathy: "Empat\u00eda",
    valueSolidarity: "Solidaridad",
    valueSocialJustice: "Justicia social",
    valueTransparency: "Transparencia",
    valueResilience: "Resiliencia",
    memberContributeTitle: "C\u00f3mo contribuyen los miembros",
    memberContribute1: "Apoyo anual para acciones de campo y necesidades urgentes de la comunidad.",
    memberContribute2: "Tiempo voluntario, habilidades profesionales o coordinaci\u00f3n local.",
    memberContribute3: "Incidencia que conecta a WCA con donantes y socios institucionales.",
    memberContribute4: "Seguimiento transparente mediante informes, fotos y actualizaciones de proyectos.",
    privacyBody:
      "Este sitio est\u00e1tico no almacena env\u00edos de formularios. Los formularios de membres\u00eda y bolet\u00edn abren la aplicaci\u00f3n de correo del visitante para que decida si desea enviar informaci\u00f3n directamente a WCA. Las donaciones se procesan por GoFundMe o PayPal.",
    donationPolicyBody:
      "Los enlaces de donaci\u00f3n llevan a los visitantes a las p\u00e1ginas oficiales de recaudaci\u00f3n de WCA. WCA debe conservar registros de donaciones, recibos de proyectos y actualizaciones p\u00fablicas para que los colaboradores entiendan el uso de los fondos.",
    termsBody:
      "El contenido del sitio ofrece informaci\u00f3n p\u00fablica sobre las actividades, programas y formas de apoyar a WCA. Las fotos y textos no deben reutilizarse sin permiso de Wisdom Children Association.",
    otherCountryOption: "Otro pa\u00eds / no listado",
    pageTitleWhoWeAre: "Qui\u00e9nes somos",
    pageTitleMission: "Nuestra misi\u00f3n",
    pageTitlePartners: "Socios",
    pageTitleImpact: "Impacto",
    pageTitleContact: "Contacto",
    achievementsPageLead: "Acciones de campo documentadas a partir de registros, notas y fotos originales de WCA.",
    achievementsBurundiTitle: "Acciones de campo en Burundi",
    achievementsRwandaTitle: "Acciones de campo en Ruanda",
    achievementsUgandaTitle: "Acciones de campo en Uganda",
    achievementsDrCongoTitle: "Acciones de campo en RD Congo",
    noAchievementsCountry: "Todav\u00eda no hay acciones de campo documentadas para este pa\u00eds.",
    eventDate20250517: "17 de mayo de 2025",
    eventDate20250614: "14 de junio de 2025",
    eventDate20250906: "6 de septiembre de 2025",
    eventDate20250913: "13 de septiembre de 2025",
    eventDate20250915: "15 de septiembre de 2025",
    eventDate20250917: "17 de septiembre de 2025",
    eventDate20251224: "24 de diciembre de 2025",
    eventDate20260203: "3 de febrero de 2026",
    eventDate20260425: "25 de abril de 2026",
    eventDesc20250517: "Alimentos y art\u00edculos no alimentarios distribuidos a m\u00e1s de 100 familias.",
    eventDesc20250614: "Ropa, zapatos, mosquiteros, jab\u00f3n de higiene y apoyo alimentario para personas y familias vulnerables.",
    eventDesc20250906: "Kits escolares completos distribuidos a m\u00e1s de 80 estudiantes.",
    eventDesc20250913: "Kits escolares completos distribuidos a m\u00e1s de 250 estudiantes.",
    eventDesc20250915: "Suministros escolares completos distribuidos a m\u00e1s de 150 estudiantes.",
    eventDesc20250917: "Kits escolares distribuidos a m\u00e1s de 180 estudiantes.",
    eventDesc20251224: "Alimentos distribuidos a m\u00e1s de 100 familias, incluyendo harina, frijoles, arroz, jab\u00f3n, sal, aceite y az\u00facar.",
    eventDesc20260203: "Ropa y apoyo no alimentario en beneficio de m\u00e1s de 100 ni\u00f1os vulnerables.",
    eventDesc20260425: "Harina de ma\u00edz, frijoles, sal, aceite, jab\u00f3n de higiene y carpas distribuidos a familias vulnerables.",
    programEducationDetailBody:
      "WCA apoya a estudiantes vulnerables con kits escolares completos, materiales de aprendizaje y acompa\u00f1amiento pr\u00e1ctico para que regresen a clase con dignidad.",
    programEducationPoint1: "Suministros escolares y materiales esenciales de aprendizaje.",
    programEducationPoint2: "Apoyo para estudiantes en riesgo de quedar fuera de la escuela.",
    programEducationPoint3: "Seguimiento con familias, l\u00edderes comunitarios y apoyos de campo.",
    programReliefDetailBody:
      "WCA organiza asistencia alimentaria y no alimentaria para familias afectadas por pobreza, desplazamiento, conflicto y necesidades comunitarias urgentes.",
    programReliefPoint1: "Apoyo alimentario, jab\u00f3n de higiene, ropa, mosquiteros y art\u00edculos esenciales del hogar.",
    programReliefPoint2: "Distribuciones de campo basadas en necesidades comunitarias documentadas.",
    programReliefPoint3: "Fotos e informes que ayudan a los colaboradores a entender c\u00f3mo se usan las donaciones.",
    programCommunityDetailBody:
      "WCA trabaja con comunidades locales para fortalecer la resiliencia mediante sensibilizaci\u00f3n, apoyo psicosocial, habilidades vocacionales e incidencia.",
    programCommunityPoint1: "Sensibilizaci\u00f3n y apoyo psicosocial para familias vulnerables.",
    programCommunityPoint2: "Desarrollo de habilidades y proyectos centrados en la comunidad.",
    programCommunityPoint3: "Incidencia que conecta necesidades de campo con donantes y socios institucionales.",
    partnersPageTitle: "Coordinadores locales y colaboradores internacionales impulsando la misi\u00f3n.",
    partnersPageLead:
      "La red de socios de WCA conecta apoyos de campo confiables en \u00c1frica Oriental con miembros de la di\u00e1spora y aliados en el extranjero. Juntos identifican necesidades, coordinan actividades, movilizan donaciones y mantienen a la asociaci\u00f3n cerca de las comunidades que sirve.",
    summaryPartners: "coordinadores listados",
    summaryLocations: "lugares de apoyo",
    summaryRegions: "regiones conectadas",
    partnersCount8: "8",
    partnersCount6: "8",
    partnersCount2: "2",
    partnersCount1: "1",
    impactPageTitle: "Convertir la acci\u00f3n de campo en cambio medible.",
    impactPageLead:
      "WCA mide el impacto observando qu\u00e9 cambia para los ni\u00f1os y las familias despu\u00e9s de cada actividad: si los estudiantes regresan a la escuela con los materiales correctos, si las familias reciben apoyo alimentario e higi\u00e9nico a tiempo, si las personas vulnerables se sienten acompa\u00f1adas y si los socios locales pueden responder m\u00e1s r\u00e1pido ante la pr\u00f3xima necesidad comunitaria. Cada actualizaci\u00f3n p\u00fablica debe conectar fotos, fechas, lugares, n\u00famero de beneficiarios y notas de seguimiento.",
    contactHeading: "Contacto",
    contactFormTitle: "Env\u00edenos un mensaje",
    contactName: "Su nombre",
    contactEmail: "Su email",
    contactSubject: "Asunto",
    contactMessage: "Su mensaje",
    contactSubmit: "Enviar",
    socialHeading: "S\u00edganos en redes sociales!",
    visitUs: "Vis\u00edtenos",
    emailUs: "Escr\u00edbanos",
    callUs: "Ll\u00e1menos",
    openingContactEmail: "Abriendo un correo de contacto preparado para su revisi\u00f3n.",
    navTeam: "Nuestro equipo",
    teamKicker: "Nuestro equipo",
    teamFounders: "Fundadores",
    teamCoordinators: "Coordinadores",
    pageTitleFounders: "Fundadores",
    pageTitleCoordinators: "Coordinadores",
    foundersPageTitle: "Los fundadores que gu\u00edan la misi\u00f3n de WCA.",
    foundersPageLead:
      "Wisdom Children Association fue fundada por un peque\u00f1o grupo de l\u00edderes comprometidos que transformaron una preocupaci\u00f3n compartida por ni\u00f1os y familias vulnerables en acci\u00f3n de campo organizada.",
    founderRole: "Fundador",
    founderBody1: "Apoya la visi\u00f3n de la asociaci\u00f3n, la direcci\u00f3n de campo y la acci\u00f3n centrada en la comunidad.",
    founderBody2: "Ayuda a guiar el compromiso humanitario, el alcance y el cuidado de familias vulnerables.",
    founderBody3: "Contribuye a los valores de empat\u00eda, transparencia, dignidad y servicio pr\u00e1ctico.",
    coordinatorsPageTitle: "Coordinadores y apoyos de campo impulsando la misi\u00f3n.",
    coordinatorsPageLead:
      "La red de coordinaci\u00f3n de WCA conecta apoyos de campo confiables en \u00c1frica Oriental con miembros de la di\u00e1spora y aliados en el extranjero. Juntos identifican necesidades, coordinan actividades, movilizan donaciones y mantienen a la asociaci\u00f3n cerca de las comunidades que sirve.",
    faqTitle: "Preguntas frecuentes",
    faqQuestion1: "C\u00f3mo puedo contactar a Wisdom Children Association?",
    faqAnswer1: "Puede escribir directamente a wisdomchildrenf@gmail.com o llamar a cualquiera de los n\u00fameros indicados.",
    faqQuestion2: "C\u00f3mo puedo hacerme miembro?",
    faqAnswer2: "Use el formulario Circle of Friends en la p\u00e1gina principal. Preparar\u00e1 un correo que puede revisar y enviar a WCA.",
    faqQuestion3: "C\u00f3mo puedo donar?",
    faqAnswer3: "Use el bot\u00f3n Donar para apoyar a WCA mediante los enlaces oficiales de GoFundMe o PayPal.",
    faqQuestion4: "D\u00f3nde trabaja WCA?",
    faqAnswer4: "WCA documenta acciones de campo y trabajo planificado en Burundi, Ruanda, Uganda y RD Congo.",
    faqQuestion5: "C\u00f3mo puedo mantenerme informado?",
    faqAnswer5: "Suscr\u00edbase a las novedades en el pie de p\u00e1gina o siga a WCA en los enlaces de redes sociales."
  },
  zh: {
    copyright: "\u00a9 2026 Wisdom Children Association. \u4fdd\u7559\u6240\u6709\u6743\u5229\u3002",
    valueEmpathy: "\u540c\u7406\u5fc3",
    valueSolidarity: "\u56e2\u7ed3",
    valueSocialJustice: "\u793e\u4f1a\u6b63\u4e49",
    valueTransparency: "\u900f\u660e",
    valueResilience: "\u97e7\u6027",
    memberContributeTitle: "\u4f1a\u5458\u5982\u4f55\u8d21\u732e",
    memberContribute1: "\u6bcf\u5e74\u652f\u6301\u5b9e\u5730\u884c\u52a8\u548c\u793e\u533a\u7d27\u6025\u9700\u6c42\u3002",
    memberContribute2: "\u63d0\u4f9b\u5fd7\u613f\u65f6\u95f4\u3001\u4e13\u4e1a\u6280\u80fd\u6216\u672c\u5730\u534f\u8c03\u3002",
    memberContribute3: "\u901a\u8fc7\u5021\u5bfc\u5c06 WCA \u4e0e\u6350\u52a9\u8005\u548c\u673a\u6784\u4f19\u4f34\u8054\u7cfb\u8d77\u6765\u3002",
    memberContribute4: "\u901a\u8fc7\u62a5\u544a\u3001\u7167\u7247\u548c\u9879\u76ee\u66f4\u65b0\u8fdb\u884c\u900f\u660e\u8ddf\u8fdb\u3002",
    privacyBody:
      "\u672c\u9759\u6001\u7f51\u7ad9\u4e0d\u4f1a\u5b58\u50a8\u8bbf\u5ba2\u63d0\u4ea4\u7684\u8868\u5355\u3002\u4f1a\u5458\u548c\u8ba2\u9605\u8868\u5355\u4f1a\u6253\u5f00\u8bbf\u5ba2\u7684\u90ae\u4ef6\u5e94\u7528\uff0c\u7531\u8bbf\u5ba2\u51b3\u5b9a\u662f\u5426\u5c06\u4fe1\u606f\u76f4\u63a5\u53d1\u9001\u7ed9 WCA\u3002\u6350\u6b3e\u7531 GoFundMe \u6216 PayPal \u5904\u7406\u3002",
    donationPolicyBody:
      "\u6350\u6b3e\u94fe\u63a5\u4f1a\u5c06\u8bbf\u5ba2\u5e26\u5230 WCA \u7684\u5b98\u65b9\u7b79\u6b3e\u9875\u9762\u3002WCA \u5e94\u4fdd\u7559\u6350\u6b3e\u8bb0\u5f55\u3001\u9879\u76ee\u6536\u636e\u548c\u516c\u5f00\u66f4\u65b0\uff0c\u4ee5\u4fbf\u652f\u6301\u8005\u4e86\u89e3\u8d44\u91d1\u4f7f\u7528\u60c5\u51b5\u3002",
    termsBody:
      "\u7f51\u7ad9\u5185\u5bb9\u7528\u4e8e\u516c\u5f00\u4ecb\u7ecd WCA \u7684\u6d3b\u52a8\u3001\u9879\u76ee\u548c\u652f\u6301\u65b9\u5f0f\u3002\u672a\u7ecf Wisdom Children Association \u8bb8\u53ef\uff0c\u4e0d\u5f97\u91cd\u7528\u7167\u7247\u548c\u6587\u5b57\u3002",
    otherCountryOption: "\u5176\u4ed6\u56fd\u5bb6 / \u672a\u5217\u51fa",
    pageTitleWhoWeAre: "\u6211\u4eec\u662f\u8c01",
    pageTitleMission: "\u6211\u4eec\u7684\u4f7f\u547d",
    pageTitlePartners: "\u4f19\u4f34",
    pageTitleImpact: "\u5f71\u54cd",
    pageTitleContact: "\u8054\u7cfb",
    achievementsPageLead: "\u6765\u81ea WCA \u8bb0\u5f55\u3001\u7b14\u8bb0\u548c\u539f\u59cb\u7167\u7247\u7684\u5b9e\u5730\u884c\u52a8\u3002",
    achievementsBurundiTitle: "\u5e03\u9686\u8fea\u5b9e\u5730\u884c\u52a8",
    achievementsRwandaTitle: "\u5362\u65fa\u8fbe\u5b9e\u5730\u884c\u52a8",
    achievementsUgandaTitle: "\u4e4c\u5e72\u8fbe\u5b9e\u5730\u884c\u52a8",
    achievementsDrCongoTitle: "\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd\u5b9e\u5730\u884c\u52a8",
    noAchievementsCountry: "\u8be5\u56fd\u5bb6\u5c1a\u65e0\u53ef\u516c\u5f00\u7684\u5b9e\u5730\u884c\u52a8\u8bb0\u5f55\u3002",
    eventDate20250517: "2025\u5e745\u670817\u65e5",
    eventDate20250614: "2025\u5e746\u670814\u65e5",
    eventDate20250906: "2025\u5e749\u67086\u65e5",
    eventDate20250913: "2025\u5e749\u670813\u65e5",
    eventDate20250915: "2025\u5e749\u670815\u65e5",
    eventDate20250917: "2025\u5e749\u670817\u65e5",
    eventDate20251224: "2025\u5e7412\u670824\u65e5",
    eventDate20260203: "2026\u5e742\u67083\u65e5",
    eventDate20260425: "2026\u5e744\u670825\u65e5",
    eventDesc20250517: "\u5411 100 \u591a\u4e2a\u5bb6\u5ead\u5206\u53d1\u98df\u54c1\u548c\u975e\u98df\u54c1\u7269\u8d44\u3002",
    eventDesc20250614: "\u5411\u5f31\u52bf\u4eba\u7fa4\u548c\u5bb6\u5ead\u63d0\u4f9b\u8863\u7269\u3001\u978b\u5b50\u3001\u868a\u5e10\u3001\u536b\u751f\u80a5\u7682\u548c\u98df\u54c1\u652f\u6301\u3002",
    eventDesc20250906: "\u5411 80 \u591a\u540d\u5b66\u751f\u5206\u53d1\u5b8c\u6574\u5b66\u4e60\u7528\u54c1\u3002",
    eventDesc20250913: "\u5411 250 \u591a\u540d\u5b66\u751f\u5206\u53d1\u5b8c\u6574\u5b66\u4e60\u7528\u54c1\u3002",
    eventDesc20250915: "\u5411 150 \u591a\u540d\u5b66\u751f\u5206\u53d1\u5b8c\u6574\u5b66\u6821\u7528\u54c1\u3002",
    eventDesc20250917: "\u5411 180 \u591a\u540d\u5b66\u751f\u5206\u53d1\u5b66\u4e60\u7528\u54c1\u3002",
    eventDesc20251224: "\u5411 100 \u591a\u4e2a\u5bb6\u5ead\u5206\u53d1\u98df\u54c1\uff0c\u5305\u62ec\u9762\u7c89\u3001\u8c46\u7c7b\u3001\u5927\u7c73\u3001\u80a5\u7682\u3001\u76d0\u3001\u98df\u7528\u6cb9\u548c\u7cd6\u3002",
    eventDesc20260203: "\u8863\u7269\u548c\u975e\u98df\u54c1\u652f\u6301\u60e0\u53ca 100 \u591a\u540d\u5f31\u52bf\u513f\u7ae5\u3002",
    eventDesc20260425: "\u5411\u5f31\u52bf\u5bb6\u5ead\u5206\u53d1\u7389\u7c73\u7c89\u3001\u8c46\u7c7b\u3001\u76d0\u3001\u98df\u7528\u6cb9\u3001\u536b\u751f\u80a5\u7682\u548c\u5e10\u7bf7\u3002",
    programEducationDetailBody:
      "WCA \u4e3a\u5f31\u52bf\u5b66\u751f\u63d0\u4f9b\u5b8c\u6574\u5b66\u4e60\u7528\u54c1\u3001\u5b66\u4e60\u6750\u6599\u548c\u5b9e\u9645\u9f13\u52b1\uff0c\u5e2e\u52a9\u4ed6\u4eec\u6709\u5c0a\u4e25\u5730\u56de\u5230\u8bfe\u5802\u3002",
    programEducationPoint1: "\u5b66\u6821\u7528\u54c1\u548c\u5fc5\u8981\u5b66\u4e60\u6750\u6599\u3002",
    programEducationPoint2: "\u652f\u6301\u9762\u4e34\u5931\u5b66\u98ce\u9669\u7684\u5b66\u751f\u3002",
    programEducationPoint3: "\u4e0e\u5bb6\u5ead\u3001\u793e\u533a\u9886\u8896\u548c\u5b9e\u5730\u652f\u6301\u8005\u8ddf\u8fdb\u3002",
    programReliefDetailBody:
      "WCA \u4e3a\u53d7\u8d2b\u56f0\u3001\u6d41\u79bb\u5931\u6240\u3001\u51b2\u7a81\u548c\u7d27\u6025\u793e\u533a\u9700\u6c42\u5f71\u54cd\u7684\u5bb6\u5ead\u7ec4\u7ec7\u98df\u54c1\u548c\u975e\u98df\u54c1\u63f4\u52a9\u3002",
    programReliefPoint1: "\u98df\u54c1\u652f\u6301\u3001\u536b\u751f\u80a5\u7682\u3001\u8863\u7269\u3001\u868a\u5e10\u548c\u5bb6\u5ead\u5fc5\u9700\u54c1\u3002",
    programReliefPoint2: "\u6839\u636e\u6709\u8bb0\u5f55\u7684\u793e\u533a\u9700\u6c42\u8fdb\u884c\u5b9e\u5730\u5206\u53d1\u3002",
    programReliefPoint3: "\u7528\u7167\u7247\u548c\u62a5\u544a\u5e2e\u52a9\u652f\u6301\u8005\u4e86\u89e3\u6350\u6b3e\u5982\u4f55\u4f7f\u7528\u3002",
    programCommunityDetailBody:
      "WCA \u4e0e\u672c\u5730\u793e\u533a\u5408\u4f5c\uff0c\u901a\u8fc7\u5ba3\u4f20\u3001\u5fc3\u7406\u793e\u4f1a\u652f\u6301\u3001\u804c\u4e1a\u6280\u80fd\u548c\u5021\u5bfc\u589e\u5f3a\u97e7\u6027\u3002",
    programCommunityPoint1: "\u4e3a\u5f31\u52bf\u5bb6\u5ead\u63d0\u4f9b\u5ba3\u4f20\u548c\u5fc3\u7406\u793e\u4f1a\u652f\u6301\u3002",
    programCommunityPoint2: "\u6280\u80fd\u53d1\u5c55\u548c\u4ee5\u793e\u533a\u4e3a\u4e2d\u5fc3\u7684\u9879\u76ee\u3002",
    programCommunityPoint3: "\u5c06\u5b9e\u5730\u9700\u6c42\u4e0e\u6350\u52a9\u8005\u548c\u673a\u6784\u4f19\u4f34\u8fde\u63a5\u7684\u5021\u5bfc\u3002",
    partnersPageTitle: "\u63a8\u52a8\u4f7f\u547d\u524d\u884c\u7684\u672c\u5730\u534f\u8c03\u8005\u548c\u56fd\u9645\u652f\u6301\u8005\u3002",
    partnersPageLead:
      "WCA \u7684\u4f19\u4f34\u7f51\u7edc\u5c06\u4e1c\u975e\u53ef\u4fe1\u7684\u5b9e\u5730\u652f\u6301\u8005\u4e0e\u6d77\u5916\u4fa8\u6c11\u548c\u53cb\u597d\u4eba\u58eb\u8054\u7cfb\u8d77\u6765\u3002\u4ed6\u4eec\u5171\u540c\u8bc6\u522b\u9700\u6c42\u3001\u534f\u8c03\u6d3b\u52a8\u3001\u52a8\u5458\u6350\u6b3e\uff0c\u5e76\u4f7f\u534f\u4f1a\u4e0e\u6240\u670d\u52a1\u7684\u793e\u533a\u4fdd\u6301\u7d27\u5bc6\u8054\u7cfb\u3002",
    summaryPartners: "\u5217\u51fa\u7684\u534f\u8c03\u5458",
    summaryLocations: "\u652f\u6301\u5730\u70b9",
    summaryRegions: "\u8fde\u63a5\u533a\u57df",
    partnersCount8: "8",
    partnersCount6: "8",
    partnersCount2: "2",
    partnersCount1: "1",
    impactPageTitle: "\u5c06\u5b9e\u5730\u884c\u52a8\u8f6c\u5316\u4e3a\u53ef\u8861\u91cf\u7684\u6539\u53d8\u3002",
    impactPageLead:
      "WCA \u901a\u8fc7\u89c2\u5bdf\u6bcf\u6b21\u6d3b\u52a8\u540e\u513f\u7ae5\u548c\u5bb6\u5ead\u7684\u53d8\u5316\u6765\u8861\u91cf\u5f71\u54cd\uff1a\u5b66\u751f\u662f\u5426\u5e26\u7740\u6240\u9700\u7528\u54c1\u56de\u5230\u5b66\u6821\uff0c\u5bb6\u5ead\u662f\u5426\u53ca\u65f6\u83b7\u5f97\u98df\u54c1\u548c\u536b\u751f\u652f\u6301\uff0c\u5f31\u52bf\u4eba\u7fa4\u662f\u5426\u611f\u5230\u88ab\u966a\u4f34\uff0c\u4ee5\u53ca\u672c\u5730\u4f19\u4f34\u662f\u5426\u80fd\u5728\u4e0b\u4e00\u6b21\u793e\u533a\u9700\u6c42\u51fa\u73b0\u65f6\u66f4\u5feb\u54cd\u5e94\u3002\u6bcf\u4efd\u516c\u5f00\u66f4\u65b0\u90fd\u5e94\u8054\u7cfb\u7167\u7247\u3001\u65e5\u671f\u3001\u5730\u70b9\u3001\u53d7\u76ca\u4eba\u6570\u548c\u8ddf\u8fdb\u8bf4\u660e\u3002",
    contactHeading: "\u8054\u7cfb",
    contactFormTitle: "\u7ed9\u6211\u4eec\u7559\u8a00",
    contactName: "\u60a8\u7684\u59d3\u540d",
    contactEmail: "\u60a8\u7684\u90ae\u7bb1",
    contactSubject: "\u4e3b\u9898",
    contactMessage: "\u60a8\u7684\u7559\u8a00",
    contactSubmit: "\u63d0\u4ea4",
    socialHeading: "\u5728\u793e\u4ea4\u5a92\u4f53\u4e0a\u5173\u6ce8\u6211\u4eec\uff01",
    visitUs: "\u6765\u8bbf\u6211\u4eec",
    emailUs: "\u53d1\u90ae\u4ef6\u7ed9\u6211\u4eec",
    callUs: "\u7ed9\u6211\u4eec\u6253\u7535\u8bdd",
    openingContactEmail: "\u6b63\u5728\u6253\u5f00\u9884\u5148\u51c6\u5907\u597d\u7684\u8054\u7cfb\u90ae\u4ef6\uff0c\u8bf7\u60a8\u786e\u8ba4\u3002",
    navTeam: "\u6211\u4eec\u7684\u56e2\u961f",
    teamKicker: "\u6211\u4eec\u7684\u56e2\u961f",
    teamFounders: "\u521b\u59cb\u4eba",
    teamCoordinators: "\u534f\u8c03\u5458",
    pageTitleFounders: "\u521b\u59cb\u4eba",
    pageTitleCoordinators: "\u534f\u8c03\u5458",
    foundersPageTitle: "\u5f15\u9886 WCA \u4f7f\u547d\u7684\u521b\u59cb\u4eba\u3002",
    foundersPageLead:
      "Wisdom Children Association \u7531\u4e00\u5c0f\u7fa4\u5bcc\u6709\u8d23\u4efb\u5fc3\u7684\u9886\u5bfc\u8005\u521b\u7acb\uff0c\u4ed6\u4eec\u5c06\u5bf9\u5f31\u52bf\u513f\u7ae5\u548c\u5bb6\u5ead\u7684\u5171\u540c\u5173\u5207\u8f6c\u5316\u4e3a\u6709\u7ec4\u7ec7\u7684\u5b9e\u5730\u884c\u52a8\u3002",
    founderRole: "\u521b\u59cb\u4eba",
    founderBody1: "\u652f\u6301\u534f\u4f1a\u613f\u666f\u3001\u5b9e\u5730\u65b9\u5411\u548c\u4ee5\u793e\u533a\u4e3a\u4e2d\u5fc3\u7684\u884c\u52a8\u3002",
    founderBody2: "\u5e2e\u52a9\u5f15\u5bfc WCA \u7684\u4eba\u9053\u627f\u8bfa\u3001\u5916\u5c55\u548c\u5bf9\u5f31\u52bf\u5bb6\u5ead\u7684\u5173\u6000\u3002",
    founderBody3: "\u8df5\u884c\u540c\u7406\u3001\u900f\u660e\u3001\u5c0a\u4e25\u548c\u52a1\u5b9e\u670d\u52a1\u7684\u4ef7\u503c\u89c2\u3002",
    coordinatorsPageTitle: "\u63a8\u52a8\u4f7f\u547d\u524d\u884c\u7684\u534f\u8c03\u5458\u548c\u5b9e\u5730\u652f\u6301\u8005\u3002",
    coordinatorsPageLead:
      "WCA \u7684\u534f\u8c03\u7f51\u7edc\u5c06\u4e1c\u975e\u53ef\u4fe1\u7684\u5b9e\u5730\u652f\u6301\u8005\u4e0e\u6d77\u5916\u4fa8\u6c11\u548c\u53cb\u597d\u4eba\u58eb\u8054\u7cfb\u8d77\u6765\u3002\u4ed6\u4eec\u5171\u540c\u8bc6\u522b\u9700\u6c42\u3001\u534f\u8c03\u6d3b\u52a8\u3001\u52a8\u5458\u6350\u6b3e\uff0c\u5e76\u4f7f\u534f\u4f1a\u4e0e\u6240\u670d\u52a1\u7684\u793e\u533a\u4fdd\u6301\u7d27\u5bc6\u8054\u7cfb\u3002",
    faqTitle: "\u5e38\u89c1\u95ee\u9898",
    faqQuestion1: "\u5982\u4f55\u8054\u7cfb Wisdom Children Association\uff1f",
    faqAnswer1: "\u60a8\u53ef\u4ee5\u76f4\u63a5\u53d1\u90ae\u4ef6\u5230 wisdomchildrenf@gmail.com\uff0c\u6216\u62e8\u6253\u5217\u51fa\u7684\u4efb\u4f55\u7535\u8bdd\u53f7\u7801\u3002",
    faqQuestion2: "\u5982\u4f55\u6210\u4e3a\u4f1a\u5458\uff1f",
    faqAnswer2: "\u8bf7\u4f7f\u7528\u9996\u9875\u7684 Circle of Friends \u4f1a\u5458\u8868\u5355\u3002\u5b83\u4f1a\u51c6\u5907\u4e00\u5c01\u60a8\u53ef\u4ee5\u67e5\u770b\u5e76\u53d1\u9001\u7ed9 WCA \u7684\u90ae\u4ef6\u3002",
    faqQuestion3: "\u5982\u4f55\u6350\u6b3e\uff1f",
    faqAnswer3: "\u4f7f\u7528\u6350\u52a9\u6309\u94ae\uff0c\u901a\u8fc7\u5b98\u65b9 GoFundMe \u6216 PayPal \u94fe\u63a5\u652f\u6301 WCA\u3002",
    faqQuestion4: "WCA \u5728\u54ea\u91cc\u5de5\u4f5c\uff1f",
    faqAnswer4: "WCA \u8bb0\u5f55\u5e03\u9686\u8fea\u3001\u5362\u65fa\u8fbe\u3001\u4e4c\u5e72\u8fbe\u548c\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd\u7684\u5b9e\u5730\u884c\u52a8\u548c\u8ba1\u5212\u5de5\u4f5c\u3002",
    faqQuestion5: "\u5982\u4f55\u83b7\u53d6\u6700\u65b0\u6d88\u606f\uff1f",
    faqAnswer5: "\u5728\u9875\u811a\u8ba2\u9605\u66f4\u65b0\uff0c\u6216\u901a\u8fc7\u672c\u9875\u793e\u4ea4\u5a92\u4f53\u94fe\u63a5\u5173\u6ce8 WCA\u3002"
  }
};

Object.entries(supplementalLanguageText).forEach(([lang, values]) => {
  Object.assign(languageText[lang], values);
});

const languageBindings = [
  [".skip-link", "skip"],
  [".brand-copy span", "tagline"],
  ['[data-nav-key="navAbout"]', "navAbout"],
  ['[data-nav-key="navPrograms"]', "navPrograms"],
  ['[data-nav-key="navAchievements"]', "navAchievements"],
  ['[data-nav-dropdown-link="aboutKicker"]', "aboutKicker"],
  ['[data-nav-dropdown-link="missionCardTitle"]', "aboutMissionMenu"],
  ['[data-nav-dropdown-link="programEducationTitle"]', "programEducationTitle"],
  ['[data-nav-dropdown-link="programReliefTitle"]', "programReliefTitle"],
  ['[data-nav-dropdown-link="programCommunityTitle"]', "programCommunityTitle"],
  ['[data-nav-key="navTeam"]', "navTeam"],
  ['[data-nav-dropdown-link="teamFounders"]', "teamFounders"],
  ['[data-nav-dropdown-link="teamCoordinators"]', "teamCoordinators"],
  ['[data-nav-key="navImpact"]', "navImpact"],
  ['[data-nav-key="navContact"]', "navContact"],
  [".nav-actions .button.gold", "donate"],
  ["#home .hero-lead", "heroLead"],
  [".hero-stat:nth-child(1) span", "statCountries"],
  [".hero-stat:nth-child(2) span", "statActions"],
  [".hero-stat:nth-child(3) span", "statPupils"],
  [".hero-stat:nth-child(4) span", "statCalendar"],
  ["#about .section-kicker", "aboutKicker"],
  ["#about h2", "aboutTitle"],
  ["#about .section-lead", "aboutLead"],
  [".about-founded", "foundedAbout"],
  ["#about .split > div:first-child > p:nth-of-type(4)", "aboutBody"],
  ["#about .card h3", "governanceTitle"],
  ["#about .card p", "governanceBody"],
  ["#mission .section-kicker", "missionKicker"],
  ["#mission .section-head h2", "missionTitle"],
  ["#mission .section-lead", "missionLead"],
  ["#mission .grid.two .card:nth-child(1) h3", "visionTitle"],
  ["#mission .grid.two .card:nth-child(1) p", "visionBody"],
  ["#mission .grid.two .card:nth-child(2) h3", "missionCardTitle"],
  ["#mission .grid.two .card:nth-child(2) p", "missionCardBody"],
  ["#mission .grid.three .card:nth-child(1) h3", "educationTitle"],
  ["#mission .grid.three .card:nth-child(1) p", "educationBody"],
  ["#mission .grid.three .card:nth-child(2) h3", "healthTitle"],
  ["#mission .grid.three .card:nth-child(2) p", "healthBody"],
  ["#mission .grid.three .card:nth-child(3) h3", "trainingTitle"],
  ["#mission .grid.three .card:nth-child(3) p", "trainingBody"],
  ["#mission .grid.three .card:nth-child(4) h3", "womenTitle"],
  ["#mission .grid.three .card:nth-child(4) p", "womenBody"],
  ["#mission .grid.three .card:nth-child(5) h3", "environmentTitle"],
  ["#mission .grid.three .card:nth-child(5) p", "environmentBody"],
  ["#mission .grid.three .card:nth-child(6) h3", "equalityTitle"],
  ["#mission .grid.three .card:nth-child(6) p", "equalityBody"],
  ["#programs .section-kicker", "programsKicker"],
  ["#programs .section-head h2", "programsTitle"],
  ["#programs .section-lead", "programsLead"],
  ["#programs .program-card:nth-child(1) h3", "programEducationTitle"],
  ["#programs .program-card:nth-child(1) p", "programEducationBody"],
  ["#programs .program-card:nth-child(2) h3", "programReliefTitle"],
  ["#programs .program-card:nth-child(2) p", "programReliefBody"],
  ["#programs .program-card:nth-child(3) h3", "programCommunityTitle"],
  ["#programs .program-card:nth-child(3) p", "programCommunityBody"],
  ["#programs caption", "plannedActions"],
  ["#programs th:nth-child(1)", "date"],
  ["#programs th:nth-child(2)", "location"],
  ["#programs th:nth-child(3)", "action"],
  ["#areas .section-kicker", "areasKicker"],
  ["#areas h2", "areasTitle"],
  ["#areas .section-lead", "areasLead"],
  ["#achievements .section-kicker", "achievementsKicker"],
  ["#achievements h2", "achievementsTitle"],
  ["#achievements .section-lead", "achievementsLead"],
  ['[data-filter="all"]', "filterAll"],
  ["#partners .section-kicker", "partnersKicker"],
  ["#partners h2", "partnersTitle"],
  ["#partners .section-lead", "partnersLead"],
  ["#impact .section-kicker", "impactKicker"],
  ["#impact .impact-grid > div:first-child h2", "impactTitle"],
  ["#impact .section-lead", "impactLead"],
  ["#impact .card h3", "impactCardTitle"],
  ["#accountability .section-kicker", "accountabilityKicker"],
  ["#accountability h2", "accountabilityTitle"],
  ["#accountability .section-lead", "accountabilityLead"],
  ["#donate .section-kicker", "donateKicker"],
  ["#donate h2", "donateTitle"],
  ["#donate .donate-band p:not(.section-kicker)", "donateBody"],
  ['#donate .donate-actions a[href*="gofund.me"]', "donateGofundme"],
  ['#donate .donate-actions a[href*="paypal.com"]', "donatePaypalLong"],
  ["#donate .donate-actions .button.secondary", "becomeMember"],
  ["#donate .support-card:nth-child(1) h3", "fundsTitle"],
  ["#donate .support-card:nth-child(1) p", "fundsBody"],
  ["#donate .support-card:nth-child(2) h3", "paymentTitle"],
  ["#donate .support-card:nth-child(2) p", "paymentBody"],
  ["#donate .support-card:nth-child(3) h3", "transparencyTitle"],
  ["#donate .support-card:nth-child(3) p", "transparencyBody"],
  ["#circle .section-kicker", "circleKicker"],
  ["#circle h2", "circleTitle"],
  ["#circle .section-lead", "circleLead"],
  ["#circle .split > div:first-child > p:nth-of-type(3)", "circleBody"],
  ['#circle a[href="#member-application"]', "applyMembership"],
  ["#circle .card h3", "memberContributeTitle"],
  ["#circle .commitment-list li:nth-child(1)", "memberContribute1"],
  ["#circle .commitment-list li:nth-child(2)", "memberContribute2"],
  ["#circle .commitment-list li:nth-child(3)", "memberContribute3"],
  ["#circle .commitment-list li:nth-child(4)", "memberContribute4"],
  ["#member-application .section-kicker", "membershipKicker"],
  ["#member-application h2", "membershipTitle"],
  ["#member-application .section-lead", "membershipLead"],
  ['label[for="fullName"]', "fullName"],
  ['label[for="email"]', "emailAddress"],
  ['label[for="country"]', "countryResidence"],
  ['#country option[value=""]', "selectCountry"],
  ['label[for="phone"]', "phoneWhatsapp"],
  ["[data-phone-help]", "phoneDefault"],
  ['label[for="supportType"]', "participate"],
  ["#supportType option:nth-child(1)", "annualMember"],
  ["#supportType option:nth-child(2)", "volunteer"],
  ["#supportType option:nth-child(3)", "partner"],
  ["#supportType option:nth-child(4)", "donor"],
  ["#supportType option:nth-child(5)", "other"],
  ['#country option[value="Other country"]', "otherCountryOption"],
  ['label[for="message"]', "message"],
  ['[data-membership-form] button[type="submit"]', "prepareMembership"],
  ["#policies .section-kicker", "policiesKicker"],
  ["#policies h2", "policiesTitle"],
  ["#policies .section-lead", "policiesLead"],
  ["#policies details:nth-child(1) summary", "privacy"],
  ["#policies details:nth-child(2) summary", "donationPolicy"],
  ["#policies details:nth-child(3) summary", "terms"],
  ["#policies details:nth-child(1) .policy-body p", "privacyBody"],
  ["#policies details:nth-child(2) .policy-body p", "donationPolicyBody"],
  ["#policies details:nth-child(3) .policy-body p", "termsBody"],
  [".site-footer .muted", "footerBody"],
  ['label[for="newsletterEmail"]', "receiveUpdates"],
  ['[data-newsletter-form] button[type="submit"]', "subscribe"],
  [".footer-contact > h3", "navContact"],
  [".footer-social > h3", "socialHeading"],
  [".footer-bottom span", "copyright"]
];

const languageAttributeBindings = [
  ["[data-menu-toggle]", "aria-label", "menuOpen"],
  ["[data-language-select]", "aria-label", "chooseLanguage"],
  ["#fullName", "placeholder", "fullNamePlaceholder"],
  ["#email", "placeholder", "emailPlaceholder"],
  ["#phone", "placeholder", "phoneDefault"],
  ["#message", "placeholder", "messagePlaceholder"],
  ["#newsletterEmail", "placeholder", "newsletterPlaceholder"]
];

let currentLanguage = "en";

function getLanguageText(key, lang = currentLanguage) {
  return languageText[lang]?.[key] || languageText.en[key] || "";
}

window.wcaGetLanguageText = getLanguageText;

function setLanguage(lang) {
  currentLanguage = languageText[lang] ? lang : "en";
  document.documentElement.lang = currentLanguage === "zh" ? "zh" : currentLanguage;
  document.title = document.body.dataset.pageTitleKey
    ? `${getLanguageText(document.body.dataset.pageTitleKey)} | Wisdom Children Association`
    : document.body.dataset.pageTitle
    ? `${document.body.dataset.pageTitle} | Wisdom Children Association`
    : getLanguageText("title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", getLanguageText("description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getLanguageText(element.getAttribute("data-i18n") || "");
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", getLanguageText(element.getAttribute("data-i18n-placeholder") || ""));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", getLanguageText(element.getAttribute("data-i18n-title") || ""));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getLanguageText(element.getAttribute("data-i18n-aria-label") || ""));
  });

  languageBindings.forEach(([selector, key]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = getLanguageText(key);
    });
  });

  languageAttributeBindings.forEach(([selector, attribute, key]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.setAttribute(attribute, getLanguageText(key));
    });
  });

  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }

  try {
    window.localStorage.setItem("wca-language", currentLanguage);
  } catch (error) {
    // Language persistence is optional; the selector still works without localStorage.
  }
}

if (languageSelect) {
  languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));

  let savedLanguage = "en";
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  try {
    savedLanguage = requestedLanguage || window.localStorage.getItem("wca-language") || "en";
  } catch (error) {
    savedLanguage = requestedLanguage || "en";
  }
  setLanguage(savedLanguage);
}

const heroSlides = [...document.querySelectorAll("[data-hero-slide]")];
const heroDots = [...document.querySelectorAll("[data-hero-dot]")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let heroIndex = 0;
let heroTimer;

function showHeroSlide(index) {
  if (!heroSlides.length) return;
  heroIndex = (index + heroSlides.length) % heroSlides.length;

  heroSlides.forEach((slide, slideIndex) => {
    const active = slideIndex === heroIndex;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });

  heroDots.forEach((dot, dotIndex) => {
    const active = dotIndex === heroIndex;
    dot.classList.toggle("is-active", active);
    if (active) {
      dot.setAttribute("aria-current", "true");
    } else {
      dot.removeAttribute("aria-current");
    }
  });
}

function stopHeroCarousel() {
  if (heroTimer) {
    window.clearInterval(heroTimer);
    heroTimer = undefined;
  }
}

function startHeroCarousel() {
  if (reduceMotion || heroSlides.length < 2) return;
  stopHeroCarousel();
  heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 5000);
}

if (heroSlides.length) {
  showHeroSlide(0);
  startHeroCarousel();

  heroDots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
      showHeroSlide(dotIndex);
      startHeroCarousel();
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopHeroCarousel();
    } else {
      startHeroCarousel();
    }
  });
}

document.querySelectorAll(".event-gallery").forEach((gallery) => {
  const pictures = [...gallery.querySelectorAll("picture")];
  if (pictures.length < 2) return;

  let activeIndex = 0;
  gallery.classList.add("is-carousel");

  const previousButton = document.createElement("button");
  previousButton.type = "button";
  previousButton.className = "gallery-control gallery-prev";
  previousButton.setAttribute("aria-label", "Previous photo");
  previousButton.textContent = "<";

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "gallery-control gallery-next";
  nextButton.setAttribute("aria-label", "Next photo");
  nextButton.textContent = ">";

  const count = document.createElement("span");
  count.className = "gallery-count";

  const dots = document.createElement("div");
  dots.className = "gallery-dots";
  dots.setAttribute("aria-label", "Photo selector");

  const dotButtons = pictures.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show photo ${index + 1}`);
    dot.addEventListener("click", () => showGalleryPhoto(index));
    dots.append(dot);
    return dot;
  });

  function showGalleryPhoto(index) {
    activeIndex = (index + pictures.length) % pictures.length;
    pictures.forEach((picture, pictureIndex) => {
      const active = pictureIndex === activeIndex;
      picture.classList.toggle("is-active", active);
      picture.setAttribute("aria-hidden", String(!active));
    });
    dotButtons.forEach((dot, dotIndex) => {
      const active = dotIndex === activeIndex;
      dot.classList.toggle("is-active", active);
      if (active) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
    count.textContent = `${activeIndex + 1} / ${pictures.length}`;
  }

  previousButton.addEventListener("click", () => showGalleryPhoto(activeIndex - 1));
  nextButton.addEventListener("click", () => showGalleryPhoto(activeIndex + 1));

  gallery.append(previousButton, nextButton, count, dots);
  showGalleryPhoto(0);
});

const achievementFilters = document.querySelector("[data-achievement-filters]");

if (achievementFilters) {
  const filterButtons = [...achievementFilters.querySelectorAll("[data-filter]")];
  const timelineCards = [...document.querySelectorAll(".timeline-card[data-year][data-country]")];
  const emptyState = document.querySelector("[data-empty-achievements]");

  function setAchievementFilter(filter) {
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const active = item.dataset.filter === filter;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    timelineCards.forEach((card) => {
      const matches =
        filter === "all" || card.dataset.year === filter || card.dataset.country === filter;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setAchievementFilter(button.dataset.filter || "all");
    });
  });

}

const navLinks = [...document.querySelectorAll("[data-nav-menu] a[href^='#']")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.setAttribute(
        "aria-current",
        String(link.getAttribute("href") === `#${visible.target.id}`)
      );
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
);

sections.forEach((section) => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  revealObserver.observe(element);
});

function encodeMail(value) {
  return encodeURIComponent(value);
}

function openMail({ to, subject, body }) {
  window.location.href = `mailto:${to}?subject=${encodeMail(subject)}&body=${encodeMail(body)}`;
}

const membershipForm = document.querySelector("[data-membership-form]");

function genericPhoneProfile(dialCode, example, minLocalLength = 7, maxLocalLength = 12) {
  const exampleLocal = example.replace(dialCode, "").trim();
  const groups = exampleLocal.split(/\D+/).filter(Boolean).map((part) => part.length);

  return {
    dialCode,
    example,
    flexible: true,
    groups: groups.length ? groups : [3, 3, 4],
    minLocalLength,
    maxLocalLength
  };
}

const countryPhoneFormats = {
  Burundi: {
    dialCode: "+(257)",
    example: "+(257) 6286 9829",
    groups: [4, 4],
    localLength: 8
  },
  "Democratic Republic of Congo": {
    dialCode: "+243",
    example: "+243 81 234 5678",
    groups: [2, 3, 4],
    localLength: 9
  },
  Rwanda: {
    dialCode: "+250",
    example: "+250 788 123 456",
    groups: [3, 3, 3],
    localLength: 9
  },
  Uganda: {
    dialCode: "+256",
    example: "+256 700 123 456",
    groups: [3, 3, 3],
    localLength: 9
  },
  "United States": {
    dialCode: "+1",
    example: "+1 (804) 316-2849",
    groups: [3, 3, 4],
    localLength: 10,
    northAmerica: true
  },
  Canada: {
    dialCode: "+1",
    example: "+1 (416) 555-0130",
    groups: [3, 3, 4],
    localLength: 10,
    northAmerica: true
  },
  "United Arab Emirates": {
    dialCode: "+971",
    example: "+971 50 123 4567",
    groups: [2, 3, 4],
    localLength: 9
  },
  Kenya: {
    dialCode: "+254",
    example: "+254 712 345 678",
    groups: [3, 3, 3],
    localLength: 9
  },
  Tanzania: {
    dialCode: "+255",
    example: "+255 712 345 678",
    groups: [3, 3, 3],
    localLength: 9
  },
  "South Africa": {
    dialCode: "+27",
    example: "+27 82 123 4567",
    groups: [2, 3, 4],
    localLength: 9,
    trunk: "0"
  },
  "United Kingdom": {
    dialCode: "+44",
    example: "+44 7400 123 456",
    groups: [4, 3, 3],
    localLength: 10,
    trunk: "0"
  },
  France: {
    dialCode: "+33",
    example: "+33 6 12 34 56 78",
    groups: [1, 2, 2, 2, 2],
    localLength: 9,
    trunk: "0"
  },
  Belgium: {
    dialCode: "+32",
    example: "+32 470 12 34 56",
    groups: [3, 2, 2, 2],
    localLength: 9,
    trunk: "0"
  },
  "South Sudan": genericPhoneProfile("+211", "+211 92 123 4567", 9, 9),
  Zambia: genericPhoneProfile("+260", "+260 97 123 4567", 9, 9),
  Germany: genericPhoneProfile("+49", "+49 151 2345 6789", 8, 12),
  Netherlands: genericPhoneProfile("+31", "+31 6 1234 5678", 9, 9),
  Switzerland: genericPhoneProfile("+41", "+41 76 123 45 67", 9, 9),
  Italy: genericPhoneProfile("+39", "+39 347 123 4567", 9, 10),
  Spain: genericPhoneProfile("+34", "+34 612 345 678", 9, 9),
  Portugal: genericPhoneProfile("+351", "+351 912 345 678", 9, 9),
  Ireland: genericPhoneProfile("+353", "+353 87 123 4567", 9, 9),
  Sweden: genericPhoneProfile("+46", "+46 70 123 45 67", 9, 9),
  Norway: genericPhoneProfile("+47", "+47 412 34 567", 8, 8),
  Denmark: genericPhoneProfile("+45", "+45 20 12 34 56", 8, 8),
  Australia: genericPhoneProfile("+61", "+61 412 345 678", 9, 9),
  "New Zealand": genericPhoneProfile("+64", "+64 21 123 4567", 8, 10),
  Brazil: genericPhoneProfile("+55", "+55 11 91234 5678", 10, 11),
  Mexico: genericPhoneProfile("+52", "+52 55 1234 5678", 10, 10),
  India: genericPhoneProfile("+91", "+91 98765 43210", 10, 10),
  China: genericPhoneProfile("+86", "+86 138 0013 8000", 11, 11),
  Japan: genericPhoneProfile("+81", "+81 90 1234 5678", 10, 10),
  "Other country": {
    dialCode: "+",
    example: "+ country code and phone number",
    flexible: true,
    other: true,
    minLocalLength: 8,
    maxLocalLength: 15
  }
};

function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

function localDigitsForCountry(value, profile) {
  const digits = digitsOnly(value);
  const dialDigits = digitsOnly(profile.dialCode);
  let local = digits;

  if (digits.startsWith(dialDigits)) {
    local = digits.slice(dialDigits.length);
  } else if (profile.northAmerica && digits.length === 11 && digits.startsWith("1")) {
    local = digits.slice(1);
  }

  if (profile.trunk && local.length === profile.localLength + 1 && local.startsWith(profile.trunk)) {
    local = local.slice(1);
  }

  return local;
}

function groupDigits(value, groups) {
  const parts = [];
  let cursor = 0;
  groups.forEach((group) => {
    parts.push(value.slice(cursor, cursor + group));
    cursor += group;
  });
  return parts.filter(Boolean);
}

function formatPhoneNumber(value, profile) {
  if (profile.other) {
    const digits = digitsOnly(value);
    const hasInternationalPrefix = String(value || "").trim().startsWith("+");
    if (!hasInternationalPrefix || digits.length < profile.minLocalLength || digits.length > profile.maxLocalLength) {
      return "";
    }
    return `+${digits}`;
  }

  const local = localDigitsForCountry(value, profile);

  if (profile.flexible) {
    if (local.length < profile.minLocalLength || local.length > profile.maxLocalLength) return "";
    return `${profile.dialCode} ${groupDigits(local, profile.groups).join(" ")}`;
  }

  if (local.length !== profile.localLength) return "";

  if (profile.northAmerica) {
    return `${profile.dialCode} (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
  }

  return `${profile.dialCode} ${groupDigits(local, profile.groups).join(" ")}`;
}

if (membershipForm) {
  const countrySelect = membershipForm.querySelector("[data-country-select]");
  const phoneInput = membershipForm.querySelector("[data-phone-input]");
  const phoneHelp = membershipForm.querySelector("[data-phone-help]");

  function selectedPhoneProfile() {
    return countrySelect ? countryPhoneFormats[countrySelect.value] : undefined;
  }

  function updatePhoneGuide() {
    const profile = selectedPhoneProfile();
    if (!phoneInput || !phoneHelp) return;

    phoneInput.setCustomValidity("");

    if (!profile) {
      phoneInput.placeholder = getLanguageText("phoneDefault");
      phoneInput.title = getLanguageText("phoneDefault");
      phoneHelp.textContent = getLanguageText("phoneDefault");
      return;
    }

    phoneInput.placeholder = profile.example;
    phoneInput.title = `Use this format: ${profile.example}`;
    phoneHelp.textContent = `Required format: ${profile.example}`;

    const formatted = formatPhoneNumber(phoneInput.value, profile);
    if (formatted) phoneInput.value = formatted;
  }

  function validateSelectedPhone() {
    const profile = selectedPhoneProfile();
    if (!phoneInput || !profile) return true;
    const formatted = formatPhoneNumber(phoneInput.value, profile);

    if (!formatted) {
      phoneInput.setCustomValidity(`Enter a valid phone number for ${countrySelect.value}. Example: ${profile.example}`);
      phoneInput.reportValidity();
      return false;
    }

    phoneInput.value = formatted;
    phoneInput.setCustomValidity("");
    return true;
  }

  if (countrySelect && phoneInput) {
    countrySelect.addEventListener("change", updatePhoneGuide);
    phoneInput.addEventListener("blur", updatePhoneGuide);
    updatePhoneGuide();
  }

  membershipForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!membershipForm.checkValidity()) {
      membershipForm.reportValidity();
      return;
    }
    if (!validateSelectedPhone()) return;

    const form = new FormData(membershipForm);
    const status = membershipForm.querySelector("[data-form-status]");
    const fullName = form.get("fullName") || "";
    const body = [
      "Dear Wisdom Children Association team,",
      "",
      "I would like to apply to join the Circle of Friends.",
      "",
      "Applicant details:",
      `Full name: ${fullName}`,
      `Email address: ${form.get("email") || ""}`,
      `Phone / WhatsApp: ${form.get("phone") || ""}`,
      `Country of residence: ${form.get("country") || ""}`,
      `Preferred participation: ${form.get("supportType") || ""}`,
      "",
      "Message:",
      form.get("message") || "No additional message provided.",
      "",
      "Thank you,",
      fullName
    ].join("\n");

    if (status) {
      status.textContent = getLanguageText("openingMembershipEmail");
    }

    openMail({
      to: "wisdomchildrenf@gmail.com",
      subject: "Circle of Friends Membership Application - Wisdom Children Association",
      body
    });
  });
}

const newsletterForm = document.querySelector("[data-newsletter-form]");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(newsletterForm).get("email") || "";
    const status = newsletterForm.querySelector("[data-form-status]");

    if (status) {
      status.textContent = getLanguageText("openingNewsletterEmail");
    }

    openMail({
      to: "wisdomchildrenf@gmail.com",
      subject: "Newsletter Subscription Request - Wisdom Children Association",
      body: [
        "Dear Wisdom Children Association team,",
        "",
        "Please add me to the Wisdom Children Association updates list.",
        "",
        `Subscriber email: ${email}`,
        "",
        "Thank you."
      ].join("\n")
    });
  });
}
