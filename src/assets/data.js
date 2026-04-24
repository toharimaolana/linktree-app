
import { Instagram, Github, Linkedin, Globe,  Camera } from 'lucide-react';

export const linksData = [
    {
        id: 1,
        title: "Personal Website",
        description: "Learn more about me and my work",
        url: "https://toharimaolana.netlify.app/",
        icon: Globe,
        gradient: "from-indigo-500 via-purple-600 to-pink-600"
    },
    {
        id: 5,
        title: "Instagram",
        description: "Follow my daily adventures and creative content",
        url: "https://instagram.com/toharimaolana",
        icon: Instagram,
        gradient: "from-purple-600 via-pink-600 to-red-500"
    },
    {
        id: 3,
        title: "LinkedIn Profile",
        description: "Connect with me professionally",
        url: "https://linkedin.com/in/mohamad-tohari-maolana",
        icon: Linkedin,
        gradient: "from-blue-600 via-blue-700 to-blue-800"
    },
    {
        id: 2,
        title: "GitHub Portfolio",
        description: "Check out my latest projects and code",
        url: "https://github.com/sitohari",
        icon: Github,
        gradient: "from-gray-700 via-gray-800 to-black"
    },
    {
        id: 4,
        title: "Dribbble Portfolio",
        description: "Explore my design work and projects",
        url: "htttps://dribbble.com/sitohari",
        icon: Camera,
        gradient: "from-fuchsia-600 to-pink-700"
    },
];

export const profileData = {
  name: "Mohamad Tohari Maolana",
  subtitle: "Web Developer & Designer",
};

export const siteConfig = {
  title: "My Linktree",
  description: "All my important links in one place",
  theme: {
    primaryGradient: "from-violet-900 to-slate-900",
    accentColor: "purple"
  }
};