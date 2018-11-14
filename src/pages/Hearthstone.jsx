import React from "react";

class Hearthstone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", cards: [] };
  }

  onSubmit = (event) => {
    console.log("onSubmit called");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.input} />
          <input type=""></input>
          <input type="submit" />
        </form>
        <table>
          <thead />
          <tbody />
        </table>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  getHearthstoneCard(name) {
    return fetch("heartstone/search/" + name).then(response => {
      return response.json();
    });
  }
  getHearthstoneCards() {
    return fetch("heartstone/all").then(response => {
      return response.json();
    });
  }
  getRows() {
    return this.state.pictures.map(picture => {
      return ( 
        <tr key={picture}>
          <td>
            <img src={picture} />
          </td>
        </tr>
      );
    });
  }
}

export default Hearthstone;
