import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlogSidebar = () => {
  const pathname = usePathname();
  
  const blogPosts = [
    {
      title: "All Posts",
      href: "/blog",
      description: "View all blog posts"
    },
    // {
    //   title: "University Life",
    //   href: "/blog/university-life",
    //   description: "My experiences at McMaster"
    // },
    // {
    //   title: "Software Engineering",
    //   href: "/blog/software-engineering", 
    //   description: "Technical insights and learnings"
    // },
    {
      title: "Hamilton Guide",
      href: "/blog/hamilton-guide",
      description: "Exploring Hamilton, Ontario"
    }
  ];

  return (
    <div className="w-full md:w-64 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 md:min-h-screen pt-24 md:pt-32 px-4 md:px-6">
      <div className="md:sticky md:top-32">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Blogs</h2>
        <nav className="space-y-2">
          {blogPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className={`block p-3 rounded-lg transition-colors duration-200 ${
                pathname === post.href
                  ? 'bg-purple-100 text-purple-400 border border-purple-200'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-purple-300'
              }`}
            >
              <div className="font-medium">{post.title}</div>
              <div className="text-sm text-gray-500 mt-1">{post.description}</div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BlogSidebar;
