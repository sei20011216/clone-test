import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const News = () => {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  // const post = posts.find((post) => post.id === Number(id));

  useEffect(() => {
    fetch('https://seiyaookura.microcms.io/api/v1/blog', {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((date) => {
        setPosts(date.contents);
      });
  }, []);

  return (
    <div>
      {posts?.map((post) => (
        <Link to={`/items/news/${post.id}`} className="news-item">
          <span className="news-item-day">{post.time}</span>
          <h1 key={post.id} className="news-item-title">
            {post.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default News;

// リンク先生成コード
// to={`/blog/${post.id}`}
//////////////////////////
