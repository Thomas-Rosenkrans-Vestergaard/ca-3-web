import React, { Component } from "react";
import urls from "../assets/urls";

class Holidays extends Component {
  constructor(props) {
    super(props);

    this.state = { countries: [], country: null, holidays: [] };
  }

  componentDidMount() {
    if (this.state.countries.length == 0) {
      fetch(urls.holidays + "countries")
        .then(response => response.json())
        .then(countries => {
          this.setState({ countries });
        });
    }
  }

  onSelect = event => {
    const select = event.currentTarget;
    const countryCode = select.value;
    const countryName = select.options[select.selectedIndex].innerHTML;
    const country = { code: countryCode, name: countryName };

    fetch(urls.holidays + countryCode)
      .then(response => response.json())
      .then(data => {
        this.setState({ country, holidays: data });
      });
  };

  render() {
    return (
      <div id="holidays-page">
        <h2>Holidays</h2>
        <p>
          Select the country you want to see holiday information about. A
          request is made to our rest server, and then to the{" "}
          <a href="https://date.nager.at/">Public Holidays</a> api.
        </p>
        <select className="browser-default" onChange={this.onSelect}>
          <option selected disabled>
            Select country.
          </option>
          {this.state.countries.map(country => (
            <option value={country.code}>{country.name}</option>
          ))}
        </select>
        {this.renderCountryInformation()};
      </div>
    );
  }

  renderCountryInformation = () => {
    const { country, holidays } = this.state;

    if (country == null) return null;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Local name</th>
              <th>Fixed</th>
              <th>Official</th>
              <th>Global</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index}>
                <td>{holiday.date}</td>
                <td>{holiday.name}</td>
                <td>{holiday.localName}</td>
                <td>{holiday.fixed ? "true" : "false"}</td>
                <td>{holiday.countyOfficialHoliday ? "true" : "false"}</td>
                <td>{holiday.global ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default Holidays;
