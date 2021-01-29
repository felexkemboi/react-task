// Home.js

import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'react-bootstrap';


class All extends Component {

    constructor(props) {
        super(props);
        this.state = {
          cocktails: []
        }
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then((response) => {
          console.log(response.data.drinks)
          this.setState({ 'cocktails': response.data.drinks })
        });
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Glass</th>
                        <th>Date Modified</th>
                        <th>Creative Commons Confirmed</th>
                        <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                    { (this.state.cocktails.length > 0) ? this.state.cocktails.map( (droplet, index) => {
                        return (
                            <tr key={ index }>
                            <td>{ droplet.strCategory }</td>
                            <td>{ droplet.strCategory}</td>
                            <td>{ droplet.strGlass }</td>
                            <td>{ droplet.dateModified }</td>
                            <td>{ droplet.strCreativeCommonsConfirmed }</td>
                            <td><Button color="info" className="px-4">More</Button></td>
                            </tr>
                        )}) : <tr><td colSpan="5">Loading...</td></tr>
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default All;