import React from 'react';
import { Link } from 'react-router-dom';
// import News from "./News";
import News from '../../blog/News';
// microCMS連携

const main = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main-flex">
            <h1 className="main-heading">
              THINK
              <br />
              for
              <br />
              RESIDENTS
            </h1>
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
      <section className="catch">
        {/* <h1 className="catch-title">Menu</h1> */}
        <div className="catch-container">
          <Link to="/items/menu" className="catch-item">
            <div className="catch-item__2">
              <h1 className="catch-item-heading">
                体が芯から喜ぶ自分へのご褒美
              </h1>
              <h1 className="catch-item-title">MENU</h1>
            </div>
          </Link>
          <Link to="/items/concept" className="catch-item">
            <div className="catch-item__2">
              <h1 className="catch-item-heading">私達が大切にしていること。</h1>
              <h1 className="catch-item-title">CONCEPT</h1>
            </div>
          </Link>
          <Link to="/items/event" className="catch-item">
            <div className="catch-item__2">
              <h1 className="catch-item-heading">元気をこころをとどける</h1>
              <h1 className="catch-item-title">EVENT</h1>
            </div>
          </Link>
        </div>
      </section>
      <section className="info-container">
        <section className="news">
          <h1 className="news-title">NEWS</h1>
          <p className="news-title-sub">ニュース</p>
          <News />
        </section>
        <section className="sns">
          <h1 className="news-title">NEWS</h1>
          <p className="news-title-sub">ニュース</p>
          <a href="" className="news-item">
            <span className="news-item-day">2017.02.01</span>
            <h1 className="news-item-title">
              カーポートを超えることは出来るのか？
            </h1>
          </a>
          <a href="" className="news-item">
            <span className="news-item-day">2017.02.01</span>
            <h1 className="news-item-title">
              カーポートを超えることは出来るのか？
            </h1>
          </a>
          <a href="" className="news-item">
            <span className="news-item-day">2017.02.01</span>
            <h1 className="news-item-title">
              カーポートを超えることは出来るのか？
            </h1>
          </a>
          <a href="" className="news-item">
            <span className="news-item-day">2017.02.01</span>
            <h1 className="news-item-title">
              カーポートを超えることは出来るのか？
            </h1>
          </a>
        </section>
      </section>
    </>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: 'blog' });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };

export default main;
