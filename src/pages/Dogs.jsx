import React from "react";

class Dog extends React.Component {
  state = {
    input: "",
    pictures: []
  };
  render() {
    return (
      <div>
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
      </div>
    );
  }

  getDogsByBreed(dogBreed) {
    return fetch("http://localhost:8080/ca3/api/dogs/" + dogBreed).then(
      response => {
        if (response.status === 200) {
          return response.json();
        } else {
          this.setState({ input: "", pictures: [] });
          return;
        }
      }
    );
  }
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input === "" || this.state.input === "get dog picture") {
      alert("you need to put information in all fields!");
      return false;
    }
    this.getDogsByBreed(this.state.input).then(pictures => {
      if (pictures) {
        this.setState({ pictures: pictures.message });
      }
    });
  };

  getRows() {
    if (this.state.pictures[0] !== null) {
      return this.state.pictures.map(picture => {
        return (
          <tr key={picture}>
            <td>
              <img src={picture} />
            </td>
          </tr>
        );
      });
    } else {
      console.log("does not have this.state.breed.message");
    }
  }
}

export default Dog;
