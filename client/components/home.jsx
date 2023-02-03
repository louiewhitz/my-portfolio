import React from 'react';
import TypeWriter from './switch-status';
import AppContext from '../lib/app-context';
import Typewriter from './NewTypewriter';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='text-white'>
          <TypeWriter />
        </div>
      </div>

    );
  }
}

Home.contextType = AppContext;
