import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <header id='header' className='header-top'>
        <div className='container'>
          <ul>
            <li>
              <h1><a href='#home'>Louisa Whitaker</a></h1>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
