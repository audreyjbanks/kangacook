import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/blogs/${id}/`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>By: {blog.author}</p>
      <p>Written: {new Date(blog.created_at).toLocaleDateString()}</p>
      <p>Updated: {new Date(blog.updated_at).toLocaleDateString()}</p>
      <img src={blog.media} alt={blog.title} />
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetail;
