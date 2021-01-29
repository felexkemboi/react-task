import React, { Component } from 'react';
import Table from './components/Table.js';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: []
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then((response) => {
      this.setState({ 'cocktails': response.data.drinks })
    });
  }


  render() {
    return (
      <div className="App">
        <Table droplets={ this.state.cocktails }/>
      </div>
    );
  }
}

export default App;
