// src/components/items/ItemEvent

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function ItemEvent() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  // const post = posts.find((post) => post.id === Number(id));

  console.log('aaa');

  const getData = () => {
    const holidaies = [];
    fetch('https://holidays-jp.github.io/api/v1/date.json', { method: 'GET' })
      .then((res) => res.json())
      .then((date) => {
        Object.keys(date).forEach(function (key) {
          // var val = this[key]; //keyが年-月-日 //valが祝日名
          // console.log(key, val);
          holidaies.push({
            title: date[key],
            start: key,
          });
        });
      });
    console.log(holidaies);
    return holidaies;
  };
  // const handleDateClick = useCallback((arg: DateClickArg) => {
  //   alert(arg.dateStr);
  // }, []);
  // const events = [
  //   {
  //     title: '新作メニュー発表!!!',
  //     start: '2021-08-30',
  //     end: '2021-09-01',
  //   },
  //   {
  //     title: '食べ放題イベント！！（お盆限定！！）',
  //     start: '2021-08-14',
  //     end: '2021-08-16',
  //   },
  //   {
  //     title: 'コーヒー一杯無料の日',
  //     start: '2021-08-02',
  //     end: '2021-08-06',
  //   },
  //   {
  //     title: '新作メニュー発表!!!',
  //     start: '2021-08-30',
  //     end: '2021-09-01',
  //   },
  //   {
  //     title: 'てすと１',
  //     start: '2021-08-08',
  //   },
  // ];
  const events = getData();
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main-flex">
            <h1 className="main-heading">EVENT</h1>
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
      <section className="event">
        <div>
          <FullCalendar
            // インストールしたプラグイン//
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              // googleCalendarPlugin,
            ]}
            /////////////////
            // 日本語に切り替え
            locale="ja"
            /////////////////
            // イベント追加(上のevents関数からイベントの変更、追加可能)//
            events={events}
            /////////////////
            // headerカスタマイズ(プラグイン使用)//
            headerToolbar={{
              start: 'prev,next today',
              center: 'title',
              end: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            //////////////////////
            customButtons={{
              new: {
                text: 'new',
                click: () => console.log('new event'),
              },
            }}
            // 押すとalertが出てくる//
            // dateClick={handleDateClick}
            ////////////////////////
            // 土日部分はグレーにする//
            selectMirror={true}
            dayMaxEvents={true}
            navLinks={true}
            businessHours={true}
            handleWindowResize={true}
            //////////////////////////
            // 不明//
            initialView="dayGridMonth"
            //////////////////////////
            events={events}
            eventColor="red"
            nowIndicator
            dateClick={(e) => console.log(e.dateStr)}
            eventClick={(e) => console.log(e.event.id)}
          />
        </div>
      </section>
    </>
  );
}

export default ItemEvent;

// AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY : apikey
// 265593461754-sql7mbqhh3fc0vkht5do3uaahcusn5db.apps.googleusercontent.com : クライアントID