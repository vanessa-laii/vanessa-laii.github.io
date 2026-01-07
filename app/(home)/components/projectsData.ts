export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BizConnect",
    description: "A comprehensive business networking platform that connects entrepreneurs, investors, and professionals. Features include profile management, networking events, messaging system, and business opportunity matching.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT"],
    image: "/BizConnect.png",
    githubUrl: "https://github.com/vanessa-laii/bizconnect",
    liveUrl: "https://bizconnect-demo.vercel.app"
  },
  {
    id: 2,
    title: "Maze Solver",
    description: "An interactive platform for the International Genetically Engineered Machine (iGEM) competition. Includes project documentation, team collaboration tools, and research data visualization.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/iGEM.png",
    githubUrl: "https://github.com/vanessa-laii/igem-platform",
    liveUrl: "https://igem-platform.vercel.app"
  },
  {
    id: 3,
    title: "MacWater Analytics",
    description: "A water quality monitoring and analytics dashboard for McMaster University. Real-time data visualization, historical trends analysis, and environmental impact reporting.",
    techStack: ["Vue.js", "Python", "Flask", "D3.js", "SQLite", "Chart.js"],
    image: "/MacWater.png",
    githubUrl: "https://github.com/vanessa-laii/macwater-analytics"
  },
  {
    id: 4,
    title: "Spotify Music Analyzer",
    description: "A music analytics application that connects to Spotify API to analyze listening habits, create personalized playlists, and discover new music based on user preferences and listening patterns.",
    techStack: ["React", "Spotify API", "Node.js", "Express", "Chart.js", "OAuth"],
    image: "/Spotify.jpg",
    githubUrl: "https://github.com/vanessa-laii/spotify-analyzer",
    liveUrl: "https://spotify-analyzer-demo.netlify.app"
  }
];