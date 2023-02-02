// import React, { useState, useEffect } from 'react';

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
