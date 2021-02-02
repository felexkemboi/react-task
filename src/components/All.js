// Home.js

import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

class All extends Component {

    constructor(props) {
        super(props);
        this.state = {
          cocktails: []
        }
    }

    async componentDidMount() {
         await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then((response) => {
          this.setState({ 'cocktails': response.data.drinks })
        });
        const categories = []

       for (const drink in this.state.cocktails){
           let category = drink.strCategory
           console.log(category)
           categories.push(category)
       }

       console.log(categories)
    }
    render() {
        return (
            <div>
                <p className="centre"><h2>All the Cocktails available</h2></p>
                { <table className="table">
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
                                <td><span className="input-group-btn"><Link to={{ pathname:`/details/${droplet.idDrink}` }}>More</Link></span></td>
                            </tr>
                        )}) : <tr><td colSpan="5">Loading...</td></tr>
                    }
                    </tbody>
                 </table>
                }

            </div>
        );
    }
}

export default All;