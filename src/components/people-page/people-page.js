import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';

import ItemList from '../item-list/item-list';
import ItemDetails from '../person-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from '../../service/swapi-service';

const Row = ({left, right}) => { 
  return (
    <div className="row mb2">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
  )
}

export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
  };

  

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = ( <ItemList onItemSelected={this.onPersonSelected}
      getData={this.swapiService.getAllPeople}
      renderItem ={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}  />
  )
  const personDetails = (
    <ItemDetails personId={this.state.selectedPerson} />

  )

    return (
      <ErrorBoundry>
        <Row left ={itemList}
           right ={personDetails} />
      </ErrorBoundry>
    );
  }
}
