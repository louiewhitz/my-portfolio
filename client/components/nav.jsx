import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <header id='header' className='header-top'>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <Link to="/"><h1>Louisa Whitaker</h1></Link>
              </li>
              <li>
                <Link to="/projects"><h3>Projects</h3></Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr />

        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
      </header>
    );
  }
}
