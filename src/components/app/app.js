import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';
import SwapiService from '../../service/swapi-service';
import ItemList from '../item-list';

export default class App extends Component {

  swapiService = new SwapiService()

  render() {
   
  
  return (
    <div>
      <Header />
      <RandomPlanet />
      <PeoplePage/>
    </div>
  );
}
};

