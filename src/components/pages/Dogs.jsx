import React from "react";
import urls from "../assets/urls";

class Dog extends React.Component {
  state = {
    input: "",
    pictures: []
  };
  render() {
    return (
      <>
      <h1 className="title center"></h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleOnChange}
          />
          <input
            type="submit"
            className="btn"
            value="get all pictures of the breed"
          />
        </form>
        <div>
          <table>
            <thead>
              <tr className="orange">
                <th>Image</th>
              </tr>
            </thead>
            <tbody>{this.getRows()}</tbody>
          </table>
        </div>
      </>
    );
  }

  getDogsByBreed(dogBreed) {
    return fetch(urls.dogs + dogBreed)
      .then(response => {
        if (response.status === 200) {
          return response.json().then(data => data.message);
        } else {
          return Promise.resolve([]);
        }
      })
      .catch(error => console.log("aids"));
  }

  handleOnChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input === "" || this.state.input === "get dog picture") {
      alert("you need to put information in all fields!");
      return false;
    }
    this.getDogsByBreed(this.state.input).then(pictures => {
      this.setState({ pictures });
    });
  };

  getRows() {
    return this.state.pictures.map(picture => {
      return (
        <tr key={picture}>
          <td>
            <img src={picture} alt="dog picture " />
          </td>
        </tr>
      );
    });
  }
}

export default Dog;
