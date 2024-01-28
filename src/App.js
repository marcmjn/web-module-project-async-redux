import React from 'react';
import './App.css';
import Doglist from './doglist';

function App() {
  return (
    <div className="App" 
          style={{ 
            fontSize: '30px',
            fontStyle: 'oblique',
            fontSmooth: '5',
            color: 'red',
            backgroundColor: 'darkgrey', 
            padding: '20px',
            fontFamily: 'Arial, sans-serif', 
          }}>
      Sprint 10 Module 3 RANDOM DOG PHOTO GENERATOR!
      <Doglist/>
    </div>
  );
}

export default App;
