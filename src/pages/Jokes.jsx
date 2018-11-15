import React from "react";
import urls from "../urls";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setup: "", punchline: ""};
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1 className="title center">Random joke generator!</h1>
        <button className="btn-large waves-effect waves-light red  " onClick={this.clickHandler}>get a random joke!</button>
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
    fetch(urls.jokes).then(response => {
      response.json(urls.jokes).then(joke => {
        this.setState({setup: joke.setup, punchline: joke.punchline})
      })
    })
  }
}

export default Jokes;
