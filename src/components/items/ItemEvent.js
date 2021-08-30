// src/components/items/ItemEvent

import React from 'react';
// import './css/styles.css';
import { useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
// import googleCalendarPlugin from '@fullcalendar/googleCalendar';

// const thisMonth = () => {
//   const today = new Date();
//   return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
//     2,
//     '0'
//   )}`;
// };

// var root = new FullCalendar.Calendar(calendarEl, {
//   googleCalendarApiKey: 'AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY',
//   eventSources: [
//     {
//       googleCalendarId: 'ja.japanese#holiday@group.v.calendar.google.com',
//       className: 'event_holiday',
//     },
//     {
//       googleCalendarId: 'hoge-na-calendar@group.calendar.google.com',
//     },
//   ],
// });

const events = [
  {
    // id: 1,
    title: '新作メニュー発表!!!',
    start: '2021-08-30',
    end: '2021-09-01',
  },
  {
    id: 1,
    title: '食べ放題イベント！！（お盆限定！！）',
    start: '2021-08-14',
    end: '2021-08-16',
  },
  {
    // id: 1,
    title: 'コーヒー一杯無料の日',
    start: '2021-08-02',
    end: '2021-08-06',
  },
  {
    // id: 1,
    title: '新作メニュー発表!!!',
    start: '2021-08-30',
    end: '2021-09-01',
  },
  {
    '2021-08-30': '祝日',
  },
];

function ItemEvent() {
  // const handleDateClick = useCallback((arg: DateClickArg) => {
  //   alert(arg.dateStr);
  // }, []);
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
            // イベント追加(上のevents関数からイベントの変更、追加可能！！！)//
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
            //           googleCalendarApiKey: 'AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY',
            // eventSources: [
            //   {
            //     googleCalendarId: 'ja.japanese#holiday@group.v.calendar.google.com',
            //     className: 'event_holiday',
            //   },
            //   {
            //     googleCalendarId: 'hoge-na-calendar@group.calendar.google.com',
            //   },
            // ]
            googleCalendarApiKeyU="AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY"
            eventSources={{
              googleCalendarId:
                'ja.japanese#holiday@group.v.calendar.google.com',
            }}
          />
        </div>
      </section>
    </>
  );
}

export default ItemEvent;

// AIzaSyAMAEO-pCTxlheTIzL1POPQZdKsg-OZCsY =apikey
