import React, { useState, useEffect } from 'react';
import './App.css';

// Example component for displaying blog posts
function BlogPost({ title, content }) {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend API
    fetch('/api/posts/')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <main>
        {posts.length > 0 ? (
          posts.map(post => (
            <BlogPost key={post.id} title={post.title} content={post.content} />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </main>
    </div>
  );
}

export default App;
