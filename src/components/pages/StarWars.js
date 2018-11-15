import React from "react";

import urls from '../../assets/urls.js';

class StarWars extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                people: this.defaultState(),
                planets: this.defaultState(),
                films: this.defaultState(),
                species: this.defaultState(),
                vehicles: this.defaultState(),
                starships: this.defaultState(),
            }
        };
    }

    defaultState() {
        return {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
    }

    componentDidMount = () => {
        fetch(urls.starWars + "all")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: {
                        people: data.people,
                        planets: data.planets,
                        films: data.films,
                        species: data.species,
                        vehicles: data.vehicles,
                        starships: data.starships,
                    }
                });
            })
    }

    render() {

        const { people, planets, films, species, vehicles, starships } = this.state.data;

        return (
            <div id="star-wars-page">
                <h2>Star Wars</h2>
                <p>Wow! Here you can see information about Star Wars.</p>
                <h4>People</h4>
                {this.createTable('people', people, [
                    { key: "name", name: "Name" },
                    { key: "height", name: "Height" },
                    { key: "mass", name: "Mass" },
                    { key: "hair_color", name: "Hair" },
                    { key: "skin_color", name: "Skin" },
                    { key: "eye_color", name: "Eyes" },
                    { key: "birth_year", name: "Birth year" },
                    { key: "gender", name: "Gender" },
                ])}

                <h4>Planets</h4>
                {this.createTable('planets', planets, [
                    { key: "name", name: "Name" },
                    { key: "rotation_period", name: "Episode" },
                    { key: "orbital_period", name: "Director" },
                    { key: "diameter", name: "Diameter" },
                    { key: "climate", name: "Climate" },
                    { key: "gravity", name: "Gravity" },
                    { key: "terrain", name: "Terrain" },
                    { key: "surface_water", name: "Surface Water" },
                    { key: "population", name: "Population" },
                ])}
                <h4>Films</h4>
                {this.createTable('films', films, [
                    { key: "title", name: "Title" },
                    { key: "episode_id", name: "Episode" },
                    { key: "director", name: "Director" },
                    { key: "producer", name: "Producer" }
                ])}
                <h4>Species</h4>
                {this.createTable('species', species, [
                    { key: "name", name: "Name" },
                    { key: "classification", name: "Classification" },
                    { key: "designation", name: "Designation" },
                    { key: "average_height", name: "Avg. Height" },
                    { key: "skin_colors", name: "Skin" },
                    { key: "hair_colors", name: "Hair" },
                    { key: "eye_colors", name: "Eyes" },
                    { key: "average_lifespan", name: "Lifespan" },
                    { key: "language", name: "Language" }
                ])}
                <h4>Vehicles</h4>
                {this.createTable('vehicles', vehicles, [
                    { key: "name", name: "Name" },
                    { key: "model", name: "Model" },
                    { key: "manufacturer", name: "Manufacturer" },
                    { key: "cost_in_credits", name: "Cost" },
                    { key: "length", name: "Length" },
                    { key: "max_atmosphering_speed", name: "Max. Speed" },
                    { key: "crew", name: "Crew size" },
                    { key: "passengers", name: "Passengers" },
                    { key: "cargo_capacity", name: "Cargo Capacity" }
                ])};

                <h4>Starships</h4>
                {this.createTable('starships', starships, [
                    { key: "name", name: "Name" },
                    { key: "model", name: "Model" },
                    { key: "manufacturer", name: "Manufacturer" },
                    { key: "cost_in_credits", name: "Cost" },
                    { key: "length", name: "Length" },
                    { key: "max_atmosphering_speed", name: "Max. Speed" },
                    { key: "crew", name: "Crew size" },
                    { key: "passengers", name: "Passengers" },
                    { key: "MGLT", name: "MGLT" }
                ])}
            </div>
        );
    }

    createTable(key, data, columns) {
        return (
            <div>
                <div className="row">
                    <div className="col s12 no-padding">
                        <table>
                            <thead>
                                <tr>
                                    {columns.map((column, index) =>
                                        <th key={index}>{column.name}</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {data.results.map((row, index) =>
                                    <tr key={index}>
                                        {columns.map((column, index) =>
                                            <td key={index}>{row[column.key]}</td>
                                        )}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 no-padding">
                        <button onClick={() => this.previousPage(key, data)} className="btn" disabled={data.previous == null}>Previous page</button>
                        <button onClick={() => this.nextPage(key, data)} style={{ marginLeft: '20px' }} className="btn" disabled={data.next == null}>Next page</button>
                    </div>
                </div>
            </div>
        )
    }

    previousPage = (key, data) => {
        if (data.previous == null)
            return;

        fetch(data.previous)
            .then(response => response.json())
            .then(response => {
                this.setState(prevState => {
                    let copy = Object.assign({}, prevState);
                    copy.data[key] = response;
                    return copy;
                });
            });
    }

    nextPage = (key, data) => {
        if (data.next == null)
            return;

        fetch(data.next)
            .then(response => response.json())
            .then(response => {
                 this.setState(prevState => {
                    let copy = Object.assign({}, prevState);
                    copy.data[key] = response;
                    return copy;
                });
            });
    }
}

export default StarWars;