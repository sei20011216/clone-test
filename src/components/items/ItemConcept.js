// src/components/items/ItemCreate

import React from 'react';

// const ItemCreate = () => {
//   return <div>ItemCreate</div>;
// };

class ItemCreate extends React.Component {
  render() {
    return (
      <>
        <section className="main">
          <div className="container">
            <div className="main-flex">
              <h1 className="main-heading">CONCEPT</h1>
              <div className="main-slider">
                <ul className="main-slider-list">
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://cdn.pixabay.com/photo/2010/12/13/10/12/background-2485_960_720.jpg"
                    />
                  </li>
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://cdn.pixabay.com/photo/2018/03/11/23/37/grain-3218387_960_720.jpg"
                    />
                  </li>
                  <li className="main-slider-item">
                    <img
                      className="main-slider-img"
                      src="https://cdn.pixabay.com/photo/2016/10/25/18/16/cosamui-restaurant-09-1769616_960_720.jpg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="concept">
          <div className="container">
            <div className="concept-body">
              <h1 className="access-heading" data-en="Recruit">
                CONCEPT
              </h1>
              <p className="access-heading-sub">大切にしていること</p>
              <div className="concept-item">
                <div className="concept-text">
                  <h1 className="concept-heading">
                    こんなことを考えてCAFEを作りました。
                  </h1>
                  <h1 className="concept-item-title">「深呼吸」</h1>
                  <p className="concept-item-lead">
                    天然の木と葉っぱと石、生きている素材をたっぷりつかったお店です。
                    <br />
                    大きな「深呼吸」をしに、ぜひいらしてください。
                  </p>
                </div>
                <img
                  className="concept-image"
                  src="https://cdn.pixabay.com/photo/2018/07/28/15/22/vegan-3568298_960_720.jpg"
                />
              </div>
              <div className="concept-item row-reverse">
                <div className="concept-text">
                  <h1 className="concept-item-title concept-end">
                    「からだをあたためてくれるスープ」
                  </h1>
                  <p className="concept-item-lead concept-end">
                    太陽の光をいっぱいに浴びて育った
                    <br />
                    元気な野菜はからだの中から。
                    <br />
                    夏も冬も体幹をあたため、からだ本来の働きを高め、
                    <br />
                    明日もあさっても元気に。
                  </p>
                </div>
                <img
                  className="concept-image"
                  src="https://cdn.pixabay.com/photo/2017/07/16/08/26/chicken-2508631_960_720.jpg"
                />
              </div>
              <div className="concept-item">
                <div className="concept-text">
                  <h1 className="concept-item-title">
                    「あさごはんとひるごはんと、あとすこし」
                  </h1>
                  <p className="concept-item-lead">
                    スープを軸とし、あさとひるをバランスよく、
                    <br />
                    噛めばかむほどに味が濃く、からだに優しい
                    <br />
                    「温野菜」を中心に献立てしております。
                    <br />
                    そして、あとすこしの時間は「とびきりのほっこり」をご用意しております。
                    <br />
                    大切なお友達とおしゃべりをしにきてくださいね。
                  </p>
                </div>
                <img
                  className="concept-image"
                  src="https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg"
                />
              </div>
              <div className="concept-item row-reverse">
                <div className="concept-text">
                  <h1 className="concept-item-title concept-end">
                    「すこし、いいもの」
                  </h1>
                  <p className="concept-item-lead concept-end">
                    MON スタッフがジャンルを問わず お気に入りの
                    <br />
                    「すこし、いいもの」を集めています。
                    <br />
                    ときどき開きます「モンマルシェ」でもお買い物いただけます。
                    <br />
                    こんなことを考えて[MON] をつくりました。
                  </p>
                </div>
                <img
                  className="concept-image"
                  src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_960_720.jpg"
                />
              </div>
              {/* ここからstaffページです。 */}
              <div className="staff">
                <h1 className="staff-heading">STAFF</h1>
                <div className="staff-container">
                  <div className="staff-card">
                    <img
                      className="staff-image"
                      src="https://cdn.pixabay.com/photo/2016/01/19/17/50/girl-1149933_960_720.jpg"
                    />
                    <h1 className="staff-title">
                      <span className="staff-title-span">M</span>ARUBAYASHI
                    </h1>
                    <p className="staff-lead">
                      一番のしっかり者。穏和で社交的な頼れる「姉さん」で常に物事を把握し、皆をリードし統括してくれる総務的存在。
                    </p>
                    <p className="staff-lead">
                      かつては教育系の現場で18
                      年間バリバリと働くキャリアウーマンとだけあって「健康・安心・安全」にとことんこだわり、食材集め、オイルや調味料にいたるまで・・・・断然、食育担当。
                    </p>
                  </div>
                  <div className="staff-card">
                    <img
                      className="staff-image"
                      src="https://cdn.pixabay.com/photo/2017/05/22/07/09/fashion-2333269_960_720.jpg"
                    />
                    <h1 className="staff-title">
                      <span className="staff-title-span">O</span>OBA
                    </h1>
                    <p className="staff-lead">
                      フランスのアパレルブランドショップ店員10
                      年と、カフェのホール経験者。
                    </p>
                    <p className="staff-lead">
                      かなりの感覚人間でエコバッグやエプロンはベトナムでフルオーダー。こだわり紅茶もフルオーダー。『MON』オリジナル商品やイベントの企画担当。今後のイベント、乞うご期待！！！！
                    </p>
                  </div>
                  <div className="staff-card">
                    <img
                      className="staff-image"
                      src="https://cdn.pixabay.com/photo/2017/03/20/13/45/portrait-2159177_960_720.jpg"
                    />
                    <h1 className="staff-title">
                      <span className="staff-title-span">N</span>AKAI
                    </h1>
                    <p className="staff-lead">
                      自然が大好きで、 食べることが大好きで、
                      おもてなしするのが大好き。
                    </p>
                    <p className="staff-lead">
                      四国の大自然の中で育った空と海と大地と・・・・
                      幼いころからの記憶をヒントに『みんなをもっともっと健康にしたい』という願いから、こだわりつづけている『SOUP』。もちろんキッチン担当。
                      今後の季節のスープメニューをお楽しみに！！
                    </p>
                  </div>
                </div>
              </div>
              {/* ここから自己紹介ページです */}
              <div className="intro">
                <div className="intro-container">
                  <div className="intro-text">
                    <h1 className="intro-heading">DESIGN WORKS</h1>
                    <h1 className="intro-title">室内デザイン</h1>
                    <h1 className="intro-title-name">
                      やまもとみゆき/DESIGN WORKS
                    </h1>
                    <p className="intro-lead">
                      2008 年自身のスタジオを設立
                      <br />
                      「京都」を拠点に 住宅を主にデザインを手がけ
                      <br />
                      飲食店デザイン企画、・アパレル企画・企業ブランディングなど、
                      <br />
                      ジャンルを問わずプロデュース＆コーディネイトにたずさわる
                      <br />
                      「その時、そのひと、その場所」をデザインし続けたい
                      <br />
                      経年変化を楽しんで、いつまでも居心地のいい空間を。
                      <br />
                      と、いつも願います。
                    </p>
                  </div>
                  <img
                    className="intro-image"
                    src="https://cdn.pixabay.com/photo/2017/05/22/07/20/model-2333326_960_720.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ItemCreate;
