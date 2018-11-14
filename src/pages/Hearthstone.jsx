import React from "react";

class Hearthstone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", cards: [] };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" name="all" value="get all of the cards" />
          <input type="submit" name="name" value="search on cardname" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Attack</th>
              <th>Health</th>
              <th>Mana</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.cards.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  onSubmit = event => {
    event.preventDefault();
    if (event.target.name === undefined) {
      this.getHearthstoneCards().then(cards => {
        console.log("all cards")
        this.setState({ cards: cards });
      })
    } else if (this.state.input === "" || this.state.input === "defaulttext") {
      const setUp = this.props.children;
    } else {
      this.getHearthstoneCard(this.state.input).then(card => {
        this.setState({ cards: {card} });
      })
    }
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  getHearthstoneCard(name) {
    return fetch(
      "http://http://localhost:8080/ca3/api/hearthstone/search/" + name
    ).then(response => {
      console.log(response);
      return response;
    });
  }
  getHearthstoneCards() {
    return fetch("http://localhost:8080/ca3/api/hearthstone/all").then(
      response => {
        console.log(response);
        return response;
      }
    );
  }
  getRows() {
    return this.state.cards.map(card => {
      return (
        <tr key={card.description}>
          <td>
            <img src={card.picture} alt="card picture" />
          </td>
          <td>
            <img src={card.attack} alt="card attack" />
          </td>
          <td>
            <img src={card.health} alt="card health" />
          </td>
          <td>
            <img src={card.mana} alt="card mana" />
          </td>
          <td>
            <img src={card.description} alt="card description" />
          </td>
        </tr>
      );
    });
  }
}

export default Hearthstone;
