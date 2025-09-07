"use client"
import React from 'react';
import Navbar from '../../(home)/components/Navbar';
import Footer from '../../(home)/components/Footer';
import BlogSidebar from '../../(home)/components/BlogSidebar';
import Blog from '../../(home)/components/Blog';

const SoftwareEngineeringPage = () => {
  const content = (
    <>
      <p>
        Software engineering is more than just writing code. Throughout my studies and co-op experience, 
        I&apos;ve learned that being a successful software engineer requires a combination of technical skills, 
        problem-solving abilities, and soft skills.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Technical Foundations</h3>
      <p>
        The core computer science concepts you learn in university - data structures, algorithms, 
        software design patterns - these aren&apos;t just theoretical. They form the foundation of 
        everything you&apos;ll do as a software engineer.
      </p>
      
      <p>
        Key areas I&apos;ve focused on:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Object-oriented programming principles</li>
        <li>Database design and management</li>
        <li>Web development (both frontend and backend)</li>
        <li>Version control with Git</li>
        <li>Testing and debugging techniques</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Learning from Industry</h3>
      <p>
        My co-op experience at RBC taught me that industry work is quite different from academic projects. 
        You&apos;re working with large, existing codebases, collaborating with teams across different time zones, 
        and dealing with real-world constraints.
      </p>
      
      <p>
        Some important lessons I learned:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Code readability is just as important as functionality</li>
        <li>Documentation saves everyone time in the long run</li>
        <li>Understanding the business context makes you a better developer</li>
        <li>Communication skills are crucial for technical roles</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Continuous Learning</h3>
      <p>
        Technology evolves rapidly, and staying current is part of the job. I&apos;ve found that the best way 
        to learn is by building projects and contributing to open source when possible.
      </p>
      
      <p>
        The field of software engineering is constantly evolving, and that&apos;s what makes it exciting. 
        There&apos;s always something new to learn, whether it&apos;s a new framework, a better way to solve 
        a problem, or an emerging technology that could change how we build software.
      </p>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <BlogSidebar />
        <div className="flex-1 pt-32">
          <Blog 
            title="Lessons from Software Engineering"
            date="August 30, 2025"
            content={content}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SoftwareEngineeringPage;
