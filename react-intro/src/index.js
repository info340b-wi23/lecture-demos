import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//const msg = "hello" "world";

const theMsg = "I am a separate message"; /* that's a message */

const msgElem = (
  <div>
    <header>
      <h1 id="hello" className="myclass">Hello React</h1>
    </header>
    <main>
      <p>{theMsg.toUpperCase()}!!!!!</p>
    </main>
  </div>
);


//Create a "React root" out of the `#root` elemment
//then render the React element at that root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(msgElem)