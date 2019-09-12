import React from 'react';
import logo from './logo.svg';
import Heading from './components/Heading'
import CardList from './components/CardList'
import Counter from './components/ClickCounter'

import TestData, { logMessages } from './helpers/'
import './App.css';
import ClickCounter from './components/ClickCounter';
import AccordianList from './components/AccordianList';
import Todo from './components/Todo';
import MyForm from './components/MyForm';
import Body from './components/Body';

var faqData = require('./data/faq.json')
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
      showCardList: false,
      counter: 0
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

  componentDidMount() {
    console.log(TestData)
    // warnMessage("The component is mounted")
    logMessages("Log The component is mounted")
  }

  onClickHandler = () => {
    console.log('clicked', this)
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }
  render() {
    return (
      <div className="App">


        <Heading title="Hello" test="10" />
        <button onClick={this.clickCounterHandler}>Click Counter</button>
        <button onClick={this.cardListHandler}>CardList</button>
        <div className="center">

          {this.state.showClickCounter && (
            <ClickCounter
              onClickHandler={this.onClickHandler}
              counter={this.state.counter}
              heading="Click counter is"
              title="Clicker"
            />)}
        </div>
        {this.state.showCardList && <CardList items={cards} />}
        {/* <AccordianList items={faqData} /> */}
        <MyForm />

        <Body title="Test">
          <h1>Hello World from the body</h1>
        </Body>
        <Todo />
      </div>
    );
  }
}

export default App;
