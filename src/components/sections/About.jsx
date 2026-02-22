import React from "react";
import {
  Code2,
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Building,
  ExternalLink,
  Mail,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Layers,
  BookOpen,
  Star,
} from "lucide-react";
import FadeIn from "../animations/fadeIn";

const createExperienceSchema = (
  company,
  location,
  period,
  role,
  description,
  website
) => ({
  company,
  location,
  period,
  role,
  description,
  website,
});

const pwcExperience = {
  ...createExperienceSchema(
    "PricewaterhouseCoopers (PwC)",
    "Düsseldorf / Duisburg, Germany",
    "2023 - 2024",
    "Specialist - Platform Assurance Solutions",
    "PwC Germany is one of the leading professional services firms with over 14,000 employees across 21 locations, generating approximately €2.9 billion in revenue. I was part of the Platform Assurance Solutions team.",
    "https://www.pwc.de"
  ),
  responsibilities: [
    "Supported the establishment of a new project management team and managed various administrative tasks",
    "Assisted audit planning including data management in documentation tools and review of contract documents",
    "Supported audit teams in complying with quality requirements",
    "Conducted surveys and updated overviews",
    "Maintained master data of business relationships",
    "Created kick-off presentations and updated regular meeting slides",
    "Performed analyses and created a service catalog",
    "Managed scheduling and deadline monitoring",
  ],
  achievements: [
    "Demonstrated himself as a competent contact person in his work environment",
    "Possessed sound specialist knowledge that he applied confidently in practice",
    "Always completed tasks very carefully, accurately, and reliably",
    "Characterized by a concentrated and efficient working style",
    "Handled tasks in a structured, goal-oriented manner",
    "Fully achieved the required work results; met company and client expectations",
    "Showed resilience and maintained stable results under deadline pressure",
    "Workload and pace met expectations",
    "Consistently showed initiative with remarkable commitment and great energy",
    "Notable willingness to take on additional responsibility",
    "Consistently demonstrated strong performance motivation",
  ],
  highlights: [
    "Completed all assigned tasks to full satisfaction",
    "Always exemplary conduct toward supervisors and colleagues",
    "Respected team member who contributed to very good and efficient teamwork",
    "Particularly noteworthy: excellent collaboration with clients, always responding flexibly and with a service-oriented approach to their concerns",
  ],
  testimonial: {
    text: '"Mr. Movsisyan completed the tasks assigned to him to our full satisfaction. His conduct toward supervisors and colleagues was always exemplary. He was a respected employee and contributed in every way to very good and efficient teamwork. Particularly noteworthy is his consistently excellent collaboration with our clients, responding flexibly and with a service-oriented approach to their concerns."',
    source: "Dietmar Prümm & Katharina Deni, Partners at PwC Germany",
    date: "March 31, 2024",
  },
};

const codeInstituteExperience = {
  ...createExperienceSchema(
    "Code Institute",
    "Dublin, Ireland (Remote)",
    "Full-Stack Software Development Program",
    "",
    "EQF Level 6 accredited program - equivalent to one-third of an academic bachelor's degree. Entire program conducted in English with project-based learning approach.",
    "https://codeinstitute.net"
  ),
  highlights: [
    "5 Milestone Projects with 1-on-1 Mentoring",
    "Full-Stack Development with Django & React",
    "REST APIs & Database Design",
    "Deployment & Cloud Integration",
  ],
  technologies: ["React", "Django", "Python", "PostgreSQL", "Git", "REST APIs"],
  curriculum: {
    frontend: ["HTML5/CSS3", "JavaScript (ES6+)", "React", "Bootstrap"],
    backend: ["Python", "Django", "PostgreSQL", "REST APIs"],
    tools: ["Git/GitHub", "Heroku", "VS Code", "Chrome DevTools"],
  },
  projects: [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack Django application with payment integration and user authentication",
    },
    {
      name: "Social Media Dashboard",
      description:
        "React-based frontend with real-time data visualization and REST API integration",
    },
    {
      name: "Task Management App",
      description:
        "Full CRUD functionality with user authentication and database design",
    },
  ],
  competencies: [
    "Agile Methodologies",
    "Test-Driven Development",
    "Version Control (Git)",
    "CI/CD Principles",
    "Database Design",
    "API Development",
  ],
  learningHours: "1,000+",
  rating: 5,
};

// Reusable Components
const SectionBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit mb-6">
    <Icon className="w-4 h-4 text-primary" />
    <span className="text-sm text-primary font-medium">{text}</span>
    <Icon className="w-4 h-4 text-primary" />
  </div>
);

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <FadeIn delay={80}>
    <div className="flex items-center gap-3 mb-10">
      <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-3xl font-normal text-white">{title}</h3>
        {subtitle && <p className="text-white/60">{subtitle}</p>}
      </div>
    </div>
  </FadeIn>
);

const InfoChip = ({ icon: Icon, text, color = "primary" }) => (
  <div className="flex items-center gap-2">
    <Icon className={`w-5 h-5 text-${color}`} />
    <span className="text-white/80 text-base">{text}</span>
  </div>
);

const BulletList = ({ items, icon: Icon, color = "primary", limit }) => {
  const displayItems = limit ? items.slice(0, limit) : items;
  return (
    <div className="grid grid-cols-1 gap-3">
      {displayItems.map((item, index) => (
        <div key={index} className="flex items-start gap-2.5">
          <Icon className={`w-5 h-5 text-${color} flex-shrink-0 mt-0.5`} />
          <span className="text-white/80 text-base">{item}</span>
        </div>
      ))}
    </div>
  );
};

const TagCloud = ({ items, color = "primary" }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item, idx) => (
      <span
        key={idx}
        className={`px-3 py-1.5 bg-${color}/10 border border-${color}/20 rounded-full text-sm text-white/80`}
      >
        {item}
      </span>
    ))}
  </div>
);

const PwCSection = ({ data }) => (
  <div className="h-full group">
    <div className="bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 h-full flex flex-col hover:border-blue-500/50 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building className="w-7 h-7 text-blue-400" />
          </div>
          <div>
            <h4 className="text-1xl lg:text-3xl font-medium text-white flex items-center gap-2">
              {data.company}
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </h4>
            <InfoChip icon={MapPin} text={data.location} color="blue-400/80" />
          </div>
        </div>
      </div>

      {/* Role & Period */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 pb-6 border-b border-blue-500/20">
        <InfoChip icon={Briefcase} text={data.role} color="blue-400" />
        <InfoChip icon={Calendar} text={data.period} color="blue-400" />
      </div>

      {/* Description */}
      <p className="text-white/80 mb-6 leading-relaxed text-base">
        {data.description}
      </p>

      {/* Key Responsibilities */}
      <div className="mb-6">
        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-blue-400/90">
          Key Responsibilities
        </h5>
        <BulletList
          items={data.responsibilities}
          icon={CheckCircle}
          color="blue-400"
          limit={4}
        />
      </div>

      {/* Performance Highlights */}
      <div className="mb-6">
        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-blue-400/90">
          Performance
        </h5>
        <BulletList
          items={data.achievements}
          icon={TrendingUp}
          color="blue-400"
          limit={4}
        />
      </div>

      {/* Special Recognition */}
      <div className="mb-6">
        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-blue-400/90">
          Special Recognition
        </h5>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
          <p className="text-white/85 text-base leading-relaxed">
            {data.highlights[3]}
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-auto">
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
          <p className="text-white/85 italic text-base leading-relaxed mb-4">
            "{data.testimonial.text}"
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-4">
            <p className="text-blue-400/80 text-sm font-medium">
              — {data.testimonial.source}
            </p>
            <p className="text-blue-400/60 text-sm">{data.testimonial.date}</p>
          </div>

          <div className="pt-4 border-t border-blue-500/20">
            <p className="text-white/60 text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>Full reference letter available upon request</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CodeInstituteSection = ({ data }) => (
  <div className="h-full group">
    <div className="bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/30 rounded-2xl p-8 h-full flex flex-col hover:border-primary/50 transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h4 className="text-1xl lg:text-3xl font-medium text-white flex items-center gap-1">
              {data.company}
              <a
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </h4>
            <p className="text-base text-primary/80 mt-1">{data.location}</p>
          </div>
        </div>
        <span className="px-2 py-0.5 bg-primary/20 border border-primary/30 rounded-full text-xs text-primary font-medium whitespace-nowrap">
          EQF Level 6
        </span>
      </div>

      {/* Period & Learning Hours */}
      <div className="flex items-center gap-6 mb-6 pb-6 border-b border-primary/20">
        <InfoChip icon={Calendar} text={data.period} color="primary" />
        <InfoChip
          icon={BookOpen}
          text={`${data.learningHours} hours`}
          color="primary"
        />
      </div>

      {/* Description */}
      <p className="text-white/80 mb-6 leading-relaxed text-base">
        {data.description}
      </p>

      {/* Program Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        <span className="text-white/70 text-sm">Program Rating</span>
      </div>

      {/* Core Curriculum */}
      <div className="mb-6">
        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-primary/90 flex items-center gap-2">
          <Layers className="w-5 h-5" />
          Core Curriculum
        </h5>

        <div className="space-y-4">
          {Object.entries(data.curriculum).map(([key, items]) => (
            <div key={key}>
              <p className="text-white/90 text-sm font-medium mb-2 capitalize">
                {key} Development
              </p>
              <TagCloud items={items} color="primary" />
            </div>
          ))}
        </div>
      </div>

      {/* Key Projects */}
      <div className="mb-6">
        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-primary/90 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Milestone Projects
        </h5>
        <div className="space-y-3">
          {data.projects.map((project, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white text-base font-medium">
                  {project.name}
                </span>
                <p className="text-white/70 text-sm mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competencies Gained */}
      <div className="mb-6">
        <h5 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm text-primary/90">
          Competencies Gained
        </h5>
        <div className="grid grid-cols-2 gap-3">
          {data.competencies.map((comp, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-white/80 text-sm">{comp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6 border-t border-primary/20">
        <div className="flex items-start gap-3">
          <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-white/70 text-sm leading-relaxed">
            Diploma in Full-Stack Software Development · EQF Level 6 · 5
            mentor-led projects with code reviews
          </p>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <FadeIn delay={60}>
            <SectionBadge icon={Code2} text="Full Stack Developer" />
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight mb-6">
              About Me
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-white/70 max-w-3xl text-base leading-relaxed">
              <span className="block mb-4">
                At PwC Germany, I worked in Platform Assurance, managing
                processes, ensuring quality, and serving clients. That
                experience taught me structured thinking, precision, and how to
                handle complex client needs.
              </span>
              <span className="block">
                Now I build Full-Stack Web Applications with React, Django, and
                More. I create software that doesn't just work. It solves real
                business problems, because I understand both sides: the business
                requirements and the code.
              </span>
            </p>
          </FadeIn>
        </div>

        {/* Career Path */}
        <div className="mb-20">
          <SectionHeader
            icon={Briefcase}
            title="Career Path"
            subtitle="Professional experience & education"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn delay={120}>
              <PwCSection data={pwcExperience} />
            </FadeIn>

            <FadeIn delay={160}>
              <CodeInstituteSection data={codeInstituteExperience} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
