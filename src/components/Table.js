//import React from 'react';

const Table = ({ droplets }) => {
  console.log(droplets)
  console.log("testing it working...")
  console.log(droplets.length)
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Glass</th>
          <th>Date Modified</th>
          <th>Creative Commons Confirmed</th>
        </tr>
      </thead>
      <tbody>
      { (droplets.length > 0) ? droplets.map( (droplet, index) => {
          return (
            <tr key={ index }>
              <td>{ droplet.strCategory }</td>
              <td>{ droplet.strCategory}</td>
              <td>{ droplet.strGlass }</td>
              <td>{ droplet.dateModified }</td>
              <td>{ droplet.strCreativeCommonsConfirmed }</td>
            </tr>
          )}) : <tr><td colSpan="5">Loading...</td></tr>
      }
      </tbody>
    </table>

  );
}

export default Table

/*




            {droplets.map(( droplet, index ) => {
          return (
            <tr key={index}>
              <td>{ droplet.idDrink }</td>
              <td>{ droplet.strCategory }</td>
              <td>{ droplet.strCategory}</td>
              <td>{ droplet.strGlass }</td>
              <td>{ droplet.dateModified }</td>
              <td>{ droplet.strCreativeCommonsConfirmed }</td>
            </tr>
          );
        })}

*/