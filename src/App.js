import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import LatestNews from './components/LatestNews';
import NewsArticle from './components/NewsArticle';
import NewsSearch from './components/NewsSearch';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <LatestNews />
          </Route>

          <Route path="/articles/:articleId">
            <NewsArticle />
          </Route>

          <Route path="/search">
            <NewsSearch />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
