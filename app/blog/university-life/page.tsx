"use client"
import React from 'react';
import Navbar from '../../(home)/components/Navbar';
import Footer from '../../(home)/components/Footer';
import BlogSidebar from '../../(home)/components/BlogSidebar';
import Blog from '../../(home)/components/Blog';

const UniversityLifePage = () => {
  const content = (
    <>
      <p>
        Starting university can be both exciting and overwhelming. When I first arrived at McMaster University 
        to pursue Software Engineering, I had no idea what to expect. Here&apos;s what I&apos;ve learned along the way.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Academic Life</h3>
      <p>
        The transition from high school to university-level coursework was significant. The pace is faster, 
        the material is more complex, and you&apos;re expected to be much more independent in your learning.
      </p>
      
      <p>
        Some key tips that helped me succeed:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Attend every lecture - even the 8:30 AM ones</li>
        <li>Form study groups with classmates</li>
        <li>Use office hours - professors actually want to help</li>
        <li>Start assignments early (seriously, don&apos;t wait until the last minute)</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Campus Life</h3>
      <p>
        McMaster&apos;s campus is beautiful, especially in the fall when the leaves change colors. 
        Getting involved in extracurricular activities was crucial for my university experience.
      </p>
      
      <p>
        I joined several clubs and organizations, which helped me:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Meet like-minded people outside of my program</li>
        <li>Develop leadership and teamwork skills</li>
        <li>Build my resume for co-op applications</li>
        <li>Have fun and take breaks from studying</li>
      </ul>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Looking Forward</h3>
      <p>
        University is a journey of growth, both academically and personally. Every challenge I&apos;ve faced 
        has taught me something valuable, and I&apos;m excited to see what the rest of my degree has in store.
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
            title="My Journey at McMaster University"
            date="September 1, 2025"
            content={content}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UniversityLifePage;
