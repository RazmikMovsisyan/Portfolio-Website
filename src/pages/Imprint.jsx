import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, Mail, MapPin, FileText, Info } from "lucide-react";
import FadeIn from "../components/animations/fadeIn";
import { PERSONAL_INFO } from "../utils/constants";

// ========== KONFIGURATION ==========
const formatName = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

const LEGAL_CONTENT = {
  en: {
    title: "Imprint",
    subtitle: "Information according to §5 TMG (German Telemedia Act)",
    sections: {
      personal: {
        title: "Responsible for Content",
        icon: Info,
      },
      contact: {
        title: "Contact",
        icon: Mail,
      },
      disclaimer: {
        title: "Disclaimer",
        icon: FileText,
        content: [
          {
            title: "Liability for Content:",
            text: "As a service provider, I am responsible for my own content on these pages according to §7 paragraph 1 of the German Telemedia Act (TMG). However, according to §§8 to 10 TMG, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
          },
          {
            title: "Liability for Links:",
            text: "My portfolio contains links to external third-party websites, over whose content I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.",
          },
          {
            title: "Copyright:",
            text: "The content and works created by me on these pages are subject to German copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of the copyright law shall require my prior written consent.",
          },
        ],
      },
    },
    contactNote:
      "* For questions about this website or my work, please contact me via email.",
  },
  de: {
    title: "Impressum",
    subtitle: "Angaben gemäß §5 TMG",
    sections: {
      personal: {
        title: "Verantwortlich für den Inhalt",
        icon: Info,
      },
      contact: {
        title: "Kontakt",
        icon: Mail,
      },
      disclaimer: {
        title: "Haftungsausschluss",
        icon: FileText,
        content: [
          {
            title: "Haftung für Inhalte:",
            text: "Als Diensteanbieter bin ich gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
          },
          {
            title: "Haftung für Links:",
            text: "Mein Portfolio enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
          },
          {
            title: "Urheberrecht:",
            text: "Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.",
          },
        ],
      },
    },
    contactNote:
      "* Bei Fragen zu dieser Website oder meiner Arbeit erreichen Sie mich am besten per E-Mail.",
  },
};

const LegalNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <Link to="/" className="text-2xl uppercase text-primary">
          {formatName(PERSONAL_INFO.name)}
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  </nav>
);

const LegalHeader = ({ lang }) => (
  <FadeIn delay={60}>
    <div className="flex flex-col items-center text-center gap-6 mb-16">
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
        <Scale className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary font-medium">Legal Notice</span>
      </div>
      <h1 className="text-4xl lg:text-5xl font-normal text-white">
        {LEGAL_CONTENT[lang].title}
      </h1>
      <p className="text-white/60 max-w-2xl">{LEGAL_CONTENT[lang].subtitle}</p>
    </div>
  </FadeIn>
);

const PersonalInfoCard = ({ icon: Icon, title }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-xl font-medium text-white">{title}</h2>
    </div>

    <div className="space-y-4 text-white/80">
      <p className="text-lg font-medium text-white">
        {formatName(PERSONAL_INFO.name)}
      </p>

      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <p>{PERSONAL_INFO.location}</p>
      </div>

      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="hover:text-primary transition-colors duration-300"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>
    </div>
  </div>
);

const ContactInfoCard = ({ icon: Icon, title, note }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-xl font-medium text-white">{title}</h2>
    </div>

    <div className="space-y-3 text-white/80">
      <p>
        <span className="text-white/60">Email:</span>{" "}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="hover:text-primary transition-colors duration-300"
        >
          {PERSONAL_INFO.email}
        </a>
      </p>
      <p>
        <span className="text-white/60">Phone:</span>{" "}
        <a
          href={`tel:${PERSONAL_INFO.phone}`}
          className="hover:text-primary transition-colors duration-300"
        >
          {PERSONAL_INFO.phone}
        </a>
      </p>
      <p className="text-sm text-white/50 mt-2">{note}</p>
    </div>
  </div>
);

const DisclaimerCard = ({ icon: Icon, title, content }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-xl font-medium text-white">{title}</h2>
    </div>

    <div className="space-y-4 text-white/70 text-sm leading-relaxed">
      {content.map((item, index) => (
        <p key={index}>
          <span className="text-white font-medium">{item.title}</span>{" "}
          {item.text}
        </p>
      ))}
    </div>
  </div>
);

const LegalSection = ({ lang, delay = 100 }) => {
  const content = LEGAL_CONTENT[lang];

  return (
    <FadeIn delay={delay}>
      <div className="space-y-6">
        <PersonalInfoCard
          icon={content.sections.personal.icon}
          title={content.sections.personal.title}
        />

        <ContactInfoCard
          icon={content.sections.contact.icon}
          title={content.sections.contact.title}
          note={content.contactNote}
        />

        <DisclaimerCard
          icon={content.sections.disclaimer.icon}
          title={content.sections.disclaimer.title}
          content={content.sections.disclaimer.content}
        />
      </div>
    </FadeIn>
  );
};

const Imprint = () => {
  return (
    <div className="min-h-screen bg-black">
      <LegalNavbar />

      <main className="pt-32 pb-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* English */}
          <LegalHeader lang="en" />
          <LegalSection lang="en" delay={100} />

          {/* German */}
          <FadeIn delay={250}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-normal text-white mb-6 text-center">
                Impressum
              </h3>
              <LegalSection lang="de" delay={0} />
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
};

export default Imprint;
