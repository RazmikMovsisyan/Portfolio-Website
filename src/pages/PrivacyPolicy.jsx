import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Shield,
  Lock,
  Mail,
  Database,
  Server,
  Eye,
  Info,
} from "lucide-react";
import FadeIn from "../components/animations/fadeIn";
import { PERSONAL_INFO } from "../utils/constants";

// ========== KONFIGURATION ==========
const formatName = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

const formatDate = (locale, options) => {
  return new Date().toLocaleDateString(locale, options);
};

const PRIVACY_SECTIONS = {
  en: [
    {
      icon: Info,
      title: "1. Privacy at a Glance",
      content: [
        "I take the protection of your personal data very seriously. Your data will be treated confidentially and in accordance with the legal data protection regulations (GDPR).",
        "This website does not use cookies, tracking tools, or analytics services. No personal data is stored or passed on to third parties without your explicit consent.",
      ],
    },
    {
      icon: Server,
      title: "2. Hosting",
      content: [
        "This website is hosted by IONOS. The server locations are in Germany.",
        "When you visit this website, the following data is automatically collected in server log files:",
        "• IP address (anonymized)",
        "• Date and time of access",
        "• Browser type and version",
        "• Operating system used",
        "This data is collected for technical reasons and automatically deleted after 7 days. No merging of this data with other data sources takes place.",
      ],
    },
    {
      icon: Mail,
      title: "3. Contact Form",
      content: [
        "If you contact me via the contact form, your information from the form, including the contact details you provide, will be transmitted to me by email for the purpose of processing the inquiry and in the event of follow-up questions.",
        "This data is not stored, not placed in a database, and not passed on to third parties. The transmission is encrypted via email.",
        "The legal basis for processing is Art. 6 para. 1 lit. f GDPR (legitimate interest in processing your inquiry).",
      ],
    },
    {
      icon: Database,
      title: "4. External Services",
      content: [
        "This website does not use external services such as Google Fonts, Google Analytics, Facebook Pixel, or similar tracking tools.",
        "No connections are made to external servers, except to the hosting provider where this site is located.",
      ],
    },
    {
      icon: Eye,
      title: "5. Your Rights",
      content: [
        "Under the GDPR, you have the following rights regarding your personal data:",
        "• Right to information (Art. 15 GDPR)",
        "• Right to rectification (Art. 16 GDPR)",
        "• Right to erasure ('right to be forgotten', Art. 17 GDPR)",
        "• Right to restriction of processing (Art. 18 GDPR)",
        "• Right to data portability (Art. 20 GDPR)",
        "• Right to object (Art. 21 GDPR)",
        "If you wish to exercise any of these rights, please contact me by email.",
      ],
    },
    {
      icon: Lock,
      title: "6. Data Security",
      content: [
        "This website uses SSL or TLS encryption to protect the transmission of your data. You can recognize an encrypted connection by the browser address line changing from 'http://' to 'https://' and by the lock symbol in your browser line.",
      ],
    },
  ],
  de: [
    {
      icon: Info,
      title: "1. Datenschutz auf einen Blick",
      content: [
        "Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) behandelt.",
        "Diese Website nutzt keine Cookies, Tracking-Tools oder Analyse-Dienste. Es werden keine personenbezogenen Daten ohne Ihre ausdrückliche Einwilligung gespeichert oder an Dritte weitergegeben.",
      ],
    },
    {
      icon: Server,
      title: "2. Hosting",
      content: [
        "Diese Website wird bei IONOS gehostet. Die Serverstandorte befinden sich in Deutschland.",
        "Beim Besuch dieser Website werden automatisch folgende Daten in Server-Logfiles erfasst:",
        "• IP-Adresse (anonymisiert)",
        "• Datum und Uhrzeit des Zugriffs",
        "• Browsertyp und -version",
        "• Verwendetes Betriebssystem",
        "Diese Daten werden aus technischen Gründen erhoben und nach 7 Tagen automatisch gelöscht. Eine Zusammenführung mit anderen Datenquellen wird nicht vorgenommen.",
      ],
    },
    {
      icon: Mail,
      title: "3. Kontaktformular",
      content: [
        "Wenn Sie mich über das Kontaktformular kontaktieren, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen per E-Mail an mich übermittelt.",
        "Diese Daten werden nicht gespeichert, nicht in einer Datenbank abgelegt und nicht an Dritte weitergegeben. Die Übermittlung erfolgt verschlüsselt per E-Mail.",
        "Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage).",
      ],
    },
    {
      icon: Database,
      title: "4. Externe Dienste",
      content: [
        "Diese Website verwendet keine externen Dienste wie Google Fonts, Google Analytics, Facebook-Pixel oder ähnliche Tracking-Tools.",
        "Es werden keine Verbindungen zu externen Servern hergestellt, außer zu dem Hosting-Anbieter, bei dem diese Seite liegt.",
      ],
    },
    {
      icon: Eye,
      title: "5. Ihre Rechte",
      content: [
        "Sie haben gemäß DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:",
        "• Recht auf Auskunft (Art. 15 DSGVO)",
        "• Recht auf Berichtigung (Art. 16 DSGVO)",
        "• Recht auf Löschung ('Recht auf Vergessenwerden', Art. 17 DSGVO)",
        "• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "• Widerspruchsrecht (Art. 21 DSGVO)",
        "Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie mich bitte per E-Mail.",
      ],
    },
    {
      icon: Lock,
      title: "6. Datensicherheit",
      content: [
        "Diese Website verwendet SSL-bzw. TLS-Verschlüsselung, um die Übertragung Ihrer Daten zu schützen. Sie erkennen eine verschlüsselte Verbindung daran, dass die Adresszeile des Browsers von 'http://' auf 'https://' wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
      ],
    },
  ],
};

const PRIVACY_HEADERS = {
  en: {
    badge: "Privacy Policy",
    title: "Privacy Policy",
    subtitle: "Information according to Article 13 GDPR",
    lastUpdated: "Last updated:",
    germanTitle: "German",
  },
  de: {
    badge: "Datenschutz",
    title: "Datenschutzerklärung",
    subtitle: "Informationen gemäß Art. 13 DSGVO",
    lastUpdated: "Stand:",
    germanTitle: "Deutsch",
  },
};

// ========== SUBCOMPONENTS ==========
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

const PrivacyHeader = ({ lang }) => (
  <FadeIn delay={60}>
    <div className="flex flex-col items-center text-center gap-6 mb-16">
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary font-medium">
          {PRIVACY_HEADERS[lang].badge}
        </span>
      </div>
      <h1 className="text-4xl lg:text-5xl font-normal text-white">
        {PRIVACY_HEADERS[lang].title}
      </h1>
      <p className="text-white/60 max-w-2xl">
        {PRIVACY_HEADERS[lang].subtitle}
      </p>
    </div>
  </FadeIn>
);

const LastUpdated = ({ lang }) => (
  <FadeIn delay={80}>
    <div className="mb-8 p-4 bg-primary/5 border border-primary/10 rounded-xl text-center">
      <p className="text-white/60 text-sm">
        {PRIVACY_HEADERS[lang].lastUpdated}{" "}
        {formatDate(lang === "en" ? "en-US" : "de-DE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  </FadeIn>
);

const PrivacySection = ({ section, index, lang }) => {
  const Icon = section.icon;

  return (
    <FadeIn key={`${lang}-${index}`} delay={100 + index * 30}>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-medium text-white">{section.title}</h2>
            <div className="space-y-2">
              {section.content.map((paragraph, i) => (
                <p key={i} className="text-white/70 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const PrivacyContent = ({ lang }) => (
  <>
    <PrivacyHeader lang={lang} />
    <LastUpdated lang={lang} />
    <div className="space-y-6 mb-12">
      {PRIVACY_SECTIONS[lang].map((section, index) => (
        <PrivacySection
          key={index}
          section={section}
          index={index}
          lang={lang}
        />
      ))}
    </div>
  </>
);

const PrivacyContact = () => (
  <FadeIn delay={300}>
    <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* English Contact */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="text-white font-medium">
              Contact for Privacy Questions:
            </h3>
          </div>
          <ContactInfo />
        </div>

        {/* German Contact */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <h3 className="text-white font-medium">
              Bei Fragen zum Datenschutz:
            </h3>
          </div>
          <ContactInfo />
        </div>
      </div>
    </div>
  </FadeIn>
);

const ContactInfo = () => (
  <p className="text-white/70 text-sm">
    {formatName(PERSONAL_INFO.name)}
    <br />
    <span className="text-white/50">Email: </span>
    <a
      href={`mailto:${PERSONAL_INFO.email}`}
      className="text-primary hover:underline"
    >
      {PERSONAL_INFO.email}
    </a>
  </p>
);

// ========== MAIN COMPONENT ==========
const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <LegalNavbar />

      <main className="pt-32 pb-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* English Version */}
          <PrivacyContent lang="en" />

          {/* German Version */}
          <FadeIn delay={250}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-2xl font-normal text-white mb-6 text-center">
                {PRIVACY_HEADERS.de.germanTitle}
              </h3>
              <PrivacyContent lang="de" />
            </div>
          </FadeIn>

          <PrivacyContact />
        </div>
      </main>
    </div>
  );
};

export default Privacy;
