/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ParseRoute from './lib/parse-route';
import AppContext from './lib/app-context';
import Redirect from './lib/redirect';
import Home from './pages/home.jsx';
import Nav from './components/nav';
import PageContainer from './pages/page-container';

export default function App() {

  const [curRoute, setRoute] = useState(ParseRoute(window.location.hash));
  const [user, setUser] = useState(null);
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const newRoute = ParseRoute(window.location.hash);
      setRoute(newRoute);
    });

  }, []);

  const contextValue = { user };

  function renderRoute() {
    const { path } = curRoute;
    let page = null;

    if (user) {
      if (path === 'home' || path === '') {
        page = <Home />;
      }
    }

    return (
      <>
        <Nav />
        {page}

      </>
    );
  }

  return (
    <AppContext.Provider value={contextValue}>
      {renderRoute()}
    </AppContext.Provider>
  );
}
