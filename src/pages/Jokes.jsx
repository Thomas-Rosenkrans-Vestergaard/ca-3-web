import React from "react";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setup: "", punchline: ""};
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <button className="btn" onClick={this.clickHandler}>get a random joke!</button>
        <table>
          <thead>
            <tr>
              <th>setup</th>
              <th>punchline</th>
            </tr>
          </thead>
          <tbody>
            <td>{this.state.setup}</td>
            <td>{this.state.punchline}</td>
          </tbody>
        </table>
      </div>
    );
  }

  clickHandler = () => {
    fetch("http://localhost:8080/ca3/api/joke").then(response => {
      response.json().then(joke => {
        this.setState({setup: joke.setup, punchline: joke.punchline})
      })
    })
  }
}

export default Jokes;
