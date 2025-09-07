import React from 'react';

interface BlogProps {
  title: string;
  date: string;
  content: React.ReactNode;
}

const Blog: React.FC<BlogProps> = ({ title, date, content }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="mb-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <div className="text-gray-500 text-sm mb-6">
            Published on {date}
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          {content}
        </div>
      </article>
    </div>
  );
};

export default Blog;
