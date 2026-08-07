/**
 * Main site data — edit everything about you here (links, numbers, stats)
 */

export const site = {
  name: "Omar Mostafa",
  brand: "Omar.DEV",
  tagline: "Full Stack JS Developer",
  roles: [
    "MERN Stack Developer",
    "React / Next.js Engineer",
    "Node.js & Express Specialist",
    "MongoDB Data Modeler",
    "UI / UX Designer",
  ],
  email: "itzprogamer077@gmail.com",
  whatsapp: "https://wa.me/201014991409",
  whatsappDisplay: "+20 101 499 1409",
  github: "https://github.com/progamer07745",
  facebook: "https://www.facebook.com/omarmora12345",
  instagram: "https://www.instagram.com/itz_omar_mostafa",
  cv: "/images/omar-mostafa-cv.pdf",
  photo: "/images/omar.png",

  // Hero stats
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 7, suffix: "+", label: "Projects Delivered" },
    { value: 6, suffix: "+", label: "Certifications" },
    { value: 3, suffix: "+", label: "Brands Served" },
  ],

  // Marquee ticker items
  marquee: [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "Tailwind CSS",
    "Bootstrap",
    "Git & GitHub",
    "Figma",
  ],
};

// Companies I've worked with
export const companies = [
  {
    name: "Trio Coders",
    role: "Front-End & Web Development",
    logo: "/images/trio.png",
    links: [
      { icon: "fa-brands fa-youtube", href: "https://www.youtube.com/@TrioCoders" },
      { icon: "fa-brands fa-tiktok", href: "https://www.tiktok.com/@triocoders.arabic" },
      { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/triocoders.arabic" },
      {
        icon: "fa-brands fa-facebook",
        href: "https://www.facebook.com/people/TrioCoders/61582095599368/",
      },
    ],
  },
  {
    name: "TPixel",
    role: "UI / UX & Front-End Development",
    logo: "/images/tpixel.png",
    links: [
      {
        icon: "fa-brands fa-youtube",
        href: "https://www.youtube.com/@TpixelGroup",
      },
      {
        icon: "fa-brands fa-instagram",
        href: "https://www.instagram.com/tpixel_group",
      },
      {
        icon: "fa-brands fa-facebook",
        href: "https://www.facebook.com/people/TPixel-Group/61588079044348/",
      },
    ],
  },
];

// Social media presence
export const socials = [
  { label: "TikTok", icon: "fa-brands fa-tiktok", value: "1K", text: "Followers" },
  { label: "YouTube", icon: "fa-brands fa-youtube", value: "1.3K", text: "Subscribers" },
  { label: "Facebook", icon: "fa-brands fa-facebook", value: "1K", text: "Likes" },
];

// Contact channels
export const contactChannels = [
  { label: "WhatsApp", icon: "fa-brands fa-whatsapp", href: "https://wa.me/201014991409", value: site.whatsappDisplay },
  { label: "GitHub", icon: "fa-brands fa-github", href: "https://github.com/progamer07745", value: "@progamer07745" },
  { label: "Email", icon: "fa-solid fa-envelope", href: "mailto:itzprogamer077@gmail.com", value: site.email },
  { label: "Facebook", icon: "fa-brands fa-facebook", href: "https://www.facebook.com/omarmora12345", value: "Omar Mostafa" },
  { label: "Instagram", icon: "fa-brands fa-instagram", href: "https://www.instagram.com/itz_omar_mostafa", value: "@itz_omar_mostafa" },
];
