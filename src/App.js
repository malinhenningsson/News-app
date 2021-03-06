import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import TopNews from './components/TopNews';
import NewsArticle from './components/NewsArticle';
import NewsSearch from './components/NewsSearch';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <TopNews />
          </Route>

          <Route path="/articles/:articleId">
            <NewsArticle />
          </Route>

          <Route path="/search">
            <NewsSearch />
          </Route>

          <Route path="/category/:categoryName">
            <Categories />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
