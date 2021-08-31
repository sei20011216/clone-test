// src/components/items/ItemEvent
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slidebar from './Slidebar';

const NewsDetail = () => {
  const [post, setPost] = useState([]);
  console.log(post);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://seiyaookura.microcms.io/api/v1/blog/${id}`, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      },
      method: 'GET',
    })
      .then((res) => res.json())
      .then((date) => {
        setPost(date);
        // console.log('ここ');
        console.log(date);
      });
  }, []);

  try {
    return (
      <>
        <section className="main">
          <div className="container">
            <div className="main-flex">
              <h1 className="main-heading">BLOG DETAIL</h1>
              <div className="main-slider">
                <ul className="main-slider-list">
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://vico-co.jp/dist/img/main/l-hero__image01.jpg?v=20200908170427"
                    />
                  </li>
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://vico-co.jp/dist/img/main/l-hero__image02.jpg?v=20200908170427"
                    />
                  </li>
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://vico-co.jp/dist/img/main/l-hero__image03.jpg?v=20200908170427"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <h1 className="newsdetail-title">NEWS DETAIL</h1>
        <p className="newsdetail-title-sub">ニュース詳細</p>
        <section className="info-container">
          <section className="newsdetail">
            <div className="newsdetail-item">
              <img className="newsdetail-item-image" src={post.image.url} />
              <h1 className="newsdetail-item-header">{post.title}</h1>
              <h1 className="newsdetail-item-time">{post.time}</h1>
              <h1 className="newsdetail-item-text">{post.text}</h1>
              <h1 className="newsdetail-item-text">{post.textx}</h1>
              {/* <h1 className="newsdetail-item-text">{String(post.image.url)}</h1> */}
              <h1 className="newsdetail-item-header-2">{post.title2}</h1>
              <h1 className="newsdetail-item-text">{post.text2}</h1>
              <div className="newsdetail-item-flex">
                <img
                  className="newsdetail-item-image-2"
                  src={post.image2.url}
                />
                <img
                  className="newsdetail-item-image-2"
                  src={post.image2_2.url}
                />
              </div>
              <h1 className="newsdetail-item-header-2">{post.title3}</h1>
              <div className="newsdetail-item-flex">
                <h1 className="newsdetail-item-text-2">{post.text3}</h1>
                <img
                  className="newsdetail-item-image-3"
                  src={post.image3.url}
                />
              </div>
              <h1 className="newsdetail-item-header-2">{post.title4}</h1>
              <h1 className="newsdetail-item-text">{post.text4}</h1>
              <div className="newsdetail-item-flex">
                <img
                  className="newsdetail-item-image-2"
                  src={post.image4.url}
                />
                <img
                  className="newsdetail-item-image-2"
                  src={post.image4_2.url}
                />
              </div>
            </div>
          </section>
          <Slidebar />
        </section>
      </>
    );
  } catch (e) {
    return <></>;
  }
};

export default NewsDetail;

// AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY =apikey
