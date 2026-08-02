import { Instagram, Github, Linkedin, Globe, Dribbble } from 'lucide-react';

export const categoriesData = ["ALL", "PORTFOLIO", "SOCIALS"];

export const linksData = [
  {
    id: 1,
    index: "01",
    title: "Personal Portfolio",
    description: "Interactive web experiences, motion & case studies",
    url: "https://tohari.my.id/",
    icon: Globe,
    category: "PORTFOLIO",
    isFeatured: true,
    electricColor: "#924DBF",
    electricSpeed: 1.0,
    electricChaos: 0.03,
  },
  {
    id: 2,
    index: "02",
    title: "GitHub",
    description: "Open-source experiments & React components",
    url: "https://github.com/toharimaolana",
    icon: Github,
    category: "PORTFOLIO",
    isFeatured: false,
  },
  {
    id: 3,
    index: "03",
    title: "Instagram",
    description: "Dev logs, personal life & creative process",
    url: "https://instagram.com/toharimaolana",
    icon: Instagram,
    category: "SOCIALS",
    isFeatured: false,
  },
  {
    id: 4,
    index: "04",
    title: "LinkedIn",
    description: "Professional background & career updates",
    url: "https://linkedin.com/in/mohamad-tohari-maolana",
    icon: Linkedin,
    category: "SOCIALS",
    isFeatured: false,
  },
  {
    id: 5,
    index: "05",
    title: "Dribbble",
    description: "UI/UX mockups, prototypes & design concepts",
    url: "https://dribbble.com/sitohari",
    icon: Dribbble,
    category: "PORTFOLIO",
    isFeatured: false,
  }
];

export const profileData = {
  name: "Mohamad Tohari Maolana",
  handle: "@toharimaolana",
  role: "Creative Developer · Frontend Engineer · Community Builder",
  location: "Jakarta, Indonesia",
  status: "Available for Work",
  bio: "Building precise, high-performance web interfaces with motion and code.",
  avatar: "/profile_8bit.jpeg",
};

export const siteConfig = {
  title: "Mohamad Tohari Maolana",
  description: "Personal links — Creative Developer & Interaction Engineer based in Jakarta.",
};