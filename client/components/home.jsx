import React from 'react';
import TypeWriter from './switch-status';
import AppContext from '../lib/app-context';


export default function Home(props) {
  console.log(props);
  return (
    <div className='container'>
      <div>
        <TypeWriter />
      </div>
    </div>

  );
}

Home.contextType = AppContext;
