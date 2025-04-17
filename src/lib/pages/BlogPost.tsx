
import React from 'react';
import Navbar from '@/components/layout/Navbar.tsx';
import Footer from '@/components/layout/Footer.tsx';
import BlogDetail from '@/components/blog/BlogDetail.tsx';

const BlogPost = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <BlogDetail />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
