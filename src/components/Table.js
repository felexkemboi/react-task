//import React from 'react';

const Table = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Glass</th>
          <th>dateModified</th>
          <th>strCreativeCommonsConfirmed</th>
        </tr>
      </thead>
      <tbody>

      { (items.length > 0) ? items.map( (items, index) => {
           return (
            <tr key={ index }>
              <td>{ items.idDrink }</td>
              <td>{ items.strCategory }</td>
              <td>{ items.strCategory}</td>
              <td>{ items.strGlass }</td>
              <td>{ items.dateModified }</td>
              <td>{ items.strCreativeCommonsConfirmed }</td>
            </tr>
          )}) : <tr><td colSpan="5">Loading...</td></tr>
      }
      </tbody>
    </table>
  );
}

export default Table