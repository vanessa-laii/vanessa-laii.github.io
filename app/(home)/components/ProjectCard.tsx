"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  githubUrl,
  liveUrl,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={300}
          height={128}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-800 text-lg leading-relaxed mb-5 h-40 overflow-hidden">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4 flex-1">
          {techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-0.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            <Github size={14} />
            View Code
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-purple-300 hover:bg-purple-400 text-white px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
    </motion.div>
  );
};

export default ProjectCard;