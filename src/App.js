import React, { Component } from 'react';
import './App.css';
import { SelfServiceCard } from './SelfServiceCard';
import CallCardsList from './CallCardsList';



const callCards = [
  { title: 'card-1' },
  { title: 'card-2' },
  { title: 'card-3' },
  { title: 'card-4' },
  { title: 'card-5' },
  { title: 'card-6' },
  { title: 'card-7' },
  { title: 'card-8' },
  { title: 'card-9' },
  { title: 'card-10' },
  { title: 'card-11' },
  { title: 'card-12' },
  { title: 'card-13' }]


class App extends Component {

  state = {

    cards: callCards
  };


  render() {

    const { cards } = this.state;

    return (
      <div className="App">
        <SelfServiceCard />
        <CallCardsList cards={cards} />
      </div>
    );
  }

}

export default App;
