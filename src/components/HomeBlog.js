import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import HomeBlogItem from './HomeBlogItem';
import axios from 'axios';

const HomeBlog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultBlog = await axios.get('/api/blogs/all');
      console.log(resultBlog.data);
      setBlogs(resultBlog.data);
    }
    fetchData();
  }, []);

  return (
    <div id="blog" className="hb-container">
      <div className="hb-row">
        <div className="hb-col">
          <div className="hb-blogDiv">
            {blogs.length === 0 ? (
              <h3 className="no-data">There are currently no blogs</h3>
            ) : (
              <div className="hb-blogs">
                {blogs.slice(-4).map((blog) => (
                <HomeBlogItem key={blog._id} blog={blog} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="hb-col">
          <Link to="/blogs" className="hb-more">
            View More <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBlog