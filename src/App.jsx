// import React from "react";
import "./css/styles.css";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import main from './components/items/main';
import ItemConcept from "./components/items/ItemConcept";
import ItemMenu from "./components/items/ItemMenu";
import ItemEvent from "./components/items/ItemEvent";
import ItemAccess from "./components/items/ItemAccess";
import ItemContact from "./components/items/ItemContact";
import NewsDetail from "./components/items/NewsDetail";

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <header className="header">
      <div className="container">
      <h1 className="header-logo"><img className="header-logo" src="https://static-cse.canva.com/blob/180682/2020.04.09_logo_stylish_create_tips-3.png" alt="" /></h1></div>
      {/* <h1 className="header-logo"><a href="#"><img className="header-logo" src="http://soupcafemon.com/mon_p/mon_head_p/mon_head_04.jpg" alt="" /></a></h1></div> */}
    </header>
    <Header />
      <Switch>
        <Route exact path="/" component={main} />
        <Route exact path="/items/concept" component={ItemConcept} />
        <Route exact path="/items/menu" component={ItemMenu} />
        <Route exact path="/items/event" component={ItemEvent} />
        <Route exact path="/items/access" component={ItemAccess} />
        <Route exact path="/items/contact" component={ItemContact} />
        <Route exact path="/items/news/:id" component={NewsDetail} />
      </Switch>
    <Footer />
    </BrowserRouter>
    </>
  );
}
