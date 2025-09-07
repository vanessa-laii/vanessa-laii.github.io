"use client"
import React from 'react';
import Navbar from '../(home)/components/Navbar';
import Footer from '../(home)/components/Footer';
import BlogSidebar from '../(home)/components/BlogSidebar';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <BlogSidebar />
        <div className="flex-1 pt-32 px-10">
          <div className="max-w-4xl mx-auto p-5">
            {/* Blog Header */}
            <div className="mb-16">
              <h1 className="text-5xl font-bold mb-4 text-gray-900">Welcome to my blog!</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Digital diary of my experiences, thoughts, and journey at McMaster.
              </p>
            </div>
            
            {/* Blog Posts List */}
            <div className="space-y-8">
              {/* <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <header className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <a href="/blog/university-life" className="hover:text-purple-400 transition-colors">
                      My Journey at McMaster University
                    </a>
                  </h2>
                  <div className="text-gray-500 text-sm">
                    Published on September 1, 2025
                  </div>
                </header>
                <p className="text-gray-700 leading-relaxed">
                  Sharing my experiences as a Software Engineering student at McMaster University, 
                  from academics to campus life and everything in between...
                </p>
                <a href="/blog/university-life" className="text-purple-400 hover:text-purple-300 font-medium mt-4 inline-block">
                  Read more →
                </a>
              </article> */}

              {/* <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <header className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <a href="/blog/software-engineering" className="hover:text-purple-400 transition-colors">
                      Lessons from My First Co-op
                    </a>
                  </h2>
                  <div className="text-gray-500 text-sm">
                    Published on August 28, 2025
                  </div>
                </header>
                <p className="text-gray-700 leading-relaxed">
                  Reflecting on my 12-month co-op experience at RBC as a Full Stack Developer, 
                  the technologies I learned, and the challenges I overcame...
                </p>
                <a href="/blog/coop-experience" className="text-purple-400 hover:text-purple-300 font-medium mt-4 inline-block">
                  Read more →
                </a>
              </article> */}

              <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <header className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    <a href="/blog/hamilton-guide" className="hover:text-purple-400 transition-colors">
                      🥢 Vanessa&apos;s Hamilton Guide
                    </a>
                  </h2>
                  <div className="text-gray-500 text-sm">
                    Published on September 6, 2025
                  </div>
                </header>
                <p className="text-gray-700 leading-relaxed">
                  Not sure what to do on the weekends? Here are some of my favorite places to visit - from waterfalls, restaurants to cafes!
                </p>
                <a href="/blog/hamilton-guide" className="text-purple-400 hover:text-purple-300 font-medium mt-4 inline-block">
                  Read more →
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
