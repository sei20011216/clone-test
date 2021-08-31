// src/components/items/ItemEvent

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import { INITIAL_EVENTS, createEventId } from "./event-utils";

function ItemEvent() {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  // const post = posts.find((post) => post.id === Number(id));

  console.log('aaa');

  const getData = () => {
    const events1 = [];
    fetch('https://holidays-jp.github.io/api/v1/date.json', { method: 'GET' })
      .then((res) => res.json())
      .then((date) => {
        Object.keys(date).forEach(function (key) {
          // var val = this[key]; //keyが年-月-日 //valが祝日名
          // console.log(key, val);
          events1.push({
            title: date[key],
            start: key,
          });
        });
      });
    console.log(events1);
    return events1;
  };
  // const handleDateClick = useCallback((arg: DateClickArg) => {
  //   alert(arg.dateStr);
  // }, []);
  const events2 = getData();
  const events1 = [
    {
      title: '新作メニュー発表!!!',
      start: '2021-08-30',
      end: '2021-09-01',
    },
    {
      title: '食べ放題イベント！！（お盆限定！！）',
      start: '2021-08-14',
      end: '2021-08-16',
    },
    {
      title: 'コーヒー一杯無料の日',
      start: '2021-08-02',
      end: '2021-08-06',
    },
    {
      title: '新作メニュー発表!!!',
      start: '2021-08-30',
      end: '2021-09-01',
    },
    {
      title: 'てすと１',
      start: '2021-08-08',
    },
    {
      title: '元日',
      start: '2021-01-01',
    },
    // start: '2021-01-11',
    // title: '成人の日',
    // start: '2021-02-11',
    // title: '建国記念の日',
    // start: '2021-02-23',
    // title: '天皇誕生日',
    // start: '2021-03-20',
    // title: '春分の日',
    // start: '2021-04-29',
    // title: '昭和の日',
    // start: '2021-05-03',
    // title: '憲法記念日',
    // start: '2021-05-04',
    // title: 'みどりの日',
    // start: '2021-05-05',
    // title: 'こどもの日',
    // start: '2021-07-22',
    // title: '海の日',
    // start: '2021-07-23',
    // title: 'スポーツの日',
    // start: '2021-08-08',
    // title: '山の日',
    // start: '2021-08-09',
    // title: '休日 山の日',
    // start: '2021-09-20',
    // title: '敬老の日',
    // start: '2021-09-23',
    // title: '秋分の日',
    // start: '2021-11-03',
    // title: '文化の日',
    // start: '2021-11-23',
    // title: '勤労感謝の日',
    // title: '2022-01-01',
    // start: '元日',
    // title: '2022-01-10',
    // start: '成人の日',
    // title: '2022-02-11',
    // start: '建国記念の日',
    // title: '2022-02-23',
    // start: '天皇誕生日',
    // title: '2022-03-21',
    // start: '春分の日',
    // title: '2022-04-29',
    // start: '昭和の日',
    // title: '2022-05-03',
    // start: '憲法記念日',
    // title: '2022-05-04',
    // start: 'みどりの日',
    // title: '2022-05-05',
    // start: 'こどもの日',
    // title: '2022-07-18',
    // start: '海の日',
    // title: '2022-08-11',
    // start: '山の日',
    // title: '2022-09-19',
    // start: '敬老の日',
    // title: '2022-09-23',
    // start: '秋分の日',
    // title: '2022-10-10',
    // start: 'スポーツの日',
    // title: '2022-11-03',
    // start: '文化の日',
    // title: '2022-11-23',
    // start: '勤労感謝の日',
  ];
  console.log(events1);
  console.log(events2);

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
                    src="https://cdn.pixabay.com/photo/2012/02/28/15/37/restaurant-18311_960_720.jpg"
                  />
                </li>
                <li className="main-slider-item">
                  <img
                    className="main-slider-img"
                    src="https://cdn.pixabay.com/photo/2020/03/25/18/58/table-4968325_960_720.jpg"
                  />
                </li>
                <li className="main-slider-item">
                  <img
                    className="main-slider-img"
                    src="https://cdn.pixabay.com/photo/2019/11/16/16/38/birthday-4630579_960_720.jpg"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="event">
        <h1 className="access-heading" data-en="Recruit">
          EVENT
        </h1>
        <p className="access-heading-sub">イベント</p>
        <div>
          <FullCalendar
            // インストールしたプラグイン//
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            /////////////////
            // 日本語に切り替え
            locale="ja"
            /////////////////

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
            // イベント追加(上のevents関数からイベントの変更、追加可能)//
            events={events1}
            eventColor="red"
          />
        </div>
      </section>
    </>
  );
}

export default ItemEvent;

// AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY : apikey
// 265593461754-sql7mbqhh3fc0vkht5do3uaahcusn5db.apps.googleusercontent.com : クライアントID
