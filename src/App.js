import React from 'react';
import logo from './logo.svg';
import Heading from './components/Heading'
import CardList from './components/CardList'


import './App.css';


var cards = [
  {
    title: "Test this out",
    description: "This will be a long description",
    image: 'http://lorempixel.com/200/200/nature'
  },
  {
    title: "Hello",
    description: "This will be a long description",
    image: 'http://lorempixel.com/200/200/nature'
  },
  {
    title: "Test another this out",
    description: "This will be a long description",
    image: 'http://lorempixel.com/200/200/nature'
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Heading title="Hello" test="10" />
        <Heading title="World" test="100" />
        <Heading title="JS" />
      </header>
     <CardList items={cards} />
    </div>
  );
}

export default App;
