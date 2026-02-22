import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Users,
  FileText,
  Camera,
  Building2,
  ShoppingCart,
  Gamepad2,
} from "lucide-react";
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiCloudinary,
  SiHeroku,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiWoocommerce,
  SiShopify,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiSocketdotio,
  SiExpress,
} from "react-icons/si";
import { PROJECTS } from "../../utils/constants";
import FadeIn from "../animations/fadeIn";

// ========== KONFIGURATION ==========
const TECH_COLORS = {
  React: "#61DAFB",
  "Django REST": "#092E20",
  Django: "#092E20",
  PostgreSQL: "#4169E1",
  Cloudinary: "#3448C5",
  Heroku: "#430098",
  Bootstrap: "#7952B3",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Flexbox: "#61DAFB",
  "Responsive Design": "#3B82F6",
  SEO: "#47A248",
  Wordpress: "#21759B",
  WooCommerce: "#96588A",
  Shopify: "#7AB55C",
  JavaScript: "#F7DF1E",
  "Node.js": "#339933",
  Express: "#000000",
};

const TECH_ICON_MAP = {
  React: SiReact,
  Flexbox: SiReact,
  Django: SiDjango,
  "Django REST": SiDjango,
  PostgreSQL: SiPostgresql,
  Cloudinary: SiCloudinary,
  Heroku: SiHeroku,
  Bootstrap: SiBootstrap,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Wordpress: SiWordpress,
  WooCommerce: SiWoocommerce,
  Shopify: SiShopify,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
};

const PROJECT_CATEGORIES = {
  Loopin: { name: "Social Media Platform", icon: Users },
  Microblogify: { name: "Microblogging Platform", icon: FileText },
  "Light Trails Photography": { name: "Photography Portfolio", icon: Camera },
  "Heubel GmbH": { name: "Corporate + E-Commerce Hybrid", icon: Building2 },
  CargoCover: { name: "Custom E-Commerce", icon: ShoppingCart },
  "Speed Typing Game": { name: "Interactive Game", icon: Gamepad2 },
};

const DEFAULT_CATEGORY = { name: "Project", icon: Code };

// ========== HELPER FUNCTIONS ==========
const getProjectCategory = (title) => {
  const category = PROJECT_CATEGORIES[title];
  return category
    ? { name: category.name, icon: <category.icon className="w-3.5 h-3.5" /> }
    : { name: title, icon: <DEFAULT_CATEGORY.icon className="w-3.5 h-3.5" /> };
};

const renderTechIcon = (tech) => {
  const Icon = TECH_ICON_MAP[tech];
  const color = TECH_COLORS[tech] || "#FFFFFF";

  return Icon ? (
    <Icon className="w-3.5 h-3.5" style={{ color }} />
  ) : (
    <Code className="w-3.5 h-3.5 text-primary" />
  );
};

// ========== SUBCOMPONENTS ==========
const ProjectsHeader = () => (
  <div className="text-center max-w-3xl mx-auto">
    <FadeIn delay={60}>
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit mx-auto mb-6">
        <Code className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary font-medium">
          My Work & Contributions
        </span>
      </div>
    </FadeIn>

    <FadeIn delay={100}>
      <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
        Projects & Open Source
      </h2>
    </FadeIn>

    <FadeIn delay={200}>
      <p className="text-base text-white/70 leading-relaxed mb-8">
        A curated collection of my projects showcasing different skills and
        technologies. Each project represents real-world problems solved with
        code.
      </p>
    </FadeIn>
  </div>
);

const ProjectImage = ({ project, isMobile, isVisible }) => {
  const scrollClass = useMemo(() => {
    if (!isMobile)
      return "transition-transform duration-15000 ease-out group-hover:-translate-y-2/3";
    if (isMobile && isVisible) return "animate-slow-scroll-mobile";
    return "";
  }, [isMobile, isVisible]);

  return (
    <div className="relative h-96 overflow-hidden bg-black/40 rounded-t-2xl">
      <div
        className={`absolute inset-x-0 top-0 ${scrollClass}`}
        style={{
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        <h3 className="text-lg font-medium text-white truncate">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const ProjectTechnologies = ({ technologies }) => (
  <div className="mb-6">
    <div className="text-xs text-white/50 mb-2">Built with:</div>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs backdrop-blur-sm rounded-lg border border-white/10 text-white/80 hover:border-primary/30 hover:text-primary transition-all duration-300 group/tech"
        >
          <span className="group-hover/tech:scale-110 transition-transform duration-300">
            {renderTechIcon(tech)}
          </span>
          <span className="group-hover/tech:text-primary transition-colors duration-300">
            {tech}
          </span>
        </span>
      ))}
    </div>
  </div>
);

const ProjectActions = ({ githubUrl, liveDemoUrl }) => {
  const hasGithub = Boolean(githubUrl);

  if (hasGithub) {
    return (
      <div className="flex items-center justify-between">
        <ProjectButton
          onClick={() => window.open(githubUrl, "_blank")}
          icon={Github}
          variant="primary"
          className="flex-1 mr-2"
        >
          Code
        </ProjectButton>

        <ProjectButton
          onClick={() => window.open(liveDemoUrl, "_blank")}
          icon={ExternalLink}
          variant="secondary"
          className="flex-1"
        >
          Demo
        </ProjectButton>
      </div>
    );
  }

  return (
    <ProjectButton
      onClick={() => window.open(liveDemoUrl, "_blank")}
      icon={ExternalLink}
      variant="primary"
      className="w-full"
    >
      Demo
    </ProjectButton>
  );
};

const ProjectButton = ({
  onClick,
  icon: Icon,
  variant,
  children,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 group/btn justify-center";
  const variantStyles =
    variant === "primary"
      ? "bg-gradient-to-r from-primary/50 to-primary/10 border border-primary/30 hover:bg-primary/30 hover:border-primary/40"
      : "border border-white/10 hover:border-white/20";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      <Icon className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
      <span
        className={`text-sm font-medium ${
          variant === "primary" ? "text-white" : "text-white/70"
        }`}
      >
        {children}
      </span>
    </button>
  );
};

const ProjectCard = ({ project, index, isMobile, isVisible }) => {
  const category = useMemo(
    () => getProjectCategory(project.title),
    [project.title]
  );

  return (
    <FadeIn key={project.id} delay={100 + index * 50}>
      <div
        className="project-card group relative bg-gradient-to-br backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
        data-project-id={project.id}
      >
        <ProjectImage
          project={project}
          isMobile={isMobile}
          isVisible={isVisible}
        />

        <div className="flex flex-col flex-grow p-6">
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-primary/10 border border-primary/20 rounded-lg text-xs text-text/80">
              <span className="text-white">{category.icon}</span>
              <span>{category.name}</span>
            </span>
          </div>

          <div className="mb-4 flex-grow">
            <p className="text-white/70 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <ProjectTechnologies technologies={project.technologies} />

          <div className="mt-auto pt-4 border-t border-white/10">
            <ProjectActions
              githubUrl={project.githubUrl}
              liveDemoUrl={project.liveDemoUrl}
            />
          </div>
        </div>

        {!isMobile && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        )}
      </div>
    </FadeIn>
  );
};

const ViewAllButton = () => (
  <FadeIn delay={400}>
    <div className="text-center">
      <button
        onClick={() =>
          window.open("https://github.com/razmikmovsisyan", "_blank")
        }
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl hover:bg-primary/30 hover:border-primary/40 transition-all duration-300 group"
      >
        <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-white font-medium">View All GitHub Projects</span>
        <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  </FadeIn>
);

// ========== MAIN COMPONENT ==========
const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.dataset.projectId;
          setVisibleCards((prev) => ({
            ...prev,
            [cardId]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, [isMobile]);

  const isCardVisible = useCallback(
    (projectId) => visibleCards[projectId] || false,
    [visibleCards]
  );

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          <ProjectsHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isMobile={isMobile}
                isVisible={isCardVisible(project.id)}
              />
            ))}
          </div>

          <ViewAllButton />
        </div>
      </div>
    </section>
  );
};

export default Projects;
