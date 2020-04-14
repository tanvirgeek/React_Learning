import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import CounterExample from './components/CounterExample';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Alexandra"/>
      <CounterExample/>
    </div>
  );
}

export default App;
