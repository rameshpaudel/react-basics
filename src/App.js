import React from 'react';
import logo from './logo.svg';
import Heading from './components/Heading'
import CardList from './components/CardList'
import Counter from './components/ClickCounter'


import './App.css';
import ClickCounter from './components/ClickCounter';


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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClickCounter: false,
      showCardList: false
    }
  }

  clickCounterHandler = () => {
    this.setState({
      showClickCounter: !this.state.showClickCounter 
    })
  }

  cardListHandler = () => {
    this.setState({
      showCardList: !this.state.showCardList
    })
  }
  render() {
    return (
      <div className="App">


        <Heading title="Hello" test="10" />
        <button onClick={this.clickCounterHandler}>Click Counter</button>
        <button onClick={this.cardListHandler}>CardList</button>
        <div className="center">

          {this.state.showClickCounter && <ClickCounter heading="Click counter is" />}
        </div>
        {this.state.showCardList && <CardList items={cards} />}
      </div>
    );
  }
}

export default App;
