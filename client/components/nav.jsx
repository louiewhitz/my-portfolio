import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand" href="">Louisa Whitaker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
