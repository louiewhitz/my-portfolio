import React, { useState, useEffect } from 'react';
// import '../server/public/TypeWriter.css';

const TypeWriter = () => {
  const phrases = ['a Software Engineer', 'Louisa Whitaker'];
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timeoutId = null;
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
      <p className='typep'>
        I&aposm <span className={`${typing ? 'typing' : ''}`} />
        <span className="phrase">`{phrases[index]}`</span>
      </p>
    </div>
  );
};

export default TypeWriter;

// const Switch = () => {
//   const [message, setMessage] = useState('');

//   const [index, setIndex] = useState(0);
//   const messages = ['I am Louisa Whitaker', "I'm a software engineer"];

//   useEffect(() => {

//     let i = 0;
//     const typing = setInterval(() => {
//       setMessage(prevMessage => prevMessage + messages[index][i]);
//       i++;
//       if (i === messages[index].length) {
//         clearInterval(typing);
//         setTimeout(() => {
//           setIndex(prevIndex => (prevIndex + 1) % messages.length);
//           setMessage('');
//         }, 1000);
//       }
//     }, 50);
//     return () => clearInterval(typing);
//   }, [messages, index]);

//   return <div><h2 className='typing text-white'>{message}</h2></div>;
// };

// export default Switch;
