import React, { Component } from 'react';

class Upload extends Component {

    constructor(props) {
        super(props);

        this.state = { files: [] };
    }

    componentDidMount = () => {

    }

    onSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        const fileName = form.elements.name.value;
        const fileExpire = form.elements.expire.value;
        const fileInput = form.elements.file;
    
        
    }

    render() {
        return (
            <div id="upload-page">
                <h2>Upload files</h2>
                <p>This great fucking page allows you to upload files to the <a href="https://www.file.io/">file.io</a> storage website. By using this fucking page you agree to their fucking <a href="https://www.file.io/tos.html">Terms of Service</a> and <a href="https://www.file.io/privacy.html">Privacy Policy</a>.</p>

                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col s12 input-field no-padding">
                            <input type="text" name="name" id="name-input" />
                            <label for="name-input">File name</label>
                        </div>
                        <div className="col s12 input-field no-padding">
                            <input type="number" name="expire" id="expire-input" />
                            <label for="expire-input">Expire (days)</label>
                        </div>
                        <div className="col s12 file-field input-field no-padding">
                            <div class="btn">
                                <span>File</span>
                                <input name="file" type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                        <div className="col s12 input-field no-padding">
                            <input className="btn-large" type="submit" value="Upload" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Upload;