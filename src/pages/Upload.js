import React, { Component } from 'react';
import urls from '../urls.js';

class Upload extends Component {

    constructor(props) {
        super(props);

        this.state = { files: [] };
    }

    componentDidMount = () => {
        fetch(urls.files)
            .then(response => response.json())
            .then(files => {
                console.log(files);
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
                expiryDays: form.elements.expiry.value,
                extension: re.exec(form.elements.file.files[0].name)[1],
                data: base64
            });
        });
    }

    getFileData = (fileInput, callback) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(fileInput.files[0]);
        reader.onload = function () {
            var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(reader.result)));
            callback(base64String);
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
                            <label for="title-input">Title</label>
                        </div>
                        <div className="col s12 input-field no-padding">
                            <input type="number" name="expiry" id="expiry-input" />
                            <label for="expiry-input">Expiry (days)</label>
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

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Mime</th>
                            <th>Size</th>
                            <th>Expiry</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) =>
                            <tr>
                                <td>{file.title}</td>
                                <td>{file.mime}</td>
                                <td>{file.size}</td>
                                <td>{file.expiry}</td>
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