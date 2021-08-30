// src/components/items/ItemAccess

import React from 'react';

class ItemAccess extends React.Component {
  render() {
    return (
      <>
        <section className="main">
          <div className="container">
            <div className="main-flex">
              <h1 className="main-heading">ACCESS</h1>
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
        <section className="access">
          <div className="access-body">
            <div className="access-item">
              <iframe
                className="access-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.8779705192346!2d135.49806601471863!3d34.73347018897122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e4396c12ce49%3A0x3bd7c4e0bf1076cf!2z5paw5aSn6Ziq6aeF!5e0!3m2!1sja!2sjp!4v1629690441772!5m2!1sja!2sjp"
                width="600"
              ></iframe>
              <div className="access-card">
                <img
                  className="access-image"
                  src="https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg"
                />
                <h1 className="access-info">JR大阪駅から徒歩2分<br />駐車場あります。</h1>
                <h1 className="access-address">〒000-0000  大阪府〇〇〇市〇〇町00-00</h1>
                <p className="access-tell"><span className="access-time">TELL:000-0000-0000</span>
                  <br />OPEN 08:30 / CLOSE 18:00
                </p>
                <button className="access-button button">CONTACT</button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ItemAccess;