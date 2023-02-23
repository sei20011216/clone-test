// import {React from "react";
import './css/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/modules/Header';
import { Footer } from './components/modules/Footer';
import { Main } from './components/items/Main';
import { ItemConcept } from './components/items/ItemConcept';
import { ItemMenu } from './components/items/ItemMenu';
import { ItemEvent } from './components/items/ItemEvent';
import { ItemAccess } from './components/items/ItemAccess';
import { ItemContact } from './components/items/ItemContact';
import { NewsDetail } from './components/items/NewsDetail';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <h1 className="header-logo">
              {/* <img
                className="header-logo"
                src="https://static-cse.canva.com/blob/180682/2020.04.09_logo_stylish_create_tips-3.png"
                alt=""
              /> */}
            </h1>
          </div>
          {/* <h1 className="header-logo"><a href="#"><img className="header-logo" src="http://soupcafemon.com/mon_p/mon_head_p/mon_head_04.jpg" alt="" /></a></h1></div> */}
        </header>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/items/concept" element={<ItemConcept />} />
          <Route exact path="/items/menu" element={<ItemMenu />} />
          <Route exact path="/items/event" element={<ItemEvent />} />
          <Route exact path="/items/access" element={<ItemAccess />} />
          <Route exact path="/items/contact" element={<ItemContact />} />
          <Route exact path="/items/news/:id" element={<NewsDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
