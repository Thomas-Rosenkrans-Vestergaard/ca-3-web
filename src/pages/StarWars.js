import React from "react";

class StarWars extends React.Component {

    constructor(props) {
        super(props);

        this.state = { data: {
            people: [],
            planets: [],
            films: [],
            species: [],
            vehicles: [],
            starships: [],
        }};
    }

    render() {

        const { requests, responses } = this.state;

        return (
            <div id="star-wars-page">
                <h2>Star Wars</h2>
                <p>Wow! Here you can see information about Star Wars.</p>
                <h4>People</h4>
                <h4>Planets</h4>
                <h4>Films</h4>
                <h4>Species</h4>
                <h4>Vehicles</h4>
                <h4>Starships</h4>    
            </div>
        );
    }
}

export default StarWars;