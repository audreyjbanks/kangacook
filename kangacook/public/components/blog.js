import React, { useState } from 'react';

function Blog() {
  const [searchText, setSearchText] = useState('');
  const [blogs, setBlogs] = useState([
    { title: 'First Post', author: 'Author 1' },
    { title: 'Second Post', author: 'Author 2' },
    // Add more blog data here
  ]);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <div id="searchTextResults">
        <ul>
          {filteredBlogs.map((article, index) => (
            <li key={index} onClick={() => getBlog(article)}>
              {article.title} by {article.author}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function getBlog(article) {
  // Implement the blog retrieval logic here
  console.log('Selected Blog:', article);
}

export default Blog;
