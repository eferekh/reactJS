import React, { Component } from "react";

class User extends Component {
    state = {
        websiteInput: "",
    };

    setWebsiteInput = (value) => {
        this.setState({ websiteInput: value });
    };
    
    checkWebsiteInput = () => {
        if (this.state.websiteInput === "") {
            alert("Please write the name of the website.");
            return;
        }

        this.props.updateWebsiteName(this.state.websiteInput, this.props.id);
        this.setState({ websiteInput: "" });
    };

    render() {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.name} (Username: {this.props.username})
                    </h5>
                    <div className="card-text">
                        <div className="userWebsiteInputContainer">
                            <div className="userInputContainer">
                                <input type="text" placeholder="New Website Name" value={this.state.websiteInput} onChange={e => this.setWebsiteInput(e.target.value)} />
                                <button className="btn btn-sm btn-secondary ml-2" onClick={this.checkWebsiteInput}>Update</button>
                            </div>

                            <span className="badge bg-primary">
                                {this.props.website}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
