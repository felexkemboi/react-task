import { Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

const Table = ({ droplets }) => {

  const Details = () => {
    return  <Redirect  to="/posts/" />
  }

  return (
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
      { (droplets.length > 0) ? droplets.map( (droplet, index) => {
          return (
            <tr key={ index }>
              <td>{ droplet.strCategory }</td>
              <td>{ droplet.strCategory}</td>
              <td>{ droplet.strGlass }</td>
              <td>{ droplet.dateModified }</td>
              <td>{ droplet.strCreativeCommonsConfirmed }</td>
              <td><Button color="info" className="px-4" onClick={Details}>More</Button></td>

            </tr>
          )}) : <tr><td colSpan="5">Loading...</td></tr>
      }
      </tbody>
    </table>

  );
}

export default Table