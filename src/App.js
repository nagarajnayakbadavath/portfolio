import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';


const App = () => {
  return (
    <div>
        <h1 className="m-5">Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
 
