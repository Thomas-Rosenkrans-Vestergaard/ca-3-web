import React from "react";
import urls from "../../assets/urls";

class Hearthstone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: null };
  }

  componentDidMount() {
    this.page(1);
  }

  page = pageNumber => {
    if (pageNumber < 1) return;
    this.getHearthstoneCards(pageNumber).then(data => {
      this.setState({ result: data });
    });
  };

  render() {
    console.log(this.state.cards);
    return (
      <div>
        <h1 className="title center">Hearthstone cards!</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>Image</th>
              <th>text</th>
              <th>Attack</th>
              <th>Health</th>
              <th>cost</th>
              <th>Description</th>
              <th>cardSet</th>
            </tr>
          </thead>
          <tbody>{this.getRows()}</tbody>
        </table>
        {this.createPaginationButtons()}
      </div>
    );
  }

  createPaginationButtons = () => {
    if (this.state.result == null) return null;

    const buttonsCount = Math.ceil(this.state.result.total / 50);
    const buttons = [];
    for (let i = 1; i <= buttonsCount; i++) {
      buttons.push(
        <li
          class={
            i == this.state.result.pageNumber
              ? "waves-effect active"
              : "waves-effect"
          }
        >
          <a href="#!" onClick={() => this.page(i)}>
            {i}
          </a>
        </li>
      );
    }

    return (
      <ul class="pagination">
        <li
          class={
            this.state.result.pageNumber === 1 ? "disabled" : "waves-effect"
          }
        >
          <a onClick={() => this.page(this.state.result.pageNumber - 1)}>
            <i class="material-icons">chevron_left</i>
          </a>
        </li>
        {buttons}
        <li
          class={
            this.state.result.pageNumber === 74 ? "disabled" : "waves-effect"
          }
        >
          <a onClick={() => this.page(this.state.result.pageNumber + 1)}>
            <i class="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    );
  };

  getHearthstoneCards(pageNumber) {
    return fetch(urls.hearthstone + "paginated/50/" + pageNumber).then(
      response => {
        return response.json();
      }
    );
  }

  getRows = () => {
    if (this.state.result == null) return null;

    console.log(this.state.cards);
    return this.state.result.results.map(card => {
      console.log(card.img);
      return (
        <tr key={card.flavor}>
          <td>{card.name}</td>
          <td>{this.createImage(card.img)}</td>
          <td>{card.text}</td>
          <td>{card.attack}</td>
          <td>{card.health}</td>
          <td>{card.cost}</td>
          <td>{card.flavor}</td>
          <td>{card.cardSet}</td>
        </tr>
      );
    });
  };

  createImage(image) {
    if (image !== undefined) {
      return (
        <img style={{ maxHeight: "150px" }} src={image} alt="card picture" />
      );
    } else {
      return "No picture";
    }
  }
}

export default Hearthstone;
