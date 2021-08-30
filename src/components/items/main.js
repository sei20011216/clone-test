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
      <section className="about">
        <h1 className="about-header">ABOUT</h1>
        <h1 className="about-title">日々の暮らしを心地良く、豊かに。</h1>
        <p className="about-text">緑豊かな大阪に2012年にオープンしました。</p>
        <p className="about-text">
          忙しなく過ぎゆく日々だからこそ、心地良く感じる場所で過ごし、
        </p>
        <p className="about-text">好きなものに囲まれる幸せを感じて欲しい。</p>
        <p className="about-text">
          皆様の日々の暮らしが少しでも豊かになりますように。
        </p>
      </section>
      <section className="service">
        <h1 className="service-header">SERVICE</h1>
        <div className="service-item">
          <img
            className="service-image"
            src="https://images.unsplash.com/photo-1538792636877-dcdcd4679371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          />
          <div className="service-list">
            <h1 className="service-title">CONCEPT</h1>
            <p className="service-text">こんなことを考えて作りました。</p>
            <p className="service-text">大きな「深呼吸」をしに、</p>
            <p className="service-text">ぜひいらしてください。</p>
            <button className="service-button button">MORE</button>
          </div>
        </div>
        <div className="service-item-2 row-reverse">
          <img
            className="service-image"
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          />
          <div className="service-list">
            <h1 className="service-title">MENU</h1>
            <p className="service-text">日々食べるものだから</p>
            <p className="service-text">素材にもこだわりを。</p>
            <p className="service-text">心地良い場所を一緒に。</p>
            <button className="service-button button">MORE</button>
          </div>
        </div>
        <div className="service-item">
          <img
            className="service-image"
            src="https://cdn.pixabay.com/photo/2019/11/16/16/38/birthday-4630579_960_720.jpg"
          />
          <div className="service-list">
            <h1 className="service-title">EVENT</h1>
            <p className="service-text">人々とのふれあいを通して</p>
            <p className="service-text">いのちを大切に。</p>
            <p className="service-text">心を豊かにするカフェ。</p>
            <button className="service-button button">MORE</button>
          </div>
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
