import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import All from './components/All';
import Details from './components/Details';
import Categories from './components/Categories';



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
        <Router>
          <div>
            <h2>Welcome Drinks Restaurant</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> All </Link></li>
                <li><Link to={'/categories'} className="nav-link">Categories</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path='/'  component={All} />
              <Route path='/categories' component={Categories} />
              <Route path='/details/:id' component={Details} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
