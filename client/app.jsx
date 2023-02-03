import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from 'react-router-dom';
import AppContext from './lib/app-context';
import Home from './components/home.jsx';
import Nav from './components/nav';
import ProjectsPage from './pages/projects';
import parseRoute from './lib/parse-route';

export default function App() {
  const [user, setUser] = useState(null);
  const [curRoute, setRoute] = useState(parseRoute(window.location.hash));
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const newRoute = parseRoute(window.location.hash);
      setRoute(newRoute);
    });

  }, []);

  const contextValue = { user, curRoute };

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectsPage} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}
