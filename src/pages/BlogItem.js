import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogItem = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <BlogDetails />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default BlogItem