import React, { useState, useEffect } from 'react';
// import '../server/public/TypeWriter.css';
import Typewriter from 'typewriter-effect/dist/core';

const TypeWriter = () => {
  const phrases = ['a Software Engineer', 'Louisa Whitaker'];
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    let timeoutId = null;
    const letterIndex = 0;
    if (typing) {
      timeoutId = setTimeout(() => {
        setTyping(false);
        setTimeout(() => {
          setIndex(index === phrases.length - 1 ? 0 : index + 1);
        }, 1000);
      }, 3000);
    } else {
      setTimeout(() => setTyping(true), 500);
    }

    return () => clearTimeout(timeoutId);
  }, [index, typing, phrases.length]);

  return (
    <div className="TypeWriter">
      <p className='text-dark'>
        I&apos;m <span className={`${typing ? 'typing' : ''}`} />
        <span className="phrase">`{phrases[index]}`</span>
      </p>
    </div>
  );
};

export default TypeWriter;
