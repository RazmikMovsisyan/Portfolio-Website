export const PERSONAL_INFO = {
  name: 'RAZMIK MOVSISYAN', 
  title: 'Full Stack Software Engineer',
  email: 'info@razmikmovsisyan.com',
  location: 'Bochum, Germany',
  phone: '+49 163 9701860',
  tagline: 'Crafting seamless digital experiences with code and creativity.',
  resume: '/resume-and-diploma.pdf',
  bio: [
    "First steps in the age of 14.",
    "Passionated about building modern web applications with cutting-edge technologies. Eager to contribute to innovative projects and grow as a developer.",
    "Available for remote work worldwide."
  ]
};

export const NAV_LINKS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' }
];

export const PROJECTS = [
{
  id: 1,
  title: "Loopin",
  description: "A community platform to share photos and stay in the loop! Built with React & Django REST Framework. Features include user authentication, post creation, comments, likes, following system, infinite scroll, and a custom newsletter model with full CRUD functionality.",
  githubUrl: "https://github.com/RazmikMovsisyan/loopin",
  liveDemoUrl: "https://loopinapp-d364a1b22906.herokuapp.com/", 
  technologies: ["React", "Django REST", "PostgreSQL", "Cloudinary", "Heroku"],
  image: "https://github.com/RazmikMovsisyan/RazmikMovsisyan/raw/main/assets/loopin/3loopin.png"
},
{
  id: 2,
  title: "Microblogify",
  description: "A minimalist microblogging platform for sharing thoughts and ideas. Built with Django, PostgreSQL, and Cloudinary. Features user authentication, CRUD posts, comments, user profiles, profile deletion, and responsive design.",
  githubUrl: "https://github.com/RazmikMovsisyan/microblogify",
  liveDemoUrl: "https://microblogify-f169ead0df1f.herokuapp.com/", 
  technologies: ["Django", "PostgreSQL", "Cloudinary", "Heroku", "Bootstrap"],
  image: "https://github.com/RazmikMovsisyan/RazmikMovsisyan/raw/main/assets/microblogify/2microblogify.png"
},
{
  id: 3,
  title: "Light Trails Photography",
  description: "A responsive photography portfolio showcasing wedding, portrait, and fashion photography. Built mobile-first with semantic HTML5 & CSS3, ensuring a well-structured foundation and full accessibility through proper ARIA implementation. Features an adaptive layout, responsive gallery, contact form with Google Maps integration, and SEO optimization.",
  githubUrl: "https://github.com/RazmikMovsisyan/light_trails",
  liveDemoUrl: "https://razmikmovsisyan.github.io/light_trails/", 
  technologies: ["HTML5", "CSS3", "Flexbox", "Responsive Design", "SEO"],
  image: "../images/projects/light-trails.png"
},
{
  id: 4,
  title: "Speed Typing Game",
  description: "Interactive typing practice game with real-time WPM/CPM tracking, error counting, and retro command-line aesthetic. Features keyboard sound effects, toggle button, and responsive design.",
  githubUrl: "https://github.com/RazmikMovsisyan/typing-game",
  liveDemoUrl: "https://razmikmovsisyan.github.io/typing-game/", 
  technologies: ["JavaScript", "HTML5", "CSS3"],
  image: "../images/projects/typing-game.png"
},
{
  id: 5,
  title: "Heubel GmbH",
  description: "A hybrid platform built with WordPress and Shopify, strategically chosen to serve both corporate branding and B2B wholesale requirements. WordPress powers the company's heritage storytelling, craftsmanship showcase, and service presentations, while Shopify handles the complex B2B wholesale operations with extensive inventory management, fast delivery logistics, and a seamless ordering system for international customers across Europe and the USA.",
  liveDemoUrl: "https://www.heubel-sattlerei.de", 
  technologies: ["Wordpress", "Shopify"],
  image: "../images/projects/heubel.png"
},
{
  id: 6,
  title: "CargoCover",
  description: "A specialized e-commerce solution developed with WordPress and WooCommerce, enabling complete customization control for a product line that demands vehicle-specific configurations. WooCommerce provides the flexibility to manage hundreds of made-to-measure variations, custom options (storage compartments, trailer hitch openings, colored seams), and a intuitive brand-based navigation system. The WordPress backend allows for deep integration of product configurators while maintaining SEO-rich content about materials, fit guides, and the handcrafted manufacturing process.",
  liveDemoUrl: "https://www.cargocover.de/", 
  technologies: ["Wordpress", "WooCommerce"],
  image: "../images/projects/cargocover.png"
}
];

export const SOCIAL_LINKS = {
  github: "https://github.com/razmikmovsisyan",
};