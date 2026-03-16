"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Timeline } from "@/components/ui/timeline";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ProjectCard from './components/ProjectCard';
import { projects } from './components/projectsData';

const Page = () => {
  // About section data
  const timelineData = [
    {
      title: "2025",
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-1">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">Role</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-neutral-800 dark:text-neutral-200">12 month co-op at Royal Bank of Canada (RBC) as a Full Stack Developer Intern on Innovation & Technology DevOps.</p>
            </div>
            
            <div className="md:col-span-1">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">Used</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-neutral-800 dark:text-neutral-200">TypeScript, Python, Opentelemetry, Dynatrace, Backstage, Ansible</p>
            </div>
            
            <div className="md:col-span-1">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">Responsibilities</p>
            </div>
            <div className="md:col-span-3">
              <p className="text-neutral-800 dark:text-neutral-200">Implement Site Reliability Practices for 30+ services across RBC&apos;s platform to ensure complete and healthy systems. Improve developer productivity by automating workflows, enhancing observability and reducing debugging time.</p>
            </div>
            
            <div className="md:col-span-1">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">Shipped</p>
            </div>
            <div className="md:col-span-3">
              <div className="space-y-2 font-semibold">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-base dark:text-neutral-300">
                  ✅ Automated architecture diagrams for microservices and hosts & processes from Dynatrace data.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-base dark:text-neutral-300">
                  ✅ Synthetic Pipelines to monitor the health of RBC&apos;s tools and house CI/CD platform.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-base dark:text-neutral-300">
                  ✅ GitHub Health Check Reports to review high usage and pulling frequencies across all lines of businesses.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    }, 
      {
        title: "2024",
        content: (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Role</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Web Dev Lead for McMaster iGEM</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Used</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">TypeScript, React, Node.js, Vercel, Git, TailwindCSS</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Responsibilities</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Collaborate with researchers to develop a wiki page winning Silver award in the overgrad category in Paris, France.</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Shipped</p>
              </div>
              <div className="md:col-span-3">
                <div className="space-y-2 font-semibold">
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-base dark:text-neutral-300">
                    ✅ Personal website to showcase the team&apos;s research and achievements, and develop the personal branding
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-base dark:text-neutral-300">
                    ✅ 2024 Wiki page to document research of multiple subteams 
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://2024.igem.wiki/mcmaster-canada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/iGEM-wiki.png"
                  alt="iGEM 2024 Wiki"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </a>
              <a 
                href="https://www.mcmaster-igem.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/iGEM-personal.png"
                  alt="iGEM Personal Website"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </a>
            </div>
          </div>
        ),
      },
      {
        title: "DeltaHacks 2023",
        content: (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Hackathon</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">DeltaHacks 2023</p>
              </div>
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Used</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Figma, JavaScript, HTML/CSS, Python, Firebase, SQL</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Responsibilities</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">Lead the front-end and UI/UX design for a small business partnership platform</p>
              </div>
              
              <div className="md:col-span-1">
                <p className="font-semibold text-neutral-800 dark:text-neutral-200">Won</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-800 dark:text-neutral-200">🏆 1st place for RBC Sponsorship prize </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://devpost.com/software/rbc-bizconnect" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/BizConnect.png"
                  alt="BizConnect"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </a>
                <img
                  src="/delta.JPG"
                  alt="iGEM Personal Website"
                  width={500}
                  height={500}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
            </div>
          </div>
        ),
      },
  ];

  // Projects section data
  const projectTestimonials = [
    {
      action: "Improving developer productivity by shipping automated architecture diagrams for host-process relationships for developers, and visualizing GitHub Actions workflows on Dynatrace.",
      name: "SWE Intern",
      designation: "Royal Bank of Canada (RBC)",
      src: "/rbc.jpg",
      skills: "Skills: TypeScript, Python, Opentelemetry, Dynatrace, Backstage",
    },
    {
      action: "Managed a team of 2 developers and lead the design and development of the personal iGEM website as well as the competition website. Won silver medal at the iGEM 2024 competition.",
      name: "Web Dev Lead", 
      website: "https://2024.igem.wiki/mcmaster-canada/",
      designation: "McMaster iGEM",
      src: "/iGEM.png",
      skills: "Skills: Typescript, Tailwind CSS, Node.js, Framer motion",
    },
    {
      action: "Focused on introducing programming concepts through interactive lessons and hands-on projects to over 500 students in Ontario.",
      name: "Software Engineering Instructor", 
      website: "http://outreach.mcmaster.ca/",
      designation: "McMaster Start Coding",
      src: "/msc.png",
      skills: "Skills: Elm",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full flex-1"> 
        <Navbar />
        
        {/* Hero Section */}
        <div id="home" className="pt-32 sm:pt-40 lg:pt-48 px-4 sm:px-6 lg:px-10">
          <motion.div
            className="max-w-7xl mx-auto py-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Hero />
          </motion.div>
        </div>
        
        {/* Experience Section */}
        <div id="experience" className="pt-16 sm:pt-20 px-4 sm:px-6 lg:px-10">
          <motion.div
            className="max-w-7xl mx-auto py-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Timeline data={timelineData} />
          </motion.div>
        </div>
        
        {/* Projects Section */}
        <div id="projects" className="pt-16 sm:pt-20 px-4 sm:px-6 lg:px-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                My Projects .ೃ࿐
              </h1>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  index={index}
                />
              ))}
            </motion.div>


        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Page;
