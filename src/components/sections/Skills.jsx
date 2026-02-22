import React, { useMemo } from "react";
import {
  Globe,
  Rocket,
  Database,
  FileText,
  Wrench,
  Palette,
} from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiWordpress,
  SiDrupal,
  SiShopify,
  SiGithub,
  SiGit,
  SiHeroku,
  SiNpm,
  SiAdobephotoshop,
  SiJest,
  SiEslint,
  SiMarkdown,
  SiTypo3,
  SiWoocommerce,
  SiJoomla,
  SiGitpod,
  SiGunicorn,
  SiAdobe,
  SiReacthookform,
  SiTailwindcss,
  SiNextdotjs,
  SiCloudinary,
  SiVite,
} from "react-icons/si";
import FadeIn from "../animations/fadeIn";

// ========== KONFIGURATION ==========
const CATEGORIES = [
  {
    id: "frontend",
    icon: Globe,
    title: "Frontend",
    technologies: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    id: "backend",
    icon: Rocket,
    title: "Backend",
    technologies: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Django REST", icon: SiDjango, color: "#092E20" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      {
        name: "JWT",
        icon: () => (
          <span className="font-bold text-[10px] sm:text-xs">JWT</span>
        ),
        color: "#000000",
      },
    ],
  },
  {
    id: "database",
    icon: Database,
    title: "Database & CMS",
    technologies: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    id: "cms",
    icon: FileText,
    title: "CMS & E-Commerce",
    technologies: [
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
      { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
      { name: "Drupal", icon: SiDrupal, color: "#0678BE" },
      { name: "TYPO3", icon: SiTypo3, color: "#FF8700" },
      { name: "Joomla", icon: SiJoomla, color: "#5091CD" },
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools & DevOps",
    technologies: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Gitpod", icon: SiGitpod, color: "#1AA6E4" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
      { name: "Heroku", icon: SiHeroku, color: "#430098" },
      { name: "NPM", icon: SiNpm, color: "#CB3837" },
      { name: "Gunicorn", icon: SiGunicorn, color: "#499848" },
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Design & Testing",
    technologies: [
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Dreamweaver", icon: SiAdobe, color: "#FF61F6" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
      { name: "Markdown", icon: SiMarkdown, color: "#ffffff" },
    ],
  },
];

// ========== SUBCOMPONENTS ==========
const SkillsHeader = () => (
  <div className="text-center max-w-3xl mx-auto px-4 sm:px-0">
    <FadeIn delay={60}>
      <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit mx-auto mb-4 sm:mb-6">
        <span className="text-xs sm:text-sm text-primary font-medium">
          My Technical Stack
        </span>
      </div>
    </FadeIn>

    <FadeIn delay={100}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4 sm:mb-6">
        Skills & Technologies
      </h2>
    </FadeIn>

    <FadeIn delay={200}>
      <p className="text-base sm:text-base text-white/70 leading-relaxed px-2 sm:px-0">
        A versatile tech stack combining modern frontend frameworks with robust
        backend solutions, database management, CMS platforms, development
        tools, and design expertise, ensuring seamless, scalable, and visually
        compelling digital experiences.
      </p>
    </FadeIn>
  </div>
);

// Gefixt: isHovered entfernt da nicht verwendet
const CategoryIcon = ({ icon: Icon }) => (
  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 border border-primary/20 rounded-lg group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
    <div className="group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
    </div>
  </div>
);

// Gefixt: name entfernt da nicht verwendet
const TechIcon = ({ tech }) => {
  const { icon: Icon, color } = tech;

  const iconElement = useMemo(() => {
    if (typeof Icon === "function") {
      return <Icon style={{ color }} />;
    }
    return React.createElement(Icon, {
      className: "w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300",
      style: { color },
    });
  }, [Icon, color]);

  return (
    <div className="group-hover/tech:scale-110 transition-transform duration-300 flex-shrink-0">
      {iconElement}
    </div>
  );
};

const TechnologyItem = ({ tech }) => (
  <div className="relative flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/30 hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,255,255,0.15)] transition-all duration-300 group/tech">
    <TechIcon tech={tech} />

    <span className="text-white text-xs sm:text-sm group-hover/tech:text-primary transition-colors duration-300 truncate">
      {tech.name}
    </span>
  </div>
);

const CategoryCard = ({ category, index }) => {
  const { icon: Icon, title, technologies } = category;

  return (
    <FadeIn delay={100 + index * 50} className="h-full">
      <div className="backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] sm:hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 group h-full flex flex-col">
        <div className="flex flex-col gap-4 sm:gap-6 flex-grow">
          {/* Header mit Icon und Titel */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <CategoryIcon icon={Icon} />
            <div>
              <h3 className="text-base sm:text-xl font-medium text-white group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-grow content-start">
            {technologies.map((tech, techIndex) => (
              <TechnologyItem key={techIndex} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

// ========== MAIN COMPONENT ==========
const Skills = () => {
  return (
    <section
      id="skills"
      className="cursor-default relative py-12 sm:py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:gap-16">
          <SkillsHeader />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 sm:gap-6 px-2 sm:px-0">
            {CATEGORIES.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
