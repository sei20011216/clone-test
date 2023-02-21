// src/components/items/ItemMenu

import React from 'react';

export class ItemMenu extends React.Component {
  render() {
    return (
      <>
        <section className="main">
          <div className="container">
            <div className="main-flex">
              <h1 className="main-heading">MENU</h1>
              <div className="main-slider">
                <ul className="main-slider-list">
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://images.unsplash.com/photo-1508179181885-120b520a44eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    />
                  </li>
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://images.unsplash.com/photo-1564851287875-fb73b71f0e4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    />
                  </li>
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://images.unsplash.com/photo-1560963689-02e82017fb3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=690&q=80"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="menu">
          <div className="container">
            <div className="menu-body">
              <h1 className="access-heading" data-en="Recruit">
                MENU
              </h1>
              <p className="access-heading-sub">メニュー</p>
              <h1 className="menu-heading">
                「すてきなあさ」を探してきてください。
              </h1>
              <div className="menu-item">
                <div className="menu-text">
                  <h1 className="menu-title">breakfast</h1>
                  <h1 className="menu-title-sub">あさのスーププレート</h1>
                  <p className="menu-lead">
                    シンプルなモンスープ
                    <br />
                    厚切りさんかくトースト（自家製ジャム添え）
                    <br />
                    たっぷり野菜サラダ 果物かヨーグルト コーヒーか紅茶
                    <br />
                    <br />
                    <br />* カプチーノ・フレーバー紅茶 ＋¥50
                  </p>
                </div>
                <img
                  className="menu-image"
                  src="https://cdn.pixabay.com/photo/2021/04/30/04/43/pumpkin-soup-6217893_960_720.jpg"
                />
              </div>
              <div className="menu-item row-reverse">
                <div className="menu-text">
                  <h1 className="menu-title">lunch</h1>
                  <h1 className="menu-title-sub">
                    おひるのスープランチ ¥1,150
                  </h1>
                  <p className="menu-lead">
                    スープ
                    <br />
                    「モンスープ」 or 「 気まぐれスープ」
                  </p>
                  <p className="menu-lead">
                    おかず一品
                    <br />
                    たっぷりサラダ
                    <br />
                    デザート
                    <br />
                    パン
                    <br />
                    コーヒーか紅茶
                  </p>
                  <p className="menu-lead">
                    * カプチーノ・フレーバー紅茶 ＋¥50 *
                    <br />
                    ＋￥500でデザートプレートをおつけできます
                  </p>
                  <h1 className="menu-title-sub">
                    よくばりスープランチ ¥1,550
                  </h1>
                  <p className="menu-lead">
                    スープボールとカップスープで2種類のスープが楽しめるお得なセット！
                  </p>
                </div>
                <img
                  className="menu-image"
                  src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div className="menu-item">
                <div className="menu-text">
                  <h1 className="menu-title">drink menu</h1>
                  <h1 className="menu-title-sub">ドリンクメニュー</h1>
                  <h1 className="menu-lead-sub">コーヒー</h1>
                  <p className="menu-lead">
                    ・MON ブレンドコーヒー （hot） ¥450
                    <br />
                    ・紀州備長炭 炭火焼アイスコーヒー ¥450
                    <br />
                    カフェラテ(hot/ice) ¥500
                    <br />
                    カプチーノ(hot) ¥500
                  </p>
                  <h1 className="menu-lead-sub">紅茶</h1>
                  <p className="menu-lead">
                    ・MON オリジナルティー （hot/ice） ¥450
                    <br />
                    ・季節のフレーバーティー （hot/ice） ¥500
                  </p>
                  <h1 className="menu-lead-sub">ジュース</h1>
                  <p className="menu-lead">
                    ・大人のジンジャーエール ¥600
                    <br />
                    ・MONのげんきジュース ¥600
                  </p>
                </div>
                <img
                  className="menu-image"
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div className="menu-item row-reverse">
                <div className="menu-text">
                  <h1 className="menu-title">desert</h1>
                  <h1 className="menu-title-sub">ケーキプレート</h1>
                  <p className="menu-lead">
                    コーヒーか紅茶付き
                    <br />* カプチーノ・フレーバー紅茶 ＋¥50
                  </p>
                  <p className="menu-lead">
                    お菓子2種ともう一品。
                    <br />
                    シンプルで濃厚なお菓子をお楽しみください。
                  </p>
                </div>
                <img
                  className="menu-image"
                  src="https://cdn.pixabay.com/photo/2018/04/18/17/22/dessert-3331009_960_720.jpg"
                />
              </div>
              <div className="menu-item">
                <div className="menu-text">
                  <h1 className="menu-title">original soup</h1>
                  <h1 className="menu-title-sub">特製カップスープ ¥500</h1>
                  <p className="menu-lead">
                    ぐつぐつと煮込んだ野菜と鶏のスープの旨味がいっぱいに詰まった
                    <br />
                    オリジナルスープの素,「モンベース」
                    <br />
                    人参・セロリ・じゃがいも・キャベツ・トマト・たまねぎ・しめじ
                    <br />
                    ピーマン・大根・かぼちゃ・・・・・
                    <br />
                    「安心」「安全」に気をつかい、身体の中から健康になりたい！
                    <br />
                    とにかく代謝をあげて、毎日げんきに笑いましょう！
                  </p>
                </div>
                <img
                  className="menu-image"
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
