import React from 'react';

import AppContext from './lib/app-context';
import Home from './components/home.jsx';
import Nav from './components/nav';
import ProjectsPage from './pages/projects';
import parseRoute from './lib/parse-route';
import PageContainer from './pages/page-container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      route: parseRoute(window.location.hash)
    };

  }

  componentDidMount() {

    window.addEventListener('hashchange', () => {
      const newRoute = window.location.hash;
      const parsedRoute = parseRoute(newRoute);
      this.setState({ route: parsedRoute });
    });

  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    } else if (route.path === 'projects') {
      return <ProjectsPage />;
    }
  }

  render() {

    const { route } = this.state;

    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <Nav />
          <PageContainer>{this.renderPage()}</PageContainer>
        </>
      </AppContext.Provider>

    );
  }
}
