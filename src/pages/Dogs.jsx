import React from "react";

class Dog extends React.Component {
  state = {
    input: "",
    breed: {}
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            value={this.state.dog}
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
    return fetch("https://dog.ceo/api/breed/" + dogBreed + "/images").then(
      response => {
        return response.json();
      }
    );
  }
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
    console.log(this.state.breed);
    console.log(this.state.breed.message);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input === "" || this.state.input === "get dog picture") {
      alert("you need to put information in all fields!");
      return false;
    }
    this.getDogsByBreed(this.state.input).then(pictures => {
      this.setState({ breed: pictures });
    });
  };
  getRows() {
    if (this.state.breed.message != null) {
      return this.state.breed.message.map(picture => {
        return (
          <tr key={picture}>
            <td>
              <img src={picture} />
            </td>
          </tr>
        );
      });
    }else{
      console.log("does not have this.state.breed.message")
    }
  }
}

export default Dog;
