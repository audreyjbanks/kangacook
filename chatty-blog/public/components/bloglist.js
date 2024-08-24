import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/blogs/');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="blogs">
      <label>Search: 
        <input 
          type="text" 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)} 
        />
      </label>
      <div className="articles">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="samples">
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>By: {blog.author}</p>
              <p>Written: {new Date(blog.created_at).toLocaleDateString()}</p>
              <p>Updated: {new Date(blog.updated_at).toLocaleDateString()}</p>
              <img src={blog.media} alt={blog.title} />
              <p>{blog.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
