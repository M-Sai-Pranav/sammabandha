import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
// console.log(document.getElementById('root'))

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <App />,
);

// ReactDOM.render(
//     <div>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <h1>Hello World</h1>
//         <App />
//     </div>,
//   document.getElementById('root')
// );
