import { useState, useEffect } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/img/logo.png";
import computerLabImg from "@/imports/image-3.png";
import aboutMainImg from "@/img/580 x 288.png";
import aboutSmallImg1 from "@/img/282 x 144.png";
import aboutSmallImg2 from "@/img/282 x 144 1.png";
import methodologyImg from "@/img/Méthodologie.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import {
  Menu, X, ArrowRight, ChevronRight,
  Lightbulb, Briefcase, GraduationCap, FlaskConical,
  Globe, Users, TrendingUp, Award,
  Phone, Mail, MapPin,
  Building2, BookOpen, Microscope, Handshake,
  CheckCircle2, Cpu, Wrench, Zap, Sun, Mountain, Beaker,
  Dna, Calculator, Scale, MessageSquare, ImageIcon, Languages,
  ShieldCheck, Flame, HeartPulse, FileText, ClipboardCheck,
  Calendar, Landmark
} from "lucide-react";
import { motion } from "motion/react";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Structure", href: "#structure" },
  { label: "Domaines", href: "#domaines" },
  { label: "Formations", href: "#formations" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Nos Missions", href: "#missions" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "25+", label: "Années d'expérience", icon: Award },
  { value: "120+", label: "Projets valorisés", icon: TrendingUp },
  { value: "40+", label: "Partenaires", icon: Handshake },
  { value: "850+", label: "Chercheurs accompagnés", icon: Users },
];

const MISSIONS = [
  {
    icon: Lightbulb,
    title: "Valorisation de la Recherche",
    description:
      "Transformer les résultats de la recherche universitaire en solutions concrètes à haute valeur ajoutée pour les secteurs public et privé.",
  },
  {
    icon: Briefcase,
    title: "Transfert de Technologie",
    description:
      "Faciliter le passage des innovations issues des laboratoires vers le marché à travers des partenariats stratégiques durables.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Expertise",
    description:
      "Proposer des formations certifiantes et des expertises spécialisées en mobilisant les compétences des enseignants-chercheurs.",
  },
  {
    icon: FlaskConical,
    title: "Incubation & Innovation",
    description:
      "Accompagner les porteurs de projets innovants issus du milieu universitaire vers la création d'entreprise.",
  },
];

const DOMAINS = [
  {
    icon: BookOpen,
    title: "Sciences Humaines & Sociales",
    items: ["Études socio-économiques", "Recherche juridique", "Sciences politiques", "Linguistique appliquée"],
  },
  {
    icon: Microscope,
    title: "Sciences & Technologies",
    items: ["Agronomie & environnement", "Ingénierie appliquée", "Chimie industrielle", "Santé publique"],
  },
  {
    icon: Building2,
    title: "Développement Économique",
    items: ["Conseil aux entreprises", "Études de marché", "Audit & évaluation", "Développement local"],
  },
  {
    icon: Globe,
    title: "Coopération Internationale",
    items: ["Projets bilatéraux", "Programmes régionaux", "Mobilité académique", "Réseaux de recherche"],
  },
];

const LAB_COMPETENCES = [
  { icon: Cpu, title: "Informatique", items: ["Maintenance", "Logiciel", "Solutions numériques"] },
  { icon: Wrench, title: "Mécanique", items: ["Dessin", "DAO", "RDM", "Conception"] },
  { icon: Zap, title: "Électricité", items: ["Moteurs", "Électronique", "Distribution"] },
  { icon: Sun, title: "Solaire", items: ["Photovoltaïque", "Thermique"] },
  { icon: Mountain, title: "Géologie", items: ["Ressources", "Gestion de l'eau"] },
  { icon: Beaker, title: "Chimie", items: ["Organique", "Minérale"] },
  { icon: Dna, title: "Biologie", items: ["Végétale", "Animale", "Microbiologie"] },
  { icon: Calculator, title: "Gestion", items: ["Finance", "Commerce"] },
  { icon: Scale, title: "Droit", items: ["Public", "Privé", "Droit des affaires"] },
  { icon: MessageSquare, title: "Communication", items: ["Écrite", "Parlée", "Audiovisuelle"] },
  { icon: ImageIcon, title: "Traitement de l'image", items: ["Photo", "Géographie"] },
  { icon: Languages, title: "Interprétariat", items: ["Anglais", "Français", "Arabe"] },
  { icon: ShieldCheck, title: "Santé et sécurité au travail", items: ["Prévention", "Risques professionnels", "Sécurité"] },
  { icon: Flame, title: "Sécurité Incendie", items: ["Prévention", "Protection", "Intervention"] },
  { icon: HeartPulse, title: "Premiers secours à base communautaire", items: ["Secours", "Formation", "Communautaire"] },
];

const TEAM_RESOURCES = [
  "L'ensemble des ressources humaines de l'Université de N'Djamena : 600 enseignants-chercheurs et techniciens répartis dans 33 départements et laboratoires.",
  "Les spécialistes du secteur productif, scientifique et administratif tchadiens ou étrangers.",
  "Le partenaire français INSAVALOR, filiale d'INSA de Lyon spécialisée en R&D, valorisation et formation continue.",
];

const CAPITAL_DISTRIBUTION = [
  { stakeholder: "L'Université de N'Djaména", percentage: "25%", icon: GraduationCap },
  { stakeholder: "INSAVALOR de Lyon", percentage: "25%", icon: Handshake },
  { stakeholder: "Secteur privé tchadien et organismes", percentage: "25%", icon: Landmark },
  { stakeholder: "Personnels de l'Université de N'Djaména", percentage: "25%", icon: Users },
];

const ORG_CHART = {
  title: "CONSEIL D'ADMINISTATION",
  description: "Orientation, surveillance, contrôle",
  icon: ShieldCheck,
  children: [
    {
      title: "DIRECTION GÉNÉRALE",
      description: "Représentation, suivi",
      icon: Briefcase,
      child: {
        title: "DIRECTION D'EXPLOITATION",
        description: "Organisation, promotion, gestion",
        icon: TrendingUp,
        child: {
          title: "SECRÉTARIAT",
          description: "Marketing, édition, correspondance",
          icon: FileText,
          left: {
            title: "ACTIONS",
            items: ["Formations", "Analyses", "Expertises", "Etudes", "Prestations"],
            icon: Zap
          },
          right: {
            title: "COMPTABILITÉ GESTION",
            description: "Des contrats, des départements, des laboratoires",
            icon: Calculator
          }
        }
      }
    }
  ]
};

const PROCEDURE_STEPS = [
  {
    title: "Élaboration du projet",
    description: "Les consultants d’UNIVALOR élaborent avec le client un projet d’action répondant à ses objectifs de développement et adapté à ses contraintes."
  },
  {
    title: "Solution sur mesure",
    description: "Quelle que soit la taille de l’entreprise ou du service, une solution sur mesure est possible."
  },
  {
    title: "Engagement Qualité",
    description: "UNIVALOR s’engage sur la qualité à travers un cahier des charges avec la caution de l’Université de N’Djamena."
  },
  {
    title: "Contractualisation",
    description: "Un contrat clair précise le rôle et les responsabilités de chacun, complété par un devis garantissant la prestation, la confidentialité et les délais."
  }
];

const realisationImageModules = import.meta.glob("/src/img/Realisations/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const REALISATIONS = [
  {
    date: "2025-11-14",
    displayDate: "14 Nov. 2025",
    title: "Livraison de vidéoprojecteurs et onduleurs au Département de l’informatique et technologie",
    images: [realisationImageModules["/src/img/Realisations/14 Novembre 2025.png"]]
  },
  {
    date: "2022-11-11",
    displayDate: "11 Nov. 2022",
    title: "Livraison de matériels pour le Département des Lettres et Etudes Anglophones",
    images: [
      realisationImageModules["/src/img/Realisations/11-11-2022 (1).png"],
      realisationImageModules["/src/img/Realisations/11-11-2022 (2).png"],
      realisationImageModules["/src/img/Realisations/11-11-2022 (3).png"]
    ]
  },
  {
    date: "2018-03-16",
    displayDate: "16 Mars 2018",
    title: "Livraison d'une trentaine de chaises pour la réunion du Rectorat",
    images: [realisationImageModules["/src/img/Realisations/16-03-2018.png"]]
  },
  {
    date: "2018-01-18",
    displayDate: "Jan. 2018",
    title: "Livraison de matériels pédagogiques à la Faculté des Sciences Exactes et Appliquées",
    images: [
      realisationImageModules["/src/img/Realisations/18-01-2018.png"],
      realisationImageModules["/src/img/Realisations/18-01-2018 (2).png"],
      realisationImageModules["/src/img/Realisations/06-01-2018.png"]
    ]
  },
  {
    date: "2017-10-13",
    displayDate: "13 Oct. 2017",
    title: "Réception de consommables et matériels pour le Département des Lettres et Etudes Anglophones",
    images: [realisationImageModules["/src/img/Realisations/13-10-2017.png"]]
  },
  {
    date: "2017-06-29",
    displayDate: "29 Juin 2017",
    title: "Matériels informatiques pour l’enrôlement biométrique des étudiants (Scolarité centrale)",
    images: [
      realisationImageModules["/src/img/Realisations/29-06-2017 (1).png"],
      realisationImageModules["/src/img/Realisations/29-06-2017 (2).png"],
      realisationImageModules["/src/img/Realisations/29-06-2017 (3).png"]
    ]
  },
  {
    date: "2017-03-30",
    displayDate: "30 Mars 2017",
    title: "Cérémonie de livraison d’une imprimante au Rectorat",
    images: [
      realisationImageModules["/src/img/Realisations/30 Mars 2017 (1).png"],
      realisationImageModules["/src/img/Realisations/30 Mars 2017 (2).png"]
    ]
  },
  {
    date: "2015-05-04",
    displayDate: "04 Mai 2015",
    title: "Consommables et matériels pour le Département des Lettres et Etudes Anglophones",
    images: [realisationImageModules["/src/img/Realisations/04-05-2015.png"]]
  },
  {
    date: "2015-04-04",
    displayDate: "04 Avril 2015",
    title: "Cérémonie officielle de livraison des matériels institutionnels",
    images: [realisationImageModules["/src/img/Realisations/04-04-2015.png"]]
  },
  {
    date: "2015-03-24",
    displayDate: "24 Mars 2015",
    title: "Réception de consommables et matériels pour le Département des Lettres et Etudes Anglophones",
    images: [realisationImageModules["/src/img/Realisations/24-03-2015.png"]]
  },
  {
    date: "2015-01-13",
    displayDate: "13 Jan. 2015",
    title: "Mise en place d’un forage et installation d’un mini-château d’eau au Rectorat",
    images: [
      realisationImageModules["/src/img/Realisations/13-01-2015 (1).png"],
      realisationImageModules["/src/img/Realisations/13-01-2015 (2).png"]
    ]
  },
  {
    date: "2014-05-20",
    displayDate: "20 Mai 2014",
    title: "Livraison de matériels informatiques (10 ordinateurs, imprimantes et photocopieurs) pour CDU et DTJ",
    images: [realisationImageModules["/src/img/Realisations/20-05-2014.png"]]
  },
  {
    date: "2012-03-29",
    displayDate: "29 Mars 2012",
    title: "Réception de matériels pour le compte du Département des Lettres",
    images: [realisationImageModules["/src/img/Realisations/29-03-2012.png"]]
  },
  {
    date: "2010-03-15",
    displayDate: "15 Mars 2010",
    title: "Livraison de matériels (photocopieurs, imprimantes, vidéoprojecteurs) à la Faculté de Droit",
    images: [realisationImageModules["/src/img/Realisations/15 Mars 2010.png"]]
  },
  {
    date: "2010-01-05",
    displayDate: "05 Jan. 2010",
    title: "Construction de deux salles de cours et d’un bureau (Pôle Génie Mécanique RAMSES)",
    images: [
      realisationImageModules["/src/img/Realisations/05-01-2010 (1).png"],
      realisationImageModules["/src/img/Realisations/05-01-2010 (2).png"],
      realisationImageModules["/src/img/Realisations/05-01-2010 (3).png"],
      realisationImageModules["/src/img/Realisations/05-01-2010 (4).png"]
    ]
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const domainImageModules = import.meta.glob("/src/img/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const DOMAIN_IMAGE_ALIASES: Record<string, string[]> = {
  Électricité: ["Electronique"],
};

function normalizeDomainName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase();
}

function getCompetenceImages(title: string) {
  const acceptedNames = [title, ...(DOMAIN_IMAGE_ALIASES[title] ?? [])].map(normalizeDomainName);

  return Object.entries(domainImageModules)
    .filter(([path]) => {
      const filename = path.split(/[\\/]/).pop()?.replace(/\.[^.]+$/, "") ?? "";
      const domainName = filename.replace(/\d+$/, "");
      return acceptedNames.includes(normalizeDomainName(domainName));
    })
    .sort(([a], [b]) => a.localeCompare(b, "fr", { numeric: true }))
    .map(([, src]) => src);
}

const PARTNERS = [
  "Université de N'Djaména",
  "Ministère de l'Enseignement Supérieur",
  "Union Européenne",
  "Banque Mondiale",
  "Agence Française de Développement",
  "CEMAC",
  "Banque Africaine de Développement",
  "PNUD",
];

const formationImageModules = import.meta.glob("/src/img/Formations/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const FORMATIONS = [
  {
    title: "Gouvernance Universitaire",
    description: "Formation au profit des Secrétaires Généraux, Directeurs Généraux, Recteurs des Académies et Présidents des Universités du MESRSFP en septembre 2025.",
    images: [
      formationImageModules["/src/img/Formations/la Gouvernance Universitaire  (1).png"],
      formationImageModules["/src/img/Formations/la Gouvernance Universitaire  (2).png"],
      formationImageModules["/src/img/Formations/la Gouvernance Universitaire  (3).png"],
      formationImageModules["/src/img/Formations/la Gouvernance Universitaire  (4).png"],
    ],
    date: "Septembre 2025"
  },
  {
    title: "Rédaction Administrative & Gestion des Courriers",
    description: "Lancement de la formation au profit des Agents du MESRSFP en Mai 2025.",
    images: [
      formationImageModules["/src/img/Formations/Rédaction Administrative  (1).png"],
      formationImageModules["/src/img/Formations/Rédaction Administrative  (2).png"],
      formationImageModules["/src/img/Formations/Rédaction Administrative  (3).png"],
      formationImageModules["/src/img/Formations/Rédaction Administrative  (4).png"],
    ],
    date: "Mai 2025"
  },
  {
    title: "Bureautique & Langues (CNPCIC)",
    description: "Formation en Excel Avancé, Mandarin et Anglais (Niveau Basic et Intermédiaire) aux agents de la CNPCIC : Juin 2025",
    images: [
      formationImageModules["/src/img/Formations/Excel Avancé (1).png"],
      formationImageModules["/src/img/Formations/Excel Avancé (2).png"],
      formationImageModules["/src/img/Formations/Excel Avancé (3).png"],
      formationImageModules["/src/img/Formations/Excel Avancé (4).png"],
    ],
    date: "Juin 2025"
  },
  {
    title: "Informatique & Module Outlook",
    description: "Lancement de la formation au profit des cadres du Ministère du Pétrole et des Mines : 2023",
    images: [
      formationImageModules["/src/img/Formations/Informatique en module (1).png"],
      formationImageModules["/src/img/Formations/Informatique en module (2).png"],
      formationImageModules["/src/img/Formations/Informatique en module (3).png"],
      formationImageModules["/src/img/Formations/Informatique en module (4).png"],
    ],
    date: "2023"
  }
];

const SUCCESS_FACTORS = [
  "Choix d'une structure avec une gestion autonome.",
  "Mise en place d'un texte juridique clair définissant précisément les attributions de chaque partie, notamment la Convention Cadre.",
  "Promotion d'une culture d'entreprise et pratique d'une gestion rigoureuse et transparente.",
  "Démarrage sans complexe, même avec un chiffre d'affaires faible.",
  "Orientation vers la motivation des intervenants et des prestations de qualité, sans trop privilégier les bénéfices.",
  "Implication des enseignants dans la recherche du marché.",
];

const UNIQUE_EXPERIENCE = [
  "Mise en place d'une structure privée dans un secteur public.",
  "Image positive de l'université dans les secteurs de développement socioéconomique.",
  "Retombées financières importantes pour les enseignants, les départements, l'université et le trésor public.",
  "Insertion réussie dans le tissu socioéconomique du Tchad à l'ère pétrolière.",
];

const HERO_SLIDES = [
  {
    img: computerLabImg,
    alt: "Salle informatique de l'Universite de N'Djamena",
  },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-border"}`}>
      {/* Top bar */}
      <div className="bg-primary hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-1.5 flex justify-end gap-6">
          <a href="tel:+23522514400" className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-['Inter'] transition-colors">
            <Phone size={11} /> +235 22 51 44 00
          </a>
          <a href="mailto:contact@univalorsa.td" className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-['Inter'] transition-colors">
            <Mail size={11} /> contact@univalorsa.td
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("#accueil")} className="flex-shrink-0">
          <img
            src={logoImg}
            alt="Logo UNIVALORSA"
            className="h-10 w-auto object-contain"
            fetchPriority="high"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-['Inter'] text-sm text-foreground hover:text-primary transition-colors duration-150 font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("#contact")}
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-white font-['Inter'] text-sm font-medium px-5 py-2.5 hover:bg-primary/90 transition-colors"
        >
          Contactez-nous <ArrowRight size={14} />
        </button>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => { scrollTo(link.href); setOpen(false); }}
              className="flex items-center gap-2 w-full text-left font-['Inter'] text-sm py-2.5 text-foreground hover:text-primary transition-colors"
            >
              <ChevronRight size={14} className="text-primary" /> {link.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => { scrollTo("#contact"); setOpen(false); }}
              className="w-full bg-primary text-white font-['Inter'] text-sm font-medium px-5 py-3"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="accueil" className="pt-[104px] lg:pt-[72px]">
      {/* Blue header band */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 max-w-3xl">
            <p className="font-['Inter'] text-xs font-semibold tracking-widest text-accent uppercase mb-5">
              Université de N'Djaména — Tchad
            </p>
            <h1 className="font-['Merriweather'] text-3xl lg:text-5xl font-bold text-white leading-snug mb-6">
              La valorisation du savoir universitaire<br />
              au service du développement
            </h1>
            <p className="font-['Inter'] text-base text-white/75 leading-relaxed max-w-xl mb-10">
              UNIVALORSA est la société officielle de valorisation des ressources de l'Université
              de N'Djaména. Nous transformons la recherche académique en solutions opérationnelles
              pour le développement économique et social du Tchad.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("#missions")}
                className="inline-flex items-center gap-2 bg-accent text-foreground font-['Inter'] text-sm font-semibold px-6 py-3 hover:bg-accent/90 transition-colors"
              >
                Nos missions <ArrowRight size={15} />
              </button>
              <button
                onClick={() => scrollTo("#apropos")}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-['Inter'] text-sm font-medium px-6 py-3 hover:bg-white/10 transition-colors"
              >
                En savoir plus
              </button>
            </div>
          </div>

            <div className="lg:col-span-6">
              <Carousel
                opts={{ loop: HERO_SLIDES.length > 1 }}
                className="overflow-hidden border border-white/15 shadow-2xl shadow-black/20"
              >
                <CarouselContent className="-ml-0">
                  {HERO_SLIDES.map((slide) => (
                    <CarouselItem key={slide.alt} className="pl-0">
                      <img
                        src={slide.img}
                        alt={slide.alt}
                        className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[430px]"
                        fetchPriority="high"
                        decoding="async"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-4 px-6 py-6">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-['Merriweather'] text-2xl font-bold text-primary leading-none">{s.value}</div>
                  <div className="font-['Inter'] text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── À propos ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Qui sommes-nous
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-start mt-10">
          <div>
            <h2 className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug mb-6">
              Une institution au cœur de l'innovation universitaire
            </h2>
            <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed mb-5">
              Créée sous l'égide de l'Université de N'Djaména, <strong className="text-foreground">UNIVALORSA</strong> est
              l'interface privilégiée entre la recherche académique et les acteurs économiques et
              institutionnels du Tchad et de la sous-région.
            </p>
            <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed mb-8">
              Notre vocation est de mettre le patrimoine scientifique et intellectuel de l'Université
              au service des défis concrets du développement : agriculture, santé, énergie, gouvernance,
              environnement et innovation technologique.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { titre: "Notre Mission", texte: "Valoriser les travaux universitaires en les transformant en solutions applicables pour les secteurs public et privé." },
                { titre: "Notre Vision", texte: "Faire de l'Université de N'Djaména un acteur central de l'économie du savoir en Afrique centrale." },
              ].map(({ titre, texte }) => (
                <div key={titre} className="border-l-2 border-primary pl-4">
                  <h4 className="font-['Merriweather'] font-bold text-primary text-base mb-2">{titre}</h4>
                  <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">{texte}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-['Inter'] text-sm font-semibold text-foreground mb-4">Nos valeurs fondamentales</h4>
              <ul className="space-y-2">
                {["Excellence académique", "Intégrité et transparence", "Engagement envers le développement", "Innovation responsable"].map(v => (
                  <li key={v} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    <span className="font-['Inter'] text-sm text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="overflow-hidden mb-4">
              <img
                src={aboutMainImg}
                alt="Structure UNIVALORSA"
                className="w-full h-72 object-cover border border-border"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={aboutSmallImg1}
                alt="Détails structure"
                className="w-full h-36 object-cover border border-border"
                loading="lazy"
              />
              <img
                src={aboutSmallImg2}
                alt="Détails structure"
                className="w-full h-36 object-cover border border-border"
                loading="lazy"
              />
            </div>
            <div className="mt-4 bg-primary px-5 py-4 flex items-center gap-3">
              <div className="w-1 h-10 bg-accent flex-shrink-0" />
              <p className="font-['Inter'] text-xs text-white/80 leading-relaxed">
                Société à capitaux publics opérant sous le régime des établissements de valorisation
                universitaire, conformément à la réglementation tchadienne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Structure ────────────────────────────────────────────────────────────────
function Structure() {
  return (
    <section id="structure" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Structure & Gouvernance
          </span>
        </motion.div>
        
        <div className="mt-10 mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug mb-12"
          >
            L'organisation institutionnelle
          </motion.h2>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-secondary p-8 lg:p-10 border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />
              <h3 className="font-['Merriweather'] text-xl font-bold text-primary mb-6">Statut Juridique</h3>
              <div className="space-y-6 relative z-10">
                <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                  Société anonyme au capital de <strong className="text-primary">10 000 000 FCFA</strong>, filiale de l’Université de N’Djamena qui lui délègue toutes les actions de valorisation contractuelles.
                </p>
                <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                  C’est en s’inspirant des expériences d’<strong className="text-primary">INSAVALOR</strong> (filiale de l’INSA de Lyon) dans le domaine de la formation continue et d’expertise que UNIVALOR SA a été créée.
                </p>
                <div className="flex items-center gap-5 bg-white p-5 border border-border shadow-sm">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center text-accent shadow-inner">
                    <Calendar size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-['Inter'] text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">Fondation</div>
                    <div className="font-['Merriweather'] text-xl font-bold text-primary">03 mars 2001</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="lg:col-span-5">
              <h3 className="font-['Merriweather'] text-xl font-bold text-primary mb-8">Répartition du Capital</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CAPITAL_DISTRIBUTION.map((item, idx) => (
                  <motion.div 
                    key={item.stakeholder}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 border border-border shadow-sm hover:border-accent group transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute -bottom-4 -right-4 text-primary/5 group-hover:text-accent/10 transition-colors">
                      <item.icon size={80} strokeWidth={1} />
                    </div>
                    <div className="text-accent mb-4 group-hover:scale-110 transition-transform origin-left">
                      <item.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="font-['Merriweather'] text-3xl font-bold text-primary mb-2">{item.percentage}</div>
                    <p className="font-['Inter'] text-[11px] text-muted-foreground font-semibold leading-tight uppercase tracking-wider">
                      {item.stakeholder}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organigramme */}
        <div className="mt-32 pb-20">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-20"
          >
            <h3 className="font-['Merriweather'] text-2xl lg:text-3xl font-bold text-primary mb-4">Structure Organisationnelle</h3>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* 1. Conseil d'Administration */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-20 w-full max-w-sm bg-primary p-7 shadow-2xl border-t-4 border-accent text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex p-3.5 bg-white/10 rounded-full text-accent mb-5">
                <ShieldCheck size={32} />
              </div>
              <h4 className="font-['Merriweather'] text-xl font-bold text-white mb-2 tracking-wide">{ORG_CHART.title}</h4>
              <p className="font-['Inter'] text-[11px] text-white/60 font-bold uppercase tracking-[0.2em]">{ORG_CHART.description}</p>
            </motion.div>

            {/* Link line */}
            <div className="h-12 w-0.5 bg-accent/40" />

            {/* 2. Direction Générale */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative z-20 w-full max-w-sm bg-white p-7 border-2 border-primary shadow-xl text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex p-3.5 bg-primary/5 rounded-full text-primary mb-5">
                <Briefcase size={28} />
              </div>
              <h4 className="font-['Merriweather'] text-xl font-bold text-primary mb-2 tracking-wide">{ORG_CHART.children[0].title}</h4>
              <p className="font-['Inter'] text-[11px] text-muted-foreground font-bold uppercase tracking-[0.2em]">{ORG_CHART.children[0].description}</p>
            </motion.div>

            {/* Link line to Direction d'Exploitation */}
            <div className="h-12 w-0.5 bg-accent/40" />

            {/* 3. Direction d'Exploitation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-20 w-full max-w-sm bg-white p-7 border border-border border-l-4 border-l-accent shadow-lg text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex p-3 bg-secondary text-primary mb-5">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-['Merriweather'] text-lg font-bold text-primary mb-2 tracking-wide">{ORG_CHART.children[0].child.title}</h4>
              <p className="font-['Inter'] text-[11px] text-muted-foreground font-bold uppercase tracking-[0.2em]">{ORG_CHART.children[0].child.description}</p>
            </motion.div>

            {/* Link line to Secrétariat */}
            <div className="h-12 w-0.5 bg-accent/40" />

            {/* 4. Secrétariat */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-20 w-full max-w-sm bg-white p-7 border border-border border-l-4 border-l-accent shadow-lg text-center transform hover:-translate-y-1 transition-transform"
            >
              <div className="inline-flex p-3 bg-secondary text-primary mb-5">
                <FileText size={24} />
              </div>
              <h4 className="font-['Merriweather'] text-lg font-bold text-primary mb-2 tracking-wide">{ORG_CHART.children[0].child.child.title}</h4>
              <p className="font-['Inter'] text-[11px] text-muted-foreground font-bold uppercase tracking-[0.2em]">{ORG_CHART.children[0].child.child.description}</p>
            </motion.div>

            {/* Fork to Actions & Comptabilité */}
            <div className="h-12 w-0.5 bg-accent/40 lg:hidden" />
            <div className="hidden lg:block w-full max-w-4xl h-12 border-t-2 border-x-2 border-accent/40" />

            <div className="grid lg:grid-cols-2 gap-12 w-full max-w-5xl mt-6 lg:mt-0">
               {/* 5a. Left: Actions */}
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-8 border border-border border-l-4 border-l-accent shadow-lg h-full group hover:shadow-2xl transition-all"
               >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-3 bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Zap size={22} />
                    </div>
                    <h5 className="font-['Merriweather'] font-bold text-primary text-base leading-tight tracking-wide">
                      {ORG_CHART.children[0].child.child.left.title}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ORG_CHART.children[0].child.child.left.items.map(item => (
                      <span key={item} className="px-3 py-1.5 bg-secondary text-[10px] font-bold text-primary border border-primary/10 hover:bg-primary/5 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
               </motion.div>

               <div className="lg:hidden h-12 w-0.5 bg-accent/40 mx-auto" />

               {/* 5b. Right: Comptabilité Gestion */}
               <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-8 border border-border border-l-4 border-l-accent shadow-lg h-full group hover:shadow-2xl transition-all"
               >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-3 bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Calculator size={22} />
                    </div>
                    <h5 className="font-['Merriweather'] font-bold text-primary text-base leading-tight tracking-wide">
                      {ORG_CHART.children[0].child.child.right.title}
                    </h5>
                  </div>
                  <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                    {ORG_CHART.children[0].child.child.right.description}
                  </p>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Procedure Section */}
        <div className="mt-32 pt-24 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-1 bg-accent" />
                <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">Méthodologie</span>
                <div className="w-8 h-1 bg-accent" />
              </div>
              <h3 className="font-['Merriweather'] text-2xl lg:text-3xl font-bold text-primary mb-6 leading-snug">
                Une Procédure d'Intervention Rigoureuse
              </h3>
              <p className="font-['Inter'] text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                L’expertise d’UNIVALOR repose sur une collaboration étroite avec le client, assurant des solutions sur mesure et un engagement qualité certifié.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-10 relative">
                {/* Vertical line connecting numbers */}
                <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-primary/5 -translate-x-1/2" />
                
                {PROCEDURE_STEPS.map((step, i) => (
                  <motion.div 
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-accent font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-['Merriweather'] font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">{step.title}</h4>
                      <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video lg:aspect-square overflow-hidden border border-border shadow-2xl">
                  <img 
                    src={methodologyImg} 
                    alt="Planification et méthodologie professionnelle UNIVALOR" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Decorative frames */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 -z-10 border border-accent/20" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 -z-10 border border-primary/10" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 border border-border text-center shadow-sm"
            >
              <p className="font-['Inter'] text-sm font-medium text-primary leading-relaxed max-w-3xl mx-auto">
                "Un contrat clair précise le rôle et les responsabilités de chacun. Il est complété par un devis garantissant la prestation, la confidentialité et les délais."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Réalisations ────────────────────────────────────────────────────────────
function Realisations() {
  const [showAll, setShowAll] = useState(false);
  const visibleRealisations = showAll ? REALISATIONS : REALISATIONS.slice(0, 3);

  return (
    <section id="realisations" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Impact & Résultats
          </span>
        </motion.div>
        
        <div className="mt-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug mb-16"
          >
            Nos Réalisations Récentes
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleRealisations.map((item, idx) => (
              <motion.div
                key={item.title + item.date}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-border group flex flex-col h-full hover:shadow-2xl transition-all duration-500 rounded-sm"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                  {item.images.length > 1 ? (
                    <Carousel opts={{ loop: true }} className="w-full h-full">
                      <CarouselContent className="-ml-0">
                        {item.images.map((src, i) => (
                          <CarouselItem key={src} className="pl-0">
                            <img
                              src={src}
                              alt={`${item.title} - ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 size-8 border-white/50 bg-white/80 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CarouselNext className="right-2 size-8 border-white/50 bg-white/80 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Carousel>
                  ) : (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute top-0 right-0 bg-accent text-primary text-[10px] font-bold px-4 py-2 uppercase tracking-widest shadow-lg">
                    {item.displayDate}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="font-['Inter'] text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                      Projet de Valorisation
                    </span>
                  </div>
                  <h3 className="font-['Merriweather'] text-base font-bold text-primary leading-relaxed mb-6 flex-1">
                    {item.title}
                  </h3>
                  <div className="pt-6 border-t border-border flex items-center justify-between mt-auto">
                    <span className="font-['Inter'] text-[11px] text-muted-foreground font-medium">
                      UNIVALOR S.A · {item.date.split('-')[0]}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && REALISATIONS.length > 3 && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 bg-primary text-white font-['Inter'] text-sm font-semibold px-8 py-4 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
              >
                Toutes nos réalisations <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Missions ─────────────────────────────────────────────────────────────────
function Missions() {
  return (
    <section id="missions" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Ce que nous faisons
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4 mb-12">
          <h2 className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug max-w-lg">
            Nos missions fondamentales
          </h2>
          <p className="font-['Inter'] text-sm text-muted-foreground max-w-sm leading-relaxed">
            Quatre axes stratégiques pour faire du savoir un levier de développement concret et durable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSIONS.map((m, i) => (
            <div
              key={m.title}
              className="bg-white border border-border p-6 hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <m.icon size={20} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="font-['Inter'] text-xs font-semibold text-accent mb-2">0{i + 1}</div>
              <h3 className="font-['Merriweather'] text-base font-bold text-primary mb-3 leading-snug">
                {m.title}
              </h3>
              <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Domaines ─────────────────────────────────────────────────────────────────
function SuccessFactors() {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Documentation institutionnelle
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4 mb-12">
          <h2 className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug">
            Facteurs de réussite
          </h2>
          <p className="font-['Inter'] text-sm text-muted-foreground max-w-md leading-relaxed">
            L'expérience UNIVALOR S.A repose sur une organisation autonome, une gouvernance
            claire et une insertion active dans le tissu socioéconomique du Tchad.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border border-border bg-secondary p-7 lg:p-8">
            <h3 className="font-['Merriweather'] text-xl font-bold text-primary mb-6">
              Les principes qui guident l'action
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SUCCESS_FACTORS.map((factor) => (
                <div key={factor} className="flex gap-3 bg-white border border-border p-4">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                    {factor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white p-7 lg:p-8">
              <h3 className="font-['Merriweather'] text-xl font-bold mb-5">
                Une expérience unique
              </h3>
              <div className="space-y-4">
                {UNIQUE_EXPERIENCE.map((item) => (
                  <div key={item} className="flex gap-3">
                    <ChevronRight size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="font-['Inter'] text-sm text-white/80 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-accent bg-white p-7 shadow-sm">
              <p className="font-['Merriweather'] text-xl lg:text-2xl font-bold text-primary leading-snug mb-4">
                Il n'y a pas d'université prospère dans un désert économique, tout comme il
                n'y a pas de régions à forte croissance économique sans une université forte
                et dynamique.
              </p>
              <p className="font-['Inter'] text-sm font-semibold uppercase tracking-widest text-primary">
                Votre savoir-faire, nous allons le faire savoir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Domains() {
  const [active, setActive] = useState(0);

  const sortedCompetences = [...LAB_COMPETENCES].sort((a, b) => {
    const hasImagesA = getCompetenceImages(a.title).length > 0;
    const hasImagesB = getCompetenceImages(b.title).length > 0;
    if (hasImagesA && !hasImagesB) return -1;
    if (!hasImagesA && hasImagesB) return 1;
    return 0;
  });

  return (
    <section id="domaines" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Domaines d'intervention
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4 mb-12">
          <h2 className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug">
            Compétences des laboratoires et départements
          </h2>
          <p className="font-['Inter'] text-sm text-muted-foreground max-w-sm leading-relaxed">
            Notre équipe pluridisciplinaire intervient dans de nombreux secteurs en s'appuyant
            sur la richesse des unités de recherche de l'Université.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {sortedCompetences.map((competence) => {
            const images = getCompetenceImages(competence.title);

            return (
              <article
                key={competence.title}
                className="border border-border bg-white p-5 hover:border-primary/35 hover:shadow-md transition-all duration-200"
              >
                {images.length > 0 && (
                  <Carousel
                    opts={{ loop: images.length > 1 }}
                    className="mb-5 overflow-hidden border border-border"
                  >
                    <CarouselContent className="-ml-0">
                      {images.map((src, index) => (
                        <CarouselItem key={src} className="pl-0">
                          <img
                            src={src}
                            alt={`${competence.title} - illustration ${index + 1}`}
                            className="h-40 w-full object-cover"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2 size-7 border-white/80 bg-white/90 text-primary hover:bg-white" />
                        <CarouselNext className="right-2 size-7 border-white/80 bg-white/90 text-primary hover:bg-white" />
                      </>
                    )}
                  </Carousel>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-primary flex items-center justify-center flex-shrink-0">
                    <competence.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-['Merriweather'] text-base font-bold text-primary leading-snug">
                    {competence.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {competence.items.map((item) => (
                    <span
                      key={item}
                      className="font-['Inter'] text-xs font-medium text-foreground bg-secondary border border-border px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16 bg-primary text-white">
          <div className="lg:col-span-4 p-7 lg:p-8">
            <div className="w-11 h-11 bg-accent flex items-center justify-center mb-5">
              <Users size={21} className="text-primary" />
            </div>
            <h3 className="font-['Merriweather'] text-2xl font-bold leading-snug mb-4">
              Une équipe pluridisciplinaire
            </h3>
            <p className="font-['Inter'] text-sm text-white/75 leading-relaxed">
              UNIVALOR S.A est dirigée par une équipe de cadres hautement qualifiés,
              organisée pour relier la recherche universitaire aux besoins concrets du
              secteur productif.
            </p>
          </div>
          <div className="lg:col-span-8 bg-white text-foreground p-7 lg:p-8 border border-border">
            <h4 className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase mb-5">
              Ressources mobilisées
            </h4>
            <div className="space-y-4">
              {TEAM_RESOURCES.map((resource) => (
                <div key={resource} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                    {resource}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {DOMAINS.map((d, i) => (
              <button
                key={d.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-5 py-4 text-left flex-shrink-0 border transition-all duration-150 ${
                  active === i
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground border-border hover:border-primary/40"
                }`}
              >
                <d.icon size={16} className={active === i ? "text-accent" : "text-primary"} />
                <span className="font-['Inter'] text-sm font-medium whitespace-nowrap">{d.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            {DOMAINS.map((d, i) =>
              active !== i ? null : (
                <div key={d.title} className="border border-border bg-white p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <d.icon size={22} className="text-accent" />
                    </div>
                    <h3 className="font-['Merriweather'] text-xl font-bold text-primary">{d.title}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {d.items.map(item => (
                      <div key={item} className="flex items-center gap-3 py-3 border-b border-border">
                        <ChevronRight size={14} className="text-primary flex-shrink-0" />
                        <span className="font-['Inter'] text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="mt-8 inline-flex items-center gap-2 bg-primary text-white font-['Inter'] text-sm font-medium px-5 py-2.5 hover:bg-primary/90 transition-colors"
                  >
                    Soumettre un projet <ArrowRight size={14} />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Partenaires ──────────────────────────────────────────────────────────────
function Partners() {
  return (
    <section id="partenaires" className="py-20 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Réseau & Alliances
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4 mb-12">
          <h2 className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug">
            Nos partenaires institutionnels
          </h2>
          <p className="font-['Inter'] text-sm text-muted-foreground max-w-sm leading-relaxed">
            Un réseau solide d'institutions nationales, régionales et internationales pour amplifier
            l'impact de nos actions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
          {PARTNERS.map(name => (
            <div
              key={name}
              className="bg-white px-6 py-7 flex items-center justify-center text-center hover:bg-primary group transition-colors duration-150 cursor-pointer"
            >
              <span className="font-['Inter'] text-sm font-medium text-muted-foreground group-hover:text-white transition-colors duration-150">
                {name}
              </span>
            </div>
          ))}
        </div>

        <p className="font-['Inter'] text-sm text-muted-foreground text-center mt-8">
          Souhaitez-vous rejoindre notre réseau ?{" "}
          <button onClick={() => scrollTo("#contact")} className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            Contactez-nous
          </button>
        </p>
      </div>
    </section>
  );
}

// ─── Formations ──────────────────────────────────────────────────────────────
function Formations() {
  return (
    <section id="formations" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-2"
        >
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Capacités & Compétences
          </span>
        </motion.div>
        
        <div className="mt-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug mb-4"
              >
                Séries des Formations Réalisées
              </motion.h2>
              <p className="font-['Inter'] text-base text-muted-foreground leading-relaxed">
                Quelques images des différents séries des formations réalisées avec nos différents partenaires
              </p>
            </div>
            <div className="flex items-center gap-4 bg-secondary p-4 border border-border">
              <div className="p-2 bg-primary text-white">
                <GraduationCap size={20} />
              </div>
              <div className="font-['Inter'] text-sm font-bold text-primary">
                Expertise Pédagogique Certifiée
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {FORMATIONS.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-secondary border border-border hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Carousel opts={{ loop: true }} className="w-full h-full">
                    <CarouselContent className="-ml-0">
                      {f.images.map((src, i) => (
                        <CarouselItem key={src} className="pl-0">
                          <img
                            src={src}
                            alt={`${f.title} - ${i + 1}`}
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 size-8 bg-white/90 text-primary border-none" />
                    <CarouselNext className="right-2 size-8 bg-white/90 text-primary border-none" />
                  </Carousel>
                  <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm p-3 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={12} className="text-accent" />
                      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">{f.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-['Merriweather'] text-lg font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                    {f.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", objet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ nom: "", email: "", objet: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-1 bg-accent" />
          <span className="font-['Inter'] text-xs font-semibold tracking-widest text-primary uppercase">
            Nous contacter
          </span>
        </div>
        <div className="mt-4 mb-12">
          <h2 className="font-['Merriweather'] text-3xl lg:text-4xl font-bold text-primary leading-snug">
            Entrons en contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Infos */}
          <div className="lg:col-span-4 space-y-6">
            <p className="font-['Inter'] text-sm text-muted-foreground leading-relaxed">
              Vous avez un projet de partenariat, une demande d'expertise ou souhaitez en savoir
              plus sur nos services ? Notre équipe est disponible du lundi au vendredi.
            </p>
            {[
              { icon: MapPin, label: "Adresse", value: "Université de N'Djaména\nBP 1117, N'Djaména, Tchad" },
              { icon: Phone, label: "Téléphone", value: "+235 22 51 44 00" },
              { icon: Mail, label: "Email", value: "contact@univalorsa.td" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs font-semibold text-primary uppercase tracking-wider mb-1">{label}</div>
                  <div className="font-['Inter'] text-sm text-foreground whitespace-pre-line">{value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-4 overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&h=200&fit=crop&auto=format"
                alt="Localisation N'Djaména, Tchad"
                className="w-full h-36 object-cover"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-8">
            {sent ? (
              <div className="bg-white border border-border p-10 flex flex-col items-center justify-center min-h-[380px] text-center">
                <div className="w-14 h-14 bg-primary flex items-center justify-center mb-5">
                  <CheckCircle2 size={28} className="text-accent" />
                </div>
                <h3 className="font-['Merriweather'] text-xl font-bold text-primary mb-2">Message envoyé</h3>
                <p className="font-['Inter'] text-sm text-muted-foreground">
                  Merci de nous avoir contactés. Notre équipe vous répondra sous 48h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-border p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-['Inter'] text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      required
                      value={form.nom}
                      onChange={e => setForm({ ...form, nom: e.target.value })}
                      placeholder="Votre nom"
                      className="w-full border border-border px-4 py-2.5 font-['Inter'] text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-['Inter'] text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full border border-border px-4 py-2.5 font-['Inter'] text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-['Inter'] text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                    Objet *
                  </label>
                  <input
                    required
                    value={form.objet}
                    onChange={e => setForm({ ...form, objet: e.target.value })}
                    placeholder="Partenariat, expertise, renseignement..."
                    className="w-full border border-border px-4 py-2.5 font-['Inter'] text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block font-['Inter'] text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Décrivez votre demande..."
                    className="w-full border border-border px-4 py-2.5 font-['Inter'] text-sm focus:outline-none focus:border-primary transition-colors resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-primary text-white font-['Inter'] text-sm font-semibold px-7 py-3 hover:bg-primary/90 transition-colors"
                >
                  Envoyer le message <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const navHalf = Math.ceil(NAV_LINKS.length / 2);
  const nav1 = NAV_LINKS.slice(0, navHalf);
  const nav2 = NAV_LINKS.slice(navHalf);

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          {/* Logo & Info */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <img
                src={logoImg}
                alt="Logo UNIVALORSA"
                className="h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="font-['Inter'] text-sm text-white/70 leading-relaxed max-w-sm mb-6">
              Société de valorisation des ressources de l'Université de N'Djaména.
              Nous transformons la recherche académique en solutions opérationnelles 
              pour le développement du Tchad.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
                <Globe size={18} className="text-accent" />
              </div>
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer">
                <Mail size={18} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Nav Part 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-8">Navigation</h4>
            <ul className="space-y-4">
              {nav1.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Part 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-8 invisible lg:visible">Navigation</h4>
            <ul className="space-y-4">
              {nav2.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="font-['Inter'] text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div className="lg:col-span-3">
            <h4 className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-8">Informations</h4>
            <ul className="space-y-4">
              {["Mentions légales", "Politique de confidentialité", "Appels d'offres", "Recrutement"].map(item => (
                <li key={item}>
                  <span className="font-['Inter'] text-sm text-white/60 hover:text-white cursor-pointer transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] text-[11px] text-white/40 tracking-wider">
            © {new Date().getFullYear()} UNIVALOR S.A — TOUS DROITS RÉSERVÉS
          </p>
          <div className="flex items-center gap-6">
            <span className="font-['Inter'] text-[11px] text-white/40">BP 1117, N'DJAMÉNA, TCHAD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-['Inter']">
      <Navbar />
      <Hero />
      <About />
      <Structure />
      <Domains />
      <Formations />
      <Realisations />
      <Missions />
      <SuccessFactors />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
