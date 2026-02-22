import { ChevronDown, Locate, Download } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiGit,
  SiGithub,
  SiBootstrap,
} from "react-icons/si";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/fadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

// Konfiguration
const TECH_ICONS = [
  { Icon: SiHtml5, color: "hover:text-[#E34F26]", name: "HTML5" },
  { Icon: SiCss3, color: "hover:text-[#1572B6]", name: "CSS3" },
  { Icon: SiJavascript, color: "hover:text-[#F7DF1E]", name: "JavaScript" },
  { Icon: SiReact, color: "hover:text-[#61DAFB]", name: "React" },
  { Icon: SiPython, color: "hover:text-[#3776AB]", name: "Python" },
  { Icon: SiBootstrap, color: "hover:text-[#7952B3]", name: "Bootstrap" },
  { Icon: SiGit, color: "hover:text-[#F05032]", name: "Git" },
];

const BUTTON_STYLES = {
  base: "inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 rounded-lg transition-all duration-300 group sm:w-auto",
  primary:
    "bg-gradient-to-r from-primary/50 to-primary/10 hover:bg-primary/30 hover:border-primary/40",
  secondary:
    "bg-gradient-to-r from-primary/20 to-primary/10 hover:bg-primary/30 hover:border-primary/40",
};

const Hero = () => {
  const handleScrollToAbout = () => scrollToSection("about");
  const handleOpenResume = () => window.open(PERSONAL_INFO.resume, "_blank");
  const handleOpenGithub = () => window.open(SOCIAL_LINKS.github, "_blank");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 items-center mt-10">
            {/* Left Column - Text Content */}
            <HeroContent
              onResumeClick={handleOpenResume}
              onGithubClick={handleOpenGithub}
            />

            {/* Right Column - Image with Tech Icons */}
            <HeroImage />
          </div>
        </div>
      </div>

      <ScrollButton onClick={handleScrollToAbout} />
    </section>
  );
};

// Hilfskomponenten
const HeroContent = ({ onResumeClick, onGithubClick }) => (
  <div className="text-center lg:text-left">
    <FadeIn delay={100}>
      <h1 className="text-4xl md:text-5xl lg:text-5.5xl font-normal text-white mb-6 leading-tight">
        {PERSONAL_INFO.title}
      </h1>

      <LocationBadge />
    </FadeIn>

    <FadeIn delay={200}>
      <BioText paragraphs={PERSONAL_INFO.bio} />
    </FadeIn>

    <FadeIn delay={300}>
      <ActionButtons
        onResumeClick={onResumeClick}
        onGithubClick={onGithubClick}
      />
    </FadeIn>
  </div>
);

const LocationBadge = () => (
  <FadeIn delay={0}>
    <div className="inline-flex items-center justify-center lg:justify-start gap-2.5 px-10 py-3 mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-lg">
      <Locate className="w-6 h-6 text-white" />
      <span className="text-sm text-white tracking-[1.2px]">
        Based in: {PERSONAL_INFO.location}
      </span>
    </div>
  </FadeIn>
);

const BioText = ({ paragraphs }) => (
  <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl leading-relaxed space-y-4">
    {paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </p>
);

const ActionButtons = ({ onResumeClick, onGithubClick }) => (
  <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
    <Button onClick={onResumeClick} variant="primary" icon={Download}>
      See Resume & Diploma
    </Button>

    <Button onClick={onGithubClick} variant="secondary" icon={SiGithub}>
      GitHub Profile
    </Button>
  </div>
);

const Button = ({ onClick, variant, icon: Icon, children }) => (
  <button
    onClick={onClick}
    className={`${BUTTON_STYLES.base} ${BUTTON_STYLES[variant]}`}
  >
    <Icon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
    <span className="text-white font-medium group-hover:text-white transition-colors duration-300">
      {children}
    </span>
  </button>
);

const HeroImage = () => (
  <FadeIn delay={200}>
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative max-w-[400px]">
        {/* Spin Effect Container */}
        <div className="relative rounded-2xl overflow-hidden group">
          <SpinEffect />

          <div className="relative m-1 rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm">
            <img
              src="../images/projects/developer-portrait.png"
              alt="Razmik Movsisyan - Full Stack Developer"
              className="w-sm h-auto object-cover rounded-2xl"
            />

            <ImageOverlay />
            <TechIconsOverlay />
          </div>
        </div>

        <BackgroundGlow />
      </div>
    </div>
  </FadeIn>
);

const SpinEffect = () => (
  <div className="absolute inset-0 rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 animate-spin-slow rounded-2xl" />
  </div>
);

const ImageOverlay = () => (
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
);

const TechIconsOverlay = () => (
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
    <FadeIn delay={500}>
      <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        {TECH_ICONS.map(({ Icon, color, name }, index) => (
          <div
            key={index}
            className="w-6 h-6 flex items-center justify-center hover:scale-125 transition-transform duration-300"
            title={name}
          >
            <Icon
              className={`w-full h-full text-white transition-all duration-300 ${color}`}
            />
          </div>
        ))}
      </div>
    </FadeIn>
  </div>
);

const BackgroundGlow = () => (
  <>
    <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10" />
    <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/5 blur-2xl -z-10" />
  </>
);

const ScrollButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-30 cursor-pointer"
    aria-label="Scroll to about section"
  >
    <ChevronDown className="w-8 h-8 text-primary hover:scale-110 transition-transform" />
  </button>
);

export default Hero;
