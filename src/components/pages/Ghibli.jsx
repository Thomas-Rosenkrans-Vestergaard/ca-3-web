import React from "react";
import urls from "../assets/urls";

class Ghibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", movies: [] };
  }
  render() {
    return (
      <div>
        <h1 className="title center">Get movies from Studio Ghibli!</h1>
        <button className="btn" onClick={this.clickHandler}>
          get ghibli movies
        </button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Director</th>
              <th>Release date</th>
            </tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
      </div>
    );
  }

  clickHandler = event => {
    event.preventDefault();
    this.getMovies().then(movie => {
      this.setState({ movies: movie });
    });
  };

  getRows() {
    return this.state.movies.map((movie, index) => 
          <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.description}</td>
            <td>{movie.director}</td>
            <td>{movie.release_date}</td>
          </tr>
    );
  }

  getMovies = () => {
    return fetch(urls.ghibli + "all")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .catch(response => {
        return;
      });
  };
}

export default Ghibli;
