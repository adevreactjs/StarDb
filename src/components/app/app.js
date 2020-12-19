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

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected}
          getData ={this.swapiService.getAllPlanets} 
          renderItem ={(item) => item.name} />
        </div>
        <div className="col-md-6">
        </div>
      </div>

    
    
    </div>
  );
}
};

