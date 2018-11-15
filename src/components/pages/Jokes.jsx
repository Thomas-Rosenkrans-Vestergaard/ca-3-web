import React from "react";
import urls from "../assets../urls";

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setup: "", punchline: "", reveal: null };
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h1 className="title center">Random joke generator!</h1>
            <button className="btn-large waves-effect waves-light red  " onClick={this.getRandomJoke}>get a random joke!</button>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p>{this.state.setup}</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {this.getPunchlineOrButton()}
          </div>
        </div>
      </div>
    );
  }

  getPunchlineOrButton = () => {
    if (this.state.reveal == null)
      return null;

    if (this.state.reveal)
      return <p>{this.state.punchline}</p>;

    return <button className="btn-large" onClick={this.reveal}>See punchline</button>
  }

  reveal = () => {
    this.setState({ reveal: true });
  }

  getRandomJoke = () => {
    fetch(urls.jokes).then(response => {
      response.json(urls.jokes).then(joke => {
        this.setState({ setup: joke.setup, punchline: joke.punchline, reveal: false })
      })
    })
  }
}

export default Jokes;
