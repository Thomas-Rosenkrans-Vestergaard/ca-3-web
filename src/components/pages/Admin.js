import React from "react";
import urls from "../../assets/urls";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "" };
    }

    componentDidMount() {
        this.getMessage();
    }

    getMessage = () => {
        fetch(urls.admin + "message", {
            headers: {
                "Authorization": "Bearer " + this.props.state.token
            }
        })
            .then(response => response.json())
            .then(result => {
                this.setState({ message: result.message });
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <h1 className="title center">Admin area</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        {this.state.message}
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
