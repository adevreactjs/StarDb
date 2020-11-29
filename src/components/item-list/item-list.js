import React, { Component } from 'react';

import '../item-list/item-list.css';
import Spinner from '../spinner/spiner';
import SwapiService from '../../services/swapi-service'

export default class ItemList extends Component {


  state = {
    itemList: null
  }

  componentDidMount() {

    const {getData} = this.props

    .getData()
    .then((itemList) => {
      this.setState({
        itemList: itemList
      })
    })
  }

  renderItem(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      )
    })
  }

  render() {
    const {itemList} = this.state
    if(!peopleList) {
      return (
        <Spinner></Spinner>
      )
    }

    const items = this.renderItem(itemList)
    

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
