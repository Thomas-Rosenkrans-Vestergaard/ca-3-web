import React, { Component } from 'react';
import urls from '../../assets/urls.js';

class Upload extends Component {

    constructor(props) {
        super(props);

        this.state = { files: [] };
    }

    componentDidMount = () => {

        fetch(urls.files, {
            headers: {
                "Authorization": "Bearer " + this.props.state.token
            }
        })
            .then(response => response.json())
            .then(files => {
                this.setState({ files });
            });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const fileRequest = this.createFileRequest(form, fileObject => {
            fetch(urls.files, {
                method: 'POST',
                body: JSON.stringify(fileObject),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer " + this.props.state.token
                },
            })
                .then(response => response.json())
                .then(file => {
                    this.setState({ files: this.state.files.concat(file) });
                });
        });
    }

    createFileRequest = (form, callback) => {

        var re = /(?:\.([^.]+))?$/;
        this.getFileData(form.elements.file, (base64) => {
            callback({
                title: form.elements.title.value,
                extension: re.exec(form.elements.file.files[0].name)[1],
                data: base64
            });
        });
    }

    getFileData = (fileInput, callback) => {
        var reader = new FileReader();
        reader.readAsDataURL(fileInput.files[0]);
        reader.onload = function () {
            let encoded = reader.result.replace(/^data:(.*;base64,)?/, '');
            if ((encoded.length % 4) > 0) {
              encoded += '='.repeat(4 - (encoded.length % 4));
            }
            callback(encoded);
        };
    }

    render() {

        const { files } = this.state;

        return (
            <div id="upload-page">
                <h2>Upload files</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col s12 input-field no-padding">
                            <input type="text" name="title" id="title-input" />
                            <label htmlFor="title-input">Title</label>
                        </div>
                        <div className="col s12 file-field input-field no-padding">
                            <div className="btn">
                                <span>File</span>
                                <input name="file" type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <div className="col s12 input-field no-padding">
                            <input className="btn-large" type="submit" value="Upload" />
                        </div>
                    </div>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Mime</th>
                            <th>Size</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) =>
                            <tr key={index}>
                                <td>{file.title}</td>
                                <td>{file.mime}</td>
                                <td>{file.size}</td>
                                <td>
                                    <a className="btn" target="_blank" href={urls.files + "download/" + file.id}>Download</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Upload;