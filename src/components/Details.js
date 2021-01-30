//  About.js

import React, { Component } from 'react';
import axios from 'axios'

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail: []
    }
}

componentDidMount() {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
    .then((response) => {
      //console.log(response.data.drinks[0])
      this.setState({ 'detail': response.data.drinks[0] })
    });
}


  render() {
    return (
        <div>
          <h2>{ this.props.match.params.id }</h2>
          <p> Thumb of this drink is - { this.state.detail.strDrinkThumb}</p>
        </div>
    );
  }
}

export default Details;