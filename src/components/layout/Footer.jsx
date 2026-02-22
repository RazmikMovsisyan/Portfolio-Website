import React from "react";
import { Github, Mail, Scale, Shield } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../utils/constants";

// Komponente außerhalb der Footer-Komponente definieren
const LegalLinksList = ({ isMobile = false, links }) => (
  <div
    className={
      isMobile ? "flex md:hidden gap-4 justify-center" : "hidden md:flex gap-4"
    }
  >
    {links.map((link, i) => (
      <React.Fragment key={link.label}>
        <a
          href={link.href}
          aria-label={`Legal link: ${link.label}`}
          className="flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors"
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
        {i < links.length - 1 && <span className="text-white/20">|</span>}
      </React.Fragment>
    ))}
  </div>
);

const Footer = () => {
  const quickLinks = NAV_LINKS.map((link) => ({
    label: link.label,
    href: `#${link.id.toLowerCase()}`,
  }));

  const legalLinks = [
    {
      label: "Imprint",
      href: "/imprint",
      icon: <Scale className="w-4 h-4" />,
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
      icon: <Shield className="w-4 h-4" />,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: SOCIAL_LINKS.github,
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:info@razmikmovsisyan.com",
      label: "Email",
    },
  ];

  const formatName = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <footer className="bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-medium text-white">
              {PERSONAL_INFO.name}
            </h3>
            {/* Jetzt werden beide Instanzen der gleichen Komponente verwendet */}
            <LegalLinksList isMobile={true} links={legalLinks} />
            <LegalLinksList isMobile={false} links={legalLinks} />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={`Quick link: ${link.label}`}
                    className="text-white/60 hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg text-white mb-4">Connect With Me</h4>
            <p className="text-white/60 mb-6 max-w-sm mx-auto md:mx-0">
              Got a vision? Let's bring it to life! I'm always excited to
              connect with creative minds and work on inspiring projects.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.label === "GitHub"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={`${
                    social.label === "Email" ? "Send an email to" : "Visit my"
                  } ${social.label}`}
                  className="w-12 h-12 flex items-center justify-center rounded-xl 
                           bg-white/5 border border-white/10
                           hover:bg-primary/10 hover:border-primary/30
                           transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-md text-white/40 text-center">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <span className="text-md text-white/40 text-center">
              <span className="text-primary">♥ </span>
              Built by {formatName(PERSONAL_INFO.name)} with Vite, React &
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
